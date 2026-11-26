import { Link, Outlet } from '@tanstack/react-router'
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Text from '@/components/Text'
import ResumeCard from '@/components/ResumeCard'
import ProjectCard from '@/components/ProjectCard'
import Skills from '@/components/Skills'
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

export function Description() {
  return (
    <section className="nfo-section" aria-labelledby="about-heading">
      <h2 id="about-heading">About</h2>
      <Text gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, odio ut congue finibus, justo lorem fringilla nulla, sit amet malesuada ligula enim placerat tellus. Donec vel pulvinar dui, et rhoncus nisl. Nunc nec bibendum turpis. Vestibulum rhoncus erat et commodo consequat. Sed et ullamcorper elit. Duis in viverra magna. Donec ornare porta ante, vitae aliquam mauris porttitor scelerisque.
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, odio ut congue finibus, justo lorem fringilla nulla, sit amet malesuada ligula enim placerat tellus. Donec vel pulvinar dui, et rhoncus nisl. Nunc nec bibendum turpis. Vestibulum rhoncus erat et commodo consequat. Sed et ullamcorper elit. Duis in viverra magna. Donec ornare porta ante, vitae aliquam mauris porttitor scelerisque.
      </Text>
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

export function Resume() {
  return (
    <section className="nfo-section" aria-labelledby="rés-heading">
      <h2 id="rés-heading">Résumé</h2>
      <Skills />
      <ResumeCard />
      <ResumeCard />
      <ResumeCard />
    </section>
  )
}

export function Home() {
  return (
    <>
      <Description />
      <Projects />
      <Resume />
    </>
  )
}
