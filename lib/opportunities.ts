// lib/opportunities.ts

export type CategoryKey =
  | "grant"
  | "scholarship"
  | "olympiad"
  | "contest"
  | "summer"
  | "course"
  | "online"
  | "volunteer"
  | "science"
  | "hackathon"

export type CountryKey = "kz" | "usa" | "china" | "europe"
export type CostType = "free" | "paid"
export type FormatType = "online" | "offline"
export type AudienceType = "school" | "student"

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
  { key: "course", label: "Курстар", color: "oklch(0.65 0.18 190)" },
  { key: "online", label: "Онлайн бағдарламалар", color: "oklch(0.7 0.15 140)" },
  { key: "volunteer", label: "Волонтерлік мүмкіндіктер", color: "oklch(0.6 0.2 20)" },
  { key: "science", label: "Ғылыми бағдарламалар", color: "oklch(0.5 0.15 270)" },
  { key: "hackathon", label: "Хакатондар/стартаптар", color: "oklch(0.68 0.19 50)" },
]

export const categoryMap: Record<CategoryKey, Category> = Object.fromEntries(
  categories.map((c) => [c.key, c]),
) as Record<CategoryKey, Category>

export const countries: Record<CountryKey, { label: string; flag: string }> = {
  kz: { label: "Қазақстан", flag: "🇰🇿" },
  usa: { label: "АҚШ", flag: "🇺🇸" },
  china: { label: "Қытай", flag: "🇨🇳" },
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
  /** eligible grades (7..12) or 13 for university students */
  grades: number[]
  specialty?: string
  /** ISO date string */
  deadline: string
  description: string
}

export const opportunities: Opportunity[] = [
  {
    id: "1",
    title: "«Болашақ» халықаралық стипендиясы",
    organization: "ҚР Ғылым және жоғары білім министрлігі",
    category: "scholarship",
    country: "kz",
    cost: "free",
    format: "offline",
    grades: [11, 12, 13],
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
    grades: [9, 10, 11, 12, 13],
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
    grades: [8, 9, 10, 11, 12],
    deadline: "2026-11-15",
    description:
      "Ашық бастапқы кодты жобаларға үлес қосатын оқушыларға арналған онлайн байқау.",
  },
  {
    id: "6",
    title: "Chinese Government Scholarship (CSC)",
    organization: "China Scholarship Council",
    category: "scholarship",
    country: "china",
    cost: "free",
    format: "offline",
    grades: [11, 12, 13],
    deadline: "2026-12-20",
    description:
      "Қытайдың жетекші университеттерінде тегін білім алу және айлық стипендия бағдарламасы.",
  },
  {
    id: "7",
    title: "Tsinghua University Summer Program",
    organization: "Tsinghua University",
    category: "summer",
    country: "china",
    cost: "paid",
    format: "offline",
    grades: [10, 11, 12, 13],
    deadline: "2026-10-15",
    description:
      "Пекиндегі Цинхуа университетінің инженерия мен IT саласы бойынша жазғы мектебі.",
  },
  {
    id: "8",
    title: "UN Volunteers — Халықаралық волонтерлік",
    organization: "БҰҰ Волонтерлері",
    category: "volunteer",
    country: "kz",
    cost: "free",
    format: "online",
    grades: [10, 11, 12, 13],
    deadline: "2026-10-30",
    description:
      "БҰҰ-ның әлеуметтік және экологиялық жобаларына қашықтан волонтер ретінде қатысу.",
  },
  {
    id: "9",
    title: "Decentralized AI Hackathon",
    organization: "Astana Hub",
    category: "hackathon",
    country: "kz",
    cost: "free",
    format: "online",
    grades: [9, 10, 11, 12, 13],
    specialty: "IT / Программалау",
    deadline: "2026-10-08",
    description:
      "Жасанды интеллект саласындағы идеяларды жүзеге асыруға арналған 48 сағаттық хакатон.",
  },
  {
    id: "10",
    title: "MIT OpenCourseWare — Компьютерлік ғылымдар",
    organization: "MIT",
    category: "course",
    country: "usa",
    cost: "free",
    format: "online",
    grades: [8, 9, 10, 11, 12, 13],
    deadline: "2026-12-31",
    description:
      "Массачусетс технологиялық институтының алгоритмдер мен бағдарламалау бойынша тегін курсы.",
  },
  {
    id: "11",
    title: "«Жас Ғалым» зерттеу бағдарламасы",
    organization: "Ұлттық Ғылым Академиясы",
    category: "science",
    country: "kz",
    cost: "free",
    format: "offline",
    grades: [10, 11, 12, 13],
    deadline: "2026-11-01",
    description:
      "Оқушылар мен студенттерге арналған ғылыми-зерттеу зертханалық практикасы.",
  },
]

// ---------------------------------------------------------------------------
// Шетелде оқу (Студенттер мен оқушыларға арналған құжаттар тізімі)
// ---------------------------------------------------------------------------
export const studyAbroadInfo = {
  countries: [
    { key: "usa", name: "АҚШ", flag: "🇺🇸" },
    { key: "china", name: "Қытай", flag: "🇨🇳" },
  ],
  checklists: {
    school: [
      "Төлқұжат (Паспорт)",
      "Мектеп табелі / Аттестат транскрипті",
      "Тіл сертификаттары (IELTS, TOEFL немесе HSK)",
      "Ұсыныс хаттар (Recommendation Letters - 2-3 мұғалімнен)",
      "Мотивациялық эссе (Personal Statement / Statement of Purpose)",
      "Внеучебная активность / Портфолио (грамоталар, дипломдар, сертификаттар)",
    ],
    transfer: [
      "Университет транскрипті (ағымдағы GPA көрсеткішімен)",
      "Орта білім туралы аттестат және қосымшасы",
      "Тіл сертификаттары (IELTS, TOEFL, HSK)",
      "Университет профессорларынан 2-3 ұсыныс хат",
      "Трансфер себебі жазылған Мотивациялық эссе",
      "Пәндер силлабусы (өткен пәндерді есепке алу/перезачет үшін)",
    ],
  },
}

// ---------------------------------------------------------------------------
// Портфолио бойынша кеңестер (Tips & Guides)
// ---------------------------------------------------------------------------
export interface PortfolioTip {
  id: number
  title: string
  content: string
}

export const portfolioTips: PortfolioTip[] = [
  {
    id: 1,
    title: "Өз проектіңді қалай ойлап табуға болады?",
    content:
      "Күнделікті өмірдегі немесе мектебіңіздегі/университетіңіздегі кішігірім мәселелерге назар аударыңыз. Жоба міндетті түрде күрделі болуы шарт емес — бастысы ол нақты бір түйткілді шешуі тиіс.",
  },
  {
    id: 2,
    title: "Ғылыми мүмкіндіктерді қалай табамыз?",
    content:
      "Университет зертханаларының ашық есік күндерін, «Дарын» мен Ұлттық ғылым академиясының конкурстарын қадағалаңыз. Сонымен қатар профессорларға тікелей Cold Email жазу арқылы ассистент болуға болады.",
  },
  {
    id: 3,
    title: "Портфолиоға қандай белсенділіктерді қосуға болады?",
    content:
      "Волонтерлік жобалар, хакатондар, халықаралық/республикалық олимпиадалар, петициялар мен ұйымдастырған іс-шараларыңыз, өз стартабыңыз бен ғылыми мақалаларыңызды қосқан абзал.",
  },
  {
    id: 4,
    title: "Мотивациялық эссені қалай жазамыз?",
    content:
      "Эссені өз өміріңізден шағын оқиғамен (hook) бастаңыз. Неліктен бұл салаға қызығатыныңызды, қалай дамығаныңызды және осы бағдарлама арқылы болашақта қандай мақсатқа жеткіңіз келетінін айқын көрсетіңіз.",
  },
]

// ---------------------------------------------------------------------------
// Уақытты есептеу және форматтау функциялары
// ---------------------------------------------------------------------------

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
 */
export function formatDeadline(deadline: string): string {
  const [, month, day] = deadline.split("-").map(Number)
  return `${day} ${kazakhMonths[month - 1]}`
}