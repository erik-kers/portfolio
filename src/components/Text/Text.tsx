import React from 'react'

type TextProps = {
  children: React.ReactNode,
  gutterBottom?: boolean
}

export default function Text({ children, gutterBottom }: TextProps) {
  return (
    <p className={`${gutterBottom ? 'mb-4' : ''}`}>
      {children}
    </p>
  )
}
