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
    <select
      className="nfo-theme-select"
      aria-label="Color theme"
      value={theme}
      onChange={event => changeTheme(event.currentTarget.value)}
    >
      <option value="system">System</option>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
    </select>
  )
}
