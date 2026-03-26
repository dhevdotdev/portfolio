package main

import (
	"context"
	"fmt"
	"log"
	"net"
	"os"
	"os/signal"
	"syscall"
	"time"

	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/ssh"
	"github.com/charmbracelet/wish"
	"github.com/charmbracelet/wish/activeterm"
	"github.com/charmbracelet/wish/bubbletea"
	wlog "github.com/charmbracelet/wish/logging"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/tui"
)

func main() {
	portfolio, err := data.Load()
	if err != nil {
		log.Fatalf("failed to load data: %v", err)
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "2222"
	}

	keyPath := os.Getenv("SSH_HOST_KEY_PATH")
	if keyPath == "" {
		keyPath = ".ssh/id_ed25519"
	}

	handler := func(s ssh.Session) (tea.Model, []tea.ProgramOption) {
		pty, _, _ := s.Pty()
		renderer := bubbletea.MakeRenderer(s)
		m := tui.NewModel(portfolio, pty.Window.Width, pty.Window.Height, renderer)
		return m, []tea.ProgramOption{tea.WithAltScreen()}
	}

	srv, err := wish.NewServer(
		wish.WithAddress(net.JoinHostPort("0.0.0.0", port)),
		wish.WithHostKeyPath(keyPath),
		wish.WithMiddleware(
			bubbletea.Middleware(handler),
			activeterm.Middleware(),
			wlog.Middleware(),
		),
	)
	if err != nil {
		log.Fatalf("failed to create server: %v", err)
	}

	done := make(chan os.Signal, 1)
	signal.Notify(done, os.Interrupt, syscall.SIGTERM)

	fmt.Printf("ssh server listening on 0.0.0.0:%s\n", port)
	go func() {
		if err := srv.ListenAndServe(); err != nil {
			log.Fatalf("server error: %v", err)
		}
	}()

	<-done
	fmt.Println("\nshutting down...")
	ctx, cancel := context.WithTimeout(context.Background(), 30*time.Second)
	defer cancel()
	if err := srv.Shutdown(ctx); err != nil {
		log.Fatalf("shutdown error: %v", err)
	}
}
