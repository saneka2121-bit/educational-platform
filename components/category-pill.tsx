import { categoryMap, type CategoryKey } from "@/lib/opportunities"
import { cn } from "@/lib/utils"

export function CategoryPill({
  category,
  className,
}: {
  category: CategoryKey
  className?: string
}) {
  const cat = categoryMap[category]
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="size-1.5 rounded-full"
        style={{ backgroundColor: cat.color }}
      />
      {cat.label}
    </span>
  )
}
