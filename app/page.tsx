import { SiteHeader } from "@/components/portfolio/site-header"
import { HeroSection } from "@/components/portfolio/hero-section"
import { SkillsSection } from "@/components/portfolio/skills-section"
import { ExperienceSection } from "@/components/portfolio/experience-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function Page() {
  return (
    <div id="top" className="min-h-screen bg-slate-900">
      <SiteHeader />
      <main>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
