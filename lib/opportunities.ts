export type CategoryKey =
  | "grant"
  | "scholarship"
  | "olympiad"
  | "contest"
  | "summer"

export type CountryKey = "kz" | "usa" | "europe"
export type CostType = "free" | "paid"
export type FormatType = "online" | "offline"

export type Category = {
  key: CategoryKey
  label: string
  /** oklch color used only as a small accent dot */
  color: string
}

export const categories: Category[] = [
  { key: "grant", label: "Гранттар", color: "oklch(0.56 0.15 245)" },
  { key: "scholarship", label: "Стипендиялар", color: "oklch(0.6 0.13 160)" },
  { key: "olympiad", label: "Олимпиадалар", color: "oklch(0.83 0.13 82)" },
  { key: "contest", label: "Байқаулар", color: "oklch(0.55 0.18 25)" },
  { key: "summer", label: "Жазғы мектептер", color: "oklch(0.55 0.16 300)" },
]

export const categoryMap: Record<CategoryKey, Category> = Object.fromEntries(
  categories.map((c) => [c.key, c]),
) as Record<CategoryKey, Category>

export const countries: Record<CountryKey, { label: string; flag: string }> = {
  kz: { label: "Қазақстан", flag: "🇰🇿" },
  usa: { label: "АҚШ", flag: "🇺🇸" },
  europe: { label: "Еуропа", flag: "🇪🇺" },
}

export type Opportunity = {
  id: string
  title: string
  organization: string
  category: CategoryKey
  country: CountryKey
  cost: CostType
  format: FormatType
  /** eligible grades, 7..12 */
  grades: number[]
  /** ISO date string */
  deadline: string
  description: string
}

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "«Болашақ» халықаралық стипендиясы",
    organization: "ҚР Білім министрлігі",
    category: "scholarship",
    country: "kz",
    cost: "free",
    format: "offline",
    grades: [11, 12],
    deadline: "2026-10-05",
    description:
      "Шетелдің үздік университеттерінде оқуға толық қаржыландырылатын мемлекеттік стипендия.",
  },
  {
    id: "2",
    title: "Халықаралық математика олимпиадасы (IMO)",
    organization: "IMO Foundation",
    category: "olympiad",
    country: "europe",
    cost: "free",
    format: "offline",
    grades: [9, 10, 11, 12],
    deadline: "2026-10-12",
    description:
      "Әлемдегі ең беделді математика олимпиадасына іріктеу турына тіркелу.",
  },
  {
    id: "3",
    title: "Harvard Summer School — Pre-College",
    organization: "Harvard University",
    category: "summer",
    country: "usa",
    cost: "paid",
    format: "offline",
    grades: [10, 11, 12],
    deadline: "2026-09-29",
    description:
      "Гарвард кампусында өтетін екі апталық жазғы академиялық бағдарлама.",
  },
  {
    id: "4",
    title: "«El Umiti» жастар гранты",
    organization: "El Umiti қоры",
    category: "grant",
    country: "kz",
    cost: "free",
    format: "online",
    grades: [9, 10, 11, 12],
    deadline: "2026-09-27",
    description:
      "Әлеуметтік жобаларды жүзеге асыруға арналған шағын гранттық қолдау.",
  },
  {
    id: "5",
    title: "Google Code-in бағдарламалау байқауы",
    organization: "Google",
    category: "contest",
    country: "usa",
    cost: "free",
    format: "online",
    grades: [8, 9, 10, 11],
    deadline: "2026-11-15",
    description:
      "Ашық бастапқы кодты жобаларға үлес қосатын оқушыларға арналған онлайн байқау.",
  },
  {
    id: "6",
    title: "DAAD стипендиясы (Германия)",
    organization: "DAAD",
    category: "scholarship",
    country: "europe",
    cost: "free",
    format: "offline",
    grades: [11, 12],
    deadline: "2026-12-01",
    description:
      "Германия университеттерінде білім алуға арналған халықаралық стипендия.",
  },
  {
    id: "7",
    title: "Республикалық пәндік олимпиада",
    organization: "«Дарын» РҒПО",
    category: "olympiad",
    country: "kz",
    cost: "free",
    format: "offline",
    grades: [7, 8, 9, 10, 11],
    deadline: "2026-10-02",
    description:
      "Мектеп оқушыларына арналған жалпыұлттық пәндік олимпиаданың мектеп кезеңі.",
  },
  {
    id: "8",
    title: "Yale Young Global Scholars",
    organization: "Yale University",
    category: "summer",
    country: "usa",
    cost: "paid",
    format: "offline",
    grades: [10, 11],
    deadline: "2026-10-20",
    description:
      "Йель университетінде өтетін халықаралық жазғы лидерлік бағдарламасы.",
  },
  {
    id: "9",
    title: "«Zerde» ғылыми жобалар байқауы",
    organization: "Zerde ұлттық холдингі",
    category: "contest",
    country: "kz",
    cost: "free",
    format: "online",
    grades: [8, 9, 10, 11, 12],
    deadline: "2026-09-26",
    description:
      "Инновациялық және ғылыми жобаларды ұсынуға арналған ұлттық байқау.",
  },
  {
    id: "10",
    title: "Erasmus+ жастар алмасуы",
    organization: "Еуропалық Одақ",
    category: "grant",
    country: "europe",
    cost: "free",
    format: "offline",
    grades: [10, 11, 12],
    deadline: "2026-11-08",
    description:
      "Еуропа елдеріндегі жастар алмасу жобаларына қатысуға толық грант.",
  },
  {
    id: "11",
    title: "Stanford Online High School курсы",
    organization: "Stanford University",
    category: "summer",
    country: "usa",
    cost: "paid",
    format: "online",
    grades: [9, 10, 11, 12],
    deadline: "2026-10-30",
    description:
      "Стэнфордтың аккредиттелген онлайн академиялық курстары мен модульдері.",
  },
  {
    id: "12",
    title: "Информатикадан халықаралық олимпиада (IOI)",
    organization: "IOI Committee",
    category: "olympiad",
    country: "europe",
    cost: "free",
    format: "offline",
    grades: [9, 10, 11, 12],
    deadline: "2026-09-25",
    description:
      "Программалау мен алгоритмдер бойынша әлемдік деңгейдегі олимпиадаға іріктеу.",
  },
]

/** Whole days from `now` until the given ISO deadline (can be negative). */
export function daysUntil(deadline: string, now: Date = new Date()): number {
  const end = new Date(deadline + "T23:59:59")
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate())
  const diff = end.getTime() - startOfToday.getTime()
  return Math.ceil(diff / (1000 * 60 * 60 * 24))
}

const kazakhMonths = [
  "қаңтар",
  "ақпан",
  "наурыз",
  "сәуір",
  "мамыр",
  "маусым",
  "шілде",
  "тамыз",
  "қыркүйек",
  "қазан",
  "қараша",
  "желтоқсан",
]

/**
 * Formats an ISO date (YYYY-MM-DD) as "5 қыркүйек".
 * Parses the string directly so server and client always agree
 * (locale month names differ between ICU builds).
 */
export function formatDeadline(deadline: string): string {
  const [, month, day] = deadline.split("-").map(Number)
  return `${day} ${kazakhMonths[month - 1]}`
}
