import { Link } from '@tanstack/react-router'

export default function Navigation() {
  return (
    <nav className="nfo-nav" aria-label="Main navigation">
      <ul>
        <li><Link to="/" activeOptions={{ exact: true, includeHash: true }}>Home</Link></li>
        <li><Link to="/" hash="about" activeOptions={{ exact: true, includeHash: true }}>About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/" hash="resume" activeOptions={{ exact: true, includeHash: true }}>Résumé</Link></li>
      </ul>
    </nav>
  )
}
