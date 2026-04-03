"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react"

const MAX_TILT = 6

type TiltCardProps = {
  children: ReactNode
  className?: string
}

export function TiltCard({ children, className }: TiltCardProps) {
  const reduce = useReducedMotion()
  const [coarsePointer, setCoarsePointer] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)")
    const sync = () => setCoarsePointer(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 320, damping: 32 })
  const springY = useSpring(rotateY, { stiffness: 320, damping: 32 })

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!ref.current || reduce || coarsePointer) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const px = (x / rect.width - 0.5) * 2
      const py = (y / rect.height - 0.5) * 2
      rotateY.set(px * MAX_TILT)
      rotateX.set(-py * MAX_TILT)
    },
    [rotateX, rotateY, reduce, coarsePointer]
  )

  const handlePointerLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  if (reduce || coarsePointer) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className="h-full [perspective:1000px]">
      <motion.div
        ref={ref}
        className={className}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: "preserve-3d",
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {children}
      </motion.div>
    </div>
  )
}
