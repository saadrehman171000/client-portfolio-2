"use client"

import { useState } from "react"
import { Button } from "@/components/button"
import styles from "./contact-form.module.css"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        setStatus("error")
        return
      }

      setFormData({ name: "", email: "", subject: "", message: "" })
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.formLabel}>
              Name
            </label>
            <input 
              id="name" 
              className={styles.formInput} 
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required 
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Email
            </label>
            <input 
              id="email" 
              type="email" 
              className={styles.formInput} 
              placeholder="Your email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required 
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject" className={styles.formLabel}>
            Subject
          </label>
          <input 
            id="subject" 
            className={styles.formInput} 
            placeholder="Subject"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            required 
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message" className={styles.formLabel}>
            Message
          </label>
          <textarea 
            id="message" 
            className={styles.formTextarea} 
            placeholder="Your message" 
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required 
          />
        </div>
        <Button 
          isGradient 
          className={styles.formButton}
          type="submit"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </Button>

        {status === "success" && (
          <p className={styles.successMessage}>Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className={styles.errorMessage}>Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  )
} 