package theme

import "github.com/charmbracelet/lipgloss"

var (
	Base     = lipgloss.Color("#1e1e2e")
	Surface0 = lipgloss.Color("#313244")
	Surface2 = lipgloss.Color("#585b70")
	Overlay0 = lipgloss.Color("#6c7086")
	Overlay1 = lipgloss.Color("#7f849c")
	Subtext0 = lipgloss.Color("#a6adc8")
	Subtext1 = lipgloss.Color("#bac2de")
	Text     = lipgloss.Color("#cdd6f4")
	Blue     = lipgloss.Color("#89b4fa")
	Teal     = lipgloss.Color("#94e2d5")
	Green    = lipgloss.Color("#a6e3a1")
	Yellow   = lipgloss.Color("#f9e2af")
	Peach    = lipgloss.Color("#fab387")
	Red      = lipgloss.Color("#f38ba8")
	Mauve    = lipgloss.Color("#cba6f7")
)

type Styles struct {
	R *lipgloss.Renderer

	Title     lipgloss.Style
	Subtle    lipgloss.Style
	Link      lipgloss.Style
	Help      lipgloss.Style
	Box       lipgloss.Style
	TabActive lipgloss.Style
	Tab       lipgloss.Style
	Separator lipgloss.Style
	Badge     func(bg lipgloss.Color, text string) string
}

func NewStyles(r *lipgloss.Renderer) Styles {
	s := Styles{R: r}

	s.Title = r.NewStyle().Foreground(Text).Bold(true)
	s.Subtle = r.NewStyle().Foreground(Overlay0)
	s.Link = r.NewStyle().Foreground(Blue)
	s.Help = r.NewStyle().Foreground(Surface2)
	s.Box = r.NewStyle().
		Border(lipgloss.RoundedBorder()).
		BorderForeground(Surface0).
		Padding(1, 2)
	s.TabActive = r.NewStyle().
		Foreground(Peach).
		Bold(true).
		Padding(0, 2).
		Border(lipgloss.Border{Bottom: "━"}, false, false, true, false).
		BorderForeground(Peach)
	s.Tab = r.NewStyle().
		Foreground(Subtext0).
		Padding(0, 2).
		Border(lipgloss.Border{Bottom: " "}, false, false, true, false).
		BorderForeground(Surface0)
	s.Separator = r.NewStyle().Foreground(Surface0)
	s.Badge = func(bg lipgloss.Color, text string) string {
		return r.NewStyle().
			Background(bg).
			Foreground(Base).
			Bold(true).
			Padding(0, 1).
			Render(text)
	}

	return s
}

func Prompt(r *lipgloss.Renderer) string {
	return r.NewStyle().Foreground(Green).Render("dhev") +
		r.NewStyle().Foreground(Subtext0).Render("@") +
		r.NewStyle().Foreground(Blue).Render("dev") +
		r.NewStyle().Foreground(Subtext0).Render(":~$ ")
}
