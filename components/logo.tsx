import styles from "./logo.module.css"
import Link from "next/link"

interface LogoProps {
  className?: string
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link href="/" className={`${styles.logo} ${className}`}>
      <div className={styles.logoIcon}>
        <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logoSvg}>
          <path
            d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
            fill="url(#paint0_linear)"
          />
          <path
            d="M24.6517 10.4717L18.3352 7.04297L12.0188 10.4717V17.3293L18.3352 20.758L24.6517 17.3293V10.4717Z"
            fill="white"
          />
          <path
            d="M12.0188 19.1855V26.043L18.3352 29.4717L24.6517 26.043V19.1855"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0070F3" />
              <stop offset="1" stopColor="#00C2CB" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.logoText}>
        <span className={styles.firstName}>Ayesha</span>
        <span className={styles.lastName}>Amin</span>
      </div>
    </Link>
  )
}

