"use client"

import { categories, CategoryKey } from "@/lib/opportunities"
import { Button } from "@/components/ui/button"

interface HeroProps {
  selectedCategory: CategoryKey | "all"
  onSelectCategory: (cat: CategoryKey | "all") => void
}

export function Hero({ selectedCategory, onSelectCategory }: HeroProps) {
  return (
    <section className="pt-8 pb-12">
      {/* Быстрый выбор категорий сверху */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-8 overflow-x-auto pb-2">
        <Button
          variant={selectedCategory === "all" ? "default" : "secondary"}
          size="sm"
          onClick={() => onSelectCategory("all")}
          className="rounded-full text-xs font-medium"
        >
          Барлығы
        </Button>
        {categories.map((cat) => (
          <Button
            key={cat.key}
            variant={selectedCategory === cat.key ? "default" : "secondary"}
            size="sm"
            onClick={() => onSelectCategory(cat.key)}
            className="rounded-full text-xs font-medium whitespace-nowrap bg-white/80 hover:bg-white shadow-sm border border-slate-100"
          >
            <span
              className="w-2 h-2 rounded-full mr-2 inline-block"
              style={{ backgroundColor: cat.color }}
            />
            {cat.label}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-100">
            <span>✨</span>
            <span>Оқушылар мен студенттерге арналған мүмкіндіктер платформасы</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Болашағыңды ашатын <br />
            <span className="text-blue-600">мүмкіндіктерді</span> бір жерден тап
          </h1>

          <p className="text-slate-600 text-base max-w-xl leading-relaxed">
            Гранттар, стипендиялар, олимпиадалар, байқаулар, хакатондар, волонтерлік және
            жазғы мектептер — Қазақстан оқушылары мен студенттеріне арналған тексерілген тізім.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <Button size="lg" className="rounded-full px-6 text-sm font-semibold shadow-md bg-blue-600 hover:bg-blue-700">
              Тіркелу &rarr;
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-tr from-blue-100 to-indigo-50 p-6 flex items-center justify-center border border-blue-100 shadow-xl overflow-hidden">
             <img
              src="/illustration.png"
              alt="Mundik"
              className="object-contain w-full h-full rounded-2xl"
              onError={(e) => {
                // fallback if image not present
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}