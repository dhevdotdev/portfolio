package data

type Identity struct {
	Name      string `json:"name"`
	Handle    string `json:"handle"`
	Domain    string `json:"domain"`
	Location  string `json:"location"`
	Email     string `json:"email"`
	Title     string `json:"title"`
	Tagline   string `json:"tagline"`
	ResumeURL string `json:"resume_url"`
}

type About struct {
	Paragraphs []string `json:"paragraphs"`
}

type ExperienceItem struct {
	Company     string `json:"company"`
	Location    string `json:"location"`
	Role        string `json:"role"`
	Start       string `json:"start"`
	End         string `json:"end"`
	Description string `json:"description"`
}

type Experience struct {
	Items []ExperienceItem `json:"items"`
}

type EducationItem struct {
	Institution string `json:"institution"`
	Degree      string `json:"degree"`
	CGPA        string `json:"cgpa"`
	Start       string `json:"start"`
	End         string `json:"end"`
}

type Education struct {
	Items []EducationItem `json:"items"`
}

type AchievementItem struct {
	Type  string `json:"type"`
	Title string `json:"title"`
	Venue string `json:"venue"`
	URL   string `json:"url,omitempty"`
}

type Achievements struct {
	Items []AchievementItem `json:"items"`
}

type SkillGroup struct {
	Label string   `json:"label"`
	Items []string `json:"items"`
}

type Skills struct {
	Groups []SkillGroup `json:"groups"`
}

type LinkItem struct {
	Label string `json:"label"`
	URL   string `json:"url"`
	Icon  string `json:"icon"`
}

type Links struct {
	Items []LinkItem `json:"items"`
}

type Portfolio struct {
	Identity     Identity
	About        About
	Experience   Experience
	Education    Education
	Achievements Achievements
	Skills       Skills
	Links        Links
}
