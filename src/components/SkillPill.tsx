import { Link } from '@tanstack/react-router'
import type { CSSProperties } from 'react'
import { projectSkillIds, skillsById } from '@/data/skills'

const familiarHues = new Map([
  ['typescript', 216],
  ['javascript', 48],
  ['react', 188],
  ['nextjs', 252],
  ['docker', 204],
  ['tailwind-css', 169],
  ['vite', 280],
])

function hueForSkill(id: string) {
  let hash = 0
  for (const char of id) hash = Math.imul(hash, 31) + char.charCodeAt(0) | 0
  return familiarHues.get(id) ?? (hash >>> 0) % 360
}

export default function SkillPill({ id, linkToProjects = false }: { id: string, linkToProjects?: boolean }) {
  const label = skillsById.get(id)?.label ?? id
  const style = { '--skill-hue': hueForSkill(id) } as CSSProperties

  if (linkToProjects && projectSkillIds.has(id)) {
    return (
      <Link
        className="nfo-skill-pill"
        style={style}
        to="/projects"
        search={{ skill: id }}
        aria-label={`View projects using ${label}`}
      >
        {label}
      </Link>
    )
  }

  return <span className="nfo-skill-pill" style={style}>{label}</span>
}
