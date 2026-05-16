import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Disesuaikan dengan package.json-mu
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { BioSection } from "./components/BioSection";
import { HobbiesSection } from "./components/HobbiesSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";

export default function App() {
  const [activeSection, setActiveSection] = useState("bio");
  const [showNavbar, setShowNavbar] = useState(false);

  // 🔥 PERBAIKAN TOTAL: Navigasi Aman dari Crash Asinkronus Spline
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);

    // Memberikan jeda waktu 10ms agar event loop browser antre dengan benar
    setTimeout(() => {
      const element = document.getElementById(sectionId);

      if (element !== null && element !== undefined) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        console.log(`🚀 Sukses membawa layar bergeser menuju: #${sectionId}`);
      } else {
        console.warn(
          `⚠️ Warning: Elemen dengan ID "${sectionId}" belum siap atau tidak ditemukan di DOM.`,
        );
      }
    }, 10);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Munculkan Navbar hanya jika user sudah scroll ke bawah melewati Hero Section
      if (scrollPosition > 400) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }

      const sectionIds = ["bio", "hobbies", "experience", "projects"];
      const currentTriggerPos = scrollPosition + window.innerHeight / 3;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            currentTriggerPos >= offsetTop &&
            currentTriggerPos < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const section3DAnimation = {
    initial: { opacity: 0, y: 60, rotateX: 12, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
    viewport: { once: true, margin: "-120px" },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-foreground font-sans antialiased selection:bg-[#8a1538]/30 selection:text-[#edbb00]">
      {/* NAVBAR */}
      <AnimatePresence>
        {showNavbar && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50"
          >
            <Header onNavigate={handleNavigate} activeSection={activeSection} />
          </motion.div>
        )}
      </AnimatePresence>

      <main
        className="relative z-10 w-full overflow-hidden"
        style={{ perspective: "1200px" }}
      >
        {/* Render Hero Section 3D */}
        <HeroSection onNavigate={handleNavigate} />

        {/* --- SECTION BIODATA --- */}
        <div id="bio" className="w-full scroll-mt-28 block clear-both">
          <motion.div
            {...section3DAnimation}
            className="w-full transform-gpu origin-top"
          >
            <BioSection />
          </motion.div>
        </div>

        {/* --- SECTION HOBBIES --- */}
        <div id="hobbies" className="w-full scroll-mt-28 block clear-both">
          <motion.div
            {...section3DAnimation}
            className="w-full transform-gpu origin-top"
          >
            <HobbiesSection />
          </motion.div>
        </div>

        {/* --- SECTION PENGALAMAN --- */}
        <div id="experience" className="w-full scroll-mt-28 block clear-both">
          <motion.div
            {...section3DAnimation}
            className="w-full transform-gpu origin-top"
          >
            <ExperienceSection />
          </motion.div>
        </div>

        {/* --- SECTION PROYEK --- */}
        <div id="projects" className="w-full scroll-mt-28 block clear-both">
          <motion.div
            {...section3DAnimation}
            className="w-full transform-gpu origin-top"
          >
            <ProjectsSection />
          </motion.div>
        </div>
      </main>

      <footer className="relative py-16 px-6 border-t border-zinc-800/50 overflow-hidden bg-[#070709]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#004d98]/5 via-transparent to-transparent"></div>
        <div className="container mx-auto text-center relative z-10">
          <p className="text-sm tracking-widest text-zinc-500 font-medium">
            © 2026 — Muhammad Affandi{" "}
            <span className="bg-gradient-to-r from-[#8a1538] via-[#edbb00] to-[#004d98] bg-clip-text text-transparent font-bold ml-1">
              - Visca Barca
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}
