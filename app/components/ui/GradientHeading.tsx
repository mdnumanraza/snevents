"use client"

import type React from "react"

interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3"
}

export function GradientHeading({ children, className = "", as = "h2" }: GradientHeadingProps) {
  const Component = as
  return (
    <Component
      className={`font-bold bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent ${
        as === "h1" ? "text-4xl md:text-6xl lg:text-7xl" : as === "h2" ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
      } ${className}`}
    >
      {children}
    </Component>
  )
}

