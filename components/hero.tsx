"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Lock, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"

export type QuickFilter = "free" | "online" | "senior" | "kz"

const chips: { key: QuickFilter; label: string }[] = [
  { key: "free", label: "Тегін" },
  { key: "online", label: "Онлайн" },
  { key: "senior", label: "11–12 сынып" },
  { key: "kz", label: "Қазақстан" },
]

export function Hero({
  onExplore,
  onQuickFilter,
}: {
  onExplore: () => void
  onQuickFilter: (key: QuickFilter) => void
}) {
  const imageWrapRef = useRef<HTMLDivElement>(null)
  const [parallax, setParallax] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const el = imageWrapRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const progress = rect.top / window.innerHeight
        setParallax(progress * -28)
      })
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklch,var(--primary)_16%,transparent),transparent)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-accent-foreground" aria-hidden="true" />
            Оқушыларға арналған мүмкіндіктер платформасы
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-[1.1] font-extrabold tracking-tight text-balance text-foreground sm:text-5xl lg:mx-0">
            Болашағыңды ашатын мүмкіндіктерді бір жерден тап
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted-foreground lg:mx-0">
            Гранттар, стипендиялар, олимпиадалар, байқаулар және жазғы мектептер —
            Қазақстан мектеп оқушыларына арналған тексерілген тізім.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button
              onClick={onExplore}
              className="h-12 rounded-xl px-6 text-base font-semibold"
            >
              Тіркелу
              <ArrowRight className="size-4" data-icon="inline-end" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
            <span className="text-xs text-muted-foreground">Жылдам сүзгілер:</span>
            {chips.map((chip) => (
              <button
                key={chip.key}
                type="button"
                onClick={() => onQuickFilter(chip.key)}
                className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        <div className="relative order-first flex items-center justify-center lg:order-last">
          <div
            ref={imageWrapRef}
            className="relative flex-1"
            style={{ transform: `translate3d(0, ${parallax}px, 0)` }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-6 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--primary)_18%,transparent),transparent)] blur-2xl"
            />
            <img
              src="/hero-students.png"
              alt="Кітаптар, глобус және магистр телпегі бейнеленген қазақстандық мектеп оқушыларының тобы"
              className="animate-float-breathe relative mx-auto w-full max-w-md lg:max-w-none"
            />
          </div>

          <PhoneMockup className="hidden shrink-0 xl:-ml-6 xl:block" />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="rounded-[2.5rem] bg-gradient-to-br from-primary to-[color-mix(in_oklch,var(--primary)_55%,white)] p-5 shadow-2xl shadow-primary/30">
        {/* Device */}
        <div className="relative w-[220px] rounded-[2rem] border border-black/10 bg-black p-1.5 shadow-xl">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-2.5 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-black" />
          <div className="overflow-hidden rounded-[1.6rem] bg-background">
            {/* Browser bar */}
            <div className="flex items-center justify-center gap-1.5 bg-muted px-3 pb-1.5 pt-6 text-[10px] text-muted-foreground">
              <Lock className="size-2.5" aria-hidden="true" />
              <span>infoptalap.edu.kz</span>
            </div>
            {/* Screen content */}
            <div className="px-3 py-3">
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-1.5 py-0.5 text-[7px] font-medium text-muted-foreground">
                <Sparkles className="size-2 text-accent-foreground" aria-hidden="true" />
                оқушыларға арналған мүмкіндіктер платформасы
              </span>
              <h2 className="mt-2 font-display text-[15px] font-extrabold leading-tight text-foreground">
                Болашағыңды ашатын мүмкіндіктерді бір жерден тап
              </h2>
              <p className="mt-1.5 text-[8px] leading-relaxed text-muted-foreground">
                Гранттар, стипендиялар, олимпиадалар, байқаулар және мектептер —
                Қазақстан мектеп оқушыларына арналған тізім.
              </p>
              <div className="mt-2 flex h-6 w-full items-center justify-center rounded-lg bg-primary text-[9px] font-semibold text-primary-foreground">
                Тіркелу
              </div>
              <img
                src="/hero-students.png"
                alt=""
                aria-hidden="true"
                className="mt-2 w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
