"use client"

import { Opportunity, countries, categoryMap } from "@/lib/opportunities"

interface OpportunityCardProps {
  opportunity?: Opportunity
  item?: Opportunity
}

export function OpportunityCard({ opportunity, item }: OpportunityCardProps) {
  const opp = opportunity || item

  if (!opp) return null

  const country = countries[opp.country]
  const isFree = opp.cost === "free"
  const category = categoryMap[opp.category]

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          {category && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
              {category.label}
            </span>
          )}
          <span className="text-xs text-slate-400">
            Дедлайн: {opp.deadline}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 leading-snug">
          {opp.title}
        </h3>

        <p className="text-sm text-slate-500 font-medium">
          {opp.organization}
        </p>

        <p className="text-sm text-slate-600 line-clamp-2">
          {opp.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-medium text-slate-500">
        <span>{country ? `${country.flag} ${country.label}` : opp.country}</span>
        <span className={isFree ? "text-emerald-600 font-bold" : "text-slate-600"}>
          {isFree ? "Тегін" : "Ақылы"}
        </span>
      </div>
    </div>
  )
}