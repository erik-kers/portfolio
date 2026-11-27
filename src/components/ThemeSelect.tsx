import { useState } from 'react'

export default function ThemeSelect() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? 'system')

  function changeTheme(value: string) {
    setTheme(value)
    if (value === 'system') {
      delete document.documentElement.dataset.theme
    } else {
      document.documentElement.dataset.theme = value
    }
    try {
      localStorage.setItem('portfolio-theme', value)
    } catch {
      // The selection still applies when storage is unavailable.
    }
  }

  return (
    <span className="nfo-theme-control" title="Color theme">
      <svg
        aria-hidden="true"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {theme === 'light' ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4m0-14.2-1.4 1.4M6.3 17.7l-1.4 1.4" />
          </>
        ) : theme === 'dark' ? (
          <path d="M20.5 14.1A8.8 8.8 0 0 1 9.9 3.5a8.8 8.8 0 1 0 10.6 10.6Z" />
        ) : (
          <>
            <rect x="3" y="4" width="18" height="13" rx="1" />
            <path d="M8 21h8m-4-4v4" />
          </>
        )}
      </svg>
      <select
        aria-label="Color theme"
        value={theme}
        onChange={event => changeTheme(event.currentTarget.value)}
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </span>
  )
}
