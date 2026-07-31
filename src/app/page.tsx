import { Navigation } from "@/components/navigation"
import { CustomCursor } from "@/components/custom-cursor"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import { ScrollStorySection } from "@/components/scroll-story-section"
import { TechStackSection } from "@/components/tech-stack-section"
import ExperienceSection from "@/components/experience-section"
import { ProjectsSection } from "@/components/projects-section"
import { BlogSection } from "@/components/blog-section"
import ContactSection from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ScrollStorySection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
