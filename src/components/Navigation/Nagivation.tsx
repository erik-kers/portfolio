import { Link } from '@tanstack/react-router'

export default function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
        <li><Link to="/" activeOptions={{ exact: true }}>home</Link></li>
        <li><Link to="/description">description</Link></li>
        <li><Link to="/projects">projects</Link></li>
        <li><Link to="/resume">resumé</Link></li>
      </ul>
    </nav>
  )
}
