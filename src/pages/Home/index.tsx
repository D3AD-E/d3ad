import { ContactForm } from "./partials/ContactForm";
import { ExperienceTimeline } from "./partials/ExperienceTimeline";
import { HeroSection } from "./partials/HeroSection";
import { ProjectsSection } from "./partials/ProjectsSection";
import { SkillsSection } from "./partials/SkillsSection";
import { LanguageSection } from "./partials/LanguageSection";

export const Home = () => {
  return (
    <main className="container mx-auto px-4">
      <HeroSection />
      <SkillsSection />
      <ExperienceTimeline />
      <ProjectsSection />
      <LanguageSection />
      <ContactForm />
    </main>
  );
};
