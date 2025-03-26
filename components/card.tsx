import type React from "react"
import styles from "./card.module.css"

interface CardProps {
  children: React.ReactNode
  className?: string
  isHoverable?: boolean
  isGlass?: boolean
}

export function Card({ children, className = "", isHoverable = true, isGlass = false }: CardProps) {
  return (
    <div
      className={`${styles.card} ${isHoverable ? styles.hoverable : ""} ${isGlass ? styles.glass : ""} ${className}`}
    >
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

export function CardHeader({ children, className = "" }: CardHeaderProps) {
  return <div className={`${styles.cardHeader} ${className}`}>{children}</div>
}

interface CardTitleProps {
  children: React.ReactNode
  className?: string
}

export function CardTitle({ children, className = "" }: CardTitleProps) {
  return <h3 className={`${styles.cardTitle} ${className}`}>{children}</h3>
}

interface CardDescriptionProps {
  children: React.ReactNode
  className?: string
}

export function CardDescription({ children, className = "" }: CardDescriptionProps) {
  return <p className={`${styles.cardDescription} ${className}`}>{children}</p>
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

export function CardContent({ children, className = "" }: CardContentProps) {
  return <div className={`${styles.cardContent} ${className}`}>{children}</div>
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

export function CardFooter({ children, className = "" }: CardFooterProps) {
  return <div className={`${styles.cardFooter} ${className}`}>{children}</div>
}

