import projects from './projects.json'

export const skillGroups = [
  {
    label: 'Languages',
    skills: [
      { id: 'typescript', label: 'TypeScript' },
      { id: 'javascript', label: 'JavaScript' },
      { id: 'python', label: 'Python' },
    ],
  },
  {
    label: 'Frontend',
    skills: [
      { id: 'react', label: 'React' },
      { id: 'aurelia', label: 'Aurelia' },
    ],
  },
  {
    label: 'Tooling',
    skills: [{ id: 'docker', label: 'Docker' }],
  },
]

export const skillsById = new Map(
  skillGroups.flatMap(({ skills }) => skills.map(skill => [skill.id, skill] as const)),
)

export const projectSkillIds = new Set(projects.flatMap(project => project.skills))
