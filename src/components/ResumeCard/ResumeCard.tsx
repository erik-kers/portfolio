type ResumeCardProps = {
  organization: string
  role: string
  period: string
}

export default function ResumeCard({ organization, role, period }: ResumeCardProps) {
  return (
    <li className="nfo-entry">
      <p className="font-bold">{organization}</p>
      <p>{role}</p>
      <p>{period}</p>
    </li>
  )
}
