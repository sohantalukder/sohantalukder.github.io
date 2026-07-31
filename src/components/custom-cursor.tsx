"use client"

import { useAnimeScope } from "@/components/motion"
import { createAnimatable, type Scope } from "animejs"
import { useCallback } from "react"

const INTERACTIVE_SELECTOR = "a, button, [role='button'], [data-cursor='interactive']"
const TEXT_SELECTOR = "input, textarea, select, [contenteditable='true']"

export function CustomCursor() {
  const setupCursor = useCallback((scope: Scope, root: HTMLDivElement) => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")
    if (scope.matches.reduceMotion || !finePointer.matches) return

    const dot = root.querySelector<HTMLElement>(".cursor-dot")
    const ring = root.querySelector<HTMLElement>(".cursor-ring")
    if (!dot || !ring) return

    document.body.classList.add("custom-cursor-enabled")

    const dotMotion = createAnimatable(dot, {
      x: { duration: 80, ease: "out(3)" },
      y: { duration: 80, ease: "out(3)" },
      scale: { duration: 160, ease: "out(3)" },
    })
    const ringMotion = createAnimatable(ring, {
      x: { duration: 260, ease: "out(4)" },
      y: { duration: 260, ease: "out(4)" },
      scale: { duration: 180, ease: "out(3)" },
    })

    let interactive = false

    const setActive = (active: boolean) => {
      if (active === interactive && root.dataset.active !== undefined) return
      interactive = active
      root.dataset.active = String(active)
      ringMotion.scale(active ? 1.55 : 1)
      dotMotion.scale(active ? 0.65 : 1)
    }

    const handlePointerMove = (event: PointerEvent) => {
      const target = event.target as Element | null
      const overText = Boolean(target?.closest(TEXT_SELECTOR))
      root.dataset.hidden = String(overText)
      root.dataset.visible = "true"

      dotMotion.x(event.clientX - 3).y(event.clientY - 3)
      ringMotion.x(event.clientX - 18).y(event.clientY - 18)
      setActive(Boolean(target?.closest(INTERACTIVE_SELECTOR)) && !overText)
    }

    const handlePointerDown = () => {
      ringMotion.scale(0.82)
      dotMotion.scale(0.6)
    }

    const handlePointerUp = () => {
      ringMotion.scale(interactive ? 1.55 : 1)
      dotMotion.scale(interactive ? 0.65 : 1)
    }

    const handlePointerLeave = () => {
      root.dataset.visible = "false"
    }

    window.addEventListener("pointermove", handlePointerMove)
    window.addEventListener("pointerdown", handlePointerDown)
    window.addEventListener("pointerup", handlePointerUp)
    window.addEventListener("pointercancel", handlePointerLeave)
    window.addEventListener("blur", handlePointerLeave)
    document.documentElement.addEventListener("mouseleave", handlePointerLeave)

    return () => {
      document.body.classList.remove("custom-cursor-enabled")
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerdown", handlePointerDown)
      window.removeEventListener("pointerup", handlePointerUp)
      window.removeEventListener("pointercancel", handlePointerLeave)
      window.removeEventListener("blur", handlePointerLeave)
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave)
    }
  }, [])

  const cursorRef = useAnimeScope<HTMLDivElement>(setupCursor)

  return (
    <div ref={cursorRef} className="custom-cursor" data-visible="false" data-hidden="false" aria-hidden>
      <span className="cursor-ring" />
      <span className="cursor-dot" />
    </div>
  )
}
