import type React from "react"
import styles from "./badge.module.css"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "outline" | "secondary" | "accent"
  className?: string
  isGradient?: boolean
}

export function Badge({ children, variant = "default", className = "", isGradient = false }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${isGradient ? styles.gradient : ""} ${className}`}>
      {children}
    </span>
  )
}

