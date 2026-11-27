import { Link, Outlet } from '@tanstack/react-router'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Text from '@/components/Text'
import ResumeCard from '@/components/ResumeCard'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'
import about from '@/data/about.json'
import education from '@/data/education.json'
import employment from '@/data/employment.json'
import projects from '@/data/projects.json'
import { skillsById } from '@/data/skills'

export default function App() {
  return (
    <div className="nfo-document">
      <Navigation />
      <main id="content">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

function Description() {
  return (
    <section className="nfo-section" aria-labelledby="about">
      <h2 id="about">About</h2>
      {about.map((paragraph, index) => (
        <Text key={paragraph} gutterBottom={index < about.length - 1}>{paragraph}</Text>
      ))}
    </section>
  )
}

export function Projects({ skill }: { skill?: string }) {
  const selectedSkill = skill ? skillsById.get(skill) : undefined
  const visibleProjects = selectedSkill
    ? projects.filter(project => project.skills.includes(selectedSkill.id))
    : projects

  return (
    <section className="nfo-section" aria-labelledby="pro-heading">
      <h2 id="pro-heading">Projects</h2>
      {selectedSkill && (
        <p className="mb-4">
          Using <strong>{selectedSkill.label}</strong>{' '}
          <Link className="underline" to="/projects" search={{}}>Show all projects</Link>
        </p>
      )}
      {visibleProjects.map(project => <ProjectCard key={project.id} {...project} />)}
      {visibleProjects.length === 0 && <p>No projects to show.</p>}
    </section>
  )
}

function Resume() {
  return (
    <section className="nfo-section" aria-labelledby="resume">
      <h2 id="resume">Résumé</h2>
      <Skills />
      <h3 className="mb-3 font-bold">Employment</h3>
      <ul>
        {employment.map(entry => <ResumeCard key={entry.id} {...entry} />)}
      </ul>
      <h3 className="mt-6 mb-3 font-bold">Education</h3>
      <ul>
        {education.map(entry => <ResumeCard key={entry.id} {...entry} />)}
      </ul>
    </section>
  )
}

export function Home() {
  return (
    <>
      <Description />
      <Resume />
    </>
  )
}
