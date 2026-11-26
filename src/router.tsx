import { createRootRoute, createRoute, createRouter, Link } from '@tanstack/react-router'
import App, { Description, Home, Projects, Resume } from './App'

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: () => (
    <p>Page not found. <Link to="/" className="underline">Back to home</Link></p>
  ),
})

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home })
const descriptionRoute = createRoute({ getParentRoute: () => rootRoute, path: '/description', component: Description })
const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  validateSearch: (search): { skill?: string } => (
    typeof search.skill === 'string' ? { skill: search.skill } : {}
  ),
  component: ProjectsPage,
})

function ProjectsPage() {
  const { skill } = projectsRoute.useSearch()
  return <Projects skill={skill} />
}
const resumeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/resume', component: Resume })

export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, descriptionRoute, projectsRoute, resumeRoute]),
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
