import { Link } from '@tanstack/react-router'

export default function Navigation() {
  return (
    <nav className="nfo-nav" aria-label="Main navigation">
      <ul>
        <li><Link to="/" activeOptions={{ exact: true }}>Home</Link></li>
        <li><Link to="/description">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/resume">Résumé</Link></li>
      </ul>
    </nav>
  )
}
