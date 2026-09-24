"use client"

import { categories, categoryMap, countries, CategoryKey, CountryKey, CostType, FormatType } from "@/lib/opportunities"
import { Button } from "@/components/ui/button"

interface FilterBarProps {
  selectedCategory: CategoryKey | "all"
  onSelectCategory: (cat: CategoryKey | "all") => void
  selectedCountry: CountryKey | "all"
  onSelectCountry: (country: CountryKey | "all") => void
  selectedCost: CostType | "all"
  onSelectCost: (cost: CostType | "all") => void
  selectedFormat: FormatType | "all"
  onSelectFormat: (format: FormatType | "all") => void
  selectedGrade: number | "all"
  onSelectGrade: (grade: number | "all") => void
  selectedAudience: "school" | "student" | "all"
  onSelectAudience: (aud: "school" | "student" | "all") => void
  onReset: () => void
}

export function FilterBar({
  selectedCategory,
  onSelectCategory,
  selectedCountry,
  onSelectCountry,
  selectedCost,
  onSelectCost,
  selectedFormat,
  onSelectFormat,
  selectedGrade,
  onSelectGrade,
  selectedAudience,
  onSelectAudience,
  onReset,
}: FilterBarProps) {
  return (
    <div className="space-y-6 bg-white/80 backdrop-blur p-6 rounded-2xl border border-slate-100 shadow-sm">
      {/* Категории */}
      <div>
        <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
          Категориялар
        </label>
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => onSelectCategory("all")}
            className="rounded-full text-xs"
          >
            Барлығы
          </Button>
          {categories.map((cat) => (
            <Button
              key={cat.key}
              variant={selectedCategory === cat.key ? "default" : "outline"}
              size="sm"
              onClick={() => onSelectCategory(cat.key)}
              className="rounded-full text-xs"
            >
              <span
                className="w-2 h-2 rounded-full mr-1.5"
                style={{ backgroundColor: cat.color }}
              />
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 pt-2 border-t border-slate-100">
        {/* Кімге / Аудитория */}
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Кімге арналған</label>
          <select
            value={selectedAudience}
            onChange={(e) => onSelectAudience(e.target.value as any)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Барлығы</option>
            <option value="school">Мектеп оқушылары (7-12 сынып)</option>
            <option value="student">Студенттер / Колледж</option>
          </select>
        </div>

        {/* Сынып */}
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Сынып / Курс</label>
          <select
            value={selectedGrade}
            onChange={(e) => onSelectGrade(e.target.value === "all" ? "all" : Number(e.target.value))}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Барлығы</option>
            {[7, 8, 9, 10, 11, 12].map((g) => (
              <option key={g} value={g}>{g}-сынып</option>
            ))}
            <option value={13}>Студенттер</option>
          </select>
        </div>

        {/* Елдер */}
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Мемлекет</label>
          <select
            value={selectedCountry}
            onChange={(e) => onSelectCountry(e.target.value as any)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Барлық елдер</option>
            {Object.entries(countries).map(([key, val]) => (
              <option key={key} value={key}>
                {val.flag} {val.label}
              </option>
            ))}
          </select>
        </div>

        {/* Құны */}
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Құны</label>
          <select
            value={selectedCost}
            onChange={(e) => onSelectCost(e.target.value as any)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Барлығы</option>
            <option value="free">Тегін / Грант</option>
            <option value="paid">Ақылы</option>
          </select>
        </div>

        {/* Формат */}
        <div>
          <label className="text-xs font-medium text-slate-500 block mb-1.5">Формат</label>
          <select
            value={selectedFormat}
            onChange={(e) => onSelectFormat(e.target.value as any)}
            className="w-full text-xs bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">Барлығы</option>
            <option value="online">Онлайн</option>
            <option value="offline">Офлайн</option>
          </select>
        </div>
      </div>
    </div>
  )
}