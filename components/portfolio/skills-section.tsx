import { Boxes, Code2, ShoppingBag, TestTube2 } from "lucide-react"
import { SKILL_GROUPS } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

const ICONS = [Code2, ShoppingBag, Boxes, TestTube2]

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-slate-800 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Core technical toolkit"
          description="A blend of modern front-end engineering, e-commerce platforms, and a formal graphic design foundation."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-800 bg-slate-800/40 p-6 transition-colors hover:border-slate-700"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-slate-100">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-slate-700 bg-slate-900/60 px-3 py-1.5 text-sm font-medium text-slate-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
