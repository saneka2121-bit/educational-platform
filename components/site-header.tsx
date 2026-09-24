"use client"

import { Search } from "lucide-react"

interface SiteHeaderProps {
  searchQuery: string
  onSearchChange: (q: string) => void
}

export function SiteHeader({ searchQuery, onSearchChange }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between gap-4">
        {/* Логотип */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
            🎓
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900">
            Mumkindik
          </span>
        </div>

        {/* Поиск */}
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Мүмкіндіктерді іздеу..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-full pl-10 pr-4 py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
          />
        </div>
      </div>
    </header>
  )
}