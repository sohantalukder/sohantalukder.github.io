import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 1,
    name: "WalletPay",
    icon: "📱",
    description: "Secure mobile wallet app with multi-currency support, instant transfers, and integrated payment gateway. Built with React Native and connected to REST API.",
    demoAPP: "https://drive.google.com/file/d/1lantzLXk93n91SN24A3VkO-pZMZBFZKe/view",
    demo: "https://codecanyon.net/item/walletpay-paymoney-multi-wallet-mobile-app/45435953?s_rank=1",
    technology: ["React Native", "Redux Toolkit", "Rest API"]
  },
  {
    id: 2,
    name: "Tourist Guide",
    icon: "✈️",
    description: "Interactive platform connecting travelers with local guides. Features destination discovery, guide booking, and personalized travel recommendations.",
    demo: "http://touristsguide.me/",
    codeLink: [
      { frontEnd: "https://github.com/sohantalukder/touristGuideClient" },
      { backEnd: "https://github.com/sohantalukder/tourist_guide_backend" }
    ],
    technology: ["NodeJs", "ExpressJs", "MongoDB", "NextJs", "Tailwind CSS"]
  },
  {
    id: 3,
    name: "Lemion Shop",
    icon: "🛒",
    description: "Modern e-commerce platform with intuitive product browsing, secure checkout, and real-time inventory management.",
    demo: "https://lemionecommerce.vercel.app/",
    codeLink: ["https://github.com/sohantalukder/lemon_ecommerce"],
    technology: ["NodeJs", "ExpressJs", "MongoDB", "React", "Tailwind CSS"]
  }
]

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
                    <Link href={project.demoAPP} target="_blank">
                      <Button variant="default" size="sm" className="h-8 text-xs">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        App
                      </Button>
                    </Link>
                  )}
                  {project.codeLink && Array.isArray(project.codeLink) ? (
                    project.codeLink.map((link, index) => {
                      if (typeof link === 'string') {
                        return (
                          <Link key={index} href={link} target="_blank">
                            <Button variant="outline" size="sm" className="h-8 text-xs">
                              <Github className="mr-1 h-3 w-3" />
                              Code
                            </Button>
                          </Link>
                        )
                      }
                      return Object.entries(link).map(([key, value]) => (
                        <Link key={key} href={value as string} target="_blank">
                          <Button variant="outline" size="sm" className="h-8 text-xs cursor-pointer">
                            <Github className="mr-1 h-3 w-3" />
                            {key === 'frontEnd' ? 'Frontend' : 'Backend'}
                          </Button>
                        </Link>
                      ))
                    })
                  ) : null}
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