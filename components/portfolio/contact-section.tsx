import { Mail, MapPin, Phone } from "lucide-react"
import { PROFILE } from "@/lib/portfolio-data"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-slate-800 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-800/40 px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[100px]"
          />
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">Contact</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Let&apos;s build something great
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-400">
            Open to Full-Time &amp; Sponsorship roles in Melbourne and remote. Reach out and I&apos;ll get back to you.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              {PROFILE.email}
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/40 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {PROFILE.phone}
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <IconLink href={PROFILE.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </IconLink>
            <IconLink href={PROFILE.github} label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </IconLink>
            <IconLink href={`mailto:${PROFILE.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </IconLink>
          </div>
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-4 w-4" />
            {PROFILE.location}
          </p>
        </footer>
      </div>
    </section>
  )
}

function IconLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/40 text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
    >
      {children}
    </a>
  )
}
