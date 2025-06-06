// src/app/components/Container.tsx
import React from 'react'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  fullHeight?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, className = '', fullHeight = false }) => {
  const baseClasses = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
  const heightClass = fullHeight ? 'min-h-screen flex flex-col' : ''
  const combinedClasses = `${baseClasses} ${heightClass} ${className}`.trim()

  return <div className={combinedClasses}>{children}</div>
}

export default Container