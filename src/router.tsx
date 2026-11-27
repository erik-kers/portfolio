import { createRootRoute, createRoute, createRouter, Link, redirect } from '@tanstack/react-router'
import App, { Home, Projects } from './App'

const rootRoute = createRootRoute({
  component: App,
  notFoundComponent: () => (
    <p>Page not found. <Link to="/" className="underline">Back to home</Link></p>
  ),
})

const homeRoute = createRoute({ getParentRoute: () => rootRoute, path: '/', component: Home })
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
// Preserve bookmarks for sections that now live on the homepage.
const descriptionRedirect = createRoute({
  getParentRoute: () => rootRoute,
  path: '/description',
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'about', replace: true })
  },
})

const resumeRedirect = createRoute({
  getParentRoute: () => rootRoute,
  path: '/resume',
  beforeLoad: () => {
    throw redirect({ to: '/', hash: 'resume', replace: true })
  },
})

export const router = createRouter({
  routeTree: rootRoute.addChildren([homeRoute, projectsRoute, descriptionRedirect, resumeRedirect]),
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
