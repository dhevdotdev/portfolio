package tui

import (
	"fmt"
	"strings"

	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"

	"portfolio-ssh/internal/data"
	"portfolio-ssh/internal/theme"
	"portfolio-ssh/internal/tui/views"
)

type renderFunc func(*data.Portfolio, int, theme.Styles) string

type section struct {
	name   string
	render renderFunc
}

var sections = []section{
	{"home", views.Home},
	{"about", views.About},
	{"experience", views.Experience},
	{"education", views.Education},
	{"achievements", views.Achievements},
	{"skills", views.Skills},
	{"links", views.Links},
}

type Model struct {
	portfolio *data.Portfolio
	tab       int
	width     int
	height    int
	styles    theme.Styles
	viewport  viewport.Model
	ready     bool
}

func NewModel(p *data.Portfolio, width, height int, r *lipgloss.Renderer) Model {
	return Model{
		portfolio: p,
		styles:    theme.NewStyles(r),
		width:     width,
		height:    height,
	}
}

func (m Model) Init() tea.Cmd {
	return nil
}

func (m Model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	switch msg := msg.(type) {
	case tea.WindowSizeMsg:
		m.width = msg.Width
		m.height = msg.Height
		vpH := m.height - 5 // tabs (2) + separator (1) + newlines (1) + footer (1)

		if !m.ready {
			m.viewport = viewport.New(m.width, vpH)
			m.ready = true
		} else {
			m.viewport.Width = m.width
			m.viewport.Height = vpH
		}
		m.viewport.SetContent(m.renderTab())
		return m, nil

	case tea.KeyMsg:
		switch key := msg.String(); key {
		case "ctrl+c", "q":
			return m, tea.Quit
		case "tab", "l", "right":
			m.tab = (m.tab + 1) % len(sections)
			m.jumpToTab()
			return m, nil
		case "shift+tab", "h", "left":
			m.tab = (m.tab - 1 + len(sections)) % len(sections)
			m.jumpToTab()
			return m, nil
		default:
			if key >= "1" && key <= "7" {
				m.tab = int(key[0] - '1')
				m.jumpToTab()
				return m, nil
			}
			var cmd tea.Cmd
			m.viewport, cmd = m.viewport.Update(msg)
			return m, cmd
		}
	}

	return m, nil
}

func (m *Model) jumpToTab() {
	m.viewport.SetContent(m.renderTab())
	m.viewport.GotoTop()
}

func (m Model) View() string {
	if !m.ready {
		return "loading..."
	}

	var b strings.Builder
	b.WriteString(m.renderTabs())
	b.WriteString("\n")
	b.WriteString(m.styles.Separator.Render(strings.Repeat("─", m.width)))
	b.WriteString("\n")
	b.WriteString(m.viewport.View())
	b.WriteString("\n")
	b.WriteString(m.renderFooter())
	return b.String()
}

func (m Model) renderTabs() string {
	tabs := make([]string, len(sections))
	for i, sec := range sections {
		if i == m.tab {
			tabs[i] = m.styles.TabActive.Render(sec.name)
		} else {
			tabs[i] = m.styles.Tab.Render(sec.name)
		}
	}
	return lipgloss.JoinHorizontal(lipgloss.Top, tabs...)
}

func (m Model) renderFooter() string {
	help := m.styles.Help.Render("tab/←→ switch  1-7 jump  j/k scroll  q quit")
	scroll := ""
	if m.viewport.TotalLineCount() > m.viewport.Height {
		pct := int(m.viewport.ScrollPercent() * 100)
		scroll = m.styles.Help.Render(fmt.Sprintf(" %d%%", pct))
	}
	gap := max(0, m.width-lipgloss.Width(help)-lipgloss.Width(scroll))
	return help + strings.Repeat(" ", gap) + scroll
}

func (m Model) renderTab() string {
	return sections[m.tab].render(m.portfolio, m.width, m.styles)
}
