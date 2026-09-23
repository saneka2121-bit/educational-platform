"use client"

import { useState, type FormEvent } from "react"
import {
  Phone,
  Mail,
  Send,
  BookOpen,
  Compass,
  GraduationCap,
  User,
  MessageSquare,
} from "lucide-react"

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSent(true)
    setEmail("")
    setName("")
    setMessage("")
    window.setTimeout(() => setSent(false), 4000)
  }

  return (
    <footer className="relative mt-20 bg-[#1D3557] text-white">
      {/* soft top glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/5 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-4 pt-16 pb-14 lg:grid-cols-2 lg:gap-8 lg:pt-20">
        {/* LEFT — info */}
        <div className="flex flex-col">
          <h2 className="max-w-md font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Сұрақтарыңыз болса осында қоюға болады
          </h2>

          <div className="mt-10">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Байланыс контактілері
            </h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <Phone className="size-5 text-white" aria-hidden="true" />
                </span>
                <a
                  href="tel:+771726486"
                  className="text-base text-white/90 transition-colors hover:text-white"
                >
                  +7 (7172) 64-86-86
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                  <Mail className="size-5 text-white" aria-hidden="true" />
                </span>
                <a
                  href="mailto:info@talap.edu.kz"
                  className="text-base text-white/90 transition-colors hover:text-white"
                >
                  info@talap.edu.kz
                </a>
              </li>
            </ul>
          </div>

          {/* decorative outline illustrations */}
          <div
            aria-hidden="true"
            className="mt-auto flex items-center gap-6 pt-12 text-white/25"
          >
            <BookOpen className="size-12" strokeWidth={1} />
            <Compass className="size-12" strokeWidth={1} />
            <GraduationCap className="size-12" strokeWidth={1} />
          </div>
        </div>

        {/* RIGHT — form card */}
        <div className="lg:pl-4">
          <div className="rounded-3xl bg-white p-6 shadow-2xl shadow-black/30 sm:p-8 lg:-mt-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FormField
                  id="footer-email"
                  label="Электронды адрес"
                  icon={<Mail className="size-4" aria-hidden="true" />}
                >
                  <input
                    id="footer-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-background/60 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </FormField>

                <FormField
                  id="footer-name"
                  label="Аты"
                  icon={<User className="size-4" aria-hidden="true" />}
                >
                  <input
                    id="footer-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Атыңыз"
                    className="w-full rounded-xl border border-border bg-background/60 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </FormField>
              </div>

              <FormField
                id="footer-message"
                label="Хабар"
                icon={<MessageSquare className="size-4" aria-hidden="true" />}
                align="start"
              >
                <textarea
                  id="footer-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Хабарламаңызды жазыңыз..."
                  className="w-full resize-y rounded-xl border border-border bg-background/60 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </FormField>

              <div className="flex items-center justify-between gap-4">
                <p
                  className="text-sm text-emerald-600 transition-opacity"
                  style={{ opacity: sent ? 1 : 0 }}
                  role="status"
                >
                  Хабарламаңыз жіберілді!
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent/80 px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-accent/30 transition-transform hover:-translate-y-0.5 hover:shadow-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50"
                >
                  <Send className="size-4" aria-hidden="true" />
                  Жіберу
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-sm text-white/50 sm:flex-row sm:text-left">
          <p>© 2026 Mumkindik — оқушыларға арналған мүмкіндіктер платформасы</p>
          <p>Қазақстан мектеп оқушылары үшін жасалған</p>
        </div>
      </div>
    </footer>
  )
}

function FormField({
  id,
  label,
  icon,
  align = "center",
  children,
}: {
  id: string
  label: string
  icon: React.ReactNode
  align?: "center" | "start"
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="text-xs font-medium text-muted-foreground"
      >
        {label}
      </label>
      <div className="relative">
        <span
          className={`pointer-events-none absolute left-3 text-muted-foreground ${
            align === "start" ? "top-3" : "top-1/2 -translate-y-1/2"
          }`}
        >
          {icon}
        </span>
        {children}
      </div>
    </div>
  )
}
