import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 4,
    name: "Creolytix",
    icon: "🧠",
    description: "AI-powered resilience and risk intelligence platform that helps organizations monitor global events, analyze risks, and make data-driven decisions in real-time. It unifies cybersecurity, supply chain, travel, and operational risks into a single ecosystem, enabling faster and smarter crisis response.",
    demo: "https://creolytix.io/",
    technology: ["React Native", "REST API", "Real-time Data", "AI Integration"],
    note: "Developed mobile application using React Native"
  },
  {
    id: 5,
    name: "Prime Now",
    icon: "💳",
    description: "Digital banking platform offering a seamless and modern financial experience. Features include instant account creation, secure transactions, real-time alerts, and a fully mobile-first banking system designed for convenience and speed.",
    demo: "https://primenow.ai/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.primenow.app",
    technology: ["Flutter", "Fintech", "Secure Payments"],
  },
  {
    id: 6,
    name: "SalesPype",
    icon: "📊",
    description: "All-in-one CRM and sales automation platform that helps businesses manage leads, automate marketing, track pipelines, and improve conversion rates. It integrates communication tools like email, SMS, and calls into a single unified system.",
    demo: "https://salespype.com/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.salespypeprov2",
    demoIOS: "https://apps.apple.com/us/app/salespype/id1538315340",
    technology: ["React Native", "CRM System", "Automation", "API Integration"],
  },
  {
    id: 7,
    name: "FTPO (Find The Perfect Outfits)",
    icon: "👕",
    description: "Fashion discovery platform that helps users find and explore the perfect outfits based on trends, preferences, and styles. Designed to enhance the shopping experience with personalized recommendations.",
    demo: "https://findtheperfectoutfits.com/",
    technology: ["React Native", "E-commerce", "Recommendation System"],
  },
  {
    id: 8,
    name: "Learnyx",
    icon: "🎮",
    description: "Gamified learning platform that combines education with interactive gameplay. It allows users to read, explore stories, and engage in learning experiences through games, making education more fun and engaging.",
    demo: "https://www.learnyx.com/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.learnyx.litzone",
    demoIOS: "https://apps.apple.com/us/app/learnix-ai/id6751657270",
    technology: ["React Native", "EdTech", "Gamification"],
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-12 bg-muted/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">Projects</h2>
          <p className="text-muted-foreground text-sm">Recent work and personal projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
          {projects.map((project) => (
            <Card key={project.id} className="group hover:shadow-md transition-shadow gap-1">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{project.icon}</span>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-1">
                  {project.technology.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-0">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.demo && (
                    <Link href={project.demo} target="_blank">
                      <Button variant="default" size="sm" className="h-8 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </Button>
                    </Link>
                  )}
                  {project.demoAPP && (
                    <Link href={project.demoAPP} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="h-8 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Android
                      </Button>
                    </Link>
                  )}
                  {"demoIOS" in project && project.demoIOS && (
                    <Link href={project.demoIOS} target="_blank" rel="noopener noreferrer">
                      <Button variant="default" size="sm" className="h-8 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        iOS
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="https://github.com/sohantalukder" target="_blank">
            <Button variant="outline" size="sm" className="h-9 cursor-pointer">
              <Github className="mr-2 h-4 w-4" />
              More on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
} 