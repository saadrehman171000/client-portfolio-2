"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/button"
import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/section-heading"
import styles from "./page.module.css"

export default function TermsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              <Link href="/pricing" className={styles.navLink}>
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
        <section className={styles.termsHero}>
          <div className="container">
            <SectionHeading
              title="Terms of Service"
              description="Please read these terms carefully before using my services."
              align="center"
            />
          </div>
        </section>

        <section className={styles.termsSection}>
          <div className="container">
            <div className={styles.termsContent}>
              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>1. Introduction</h2>
                <p>
                  Welcome to Ayesha Amin&apos;s academic writing and research services. These Terms of Service (&quot;Terms&quot;)
                  govern your use of my services, including the content, functionality, and services offered on this
                  website.
                </p>
                <p>
                  By using my services, you accept and agree to be bound by these Terms. If you do not agree to these
                  Terms, please do not use my services.
                </p>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>2. Services Provided</h2>
                <p>
                  I provide academic writing, research, and editing services for educational and professional purposes.
                  My services include but are not limited to:
                </p>
                <ul className={styles.termsList}>
                  <li>Research paper writing</li>
                  <li>Thesis and dissertation assistance</li>
                  <li>Literature reviews</li>
                  <li>Case studies</li>
                  <li>Business reports</li>
                  <li>Editing and proofreading</li>
                </ul>
                <p>All services are provided for reference and research purposes only.</p>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>3. Use of Services</h2>
                <p>
                  The content provided through my services is intended to be used as a reference or research tool to
                  assist you in developing your own academic work. You agree to use the content in accordance with
                  academic integrity guidelines and applicable laws.
                </p>
                <p>You agree not to:</p>
                <ul className={styles.termsList}>
                  <li>Submit the provided content as your own work without proper citation or acknowledgment</li>
                  <li>Use the services for any illegal or unauthorized purpose</li>
                  <li>Share, distribute, or publish the provided content without permission</li>
                  <li>Use the services to engage in academic dishonesty or plagiarism</li>
                </ul>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>4. Payment and Pricing</h2>
                <p>Payment terms are as follows:</p>
                <ul className={styles.termsList}>
                  <li>Prices are quoted in Pakistani Rupees (PKR) unless otherwise specified</li>
                  <li>For projects under PKR 10,000, full payment is required before work begins</li>
                  <li>
                    For larger projects, a 50% deposit is required before work begins, with the remaining balance due
                    upon completion
                  </li>
                  <li>
                    Payment methods accepted include bank transfers, PayPal, and other secure online payment methods
                  </li>
                  <li>Prices are subject to change, but quotes provided are valid for 14 days</li>
                </ul>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>5. Delivery and Revisions</h2>
                <p>
                  I am committed to delivering high-quality work according to agreed-upon timelines. The following terms
                  apply to delivery and revisions:
                </p>
                <ul className={styles.termsList}>
                  <li>Delivery dates are established at the time of order and confirmed in writing</li>
                  <li>Revisions are included as specified in the selected package</li>
                  <li>Revision requests must be submitted within 14 days of delivery</li>
                  <li>Revision requests must be within the scope of the original project requirements</li>
                  <li>Additional revisions beyond those included in the package may incur additional fees</li>
                </ul>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>6. Intellectual Property</h2>
                <p>
                  Upon full payment, you are granted a non-exclusive license to use the delivered content for personal,
                  educational, or professional purposes. However:
                </p>
                <ul className={styles.termsList}>
                  <li>I retain the copyright to all content until full payment is received</li>
                  <li>After payment, I retain the right to use anonymized versions of the work in my portfolio</li>
                  <li>You may not claim authorship of the content provided</li>
                  <li>You may not resell, distribute, or publish the content without permission</li>
                </ul>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>7. Confidentiality</h2>
                <p>
                  I respect your privacy and confidentiality. All information shared during our collaboration will be
                  kept confidential. I will not share your personal information or project details with third parties
                  without your consent, except as required by law.
                </p>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>8. Cancellation and Refund Policy</h2>
                <p>The following cancellation and refund terms apply:</p>
                <ul className={styles.termsList}>
                  <li>Cancellations before work has begun: Full refund minus a 10% administrative fee</li>
                  <li>Cancellations after work has begun but before 50% completion: 50% refund</li>
                  <li>Cancellations after 50% completion: No refund</li>
                  <li>If I am unable to deliver the work as agreed, a full refund will be provided</li>
                </ul>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, I shall not be liable for any indirect, incidental, special,
                  consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or
                  indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
                </p>
                <ul className={styles.termsList}>
                  <li>Your use or inability to use my services</li>
                  <li>
                    Any unauthorized access to or use of my servers and/or any personal information stored therein
                  </li>
                  <li>Any interruption or cessation of transmission to or from my services</li>
                </ul>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>10. Changes to Terms</h2>
                <p>
                  I reserve the right to modify these Terms at any time. Changes will be effective immediately upon
                  posting on this website. Your continued use of my services after any changes indicates your acceptance
                  of the modified Terms.
                </p>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>11. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of Pakistan, without regard
                  to its conflict of law provisions.
                </p>
              </div>

              <div className={styles.termsBlock}>
                <h2 className={styles.termsHeading}>12. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact me at:</p>
                <p>Email: your-email@example.com</p>
                <p>Phone: +92 XXX XXX XXXX</p>
              </div>

              <div className={styles.termsUpdated}>
                <p>
                  Last updated:{" "}
                  {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
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
                    <Link href="/pricing" className={styles.footerLink}>
                      Pricing
                    </Link>
                    <Link href="/#contact" className={styles.footerLink}>
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

