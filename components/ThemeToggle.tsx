"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

// Shared with the inline script in app/layout.tsx, which applies the theme before paint.
export const THEME_KEY = "nextloom-theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // Storage blocked (private mode etc.): the choice just won't persist.
    }
    setTheme(next);
  };

  const label = theme === "light" ? "Switch to dark theme" : theme === "dark" ? "Switch to light theme" : "Toggle color theme";

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      {/* Moon shows in dark theme, sun in light theme (visibility handled in CSS, so no flash before hydration). */}
      <svg className="moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
      <svg className="sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </svg>
    </button>
  );
}
