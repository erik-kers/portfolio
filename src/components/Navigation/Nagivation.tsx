import React from 'react'

type NavItemProps = {
  title: string
}
function NavItem({ title }: NavItemProps) {
  return (
    <li>
      <span className="cursor-pointer mx-5 hover:text-green-200 hover:underline underline-offset-4">
        {title}
      </span>
    </li>
  )
}

export default function Navigation() {
  return (
    <nav>
      <ul className="flex mt-10">
        <NavItem title={'home'} />
        <NavItem title={'description'} />
        <NavItem title={'projects'} />
        <NavItem title={'resumé'} />
      </ul>
    </nav>
  )
}
