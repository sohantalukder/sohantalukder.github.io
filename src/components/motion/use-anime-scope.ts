"use client"

import { createScope, type Scope } from "animejs"
import { useEffect, useRef, type RefObject } from "react"

type AnimeScopeSetup<T extends HTMLElement> = (
  scope: Scope,
  root: T
) => void | (() => void)

export function useAnimeScope<T extends HTMLElement>(
  setup: AnimeScopeSetup<T>
): RefObject<T | null> {
  const rootRef = useRef<T>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return

    const scope = createScope({
      root,
      mediaQueries: {
        reduceMotion: "(prefers-reduced-motion: reduce)",
      },
    }).add((currentScope) => setup(currentScope!, root))

    return () => scope.revert()
  }, [setup])

  return rootRef
}
