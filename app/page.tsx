"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/card"
import { Badge } from "@/components/badge"
import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/section-heading"
import { SkillBadge } from "@/components/skill-badge"
import styles from "./page.module.css"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["home", "about", "services", "works", "testimonials", "contact"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 0
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
        <div className="container">
          <div className={styles.headerContent}>
            <Logo />
            <nav className={styles.desktopNav}>
              <Link href="#home" className={`${styles.navLink} ${activeSection === "home" ? styles.active : ""}`}>
                Home
              </Link>
              <Link href="#about" className={`${styles.navLink} ${activeSection === "about" ? styles.active : ""}`}>
                About
              </Link>
              <Link href="#services" className={`${styles.navLink} ${activeSection === "services" ? styles.active : ""}`}>
                Services
              </Link>
              <Link href="/projects" className={styles.navLink}>
                Portfolio
              </Link>
              <Link href="#testimonials" className={`${styles.navLink} ${activeSection === "testimonials" ? styles.active : ""}`}>
                Testimonials
              </Link>
              <Link href="/pricing" className={styles.navLink}>
                Pricing
              </Link>
              <Link href="#contact" className={`${styles.navLink} ${activeSection === "contact" ? styles.active : ""}`}>
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
            <Link href="#home" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="#about" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="#services" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link href="/projects" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Portfolio
            </Link>
            <Link href="#testimonials" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Testimonials
            </Link>
            <Link href="/pricing" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Pricing
            </Link>
            <Link href="#contact" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}

      <main>
        <section id="home" className={styles.heroSection}>
          <div className={styles.heroBackground}>
            <div className={styles.heroGradient}></div>
            <div className={styles.heroPattern}></div>
          </div>
          <div className="container">
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <Badge isGradient className={styles.heroBadge}>
                  Academic Writing Specialist
                </Badge>
                <h1 className={styles.heroTitle}>
                  Transforming <span className="gradient-text">Complex Ideas</span> Into Compelling Academic Narratives
                </h1>
                <p className={styles.heroDescription}>
                  Hi, I&apos;m Ayesha Amin. I specialize in thesis writing, research papers, and comprehensive literature
                  reviews that help scholars and professionals communicate their ideas effectively.
                </p>
                <div className={styles.heroButtons}>
                  <Link href="/projects" className={styles.buttonLink}>
                    <Button size="lg" isGradient>
                      View My Portfolio
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
                        className={styles.buttonIconRight}
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </Button>
                </div>
                <div className={styles.heroStats}>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>70+</span>
                    <span className={styles.statLabel}>Satisfied Clients</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>150+</span>
                    <span className={styles.statLabel}>Projects Completed</span>
                  </div>
                  <div className={styles.statDivider}></div>
                  <div className={styles.statItem}>
                    <span className={styles.statNumber}>5+</span>
                    <span className={styles.statLabel}>Years Experience</span>
                  </div>
                </div>
              </div>
              <div className={styles.heroImageContainer}>
                <div className={styles.heroImageWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98"
                    alt="Ayesha Amin"
                    width={500}
                    height={500}
                    className={styles.heroImage}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTk1QUE9PREdPSk5NTkr/2wBDAR..."
                  />
                  <div className={styles.imageDecoration}></div>
                </div>
                <div className={styles.experienceTag}>
                  <div className={styles.experienceIcon}>
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div className={styles.experienceText}>
                    <span className={styles.experienceYears}>5+ Years</span>
                    <span className={styles.experienceLabel}>of Experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.scrollDown}>
            <a href="#about" className={styles.scrollLink}>
              <span className={styles.scrollText}>Scroll Down</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={styles.scrollIcon}
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </section>

        <section id="about" className={styles.aboutSection}>
          <div className="container">
            <SectionHeading
              badge="About Me"
              title="Professional Academic Writer & Researcher"
              description="I help students, researchers, and professionals communicate their ideas effectively through well-crafted academic writing and thorough research."
            />
            <div className={styles.aboutContent}>
              <div className={styles.aboutImage}>
                <div className={styles.imageWrapper}>
                  <Image
                    src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc"
                    alt="About me image"
                    width={600}
                    height={600}
                    className={styles.aboutImg}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTk1QUE9PREdPSk5NTkr/2wBDAR..."
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.aboutImageDecoration}></div>
              </div>
              <div className={styles.aboutInfo}>
                <h3 className={styles.aboutSubheading}>My Background</h3>
                <p className={styles.aboutText}>
                  With a strong academic foundation from Bahria University, Karachi, I&apos;ve dedicated my career to helping
                  others succeed in their academic and professional endeavors through exceptional writing and research
                  services.
                </p>
                <p className={styles.aboutText}>
                  My expertise spans multiple disciplines including Psychology, Business, Law, IT, Medical Sciences, and
                  Engineering, allowing me to provide comprehensive support regardless of your field.
                </p>

                <h3 className={styles.aboutSubheading}>Areas of Expertise</h3>
                <div className={styles.skillsGrid}>
                  <SkillBadge name="Thesis Writing" />
                  <SkillBadge name="Research Papers" />
                  <SkillBadge name="Literature Reviews" />
                  <SkillBadge name="Case Studies" />
                  <SkillBadge name="Business Reports" />
                  <SkillBadge name="Technical Writing" />
                  <SkillBadge name="Data Analysis" />
                  <SkillBadge name="Academic Editing" />
                </div>

                <div className={styles.aboutCta}>
                  <Button 
                    isGradient
                    onClick={() => scrollToSection('contact')}
                  >
                    Let&apos;s Collaborate
                  </Button>
                  <Button variant="outline">View Resume</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className={styles.servicesSection}>
          <div className="container">
            <SectionHeading
              badge="Services"
              title="Comprehensive Academic Services"
              description="Professional writing, research, and editing services tailored to your specific academic needs."
            />
            <div className={styles.servicesGrid}>
              <Card className={styles.serviceCard} isGlass>
                <CardHeader>
                  <div className={styles.serviceIcon}>
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
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                  </div>
                  <CardTitle>Thesis & Dissertation</CardTitle>
                  <CardDescription>Comprehensive research support</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Research Proposal Development</li>
                    <li>Literature Review & Gap Identification</li>
                    <li>Data Collection & Analysis</li>
                    <li>Discussion & Conclusion</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
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
                      className={styles.linkIcon}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </CardFooter>
              </Card>

              <Card className={styles.serviceCard} isGlass>
                <CardHeader>
                  <div className={styles.serviceIcon}>
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
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <CardTitle>Research Papers</CardTitle>
                  <CardDescription>Professional academic writing</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Topic Selection & Research</li>
                    <li>APA, MLA, Chicago Formatting</li>
                    <li>Peer-Review-Ready Editing</li>
                    <li>Plagiarism-Free Content</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
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
                      className={styles.linkIcon}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </CardFooter>
              </Card>

              <Card className={styles.serviceCard} isGlass>
                <CardHeader>
                  <div className={styles.serviceIcon}>
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
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <CardTitle>Business Writing</CardTitle>
                  <CardDescription>Professional business documents</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Case Studies & Reports</li>
                    <li>Whitepapers & Policy Analysis</li>
                    <li>Technical & Legal Research</li>
                    <li>Business Proposals</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
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
                      className={styles.linkIcon}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </CardFooter>
              </Card>

              <Card className={styles.serviceCard} isGlass>
                <CardHeader>
                  <div className={styles.serviceIcon}>
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
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                  <CardTitle>Editing & Proofreading</CardTitle>
                  <CardDescription>Polishing your academic work</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className={styles.serviceList}>
                    <li>Grammar & Structure Improvements</li>
                    <li>Citation & Plagiarism Checking</li>
                    <li>Formatting & Style Enhancement</li>
                    <li>Content Refinement</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="#contact" className={styles.cardLink}>
                    Learn more
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
                      className={styles.linkIcon}
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section id="works" className={styles.worksSection}>
          <div className="container">
            <SectionHeading
              badge="My Portfolio"
              title="Research Across Disciplines"
              description="I have successfully assisted in various research domains across multiple fields."
            />
            <div className={styles.worksGrid}>
              <div className={styles.workCard}>
                <div className={styles.workImageContainer}>
                  <Image
                    src="https://images.unsplash.com/photo-1616587226960-4a03badbe8bf?w=800&q=75"
                    alt="Psychology research"
                    width={600}
                    height={400}
                    className={styles.workImage}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTk1QUE9PREdPSk5NTkr/2wBDAR..."
                  />
                  <div className={styles.workImageOverlay}></div>
                  <Badge className={styles.workBadge}>Psychology</Badge>
                </div>
                <h3 className={styles.workTitle}>Impact of Social Media on Mental Health</h3>
                <p className={styles.workDescription}>
                  A comprehensive study examining the psychological effects of social media usage patterns on mental
                  wellbeing.
                </p>
                <Link href="#" className={styles.workLink}>
                  View Case Study
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
                    className={styles.linkIcon}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              <div className={styles.workCard}>
                <div className={styles.workImageContainer}>
                  <Image
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=75"
                    alt="Business research"
                    width={600}
                    height={400}
                    className={styles.workImage}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTk1QUE9PREdPSk5NTkr/2wBDAR..."
                  />
                  <div className={styles.workImageOverlay}></div>
                  <Badge className={styles.workBadge} variant="secondary">
                    Business
                  </Badge>
                </div>
                <h3 className={styles.workTitle}>Market Analysis for Startup Growth</h3>
                <p className={styles.workDescription}>
                  Strategic market analysis providing actionable insights for emerging startups in competitive
                  industries.
                </p>
                <Link href="#" className={styles.workLink}>
                  View Case Study
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
                    className={styles.linkIcon}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>

              <div className={styles.workCard}>
                <div className={styles.workImageContainer}>
                  <Image
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=75"
                    alt="Law research"
                    width={600}
                    height={400}
                    className={styles.workImage}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVigAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPjA+OjU1RUVHSkdKTk1QUE9PREdPSk5NTkr/2wBDAR..."
                  />
                  <div className={styles.workImageOverlay}></div>
                  <Badge className={styles.workBadge} variant="accent">
                    Law
                  </Badge>
                </div>
                <h3 className={styles.workTitle}>The Role of International Law in Cybersecurity</h3>
                <p className={styles.workDescription}>
                  Analysis of international legal frameworks governing cybersecurity and their effectiveness in the
                  digital age.
                </p>
                <Link href="#" className={styles.workLink}>
                  View Case Study
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
                    className={styles.linkIcon}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.sectionCta}>
              <Link href="/projects" className={styles.buttonLink}>
                <Button isGradient>
                  View All Projects
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
                    className={styles.buttonIconRight}
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="testimonials" className={styles.testimonialsSection}>
          <div className="container">
            <SectionHeading
              badge="Testimonials"
              title="What Clients Say"
              description="Feedback from satisfied clients across various academic and professional fields."
            />
            <div className={styles.testimonialsGrid}>
              <Card className={styles.testimonialCard} isGlass>
                <CardContent>
                  <div className={styles.testimonialQuote}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.quoteIcon}
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className={styles.testimonialText}>
                    &quot;Ayesha&apos;s business report was detailed and data-driven. Her analysis provided valuable insights
                    that helped our company make informed strategic decisions. Excellent work!&quot;
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <Image
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&q=80"
                        alt="Dr. Hammad R."
                        width={50}
                        height={50}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <h4 className={styles.authorName}>Dr. Hammad R.</h4>
                      <p className={styles.authorTitle}>Business Consultant</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.testimonialCard} isGlass>
                <CardContent>
                  <div className={styles.testimonialQuote}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.quoteIcon}
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className={styles.testimonialText}>
                    &quot;Her literature review saved me weeks of research! Ayesha has an exceptional ability to synthesize
                    complex information into clear, coherent narratives. Highly recommended for any academic writing
                    needs.&quot;
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <Image
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                        alt="Sana K."
                        width={50}
                        height={50}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <h4 className={styles.authorName}>Sana K.</h4>
                      <p className={styles.authorTitle}>Research Scholar</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={styles.testimonialCard} isGlass>
                <CardContent>
                  <div className={styles.testimonialQuote}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={styles.quoteIcon}
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </div>
                  <p className={styles.testimonialText}>
                    &quot;From technical reports to research papers, Ayesha delivers high-quality content every time. Her
                    attention to detail and ability to understand complex engineering concepts made her an invaluable
                    resource for my academic journey.&quot;
                  </p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                        alt="M. Ahmed"
                        width={50}
                        height={50}
                        className={styles.avatarImage}
                      />
                    </div>
                    <div>
                      <h4 className={styles.authorName}>M. Ahmed</h4>
                      <p className={styles.authorTitle}>Engineering Student</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contactSection}>
          <div className="container">
            <SectionHeading
              badge="Contact Me"
              title="Get In Touch"
              description="Need help with your research? Let's discuss how I can assist with your academic needs."
            />
            <div className={styles.contactGrid}>
              <div className={styles.contactInfo}>
                <div className={styles.contactCard}>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
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
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemTitle}>Email</h3>
                      <p className={styles.contactItemText}>ayeshaamin@gmail.com</p>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
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
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemTitle}>Phone</h3>
                      <p className={styles.contactItemText}>+92 312 0362984</p>
                    </div>
                  </div>
                  <div className={styles.contactItem}>
                    <div className={styles.contactIcon}>
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
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <h3 className={styles.contactItemTitle}>Location</h3>
                      <p className={styles.contactItemText}>Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>
                <div className={styles.workingHours}>
                  <h3 className={styles.workingHoursTitle}>Working Hours</h3>
                  <div className={styles.workingHoursGrid}>
                    <div className={styles.workingHoursRow}>
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className={styles.workingHoursRow}>
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className={styles.workingHoursRow}>
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
                <div className={styles.socialLinks}>
                  <h3 className={styles.socialTitle}>Connect With Me</h3>
                  <div className={styles.socialIcons}>
                    <a 
                      href="https://www.linkedin.com/in/saadrehman17100/"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={styles.socialIcon}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>

                    <a 
                      href="https://www.instagram.com/saad_rehman76/"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={styles.socialIcon}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>

                    <a 
                      href="https://www.facebook.com/saadrehman17100/"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className={styles.socialIcon}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.contactForm}>
                <ContactForm />
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
                    <Link href="#home" className={styles.footerLink}>
                      Home
                    </Link>
                    <Link href="#about" className={styles.footerLink}>
                      About
                    </Link>
                    <Link href="#services" className={styles.footerLink}>
                      Services
                    </Link>
                    <Link href="/projects" className={styles.footerLink}>
                      Portfolio
                    </Link>
                    <Link href="#testimonials" className={styles.footerLink}>
                      Testimonials
                    </Link>
                    <Link href="/pricing" className={styles.footerLink}>
                      Pricing
                    </Link>
                    <Link href="#contact" className={styles.footerLink}>
                      Contact
                    </Link>
                  </nav>
                </div>
                <div className={styles.footerLinkGroup}>
                  <h4 className={styles.footerLinkTitle}>Legal</h4>
                  <nav className={styles.footerNav}>
                    <Link href="/terms" className={styles.footerLink}>
                      Terms of Service
                    </Link>
                    <Link href="/privacy" className={styles.footerLink}>
                      Privacy Policy
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

