import { CalendarDays, MapPin } from "lucide-react"

type Experience = {
  position: string
  location: string
  company: string
  duration: string
  description: string
  tech: string[]
}

const experiences: Experience[] = [
  {
    position: "Software Engineer",
    location: "Dhanmondi, Dhaka",
    company: "Selise Digital Platforms",
    duration: "Oct 2024 - Present",
    description:
      "Developing high-quality, cross-platform mobile applications using React Native with focus on user-centric designs and robust functionality.",
    tech: ["React Native", "Flutter", "Dart", "JavaScript", "TypeScript", "Mobile Development"],
  },
  {
    position: "Software Engineer",
    location: "Uttara, Dhaka",
    company: "Orangetoolz",
    duration: "Jul 2023 - Oct 2024",
    description:
      "Cross-platform mobile app development using React Native, providing quick solutions and troubleshooting support for complex technical issues.",
    tech: ["React Native", "JavaScript", "Mobile Apps", "Problem Solving"],
  },
  {
    position: "Jr. Software Engineer",
    location: "Nikunja, Dhaka",
    company: "TechVillage",
    duration: "Jul 2022 - Jul 2023",
    description:
      "Mobile app development with React Native, team collaboration for testing and debugging operations to improve efficiency.",
    tech: ["React Native", "JavaScript", "Team Collaboration", "Testing"],
  },
  {
    position: "Intern Web Developer",
    location: "Shyamoli, Dhaka",
    company: "Bangla Puzzle Limited",
    duration: "Mar 2022 - Jun 2022",
    description:
      "Learning web technologies, collaborating with development teams, and working with CSS frameworks like Tailwind CSS and Material UI.",
    tech: ["Web Development", "Tailwind CSS", "Material UI", "Chakra UI"],
  },
]

export default function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-kicker">Career timeline</p>
            <h2 id="experience-title" className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Building with teams, learning through products.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Four chapters across mobile engineering and web development, each sharpening how I turn complex requirements into clear experiences.
            </p>
          </div>

          <ol className="border-t border-border">
            {experiences.map((experience, index) => (
              <li
                key={`${experience.company}-${experience.duration}`}
                className="group grid gap-6 border-b border-border py-8 sm:grid-cols-[7rem_1fr] sm:py-10"
              >
                <div>
                  <span className="font-mono text-2xl font-medium text-muted-foreground/45 transition-colors duration-200 group-hover:text-orange-500 group-focus-within:text-orange-500">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground sm:block">
                    <CalendarDays className="inline h-3.5 w-3.5 sm:mr-1" aria-hidden />
                    {experience.duration}
                  </p>
                </div>

                <article>
                  <p className="font-mono text-xs uppercase tracking-[0.14em] text-orange-500">{experience.company}</p>
                  <h3 className="mt-2 text-2xl font-medium tracking-tight">{experience.position}</h3>
                  <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {experience.location}
                  </p>
                  <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{experience.description}</p>
                  <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2" aria-label={`Technologies used at ${experience.company}`}>
                    {experience.tech.map((technology) => (
                      <li key={technology} className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/70">
                        {technology}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
