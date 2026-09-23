import { ExternalLink } from "lucide-react"
import { PROJECTS } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { GithubIcon } from "./brand-icons"

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-slate-800 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Featured work"
          description="A selection of production projects spanning headless commerce, SaaS dashboards, and design systems."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-slate-800/40 p-6 transition-colors hover:border-emerald-400/40"
            >
              <h3 className="text-lg font-semibold text-slate-100 transition-colors group-hover:text-emerald-400">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">{project.description}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-slate-700 bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-emerald-300/90"
                  >
                    {tag}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-400 px-3.5 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3.5 py-2 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-600 hover:bg-slate-800"
                >
                  <GithubIcon className="h-4 w-4" />
                  GitHub Repo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
