import { Link } from '@tanstack/react-router'
import { projectSkillIds, skillGroups } from '@/data/skills'

export default function Skills() {
  return (
    <section className="nfo-skills" aria-labelledby="skills-heading">
      <h3 id="skills-heading">Skills</h3>
      <dl>
        {skillGroups.map(group => (
          <div key={group.label}>
            <dt>{group.label}</dt>
            <dd>
              <ul className="nfo-skill-list">
                {group.skills.map(skill => (
                  <li key={skill.id}>
                    {projectSkillIds.has(skill.id) ? (
                      <Link
                        className="nfo-link"
                        to="/projects"
                        search={{ skill: skill.id }}
                        aria-label={`View projects using ${skill.label}`}
                      >
                        {skill.label}
                      </Link>
                    ) : skill.label}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
