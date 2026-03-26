package views

import (
	"fmt"
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

func Experience(p *data.Portfolio, width int, s theme.Styles) string {
	var b strings.Builder
	maxW := min(width-4, 72)

	b.WriteString(sectionHeader("git log --oneline", s))
	b.WriteString("\n\n")

	sep := s.Separator.Render(strings.Repeat("─", maxW))

	for i, item := range p.Experience.Items {
		header := s.Title.Render(fmt.Sprintf("%s — %s", item.Company, item.Location))
		date := s.Subtle.Render(fmt.Sprintf("%s – %s", item.Start, item.End))
		b.WriteString(header + "  " + date + "\n")
		b.WriteString(s.R.NewStyle().Foreground(theme.Mauve).Render(item.Role) + "\n\n")
		b.WriteString(s.R.NewStyle().Foreground(theme.Subtext0).Width(maxW).Render(item.Description))

		if i < len(p.Experience.Items)-1 {
			b.WriteString("\n\n" + sep + "\n\n")
		}
	}

	return b.String()
}
