import SkillPill from '@/components/SkillPill'

type ProjectCardProps = {
  title: string
  period?: string
  description: string
  skills: string[]
}

export default function ProjectCard({ title, period, description, skills }: ProjectCardProps) {
  return (
    <article className="nfo-entry">
      <h3 className="font-bold">{title}</h3>
      {period && <p className="mb-1">{period}</p>}
      <p>{description}</p>
      <ul className="nfo-skill-list mt-3" aria-label="Skills used">
        {skills.map(id => <li key={id}><SkillPill id={id} /></li>)}
      </ul>
    </article>
  )
}
