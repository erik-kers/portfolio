import React from 'react'

type TechPillProps = {
  type: string,
}

function TechPill({ type }: TechPillProps) {
  const lowerCaseType = type.toLocaleLowerCase();

  switch (lowerCaseType) {
    case 'typescript':
      return <span className="bg-blue-500 mr-2 mb-2 px-2 text-white">{type}</span>
    case 'javascript':
      return <span className="bg-yellow-300 mr-2 mb-2 px-2 text-black">{type}</span>
    case 'react':
      return <span className="bg-pink-300 mr-2 mb-2 px-2 text-black">{type}</span>
    case 'aurelia':
      return <span className="bg-red-300 mr-2 mb-2 px-2 text-black">{type}</span>
    case 'docker':
      return <span className="bg-blue-300 mr-2 mb-2 px-2 text-black">{type}</span>
    default:
      return <span className="bg-white mr-2 mb-2 px-2 text-black">{type}</span>
  }

}

export default function ProjectCard() {
  return (
    <ul className="mb-5 container">
      <li className="text-yellow-300">Project</li>
      <li >2018 - 2019</li>
      <li className="font-bold">Customer</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pellentesque, odio ut congue finibus, justo lorem fringilla nulla, sit amet malesuada ligula enim placerat tellus. Donec vel pulvinar dui, et rhoncus nisl.</li>
      <li className="flex justify-start mt-5 flex-wrap">
        <TechPill type="typescript" />
        <TechPill type="javascript" />
        <TechPill type="docker" />
        <TechPill type="aurelia" />
        <TechPill type="react" />
        <TechPill type="python" />
        <TechPill type="typescript" />
        <TechPill type="javascript" />
        <TechPill type="docker" />
        <TechPill type="aurelia" />
        <TechPill type="react" />
        <TechPill type="python" />
      </li>
    </ul>)
}
