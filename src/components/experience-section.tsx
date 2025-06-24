import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

const experiences = [
  {
    position: "Software Engineer",
    location: "Dhanmondi, Dhaka",
    company: "Selise Digital Platforms",
    duration: "Oct 2024 - Present",
    description: "Developing high-quality, cross-platform mobile applications using React Native with focus on user-centric designs and robust functionality.",
    tech: ["React Native", "JavaScript", "TypeScript", "Mobile Development"]
  },
  {
    position: "Software Engineer",
    location: "Uttara, Dhaka",
    company: "Orangetoolz",
    duration: "Jul 2023 - Oct 2024",
    description: "Cross-platform mobile app development using React Native, providing quick solutions and troubleshooting support for complex technical issues.",
    tech: ["React Native", "JavaScript", "Mobile Apps", "Problem Solving"]
  },
  {
    position: "Jr. Software Engineer",
    location: "Nikunja, Dhaka", 
    company: "TechVillage",
    duration: "Jul 2022 - Jul 2023",
    description: "Mobile app development with React Native, team collaboration for testing and debugging operations to improve efficiency.",
    tech: ["React Native", "JavaScript", "Team Collaboration", "Testing"]
  },
  {
    position: "Intern Web Developer",
    location: "Shyamoli, Dhaka",
    company: "Bangla Puzzle Limited", 
    duration: "Mar 2022 - Jun 2022",
    description: "Learning web technologies, collaborating with development teams, and working with CSS frameworks like Tailwind CSS and Material UI.",
    tech: ["Web Development", "Tailwind CSS", "Material UI", "Chakra UI"]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <p className="text-muted-foreground text-sm">
            My professional journey in software development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:bg-accent/50 transition-colors">
              <CardContent className="px-4 py-2">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1.5">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
                      <CalendarDays className="h-3.5 w-3.5" />
                      <span>{exp.duration}</span>
                      <span>•</span>
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <Badge className="bg-muted hover:bg-muted text-muted-foreground border-0 text-xs">
                    {exp.company}
                  </Badge>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-3 line-clamp-2">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="text-[10px] px-2 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 