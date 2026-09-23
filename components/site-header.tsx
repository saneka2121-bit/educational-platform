"use client"

import { GraduationCap, Search } from "lucide-react"

import { categories, type CategoryKey } from "@/lib/opportunities"
import { cn } from "@/lib/utils"

export function SiteHeader({
  search,
  onSearch,
  activeCategory,
  onCategory,
}: {
  search: string
  onSearch: (value: string) => void
  activeCategory: CategoryKey | null
  onCategory: (value: CategoryKey | null) => void
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center gap-3">
          <a href="#" className="group flex shrink-0 items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-sm shadow-primary/25 ring-1 ring-primary/20 transition-transform duration-300 group-hover:scale-105">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-foreground">
              Mumkindik
            </span>
          </a>

          <form
            className="ml-auto flex-1 sm:max-w-md"
            role="search"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="relative">
              <Search
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Мүмкіндіктерді іздеу…"
                aria-label="Мүмкіндіктерді іздеу"
                className="h-10 w-full rounded-xl border border-white/40 bg-white/30 pr-3 pl-9 text-sm text-foreground shadow-sm outline-none backdrop-blur-md transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:bg-white/50 focus-visible:ring-3 focus-visible:ring-ring/40 dark:border-white/10 dark:bg-white/5"
              />
            </div>
          </form>
        </div>

        <nav
          aria-label="Санаттар"
          className="flex items-center gap-2.5 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {categories.map((cat) => {
            const active = activeCategory === cat.key
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => onCategory(active ? null : cat.key)}
                aria-pressed={active}
                className={cn(
                  "nav-tab group relative inline-flex shrink-0 items-center gap-2 rounded-xl border px-3.5 py-2 text-sm font-medium transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:scale-[1.05] hover:shadow-md",
                  active
                    ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                    : "border-border/70 bg-card/60 text-foreground shadow-sm backdrop-blur-sm hover:border-primary/40 hover:bg-card",
                )}
              >
                <span
                  aria-hidden="true"
                  className="nav-dot size-2 rounded-full transition-transform"
                  style={{
                    backgroundColor: active ? "currentColor" : cat.color,
                  }}
                />
                {cat.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "pointer-events-none absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 rounded-full bg-current opacity-0 transition-all duration-300 group-hover:scale-x-100 group-hover:opacity-60",
                    active && "hidden",
                  )}
                />
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
