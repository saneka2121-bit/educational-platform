"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

import {
  formatDeadline,
  opportunities,
  type Opportunity,
} from "@/lib/opportunities"
import { CategoryPill } from "@/components/category-pill"
import { CountdownBadge } from "@/components/countdown-badge"

const soonest: Opportunity[] = [...opportunities]
  .sort((a, b) => a.deadline.localeCompare(b.deadline))
  .slice(0, 8)

export function UpcomingDeadlines() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: -1 | 1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" })
  }

  return (
    <section aria-labelledby="deadlines-heading" className="mt-4">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2
            id="deadlines-heading"
            className="font-display text-xl font-bold text-foreground sm:text-2xl"
          >
            Жақын арада жабылады
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Дедлайны жақындап қалған мүмкіндіктерді өткізіп алмаңыз
          </p>
        </div>
        <div className="hidden shrink-0 gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Артқа айналдыру"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Алға айналдыру"
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-secondary"
          >
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {soonest.map((item) => (
          <article
            key={item.id}
            className="flex w-64 shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-4 shadow-sm"
          >
            <div className="flex items-center justify-between gap-2">
              <CategoryPill category={item.category} />
              <CountdownBadge deadline={item.deadline} />
            </div>
            <h3 className="mt-3 line-clamp-2 font-display text-sm leading-snug font-bold text-card-foreground">
              {item.title}
            </h3>
            <p className="mt-auto pt-3 text-xs text-muted-foreground">
              Дедлайн: {formatDeadline(item.deadline)}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
