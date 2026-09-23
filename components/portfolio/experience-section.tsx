"use client"

import { useState } from "react"
import { Briefcase, ChevronDown, MapPin } from "lucide-react"
import { EXPERIENCE } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"

export function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <section id="experience" className="scroll-mt-20 border-t border-slate-800 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Professional journey"
          description="8+ years shipping production web applications across aviation, SaaS, and enterprise agencies."
        />

        <div className="mt-12 space-y-4">
          {EXPERIENCE.map((exp, index) => {
            const isOpen = openIndex === index
            const panelId = `exp-panel-${index}`
            return (
              <div
                key={`${exp.company}-${exp.period}`}
                className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-800/40 transition-colors hover:border-slate-700"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-start gap-4 p-5 text-left sm:p-6"
                >
                  <span className="mt-0.5 hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400 sm:flex">
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-slate-100 sm:text-lg">{exp.role}</h3>
                    <p className="mt-1 text-sm font-medium text-emerald-400">{exp.company}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 sm:text-sm">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ChevronDown
                    className={`mt-1 h-5 w-5 shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-emerald-400" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 sm:pl-[86px]">
                      <p className="text-sm leading-relaxed text-slate-300">{exp.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {exp.highlights.map((item) => (
                          <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-400">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
