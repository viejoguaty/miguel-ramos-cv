"use client"

import { useEffect, useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-slate-900/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
          aria-label={`${PROFILE.name} — home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400 font-mono text-sm font-bold text-slate-900">
            {PROFILE.initials}
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-emerald-400"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="/miguel-ramos-cv.pdf"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300"
          >
            <Download className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-800 bg-slate-900/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-emerald-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="/miguel-ramos-cv.pdf"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900"
              >
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
