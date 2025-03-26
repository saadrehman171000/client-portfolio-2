"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/card"
import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/section-heading"
import styles from "./page.module.css"

// Pricing packages
const pricingPackages = [
  {
    id: "basic",
    title: "Basic Research",
    description: "For straightforward research papers and essays",
    price: "₨2",
    unit: "per word",
    features: [
      "Topic research and outline",
      "Original content writing",
      "Basic formatting (APA, MLA, etc.)",
      "One round of revisions",
      "Plagiarism-free guarantee",
      "Standard delivery time",
    ],
    popular: false,
  },
  {
    id: "standard",
    title: "Standard Research",
    description: "For comprehensive research papers and case studies",
    price: "₨2.5",
    unit: "per word",
    features: [
      "In-depth research and analysis",
      "Detailed outline and structure",
      "Advanced formatting and citations",
      "Two rounds of revisions",
      "Plagiarism-free guarantee",
      "Priority delivery",
      "Literature review included",
    ],
    popular: true,
  },
  {
    id: "premium",
    title: "Premium Research",
    description: "For thesis, dissertations, and complex projects",
    price: "₨3+",
    unit: "per word",
    features: [
      "Comprehensive research methodology",
      "Data collection and analysis",
      "Statistical analysis if required",
      "Complete literature review",
      "Unlimited revisions",
      "Expedited delivery option",
      "Direct communication throughout",
      "Post-submission support",
    ],
    popular: false,
  },
]

// FAQ items
const faqItems = [
  {
    question: "How is the final price calculated?",
    answer:
      "The final price is calculated based on the word count and the package you select. For projects requiring data analysis or specialized research, additional costs may apply. I&apos;ll provide a detailed quote after discussing your specific requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "I accept bank transfers, PayPal, and other secure online payment methods. For larger projects, I typically request a 50% advance payment with the remainder due upon completion.",
  },
  {
    question: "What is your revision policy?",
    answer:
      "Revisions are included in all packages, with the number varying by package level. Additional revisions beyond the included amount are charged at a nominal fee. All revision requests should be made within 14 days of delivery.",
  },
  {
    question: "How do you ensure originality and avoid plagiarism?",
    answer:
      "All content is written from scratch and thoroughly checked using premium plagiarism detection software. I provide a plagiarism report upon request to verify the originality of the work.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Turnaround time depends on the project scope and complexity. Standard research papers typically take 5-7 days, while comprehensive thesis projects may require 3-4 weeks. Expedited delivery is available for an additional fee.",
  },
  {
    question: "Do you offer discounts for returning clients or large projects?",
    answer:
      "Yes, I offer loyalty discounts for returning clients and volume discounts for large projects. Please mention if you&apos;re a returning client when requesting a quote.",
  },
]

export default function PricingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("pricing")

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
              <Link href="/projects" className={styles.navLink}>
                Portfolio
              </Link>
              <Link href="/#testimonials" className={styles.navLink}>
                Testimonials
              </Link>
              <Link href="/pricing" className={`${styles.navLink} ${styles.active}`}>
                Pricing
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
            <Link href="/pricing" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Pricing
            </Link>
            <Link href="/#contact" className={styles.mobileNavLink} onClick={toggleMobileMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}

      <main>
        <section className={styles.pricingHero}>
          <div className="container">
            <SectionHeading
              badge="Pricing"
              title="Transparent & Flexible Pricing"
              description="Competitive rates for high-quality academic writing and research services tailored to your needs."
              align="center"
            />
          </div>
        </section>

        <section className={styles.pricingSection}>
          <div className="container">
            <div className={styles.tabsContainer}>
              <div className={styles.tabs}>
                <button
                  className={`${styles.tab} ${activeTab === "pricing" ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab("pricing")}
                >
                  Pricing Packages
                </button>
                <button
                  className={`${styles.tab} ${activeTab === "custom" ? styles.activeTab : ""}`}
                  onClick={() => setActiveTab("custom")}
                >
                  Custom Pricing
                </button>
              </div>
            </div>

            {activeTab === "pricing" && (
              <div className={styles.pricingCards}>
                {pricingPackages.map((pkg) => (
                  <Card key={pkg.id} className={`${styles.pricingCard} ${pkg.popular ? styles.popularCard : ""}`}>
                    {pkg.popular && <div className={styles.popularBadge}>Most Popular</div>}
                    <CardHeader>
                      <CardTitle className={styles.packageTitle}>{pkg.title}</CardTitle>
                      <p className={styles.packageDescription}>{pkg.description}</p>
                      <div className={styles.packagePrice}>
                        <span className={styles.price}>{pkg.price}</span>
                        <span className={styles.unit}>{pkg.unit}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className={styles.featuresList}>
                        {pkg.features.map((feature, index) => (
                          <li key={index} className={styles.featureItem}>
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
                              className={styles.checkIcon}
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button
                        isGradient={pkg.popular}
                        variant={pkg.popular ? "primary" : "outline"}
                        className={styles.packageButton}
                      >
                        <Link href="/#contact" className={styles.packageButtonLink}>
                          Get Started
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === "custom" && (
              <div className={styles.customPricing}>
                <Card className={styles.customPricingCard}>
                  <CardContent>
                    <h3 className={styles.customTitle}>Custom Project Pricing</h3>
                    <p className={styles.customDescription}>
                      For specialized academic projects, research requiring data analysis, or complex requirements, I
                      offer custom pricing based on the specific needs of your project.
                    </p>

                    <div className={styles.customPricingDetails}>
                      <div className={styles.customPricingItem}>
                        <h4 className={styles.customPricingItemTitle}>Base Rate</h4>
                        <p className={styles.customPricingItemDescription}>
                          <span className={styles.highlight}>₨2 per word</span> is the starting point for all custom
                          projects
                        </p>
                      </div>

                      <div className={styles.customPricingItem}>
                        <h4 className={styles.customPricingItemTitle}>Data Analysis</h4>
                        <p className={styles.customPricingItemDescription}>
                          Additional <span className={styles.highlight}>₨5,000-15,000</span> depending on complexity and
                          volume
                        </p>
                      </div>

                      <div className={styles.customPricingItem}>
                        <h4 className={styles.customPricingItemTitle}>Statistical Analysis</h4>
                        <p className={styles.customPricingItemDescription}>
                          Additional <span className={styles.highlight}>₨8,000-20,000</span> based on methods and
                          software required
                        </p>
                      </div>

                      <div className={styles.customPricingItem}>
                        <h4 className={styles.customPricingItemTitle}>Rush Delivery</h4>
                        <p className={styles.customPricingItemDescription}>
                          <span className={styles.highlight}>25-50% premium</span> for expedited delivery timelines
                        </p>
                      </div>
                    </div>

                    <div className={styles.customNote}>
                      <p>
                        Each project is unique, and I&apos;m committed to providing fair and transparent pricing. Contact me
                        with your specific requirements for a detailed quote.
                      </p>
                    </div>

                    <div className={styles.customCta}>
                      <Button isGradient>
                        <Link href="/#contact" className={styles.customCtaLink}>
                          Request a Quote
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </section>

        <section className={styles.faqSection}>
          <div className="container">
            <SectionHeading
              badge="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about my services, pricing, and process."
              align="center"
            />

            <div className={styles.faqContainer}>
              {faqItems.map((item, index) => (
                <div key={index} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>

            <div className={styles.faqCta}>
              <p className={styles.faqCtaText}>Have more questions? Feel free to reach out directly.</p>
              <Button variant="outline">
                <Link href="/#contact" className={styles.faqCtaLink}>
                  Contact Me
                </Link>
              </Button>
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
                    <Link href="/pricing" className={styles.footerLink}>
                      Pricing
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

