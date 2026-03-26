package data

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
)

func Load() (*Portfolio, error) {
	dir := os.Getenv("DATA_PATH")
	if dir == "" {
		dir = "../data"
	}

	p := &Portfolio{}

	loaders := []struct {
		file string
		dest any
	}{
		{"identity.json", &p.Identity},
		{"about.json", &p.About},
		{"experience.json", &p.Experience},
		{"education.json", &p.Education},
		{"achievements.json", &p.Achievements},
		{"skills.json", &p.Skills},
		{"links.json", &p.Links},
	}

	for _, l := range loaders {
		raw, err := os.ReadFile(filepath.Join(dir, l.file))
		if err != nil {
			return nil, fmt.Errorf("reading %s: %w", l.file, err)
		}
		if err := json.Unmarshal(raw, l.dest); err != nil {
			return nil, fmt.Errorf("parsing %s: %w", l.file, err)
		}
	}

	return p, nil
}
