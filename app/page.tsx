"use client"

import { useState, useMemo } from "react"
import {
  opportunities,
  CategoryKey,
  CountryKey,
  CostType,
  FormatType,
} from "@/lib/opportunities"
import { Hero } from "@/components/hero"
import { FilterBar } from "@/components/filter-bar"
import { OpportunityCard } from "@/components/opportunity-card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey | "all">("all")
  const [selectedCountry, setSelectedCountry] = useState<CountryKey | "all">("all")
  const [selectedCost, setSelectedCost] = useState<CostType | "all">("all")
  const [selectedFormat, setSelectedFormat] = useState<FormatType | "all">("all")
  const [selectedGrade, setSelectedGrade] = useState<number | "all">("all")
  const [selectedAudience, setSelectedAudience] = useState<"school" | "student" | "all">("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      if (selectedCategory !== "all" && opp.category !== selectedCategory) return false
      if (selectedCountry !== "all" && opp.country !== selectedCountry) return false
      if (selectedCost !== "all" && opp.cost !== selectedCost) return false
      if (selectedFormat !== "all" && opp.format !== selectedFormat) return false
      
      if (selectedAudience === "school" && !opp.grades.some(g => g <= 12)) return false
      if (selectedAudience === "student" && !opp.grades.includes(13)) return false

      if (selectedGrade !== "all" && !opp.grades.includes(selectedGrade)) return false

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchTitle = opp.title.toLowerCase().includes(q)
        const matchOrg = opp.organization.toLowerCase().includes(q)
        const matchDesc = opp.description.toLowerCase().includes(q)
        if (!matchTitle && !matchOrg && !matchDesc) return false
      }

      return true
    })
  }, [
    selectedCategory,
    selectedCountry,
    selectedCost,
    selectedFormat,
    selectedGrade,
    selectedAudience,
    searchQuery,
  ])

  const handleReset = () => {
    setSelectedCategory("all")
    setSelectedCountry("all")
    setSelectedCost("all")
    setSelectedFormat("all")
    setSelectedGrade("all")
    setSelectedAudience("all")
    setSearchQuery("")
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <SiteHeader searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 space-y-8 pb-16">
        <Hero
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <FilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
          selectedCost={selectedCost}
          onSelectCost={setSelectedCost}
          selectedFormat={selectedFormat}
          onSelectFormat={setSelectedFormat}
          selectedGrade={selectedGrade}
          onSelectGrade={setSelectedGrade}
          selectedAudience={selectedAudience}
          onSelectAudience={setSelectedAudience}
          onReset={handleReset}
        />

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-800">
              Табылған мүмкіндіктер ({filteredOpportunities.length})
            </h2>
          </div>

          {filteredOpportunities.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredOpportunities.map((opp) => (
                <OpportunityCard key={opp.id} opportunity={opp} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
              <p className="text-slate-500 font-medium">
                Іздеу бойынша ештеңе табылмады. Сүзгілерді өзгертіп көрсеңіз болады.
              </p>
            </div>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}