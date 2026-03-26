package views

import (
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

func About(p *data.Portfolio, width int, s theme.Styles) string {
	var b strings.Builder
	maxW := min(width-8, 70)

	b.WriteString(sectionHeader("cat README.md", s))
	b.WriteString("\n\n")

	for i, para := range p.About.Paragraphs {
		wrapped := s.R.NewStyle().
			Foreground(theme.Subtext0).
			Width(maxW).
			Render(para)
		b.WriteString(wrapped)
		if i < len(p.About.Paragraphs)-1 {
			b.WriteString("\n\n")
		}
	}

	return s.Box.Width(min(width-4, 76)).Render(b.String())
}

func sectionHeader(command string, s theme.Styles) string {
	return theme.Prompt(s.R) + s.R.NewStyle().Foreground(theme.Subtext1).Render(command)
}
