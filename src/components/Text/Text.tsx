import React from 'react'

type TextProps = {
  children: React.ReactNode,
  gutterBottom?: boolean
}

export default function Text({ children, gutterBottom }: TextProps) {
  return (
    <p className={`font-mono text-justify ${gutterBottom && 'mb-10'}`}>
      {children}
    </p>
  )
}
