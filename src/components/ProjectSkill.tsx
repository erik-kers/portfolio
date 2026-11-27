import type { CSSProperties } from 'react'
import { skillsById } from '@/data/skills'

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

export default function ProjectSkill({ id }: { id: string }) {
  const label = skillsById.get(id)?.label ?? id
  const style = { '--skill-hue': hueForSkill(id) } as CSSProperties

  return (
    <span className="nfo-tech-tag" style={style}>
      <span aria-hidden="true">[</span>{label}<span aria-hidden="true">]</span>
    </span>
  )
}
