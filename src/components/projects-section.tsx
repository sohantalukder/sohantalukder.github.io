import { ArrowUpRight, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    id: 4,
    name: "Creolytix",
    icon: "🧠",
    summary:
      "An AI-powered resilience platform that turns multi-source risk signals into contextual alerts, interactive maps, and coordinated incident response for assets, travellers, and operations.",
    highlights: [
      "Built the React Native mobile experience for real-time operational-risk monitoring and AI-assisted incident intelligence.",
      "Delivered alerts, map-based risk context, incident views, and mobile collaboration flows that help teams understand and respond to critical events faster.",
    ],
    demo: "https://creolytix.io/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.creolytix&hl=en&pli=1",
    demoIOS: "https://apps.apple.com/gb/app/creolytix/id6768271609",
    technology: ["React Native", "REST API", "Real-time Data", "AI Integration"],
  },
  {
    id: 5,
    name: "Prime Now",
    icon: "💳",
    summary:
      "A mobile-first banking app from Prime Bank PLC for digital onboarding, everyday money management, payments, savings, and secure card experiences—including Bangladesh's first numberless card.",
    highlights: [
      "Developed secure Flutter journeys across onboarding, account management, payments, transfers, cards, and real-time account activity.",
      "Shipped customer-facing features to a production banking app with 10K+ Google Play downloads, making everyday banking more accessible on mobile.",
    ],
    demo: "https://primenow.ai/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.primenow.app",
    demoIOS: "https://apps.apple.com/gb/app/prime-now-app/id6759029598",
    technology: ["Flutter", "Fintech", "Secure Payments"],
  },
  {
    id: 6,
    name: "SalesPype",
    icon: "📊",
    summary:
      "An all-in-one CRM that brings lead management, marketing automation, sales pipelines, appointments, calling, and customer conversations into one workspace.",
    highlights: [
      "Developed and maintained the cross-platform React Native application for sales teams on iOS and Android.",
      "Built contact, messaging, calling, campaign, and pipeline workflows so teams could follow up with leads and manage conversations away from the desktop.",
    ],
    demo: "https://salespype.com/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.salespypeprov2",
    demoIOS: "https://apps.apple.com/us/app/salespype/id1538315340",
    technology: ["React Native", "CRM System", "Automation", "API Integration"],
  },
  {
    id: 7,
    name: "FTPO (Find The Perfect Outfits)",
    icon: "👕",
    summary:
      "A fashion discovery platform for curated looks from established and emerging designers, with an emphasis on sustainable, diverse, and inclusive brands.",
    highlights: [
      "Developed React Native discovery flows for curated outfits, designer collections, and sustainability-focused fashion content.",
      "Created a streamlined mobile browsing experience that makes discovering styles, small businesses, and retailers faster on the go.",
    ],
    demo: "https://findtheperfectoutfits.com/",
    technology: ["React Native", "E-commerce", "Recommendation System"],
  },
  {
    id: 8,
    name: "Learnyx",
    icon: "🎮",
    summary:
      "An education platform that makes reading feel like play through character-driven stories, sports challenges, team building, friendly competition, and rewards.",
    highlights: [
      "Developed the React Native mobile experience for game-based reading and math practice for learners ages 8–14.",
      "Implemented interactive challenges, team building, rewards, and progress tracking to make standards-aligned practice more engaging for students, parents, and teachers.",
    ],
    demo: "https://www.learnyx.com/",
    demoAPP: "https://play.google.com/store/apps/details?id=com.learnyx.litzone",
    demoIOS: "https://apps.apple.com/us/app/learnix-ai/id6751657270",
    technology: ["React Native", "EdTech", "Gamification"],
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
          <div>
            <p className="section-kicker">Selected work</p>
            <h2 id="projects-title" className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Products built for real-world use.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-muted-foreground lg:justify-self-end lg:text-lg">
            Mobile products spanning fintech, operations, CRM, education, and commerce—shaped around the people using them.
          </p>
        </div>

        <div>
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group grid gap-7 border-b border-border py-9 md:grid-cols-[6rem_0.7fr_1.3fr] md:py-12"
            >
              <div className="flex items-center justify-between md:block">
                <span className="font-mono text-sm text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
                <span className="text-2xl md:mt-6 md:block" aria-hidden>{project.icon}</span>
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3>
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2" aria-label={`${project.name} technologies`}>
                  {project.technology.map((tech) => (
                    <li key={tech} className="font-mono text-[11px] uppercase tracking-[0.08em] text-foreground/65">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="max-w-3xl text-base leading-7 text-foreground/85 sm:text-lg">
                  {project.summary}
                </p>
                <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-orange-500">
                  My contribution
                </p>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="border-l border-orange-500/45 pl-4">{highlight}</li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {project.demo && <ProjectLink href={project.demo}>Website</ProjectLink>}
                  {project.demoAPP && <ProjectLink href={project.demoAPP}>Android</ProjectLink>}
                  {"demoIOS" in project && project.demoIOS && <ProjectLink href={project.demoIOS}>iOS</ProjectLink>}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="https://github.com/sohantalukder"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-link"
          >
            <Github className="h-4 w-4" aria-hidden />
            More on GitHub
            <ArrowUpRight className="editorial-arrow h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ProjectLink({ href, children }: { href: string; children: string }) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className="editorial-link text-sm">
      {children}
      <ArrowUpRight className="editorial-arrow h-4 w-4" aria-hidden />
    </Link>
  )
}
