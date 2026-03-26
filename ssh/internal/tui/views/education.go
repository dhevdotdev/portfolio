package views

import (
	"fmt"
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

func Education(p *data.Portfolio, width int, s theme.Styles) string {
	var b strings.Builder

	b.WriteString(sectionHeader("cat /etc/education", s))
	b.WriteString("\n\n")

	for _, item := range p.Education.Items {
		var card strings.Builder
		card.WriteString(s.Title.Render(item.Institution) + "\n")
		card.WriteString(s.R.NewStyle().Foreground(theme.Mauve).Render(item.Degree) + "  ")
		card.WriteString(s.R.NewStyle().Foreground(theme.Yellow).Bold(true).Render(fmt.Sprintf("CGPA %s", item.CGPA)) + "\n")
		card.WriteString(s.Subtle.Render(fmt.Sprintf("%s – %s", item.Start, item.End)))

		b.WriteString(s.Box.Width(min(width-4, 74)).Render(card.String()))
	}

	return b.String()
}
