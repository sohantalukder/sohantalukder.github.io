import { Braces, Cloud } from "lucide-react"
import type { ComponentType, SVGProps } from "react"
import {
  SiDart,
  SiDocker,
  SiFlutter,
  SiGit,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSwift,
  SiTypescript,
} from "react-icons/si"

type TechIcon = ComponentType<SVGProps<SVGSVGElement>>

type Technology = {
  name: string
  icon: TechIcon
}

type TechnologyGroup = {
  title: string
  description: string
  technologies: Technology[]
}

const technologyGroups: TechnologyGroup[] = [
  {
    title: "Mobile",
    description: "Native-feeling experiences across iOS and Android.",
    technologies: [
      { name: "React Native", icon: SiReact },
      { name: "Flutter", icon: SiFlutter },
      { name: "Dart", icon: SiDart },
      { name: "Swift", icon: SiSwift },
    ],
  },
  {
    title: "Frontend",
    description: "Type-safe interfaces with reusable foundations.",
    technologies: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend / Data",
    description: "Practical services and reliable data flows.",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST APIs", icon: Braces },
    ],
  },
  {
    title: "Delivery",
    description: "Tools that carry work from commit to production.",
    technologies: [
      { name: "Git", icon: SiGit },
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: SiDocker },
      { name: "CI/CD", icon: SiGithubactions },
    ],
  },
]

export function TechStackSection() {
  return (
    <section aria-labelledby="tech-stack-title" className="border-y border-border py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="section-kicker">Working stack</p>
            <h2 id="tech-stack-title" className="mt-3 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
              Tools chosen for the product, not the trend.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end lg:text-lg">
            A focused toolkit for shipping mobile-first products, dependable interfaces, and the systems behind them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4">
          {technologyGroups.map((group, groupIndex) => (
            <article
              key={group.title}
              className="border-b border-border py-8 md:border-r md:px-7 md:[&:nth-child(2n)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2n)]:border-r xl:[&:last-child]:border-r-0"
            >
              <p className="font-mono text-xs text-orange-500">{String(groupIndex + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-medium">{group.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">{group.description}</p>
              <ul className="mt-7 space-y-1" aria-label={`${group.title} technologies`}>
                {group.technologies.map(({ name, icon: Icon }) => (
                  <li key={name} className="flex items-center gap-3 border-t border-border/70 py-3 text-sm">
                    <Icon className="h-4 w-4 text-orange-500" aria-hidden />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
