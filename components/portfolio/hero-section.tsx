import { ArrowRight, Mail } from "lucide-react"
import { PROFILE } from "@/lib/portfolio-data"
import { GithubIcon, LinkedinIcon } from "./brand-icons"

export function HeroSection() {
  return (
    <section id="about" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/60 px-4 py-1.5 text-xs font-medium text-slate-300 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Based in Melbourne, VIC 🇦🇺 • Available for Full-Time &amp; Sponsorship Roles
          </span>

          <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            Building scalable, high-performance web experiences with{" "}
            <span className="text-emerald-400">React &amp; TypeScript</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
            Senior Frontend Developer with 8+ years of production experience across e-commerce, SaaS, and enterprise
            applications.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300 sm:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-800/50 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
            >
              Get in Touch
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <SocialLink href={PROFILE.github} label="GitHub">
              <GithubIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={PROFILE.linkedin} label="LinkedIn">
              <LinkedinIcon className="h-5 w-5" />
            </SocialLink>
            <SocialLink href={`mailto:${PROFILE.email}`} label="Email">
              <Mail className="h-5 w-5" />
            </SocialLink>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialLink({
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
      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/50 text-slate-300 transition-colors hover:border-emerald-400/50 hover:text-emerald-400"
    >
      {children}
    </a>
  )
}
