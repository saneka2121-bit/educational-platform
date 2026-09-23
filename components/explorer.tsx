"use client"

import { useMemo, useRef, useState } from "react"
import { SearchX } from "lucide-react"

import {
  opportunities,
  type CategoryKey,
} from "@/lib/opportunities"
import { SiteHeader } from "@/components/site-header"
import { Hero, type QuickFilter } from "@/components/hero"
import { FilterBar, defaultFilters, type Filters } from "@/components/filter-bar"
import { OpportunityCard } from "@/components/opportunity-card"
import { UpcomingDeadlines } from "@/components/upcoming-deadlines"
import { SiteFooter } from "@/components/site-footer"

export function Explorer() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState<CategoryKey | null>(null)
  const [filters, setFilters] = useState<Filters>(defaultFilters)

  const gridRef = useRef<HTMLDivElement>(null)

  const scrollToGrid = () => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const setFilter = <K extends keyof Filters>(key: K, value: Filters[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleQuickFilter = (key: QuickFilter) => {
    if (key === "free") setFilter("cost", "free")
    if (key === "online") setFilter("format", "online")
    if (key === "senior") setFilter("grade", 11)
    if (key === "kz") setFilter("country", "kz")
    scrollToGrid()
  }

  const resetAll = () => {
    setFilters(defaultFilters)
    setActiveCategory(null)
    setSearch("")
  }

  const results = useMemo(() => {
    const q = search.trim().toLowerCase()
    return opportunities.filter((o) => {
      if (activeCategory && o.category !== activeCategory) return false
      if (filters.grade !== "all" && !o.grades.includes(filters.grade))
        return false
      if (filters.country !== "all" && o.country !== filters.country)
        return false
      if (filters.cost !== "all" && o.cost !== filters.cost) return false
      if (filters.format !== "all" && o.format !== filters.format) return false
      if (q) {
        const haystack =
          `${o.title} ${o.organization} ${o.description}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [search, activeCategory, filters])

  return (
    <div className="min-h-screen">
      <SiteHeader
        search={search}
        onSearch={setSearch}
        activeCategory={activeCategory}
        onCategory={setActiveCategory}
      />

      <main>
        <Hero onExplore={scrollToGrid} onQuickFilter={handleQuickFilter} />

        <div className="mx-auto max-w-6xl px-4 pb-16">
          <UpcomingDeadlines />

          <div ref={gridRef} className="mt-12 scroll-mt-24">
            <div className="mb-4">
              <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
                Барлық мүмкіндіктер
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Өзіңе қолайлысын сүзгілер арқылы тап
              </p>
            </div>

            <FilterBar
              filters={filters}
              onChange={setFilter}
              onReset={() => {
                setFilters(defaultFilters)
                setActiveCategory(null)
              }}
              resultCount={results.length}
            />

            {results.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {results.map((item) => (
                  <OpportunityCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="mt-6 flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card/50 px-6 py-16 text-center">
                <div className="flex size-12 items-center justify-center rounded-full bg-secondary">
                  <SearchX className="size-6 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  Ештеңе табылмады
                </h3>
                <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                  Сүзгілерді өзгертіп немесе тазалап көріңіз.
                </p>
                <button
                  type="button"
                  onClick={resetAll}
                  className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Сүзгілерді тазалау
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
