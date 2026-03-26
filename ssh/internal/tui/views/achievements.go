package views

import (
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

func Achievements(p *data.Portfolio, width int, s theme.Styles) string {
	var b strings.Builder

	b.WriteString(sectionHeader(`grep -rn "notable" ~/`, s))
	b.WriteString("\n\n")

	for i, item := range p.Achievements.Items {
		var card strings.Builder

		badgeColor, badgeText := theme.Yellow, "AWARD"
		switch item.Type {
		case "publication":
			badgeColor, badgeText = theme.Teal, "PUBLICATION"
		}
		card.WriteString(s.Badge(badgeColor, badgeText) + "\n\n")
		card.WriteString(s.R.NewStyle().Foreground(theme.Text).Width(min(width-10, 62)).Render(item.Title) + "\n")
		card.WriteString(s.Subtle.Render(item.Venue))
		if item.URL != "" {
			card.WriteString("\n\n" + s.Link.Render(item.URL))
		}

		b.WriteString(s.Box.Width(min(width-4, 74)).Render(card.String()))
		if i < len(p.Achievements.Items)-1 {
			b.WriteString("\n")
		}
	}

	return b.String()
}
