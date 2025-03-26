"use client"

import { useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/button"
import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/section-heading"
import styles from "./page.module.css"

export default function PrivacyPage() {
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
        <section className={styles.privacyHero}>
          <div className="container">
            <SectionHeading
              title="Privacy Policy"
              description="How I collect, use, and protect your personal information."
              align="center"
            />
          </div>
        </section>

        <section className={styles.privacySection}>
          <div className="container">
            <div className={styles.privacyContent}>
              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>1. Introduction</h2>
                <p>
                  Welcome to Ayesha Amin&apos;s academic writing and research services. I respect your privacy and am
                  committed to protecting your personal data. This Privacy Policy explains how I collect, use, and
                  safeguard your information when you use my services.
                </p>
                <p>
                  Please read this Privacy Policy carefully. By using my services, you acknowledge that you have read
                  and understood this Privacy Policy.
                </p>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>2. Information I Collect</h2>
                <p>I may collect the following types of information:</p>
                <h3 className={styles.privacySubheading}>2.1 Personal Information</h3>
                <ul className={styles.privacyList}>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Academic institution (if applicable)</li>
                  <li>Payment information</li>
                </ul>

                <h3 className={styles.privacySubheading}>2.2 Project Information</h3>
                <ul className={styles.privacyList}>
                  <li>Project requirements and specifications</li>
                  <li>Academic field or subject area</li>
                  <li>Reference materials provided by you</li>
                  <li>Communication regarding your project</li>
                </ul>

                <h3 className={styles.privacySubheading}>2.3 Technical Information</h3>
                <ul className={styles.privacyList}>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referral source</li>
                  <li>Length of visit, page views, and website navigation paths</li>
                </ul>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>3. How I Collect Your Information</h2>
                <p>I collect information through:</p>
                <ul className={styles.privacyList}>
                  <li>Direct interactions: When you contact me via email, phone, or the contact form on my website</li>
                  <li>Project submissions: When you provide details about your project requirements</li>
                  <li>Automated technologies: Through cookies and similar tracking technologies on my website</li>
                </ul>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>4. How I Use Your Information</h2>
                <p>I use your information for the following purposes:</p>
                <ul className={styles.privacyList}>
                  <li>To provide and deliver the services you request</li>
                  <li>To communicate with you about your project</li>
                  <li>To process payments</li>
                  <li>To improve my services and website</li>
                  <li>To comply with legal obligations</li>
                  <li>To send you relevant information about my services (with your consent)</li>
                </ul>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>5. Legal Basis for Processing</h2>
                <p>I process your personal information based on the following legal grounds:</p>
                <ul className={styles.privacyList}>
                  <li>Performance of a contract: To fulfill my obligations to you under our service agreement</li>
                  <li>Legitimate interests: To operate and improve my services and business</li>
                  <li>Consent: Where you have explicitly agreed to the processing of your data</li>
                  <li>Legal obligation: To comply with applicable laws and regulations</li>
                </ul>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>6. Data Sharing and Disclosure</h2>
                <p>
                  I do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except in the following circumstances:
                </p>
                <ul className={styles.privacyList}>
                  <li>
                    Service providers: I may share your information with trusted third parties who assist me in
                    operating my website, conducting business, or servicing you (e.g., payment processors)
                  </li>
                  <li>
                    Legal requirements: I may disclose your information when required by law, such as in response to a
                    court order or legal process
                  </li>
                  <li>
                    Business transfers: If I am involved in a merger, acquisition, or sale of assets, your information
                    may be transferred as part of that transaction
                  </li>
                </ul>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>7. Data Security</h2>
                <p>
                  I implement appropriate security measures to protect your personal information from unauthorized
                  access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className={styles.privacyList}>
                  <li>Secure communications using encryption</li>
                  <li>Password protection for electronic files</li>
                  <li>Limited access to personal information</li>
                  <li>Regular security assessments</li>
                </ul>
                <p>
                  However, no method of transmission over the Internet or electronic storage is 100% secure. While I
                  strive to use commercially acceptable means to protect your personal information, I cannot guarantee
                  its absolute security.
                </p>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>8. Data Retention</h2>
                <p>
                  I retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law. The criteria used to
                  determine my retention periods include:
                </p>
                <ul className={styles.privacyList}>
                  <li>The length of time I have an ongoing relationship with you</li>
                  <li>Legal obligations to retain data for certain periods</li>
                  <li>
                    Whether retention is advisable in light of my legal position (such as for statutes of limitations,
                    litigation, or regulatory investigations)
                  </li>
                </ul>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>9. Your Rights</h2>
                <p>
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className={styles.privacyList}>
                  <li>Access: The right to request copies of your personal information</li>
                  <li>Rectification: The right to request correction of information you believe is inaccurate</li>
                  <li>Erasure: The right to request deletion of your personal information in certain circumstances</li>
                  <li>Restriction: The right to request restriction of processing of your personal information</li>
                  <li>Data portability: The right to request transfer of your information to another organization</li>
                  <li>Objection: The right to object to processing of your personal information</li>
                </ul>
                <p>To exercise any of these rights, please contact me using the information provided in Section 12.</p>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>10. Cookies and Tracking Technologies</h2>
                <p>
                  My website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies
                  are small text files that are stored on your device when you visit a website.
                </p>
                <p>I use the following types of cookies:</p>
                <ul className={styles.privacyList}>
                  <li>Essential cookies: Necessary for the website to function properly</li>
                  <li>Analytical/performance cookies: To analyze how visitors use my website</li>
                  <li>Functionality cookies: To recognize you when you return to my website</li>
                </ul>
                <p>
                  You can control cookies through your browser settings. However, disabling certain cookies may limit
                  your ability to use some features of my website.
                </p>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>11. Children&apos;s Privacy</h2>
                <p>
                  My services are not intended for individuals under the age of 18. I do not knowingly collect personal
                  information from children. If you are a parent or guardian and believe that your child has provided me
                  with personal information, please contact me, and I will take steps to delete such information.
                </p>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>12. Contact Information</h2>
                <p>
                  If you have any questions or concerns about this Privacy Policy or my data practices, please contact
                  me at:
                </p>
                <p>Email: your-email@example.com</p>
                <p>Phone: +92 XXX XXX XXXX</p>
              </div>

              <div className={styles.privacyBlock}>
                <h2 className={styles.privacyHeading}>13. Changes to This Privacy Policy</h2>
                <p>
                  I may update this Privacy Policy from time to time to reflect changes in my practices or for other
                  operational, legal, or regulatory reasons. The updated version will be indicated by an updated &quot;Last
                  updated&quot; date, and the updated version will be effective as soon as it is accessible.
                </p>
                <p>
                  I encourage you to review this Privacy Policy regularly to stay informed about how I am protecting
                  your information.
                </p>
              </div>

              <div className={styles.privacyUpdated}>
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

