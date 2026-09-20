"use client"

import { Check, Copy } from "lucide-react"
import { useEffect, useRef, useState } from "react"

async function copyText(value: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement("textarea")
  textarea.value = value
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()

  const didCopy = document.execCommand("copy")
  textarea.remove()

  if (!didCopy) {
    throw new Error("Unable to copy command")
  }
}

export function CopyCommandButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current)
    }
  }, [])

  const handleCopy = async () => {
    try {
      await copyText(command)
      setCopied(true)
      if (resetTimer.current) clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Install command copied" : "Copy install command"}
      className="inline-flex h-8 shrink-0 items-center gap-2 border-l border-border pl-3 text-xs font-medium text-muted-foreground transition-colors hover:text-orange-600 focus-visible:text-orange-600 focus-visible:outline-none dark:hover:text-orange-400 dark:focus-visible:text-orange-400"
    >
      {copied ? (
        <Check className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
      ) : (
        <Copy className="h-3.5 w-3.5" aria-hidden />
      )}
      <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
    </button>
  )
}
