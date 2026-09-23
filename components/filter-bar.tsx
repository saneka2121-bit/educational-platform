"use client"

import { ChevronDown, SlidersHorizontal, X } from "lucide-react"

import type { CostType, CountryKey, FormatType } from "@/lib/opportunities"

export type Filters = {
  grade: number | "all"
  country: CountryKey | "all"
  cost: CostType | "all"
  format: FormatType | "all"
}

export const defaultFilters: Filters = {
  grade: "all",
  country: "all",
  cost: "all",
  format: "all",
}

function Field({
  label,
  value,
  onChange,
  children,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-full appearance-none rounded-xl border border-input bg-card pr-9 pl-3 text-sm font-medium text-foreground outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/40"
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
      </div>
    </label>
  )
}

export function FilterBar({
  filters,
  onChange,
  onReset,
  resultCount,
}: {
  filters: Filters
  onChange: <K extends keyof Filters>(key: K, value: Filters[K]) => void
  onReset: () => void
  resultCount: number
}) {
  const isFiltered =
    filters.grade !== "all" ||
    filters.country !== "all" ||
    filters.cost !== "all" ||
    filters.format !== "all"

  return (
    <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <SlidersHorizontal className="size-4 text-primary" aria-hidden="true" />
        <span className="text-sm font-semibold text-foreground">Сүзгілер</span>
        <span className="text-xs text-muted-foreground">
          · {resultCount} нәтиже
        </span>
        {isFiltered && (
          <button
            type="button"
            onClick={onReset}
            className="ml-auto inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="size-3.5" aria-hidden="true" />
            Тазалау
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        <Field
          label="Сынып / жас"
          value={String(filters.grade)}
          onChange={(v) => onChange("grade", v === "all" ? "all" : Number(v))}
        >
          <option value="all">Барлық сыныптар</option>
          {[7, 8, 9, 10, 11, 12].map((g) => (
            <option key={g} value={g}>
              {g}-сынып
            </option>
          ))}
        </Field>

        <Field
          label="Ел"
          value={filters.country}
          onChange={(v) => onChange("country", v as Filters["country"])}
        >
          <option value="all">Барлық елдер</option>
          <option value="kz">Қазақстан</option>
          <option value="usa">АҚШ</option>
          <option value="europe">Еуропа</option>
        </Field>

        <Field
          label="Түрі"
          value={filters.cost}
          onChange={(v) => onChange("cost", v as Filters["cost"])}
        >
          <option value="all">Барлығы</option>
          <option value="free">Тегін</option>
          <option value="paid">Ақылы</option>
        </Field>

        <Field
          label="Формат"
          value={filters.format}
          onChange={(v) => onChange("format", v as Filters["format"])}
        >
          <option value="all">Барлығы</option>
          <option value="online">Онлайн</option>
          <option value="offline">Офлайн</option>
        </Field>
      </div>
    </div>
  )
}
