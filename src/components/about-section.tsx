import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/motion"

const highlights = [
  { value: "4+", label: "Years shipping software" },
  { value: "iOS", label: "Native-feel experiences" },
  { value: "Android", label: "Production mobile apps" },
]

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-title" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mb-10">
          <p className="section-kicker">About me</p>
        </ScrollReveal>

        <StaggerContainer className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <StaggerItem>
            <h2 id="about-title" className="text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
              Engineering products from idea to{" "}
              <span className="text-gradient">everyday use.</span>
            </h2>
          </StaggerItem>

          <StaggerItem>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I&apos;m a JavaScript and TypeScript developer based in Bangladesh
                with 4+ years of experience building mobile and web applications.
                I focus on React Native and Flutter for iOS and Android, plus React
                and Next.js for the web.
              </p>
              <p>
                I care about clean architecture, maintainable code, reliable
                releases, and interfaces that feel considered. I&apos;m always
                learning, contributing to open source, and looking for better ways
                to turn complex requirements into simple product experiences.
              </p>
            </div>
          </StaggerItem>
        </StaggerContainer>

        <StaggerContainer className="mt-12 grid gap-px border-y border-border bg-border sm:grid-cols-3">
          {highlights.map((highlight) => (
            <StaggerItem key={highlight.label}>
              <div className="h-full bg-background p-6 sm:p-7">
                <p className="font-mono text-2xl font-semibold text-orange-500">
                  {highlight.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{highlight.label}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
