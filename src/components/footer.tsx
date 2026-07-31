"use client"

import { ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

function MediumIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden>
      <path fill="currentColor" d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  )
}

const footerLinks = [
  { href: "https://github.com/sohantalukder", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/sohantalukder", label: "LinkedIn", icon: Linkedin },
  { href: "https://sohantalukder.medium.com/", label: "Medium", icon: MediumIcon },
  { href: "mailto:mdtalukder.sohan@gmail.com", label: "Email", icon: Mail },
]

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <footer className="border-t border-border py-7">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col gap-1 text-xs text-muted-foreground sm:flex-row sm:items-center sm:gap-4">
          <p>© {new Date().getFullYear()} Md. Sohan Talukder Akash.</p>
          <Link href="mailto:mdtalukder.sohan@gmail.com" className="transition-colors duration-200 hover:text-orange-500 focus-visible:text-orange-500">mdtalukder.sohan@gmail.com</Link>
        </div>

        <div className="flex items-center justify-between gap-5 md:justify-end">
          <div className="flex items-center gap-4">
            {footerLinks.map(({ href, label, icon: Icon }) => (
              <Link key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="text-muted-foreground transition-colors duration-200 hover:text-orange-500 focus-visible:text-orange-500">
                <Icon className="h-4 w-4" aria-hidden />
              </Link>
            ))}
          </div>

          <button type="button" onClick={scrollToTop} className="editorial-link text-xs">
            Back to top
            <ArrowUp className="editorial-arrow h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  )
}
