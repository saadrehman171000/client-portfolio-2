"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/button"
import { Badge } from "@/components/badge"
import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/section-heading"
import styles from "./page.module.css"

// Add type definition at the top
type BadgeVariant = 'default' | 'secondary' | 'accent';

// Project data
const projects = [
  {
    id: 1,
    title: "Impact of Social Media on Mental Health",
    description:
      "A comprehensive study examining the psychological effects of social media usage patterns on mental wellbeing among university students. The research included surveys of over 500 participants and statistical analysis of usage patterns correlated with self-reported mental health metrics.",
    category: "Psychology",
    image: "https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=800&q=75",
    badgeVariant: "default",
  },
  {
    id: 2,
    title: "Market Analysis for Startup Growth",
    description:
      "Strategic market analysis providing actionable insights for emerging startups in competitive industries. This project involved comprehensive competitor analysis, market trend forecasting, and development of strategic recommendations for market penetration.",
    category: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75",
    badgeVariant: "secondary",
  },
  {
    id: 3,
    title: "The Role of International Law in Cybersecurity",
    description:
      "Analysis of international legal frameworks governing cybersecurity and their effectiveness in the digital age. The research examined case studies of major cyber attacks and evaluated the applicability of existing international laws to modern cyber threats.",
    category: "Law",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=75",
    badgeVariant: "accent",
  },
  {
    id: 4,
    title: "Sustainable Urban Development Strategies",
    description:
      "Research on sustainable urban planning methodologies and their implementation in rapidly growing metropolitan areas. The study included analysis of successful case studies from various global cities and recommendations for policy makers.",
    category: "Urban Planning",
    image: "https://images.unsplash.com/photo-1518005068251-37900150dfca?w=800&q=75",
    badgeVariant: "default",
  },
  {
    id: 5,
    title: "Artificial Intelligence in Healthcare Diagnostics",
    description:
      "Comprehensive analysis of AI applications in medical diagnostics, focusing on accuracy rates compared to traditional methods. The research included literature review of recent advancements and ethical considerations for implementation.",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=75",
    badgeVariant: "secondary",
  },
  {
    id: 6,
    title: "Corporate Social Responsibility Impact Assessment",
    description:
      "Evaluation of CSR initiatives by multinational corporations and their measurable impact on communities and brand perception. The study included both quantitative and qualitative analysis of selected case studies across various industries.",
    category: "Business Ethics",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=75",
    badgeVariant: "accent",
  },
  {
    id: 7,
    title: "Educational Technology Effectiveness in Remote Learning",
    description:
      "Analysis of various educational technology platforms and their effectiveness in facilitating remote learning during the pandemic. The research included surveys of students and educators across different educational levels.",
    category: "Education",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=75",
    badgeVariant: "default",
  },
  {
    id: 8,
    title: "Renewable Energy Implementation Strategies",
    description:
      "Research on effective strategies for implementing renewable energy solutions in developing economies. The study examined policy frameworks, funding mechanisms, and technological adaptations required for successful implementation.",
    category: "Environmental Science",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=75",
    badgeVariant: "secondary",
  },
  {
    id: 9,
    title: "Consumer Behavior in E-commerce Platforms",
    description:
      "Analysis of consumer decision-making processes and behavior patterns on major e-commerce platforms. The research utilized data analytics to identify key factors influencing purchasing decisions and customer retention.",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=75",
    badgeVariant: "accent",
  },
]

// Filter categories
const categories = [
  "All",
  "Psychology",
  "Business",
  "Law",
  "Healthcare",
  "Education",
  "Marketing",
  "Environmental Science",
  "Urban Planning",
  "Business Ethics",
]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className={styles.pageWrapper}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Logo />
            <nav className={styles.desktopNav}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/#about" className={styles.navLink}>
                About
              </Link>
              <Link href="/#services" className={styles.navLink}>
                Services
              </Link>
              <Link href="/projects" className={`${styles.navLink} ${styles.active}`}>
                Portfolio
              </Link>
              <Link href="/#testimonials" className={styles.navLink}>
                Testimonials
              </Link>
              <Link href="/#contact" className={styles.navLink}>
                Contact
              </Link>
            </nav>
            <div className={styles.headerActions}>
              <ThemeToggle />
              <Button className={styles.desktopOnly} isGradient>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={styles.buttonIcon}
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </Button>
              <button className={styles.mobileMenuButton} onClick={toggleMobileMenu}>
                {isMobileMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                )}
                <span className="sr-only">Toggle menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <nav className={styles.mobileNav}>
            <Link href="/" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/#about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="/#services" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link href="/projects" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Portfolio
            </Link>
            <Link href="/#testimonials" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Testimonials
            </Link>
            <Link href="/#contact" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}

      <main>
        <section className={styles.projectsHero}>
          <div className="container">
            <SectionHeading
              badge="My Portfolio"
              title="Research & Writing Projects"
              description="Browse through my collection of academic writing and research projects across various disciplines."
              align="center"
            />
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className="container">
            <div className={styles.filterContainer}>
              <div className={styles.filterWrapper}>
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`${styles.filterButton} ${activeFilter === category ? styles.activeFilter : ""}`}
                    onClick={() => setActiveFilter(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.projectsGrid}>
              {filteredProjects.map((project) => (
                <div key={project.id} className={styles.projectCard}>
                  <div className={styles.projectImageContainer}>
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={400}
                      className={styles.projectImage}
                    />
                    <div className={styles.projectImageOverlay}></div>
                    <Badge className={styles.projectBadge} variant={project.badgeVariant as BadgeVariant}>
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Need a Custom Research Project?</h2>
              <p className={styles.ctaDescription}>
                I can help you with your specific academic or business research needs. Let&apos;s discuss your project
                requirements.
              </p>
              <div className={styles.ctaButtons}>
                <Button isGradient size="lg">
                  <Link href="/pricing" className={styles.ctaButtonLink}>
                    View Pricing
                  </Link>
                </Button>
                <Button variant="outline" size="lg">
                  <Link href="/#contact" className={styles.ctaButtonLink}>
                    Contact Me
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <div className={styles.footerContent}>
            <div className={styles.footerTop}>
              <div className={styles.footerLogo}>
                <Logo />
                <p className={styles.footerTagline}>Transforming complex ideas into compelling academic narratives.</p>
              </div>
              <div className={styles.footerLinks}>
                <div className={styles.footerLinkGroup}>
                  <h4 className={styles.footerLinkTitle}>Quick Links</h4>
                  <nav className={styles.footerNav}>
                    <Link href="/" className={styles.footerLink}>
                      Home
                    </Link>
                    <Link href="/#about" className={styles.footerLink}>
                      About
                    </Link>
                    <Link href="/#services" className={styles.footerLink}>
                      Services
                    </Link>
                    <Link href="/projects" className={styles.footerLink}>
                      Portfolio
                    </Link>
                    <Link href="/#testimonials" className={styles.footerLink}>
                      Testimonials
                    </Link>
                    <Link href="/#contact" className={styles.footerLink}>
                      Contact
                    </Link>
                  </nav>
                </div>
                <div className={styles.footerLinkGroup}>
                  <h4 className={styles.footerLinkTitle}>Services</h4>
                  <nav className={styles.footerNav}>
                    <Link href="/#services" className={styles.footerLink}>
                      Thesis Writing
                    </Link>
                    <Link href="/#services" className={styles.footerLink}>
                      Research Papers
                    </Link>
                    <Link href="/#services" className={styles.footerLink}>
                      Business Reports
                    </Link>
                    <Link href="/#services" className={styles.footerLink}>
                      Editing Services
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p className={styles.copyright}>
                &copy; {new Date().getFullYear()} Ayesha Amin. All rights reserved.
              </p>
              <div className={styles.footerBottomLinks}>
                <Link href="/terms" className={styles.footerBottomLink}>
                  Terms of Service
                </Link>
                <Link href="/privacy" className={styles.footerBottomLink}>
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

