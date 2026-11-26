function TechPill({ type }: { type: string }) {
  return <span className="nfo-tag">{type}</span>
}

export default function ProjectCard() {
  return (
    <ul className="nfo-entry">
      <li className="font-bold">Project</li>
      <li >2018 - 2019</li>
      <li className="font-bold">Customer</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, odio ut congue finibus, justo lorem fringilla nulla, sit amet malesuada ligula enim placerat tellus. Donec vel pulvinar dui, et rhoncus nisl.</li>
      <li className="mt-3 flex flex-wrap gap-x-2 gap-y-1">
        <TechPill type="typescript" />
        <TechPill type="javascript" />
        <TechPill type="docker" />
        <TechPill type="aurelia" />
        <TechPill type="react" />
        <TechPill type="python" />
        <TechPill type="typescript" />
        <TechPill type="javascript" />
        <TechPill type="aurelia" />
        <TechPill type="react" />
        <TechPill type="python" />
      </li>
    </ul>)
}
