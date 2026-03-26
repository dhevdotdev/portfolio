package views

import (
	"fmt"
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

func Links(p *data.Portfolio, width int, s theme.Styles) string {
	var b strings.Builder

	b.WriteString(sectionHeader("curl -sL dhev.dev/links", s))
	b.WriteString("\n\n")

	b.WriteString(s.Subtle.Render("HTTP/2 200 OK") + "\n")
	b.WriteString(s.Subtle.Render("content-type: application/json") + "\n\n")

	arrow := s.R.NewStyle().Foreground(theme.Surface2).Render("→")
	linkRow := func(label, url string) string {
		l := s.R.NewStyle().Foreground(theme.Subtext1).Bold(true).Width(12).Render(label)
		return fmt.Sprintf("  %s %s %s", l, arrow, s.Link.Render(url))
	}

	var rows []string
	for _, item := range p.Links.Items {
		rows = append(rows, linkRow(item.Label, item.URL))
	}
	if p.Identity.ResumeURL != "" {
		rows = append(rows, linkRow("Resume", p.Identity.ResumeURL))
	}

	b.WriteString(s.Box.Width(min(width-4, 74)).Render(strings.Join(rows, "\n")))

	return b.String()
}
