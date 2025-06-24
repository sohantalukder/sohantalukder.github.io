import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Md. Sohan Talukder Akash</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="https://github.com/sohantalukder" target="_blank">
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/sohantalukder" target="_blank">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://sohantalukder.medium.com/" target="_blank">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 