"use client"

import { useAnimeScope } from "@/components/motion"
import { animate, onScroll, scrambleText, type Scope } from "animejs"
import { useCallback } from "react"

type ScrollStoryStep = {
  index: string
  phrase: string
  label: string
}

const storySteps: ScrollStoryStep[] = [
  {
    index: "01",
    phrase: "distilling complex journeys into effortless mobile moments.",
    label: "Distill",
  },
  {
    index: "02",
    phrase: "engineering quiet confidence into every financial interaction.",
    label: "Protect",
  },
  {
    index: "03",
    phrase: "turning repeated decisions into systems that scale.",
    label: "Systemize",
  },
  {
    index: "04",
    phrase: "releasing hard-won patterns as tools others can reuse.",
    label: "Share",
  },
]

export function ScrollStorySection() {
  const setupStory = useCallback((scope: Scope, root: HTMLElement) => {
    if (scope.matches.reduceMotion) return

    const phrase = root.querySelector<HTMLElement>(".story-phrase")
    const markers = Array.from(root.querySelectorAll<HTMLElement>(".story-marker"))
    if (!phrase) return

    let activeIndex = 0

    const activate = (nextIndex: number) => {
      if (nextIndex === activeIndex) return
      activeIndex = nextIndex

      markers.forEach((marker, index) => {
        marker.dataset.active = String(index === activeIndex)
      })

      animate(phrase, {
        textContent: scrambleText({
          text: storySteps[activeIndex].phrase,
          chars: "lowercase",
          cursor: "_",
          revealRate: 100,
          settleDuration: 140,
          settleRate: 60,
          perturbation: 0.06,
        }),
      })
    }

    onScroll({
      target: root,
      enter: "start start",
      leave: "end end",
      onUpdate: (observer) => {
        const nextIndex = Math.min(
          storySteps.length - 1,
          Math.floor(observer.progress * storySteps.length)
        )
        activate(nextIndex)
      },
    })
  }, [])

  const sectionRef = useAnimeScope<HTMLElement>(setupStory)

  return (
    <section ref={sectionRef} className="story-scroll-shell border-y border-border" aria-labelledby="story-title">
      <div className="story-stage">
        <div className="story-desktop mx-auto hidden min-h-screen max-w-7xl grid-cols-[0.38fr_1fr] items-center gap-16 px-6 md:grid lg:px-8">
          <div>
            <p className="section-kicker">How I build</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Four decisions shape how I move from a hard problem to a product people trust.
            </p>
            <ol className="mt-10 space-y-4" aria-hidden>
              {storySteps.map((step, index) => (
                <li
                  key={step.index}
                  className="story-marker"
                  data-active={String(index === 0)}
                >
                  <span>{step.index}</span>
                  <span>{step.label}</span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <p id="story-title" className="text-lg text-muted-foreground sm:text-xl">
              I build by
            </p>
            <p className="story-phrase mt-3 min-h-[2.2em] max-w-4xl text-5xl font-semibold leading-[0.96] tracking-[-0.055em] lg:text-7xl">
              {storySteps[0].phrase}
            </p>
          </div>
        </div>

        <div className="story-mobile mx-auto grid max-w-7xl gap-8 px-4 py-20 md:hidden">
          <div>
            <p className="section-kicker">How I build</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Four moves behind every product.</h2>
          </div>
          <ol className="divide-y divide-border border-y border-border">
            {storySteps.map((step) => (
              <li key={step.index} className="grid grid-cols-[2.5rem_1fr] gap-3 py-5">
                <span className="font-mono text-xs text-orange-500">{step.index}</span>
                <span className="text-lg font-medium">{step.phrase}</span>
              </li>
            ))}
          </ol>
        </div>

        <ol className="sr-only">
          {storySteps.map((step) => (
            <li key={step.index}>{step.phrase}</li>
          ))}
        </ol>
      </div>
    </section>
  )
}
