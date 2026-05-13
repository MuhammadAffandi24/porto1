import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BioSection } from "./components/BioSection";
import { HobbiesSection } from "./components/HobbiesSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("bio");
  const bioRef = useRef<HTMLDivElement>(null);
  const hobbiesRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const refs = {
      bio: bioRef,
      hobbies: hobbiesRef,
      experience: experienceRef,
      projects: projectsRef,
    };
    refs[section as keyof typeof refs]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "bio", ref: bioRef },
        { id: "hobbies", ref: hobbiesRef },
        { id: "experience", ref: experienceRef },
        { id: "projects", ref: projectsRef },
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = section.ref.current;
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={handleNavigate} activeSection={activeSection} />

      <main>
        <HeroSection />

        <div ref={bioRef}>
          <BioSection />
        </div>

        <div ref={hobbiesRef}>
          <HobbiesSection />
        </div>

        <div ref={experienceRef}>
          <ExperienceSection />
        </div>

        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
      </main>

      <footer className="relative py-16 px-6 border-t border-foreground/10 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 via-transparent to-transparent"></div>

        <div className="container mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm tracking-widest text-foreground/40"
          >
            © 2026 — DIBUAT DENGAN{" "}
            <span className="bg-gradient-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
              ROYAL MIDNIGHT GOLD
            </span>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
