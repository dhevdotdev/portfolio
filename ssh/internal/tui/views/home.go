package views

import (
	"strings"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
)

const asciiArt = "      _  _                     _\n" +
	"   __| || |__    ___  __   __ | |\n" +
	"  / _` || '_ \\  / _ \\ \\ \\ / / (_)\n" +
	" | (_| || | | ||  __/  \\ V /   _\n" +
	"  \\__,_||_| |_| \\___|   \\_/   (_)"

func Home(p *data.Portfolio, _ int, s theme.Styles) string {
	var b strings.Builder

	b.WriteString(sectionHeader("whoami", s))
	b.WriteString("\n\n")

	b.WriteString(s.R.NewStyle().Foreground(theme.Green).Render(asciiArt))
	b.WriteString("\n\n")

	b.WriteString(s.Title.Render(p.Identity.Name) + "\n")
	b.WriteString(s.R.NewStyle().Foreground(theme.Mauve).Render(p.Identity.Title) + "\n")
	b.WriteString(s.R.NewStyle().Foreground(theme.Subtext0).Render(p.Identity.Tagline) + "\n\n")
	b.WriteString(s.Subtle.Render(p.Identity.Location + "  ·  " + p.Identity.Email))
	b.WriteString("\n")
	b.WriteString(s.R.NewStyle().Foreground(theme.Surface2).Render("also at " + p.Identity.Domain))

	return b.String()
}
