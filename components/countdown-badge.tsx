"use client"

import { useEffect, useState } from "react"
import { Clock } from "lucide-react"

import { daysUntil } from "@/lib/opportunities"
import { cn } from "@/lib/utils"

export function CountdownBadge({
  deadline,
  className,
}: {
  deadline: string
  className?: string
}) {
  // Seed synchronously, then recompute on mount so SSR (UTC) and client
  // (local tz) day boundaries reconcile without leaving a placeholder.
  const [days, setDays] = useState<number | null>(() => daysUntil(deadline))

  useEffect(() => {
    setDays(daysUntil(deadline))
  }, [deadline])

  let label = "…"
  let tone = "text-muted-foreground"

  if (days !== null) {
    if (days < 0) {
      label = "Аяқталды"
      tone = "text-muted-foreground"
    } else if (days === 0) {
      label = "Бүгін бітеді"
      tone = "text-destructive"
    } else if (days <= 7) {
      label = `${days} күн қалды`
      tone = "text-destructive"
    } else if (days <= 30) {
      label = `${days} күн қалды`
      tone = "text-accent-foreground"
    } else {
      label = `${days} күн қалды`
      tone = "text-muted-foreground"
    }
  }

  return (
    <span
      suppressHydrationWarning
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-medium tabular-nums",
        tone,
        className,
      )}
    >
      <Clock className="size-3.5" aria-hidden="true" />
      {label}
    </span>
  )
}
