import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export function ProjectsSection() {
  const projects: Project[] = [
    {
      id: "1",
      name: "VitaPulse: heart Disease Prediction",
      description:
        "Project ini bertujuan untuk memprediksi apakah seseorang memiliki penyakit jantung atau tidak berdarkan beberapa kriteria yang telah ditentukan. Dataset yang digunakan adalah dataset penyakit jantung dari UCI Machine Learning Repository",
      technologies: ["Python"],
      link: "https://vitapulseprediction.streamlit.app/",
      github: "https://github.com/MuhammadAffandi24/MAIProject",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 6000, stopOnInteraction: false })],
  );

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  return (
    <section className="relative py-48 px-6 overflow-hidden bg-[#050505]">
      {/* Background Glows (Disamakan dengan Experience & Hobbies) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-10 w-[600px] h-[600px] bg-[#1a233a]/20 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-10 w-[600px] h-[600px] bg-[#4a1a1e]/15 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex items-end justify-between mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-accent bg-clip-text text-transparent pb-2 mb-4">
              Proyek Pilihan
            </h2>
            {/* Garis Burgundy-Navy Seragam */}
            <div className="h-[3px] w-32 bg-gradient-to-r from-[#4a1a1e] via-[#32161f] to-[#1a233a] rounded-full" />
          </div>

          <div className="flex gap-3 mb-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-[#ffd700]/40 transition-all group"
            >
              <ChevronLeft className="w-5 h-5 text-white/50 group-hover:text-[#ffd700]" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-white/10 bg-white/5 hover:border-[#ffd700]/40 transition-all group"
            >
              <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-[#ffd700]" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport (Anti-terpotong padding) */}
        <div className="overflow-hidden pt-12 -mt-12" ref={emblaRef}>
          <div className="flex -ml-6">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
              >
                <motion.div
                  whileHover={{ y: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full p-8 rounded-3xl border border-white/10 overflow-hidden flex flex-col min-h-[520px] group bg-white/[0.02] backdrop-blur-md transition-all duration-500"
                >
                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Project Index (Gold Color) */}
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#ffd700]/60 uppercase mb-5">
                      PROYEK {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Project Name (Bold White) */}
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-[#ffd700]/90 transition-colors">
                      {project.name}
                    </h3>

                    {/* Technologies (Tags) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-[10px] font-bold tracking-wider bg-white/5 text-slate-300 rounded-full border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Font Description: DISERAGAMKAN (Leading 1.8, Slate-400/60) */}
                    <p className="text-base leading-[1.8] text-foreground/60 font-medium mb-8">
                      {project.description}
                    </p>

                    {/* Action Buttons (Demo & Github) */}
                    <div className="mt-auto flex items-center gap-4">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-[#ffd700] hover:text-white transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          DEMO
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          GITHUB
                        </a>
                      )}
                      {/* Decorative Gold Dot */}
                      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#ffd700]/50 shadow-[0_0_8px_#ffd700]" />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
