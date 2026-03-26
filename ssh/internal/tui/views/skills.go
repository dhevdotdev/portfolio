package views

import (
	"fmt"
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

func Skills(p *data.Portfolio, _ int, s theme.Styles) string {
	var b strings.Builder

	b.WriteString(sectionHeader("ls -la skills/", s))
	b.WriteString("\n\n")

	total := 0
	for _, g := range p.Skills.Groups {
		total += len(g.Items)
	}
	b.WriteString(s.Subtle.Render(fmt.Sprintf("total %d", total)))
	b.WriteString("\n\n")

	dimStyle := s.R.NewStyle().Foreground(theme.Overlay0)
	dirPrefix := s.R.NewStyle().Foreground(theme.Blue).Render("d") + dimStyle.Render(" rwxr-xr-x")
	filePrefix := dimStyle.Render("-") + dimStyle.Render(" rw-r--r--")

	for _, group := range p.Skills.Groups {
		label := s.R.NewStyle().Foreground(theme.Peach).Bold(true).Render(group.Label + "/")
		b.WriteString(fmt.Sprintf("%s  %s\n", dirPrefix, label))

		for _, item := range group.Items {
			name := s.R.NewStyle().Foreground(theme.Subtext0).Render(item)
			b.WriteString(fmt.Sprintf("%s    %s\n", filePrefix, name))
		}
		b.WriteString("\n")
	}

	return b.String()
}
