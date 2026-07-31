"use client"

import React, { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AlertCircle, CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import emailjs from "@emailjs/browser"
import { AnimatePresence, motion } from "framer-motion"
import { easeSmooth } from "@/components/motion"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const initialState: FormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>(initialState)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  React.useEffect(() => {
    if (process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
    }
  }, [])

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required"
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = "Subject must be at least 5 characters"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("idle")
    setStatusMessage("")

    if (!validateForm()) {
      setStatus("error")
      setStatusMessage("Please fix the errors below")
      return
    }

    setLoading(true)

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check your environment variables.")
      }

      const emailData = {
        from_name: formData.name.trim(),
        from_email: formData.email.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        to_name: "Sohan Talukder",
        reply_to: formData.email.trim(),
      }

      const response = await emailjs.send(serviceId, templateId, emailData, publicKey)

      if (response.status === 200) {
        setFormData(initialState)
        setErrors({})
        setStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully. I'll get back to you soon.")
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Email send error:", error)
      setStatus("error")

      if (error instanceof Error) {
        if (error.message.includes("Invalid grant") || error.message.includes("Gmail_API")) {
          setStatusMessage("Email service temporarily unavailable. Please try contacting me directly at mdtalukder.sohan@gmail.com")
        } else if (error.message.includes("configuration")) {
          setStatusMessage("Something went wrong while sending your message. Please contact me directly at mdtalukder.sohan@gmail.com")
        } else {
          setStatusMessage("Failed to send message. Please try again or contact me directly at mdtalukder.sohan@gmail.com")
        }
      } else {
        setStatusMessage("An unexpected error occurred. Please try contacting me directly at mdtalukder.sohan@gmail.com")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))

    if (errors[name as keyof FormErrors]) {
      setErrors((previous) => ({ ...previous, [name]: undefined }))
    }

    if (status !== "idle") {
      setStatus("idle")
      setStatusMessage("")
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <p className="section-kicker">Start a conversation</p>
            <h2 id="contact-title" className="mt-4 max-w-xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl">
              Have a useful product in mind?
            </h2>
            <p className="mt-6 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              I&apos;m open to thoughtful mobile products, design-system work, and engineering conversations. Tell me what you&apos;re building.
            </p>

            <address className="mt-10 flex flex-col items-start gap-4 not-italic text-sm">
              <a href="mailto:mdtalukder.sohan@gmail.com" className="editorial-link"><Mail className="h-4 w-4" aria-hidden />mdtalukder.sohan@gmail.com</a>
              <a href="tel:+8801865748726" className="editorial-link"><Phone className="h-4 w-4" aria-hidden />+880 1865-748726</a>
              <p className="flex items-center gap-2 text-muted-foreground"><MapPin className="h-4 w-4 text-orange-500" aria-hidden />Mirpur, Dhaka</p>
            </address>

            <div className="mt-8 flex gap-5 text-sm">
              <a href="https://github.com/sohantalukder" target="_blank" rel="noopener noreferrer" className="editorial-link"><Github className="h-4 w-4" aria-hidden />GitHub</a>
              <a href="https://linkedin.com/in/sohantalukder" target="_blank" rel="noopener noreferrer" className="editorial-link"><Linkedin className="h-4 w-4" aria-hidden />LinkedIn</a>
            </div>
          </div>

          <div className="border-t border-border pt-8 lg:pt-10">
            <div className="mb-8 flex items-baseline justify-between gap-4">
              <h3 className="text-xl font-semibold">Send a message</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Usually replies within 1–2 days</span>
            </div>

            <AnimatePresence mode="wait">
              {status !== "idle" && (
                <motion.div
                  key={status}
                  role={status === "error" ? "alert" : "status"}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: easeSmooth }}
                  className={`mb-7 flex items-start gap-2 border px-4 py-3 text-sm ${
                    status === "success"
                      ? "border-green-600/30 bg-green-600/5 text-green-700 dark:text-green-300"
                      : "border-destructive/30 bg-destructive/5 text-destructive"
                  }`}
                >
                  {status === "success" ? <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden /> : <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />}
                  <p>{statusMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-7" noValidate>
              <div className="grid gap-7 sm:grid-cols-2">
                <Field label="Name" error={errors.name} id="contact-name">
                  <Input id="contact-name" name="name" autoComplete="name" value={formData.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} className="contact-input" />
                </Field>
                <Field label="Email" error={errors.email} id="contact-email">
                  <Input id="contact-email" name="email" type="email" autoComplete="email" value={formData.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} className="contact-input" />
                </Field>
              </div>

              <Field label="Subject" error={errors.subject} id="contact-subject">
                <Input id="contact-subject" name="subject" value={formData.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} className="contact-input" />
              </Field>

              <Field label="Message" error={errors.message} id="contact-message">
                <Textarea id="contact-message" name="message" rows={6} value={formData.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} className="contact-input resize-none" />
              </Field>

              <Button type="submit" size="lg" disabled={loading} className="min-w-36">
                {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-label="Sending" /> : <><Send className="h-4 w-4" aria-hidden />Send message</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, error, id, children }: { label: string; error?: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">{label} *</label>
      {children}
      {error ? <p id={`${id}-error`} className="mt-2 text-xs text-destructive">{error}</p> : null}
    </div>
  )
}
