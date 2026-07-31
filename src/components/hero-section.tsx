"use client"

import { useAnimeScope } from "@/components/motion"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site-config"
import { ArrowDownRight, ArrowRight, Download, Github, Linkedin } from "lucide-react"
import { animate, stagger, type Scope } from "animejs"
import Image from "next/image"
import Link from "next/link"
import { useCallback } from "react"

export default function HeroSection() {
  const setupHero = useCallback((scope: Scope, root: HTMLElement) => {
    if (scope.matches.reduceMotion) return

    animate(root.querySelectorAll(".hero-reveal"), {
      opacity: { from: 0 },
      y: { from: 18 },
      delay: stagger(85),
      duration: 680,
      ease: "out(4)",
    })

    const portrait = root.querySelector(".editorial-portrait")
    if (portrait) {
      animate(portrait, {
        opacity: { from: 0 },
        clipPath: ["inset(0 0 100% 0)", "inset(0 0 0% 0)"],
        duration: 900,
        delay: 180,
        ease: "inOutCubic",
      })
    }
  }, [])

  const sectionRef = useAnimeScope<HTMLElement>(setupHero)

  return (
    <section ref={sectionRef} id="home" className="editorial-grid relative min-h-screen overflow-hidden pt-16">
      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.18fr_0.82fr] lg:px-8">
        <div className="order-2 lg:order-1">
          <div className="hero-reveal flex items-center gap-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-orange-500" />
            Software Engineer · Dhaka, Bangladesh
          </div>

          <h1 className="hero-reveal mt-7 max-w-5xl text-5xl font-bold leading-[0.92] tracking-[-0.065em] sm:text-6xl lg:text-[6.4rem]">
            <span className="mb-5 block font-mono text-sm font-medium uppercase tracking-[0.16em] text-muted-foreground sm:text-base">
              {siteConfig.primaryName}
            </span>
            <span className="block">
              I build mobile products with{" "}
              <span className="text-gradient">clarity and care.</span>
            </span>
          </h1>

          <p className="hero-reveal mt-7 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I&apos;m a software engineer specializing in React Native and Flutter,
            creating dependable apps, scalable UI systems, and modern product experiences.
          </p>

          <div className="hero-reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="group" asChild>
              <Link href="#projects">
                Selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sohan-talukder-cv.pdf" download="Sohan_Talukder_CV.pdf" target="_blank">
                <Download className="h-4 w-4" />
                Download CV
              </Link>
            </Button>
          </div>

          <div className="hero-reveal mt-9 flex items-center gap-5 text-sm text-muted-foreground">
            <Link href="https://github.com/sohantalukder" target="_blank" rel="noopener noreferrer" className="editorial-link">
              <Github className="h-4 w-4" /> GitHub
            </Link>
            <Link href="https://linkedin.com/in/sohantalukder" target="_blank" rel="noopener noreferrer" className="editorial-link">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </Link>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <figure className="editorial-portrait relative w-full max-w-[24rem]">
            <div className="editorial-portrait-frame relative aspect-[4/5] overflow-hidden border border-border bg-muted">
              <Image
                src={siteConfig.images.portrait}
                alt={`${siteConfig.primaryName}, Software Engineer and Mobile Developer`}
                fill
                priority
                sizes="(max-width: 1024px) 80vw, 384px"
                className="object-cover object-center"
              />
            </div>
            <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span>Portrait / 2026</span>
              <span>RN · Flutter · TypeScript</span>
            </figcaption>
          </figure>
        </div>
      </div>

      <a href="#about" aria-label="Scroll to about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground md:flex">
        Scroll <ArrowDownRight className="h-3.5 w-3.5" />
      </a>
    </section>
  )
}
