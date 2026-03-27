# ssh portfolio

A terminal-based portfolio served over SSH, built with [Charm](https://charm.sh) libraries.

```
ssh ssh.dhev.dev
```

## Stack

- [Wish](https://github.com/charmbracelet/wish) — SSH server
- [Bubbletea](https://github.com/charmbracelet/bubbletea) — TUI framework
- [Lipgloss](https://github.com/charmbracelet/lipgloss) — Styling
- [Bubbles](https://github.com/charmbracelet/bubbles) — TUI components

## Run locally

```bash
cd ssh
go run main.go
```

Then in another terminal:

```bash
ssh localhost -p 2222
```

## Navigation

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Next / previous section |
| `1-7` | Jump to section |
| `j` / `k` | Scroll up / down |
| `q` / `Ctrl+C` | Quit |

## Deploy

Pushes to `main` that touch `ssh/` or `data/` trigger a GitHub Actions workflow that cross-compiles and deploys to the server via SSH.
