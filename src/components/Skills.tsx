import { skillGroups } from '@/data/skills'
import SkillPill from './SkillPill'

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
                    <SkillPill id={skill.id} linkToProjects />
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
