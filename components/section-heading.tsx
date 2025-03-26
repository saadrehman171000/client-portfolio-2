import styles from "./section-heading.module.css"
import { Badge } from "./badge"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  badge,
  title,
  description,
  className = "",
  align = "center",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  return (
    <div className={`${styles.sectionHeading} ${styles[align]} ${className}`}>
      {badge && (
        <Badge variant="outline" isGradient className={styles.badge}>
          {badge}
        </Badge>
      )}
      <h2 className={`${styles.title} ${titleClassName}`}>{title}</h2>
      {description && <p className={`${styles.description} ${descriptionClassName}`}>{description}</p>}
    </div>
  )
}

