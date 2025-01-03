import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import ResumeCard from '@/components/ResumeCard'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  return (
    <main>
      <Header />
      <Navigation />
      <section>
        <ResumeCard />
      </section>
      <section>
        <ProjectCard />
      </section>
    </main>
  )
} 