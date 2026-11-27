import projects from './projects.json'

import skillGroups from './skills.json'

export { skillGroups }

export const skillsById = new Map(
  skillGroups.flatMap(({ skills }) => skills.map(skill => [skill.id, skill] as const)),
)

export const projectSkillIds = new Set(projects.flatMap(project => project.skills))

const skillCollator = new Intl.Collator('en', { sensitivity: 'base', numeric: true, ignorePunctuation: true })

export function compareSkills(first: string, second: string) {
  return skillCollator.compare(
    skillsById.get(first)?.label ?? first,
    skillsById.get(second)?.label ?? second,
  )
}
