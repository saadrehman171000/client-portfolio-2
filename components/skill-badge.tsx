import type React from "react"
import styles from "./skill-badge.module.css"

interface SkillBadgeProps {
  name: string
  icon?: React.ReactNode
  className?: string
}

export function SkillBadge({ name, icon, className = "" }: SkillBadgeProps) {
  return (
    <div className={`${styles.skillBadge} ${className}`}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <span className={styles.name}>{name}</span>
    </div>
  )
}

