import { ArrowRight, GraduationCap } from "lucide-react"

import {
  countries,
  formatDeadline,
  type Opportunity,
} from "@/lib/opportunities"
import { Button } from "@/components/ui/button"
import { CategoryPill } from "@/components/category-pill"
import { CountdownBadge } from "@/components/countdown-badge"

function gradeRange(grades: number[]): string {
  const min = Math.min(...grades)
  const max = Math.max(...grades)
  return min === max ? `${min}-сынып` : `${min}–${max} сынып`
}

export function OpportunityCard({ item }: { item: Opportunity }) {
  const country = countries[item.country]
  const isFree = item.cost === "free"

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
        <CategoryPill category={item.category} />
        <span
          className={
            "rounded-full px-2.5 py-1 text-xs font-semibold " +
            (isFree
              ? "bg-primary/10 text-primary"
              : "bg-accent/25 text-accent-foreground")
          }
        >
          {isFree ? "Тегін" : "Ақылы"}
        </span>
      </div>

      <h3 className="mt-3 font-display text-base leading-snug font-bold text-balance text-card-foreground">
        {item.title}
      </h3>
      <p className="mt-1 text-sm text-muted-foreground">{item.organization}</p>

      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <span aria-hidden="true">{country.flag}</span>
          {country.label}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <GraduationCap className="size-3.5" aria-hidden="true" />
          {gradeRange(item.grades)}
        </span>
        <span className="rounded-md bg-secondary px-1.5 py-0.5 font-medium text-secondary-foreground">
          {item.format === "online" ? "Онлайн" : "Офлайн"}
        </span>
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-border pt-4">
        <div className="flex flex-col">
          <CountdownBadge deadline={item.deadline} />
          <span className="mt-0.5 text-xs text-muted-foreground">
            Дедлайн: {formatDeadline(item.deadline)}
          </span>
        </div>
        <Button size="sm" className="shrink-0">
          Толығырақ
          <ArrowRight className="size-3.5" data-icon="inline-end" aria-hidden="true" />
        </Button>
      </div>
    </article>
  )
}
