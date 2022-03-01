import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Text from '@/components/Text';
import ResumeCard from '@/components/ResumeCard';
import ProjectCard from '@/components/ProjectCard';

export default function App() {
  return (
    <div className="flex min-w-screen flex-col items-center bg-black min-h-screen font-mono overflow-hidden text-green-400">
      <Navigation />
      <Header />
      <main className="container mx-auto p-10 max-w-lg mt-10">
        <Text gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, odio ut congue finibus, justo lorem fringilla nulla, sit amet malesuada ligula enim placerat tellus. Donec vel pulvinar dui, et rhoncus nisl. Nunc nec bibendum turpis. Vestibulum rhoncus erat et commodo consequat. Sed et ullamcorper elit. Duis in viverra magna. Donec ornare porta ante, vitae aliquam mauris porttitor scelerisque.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, odio ut congue finibus, justo lorem fringilla nulla, sit amet malesuada ligula enim placerat tellus. Donec vel pulvinar dui, et rhoncus nisl. Nunc nec bibendum turpis. Vestibulum rhoncus erat et commodo consequat. Sed et ullamcorper elit. Duis in viverra magna. Donec ornare porta ante, vitae aliquam mauris porttitor scelerisque.
        </Text>

        <section className="mt-10">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </section>

        <section className="mt-10">
          <ResumeCard />
          <ResumeCard />
          <ResumeCard />
        </section>

      </main>
    </div>
  )
}
