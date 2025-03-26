import React from "react"
import styles from "./button.module.css"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  asChild?: boolean
  isGradient?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "primary", size = "md", children, className = "", asChild = false, isGradient = false, ...props },
    ref,
  ) => {
    const buttonContent = (
      <button
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${isGradient ? styles.gradient : ""} ${className}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )

    return asChild ? children : buttonContent
  },
)

Button.displayName = "Button"

