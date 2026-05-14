import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { useCallback } from "react";

interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export function ExperienceSection() {
  const experiences: Experience[] = [
    {
      id: "1",
      title: "Sports Staff",
      company: "BEM FATISDA Surakarta",
      period: "Mar 2024 — Des 2024",
      description:
        "Mengorganisir event olahraga skala mahasiswa dan kompetisi fisik, memastikan seluruh operasional acara berjalan lancar dengan manajemen tim yang efektif.",
      skills: ["Event Organizing", "Leadership", "Management"],
    },
    {
      id: "2",
      title: "Staff Riset, Inovasi, & Teknologi",
      company: "IMAPRES Wonogiri",
      period: "Jan 2026 — Mar 2026",
      description:
        "Bertanggung jawab dalam melakukan analisis sentimen publik dan pengembangan dashboard interaktif untuk mendukung inovasi bagi mahasiswa berprestasi di Kabupaten Wonogiri.",
      skills: [
        "Sentiment Analysis",
        "Dashboard",
        "Excel",
        "Leadership",
        "Communication",
      ],
    },
    {
      id: "3",
      title: "Wonogiri II Coordinator",
      company: "IMAPRES Wonogiri",
      period: "Jan 2026 — Mar 2026",
      description:
        "Bertanggung jawab dalam melakukan koordinasi untuk keberlangsungan Program Kerja Kelompok Pengembangan Wonogiri 2 di Kelurahan Giripurwo",
      skills: ["Leadership", "Communication"],
    },
    {
      id: "4",
      title: "Lead Data Science Student Intern",
      company: "KAP Hikmah dan Arief (MBKM)",
      period: "Februari 2026 — Sekarang",
      description:
        "Mengembangkan aplikasi untuk rangkuman hasil putusan dari Direktori Pajak Mahkamah Agung dengan output Web-APP dilengkapi dengan fitur ChatBot (RAG), dan mengembangkan aplikasi untuk pembelajaran kantor",
      skills: [
        "Data Analysis",
        "Data Architech",
        "Research",
        "Web Developing",
        "Fullstack Engineering",
        "Data Engineering",
      ],
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 10000, stopOnInteraction: false })],
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
    <section className="relative py-24 sm:py-36 md:py-48 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Background Glows (Disamakan dengan Projects) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-10 w-[600px] h-[600px] bg-[#1a233a]/40 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 -left-10 w-[600px] h-[600px] bg-[#4a1a1e]/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 md:mb-20 gap-4">
          <div>
            <h2 className="section-heading text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-white to-[#FFD700] bg-clip-text text-transparent pb-2 mb-4">
              Pengalaman
            </h2>
            {/* Garis Burgundy-Navy Seragam */}
            <div className="h-[3px] w-32 bg-gradient-to-r from-[#4a1a1e] via-[#32161f] to-[#1a233a] rounded-full" />
          </div>

          <div className="flex gap-2 md:gap-3 mb-2">
            <button
              onClick={scrollPrev}
              className="p-2 md:p-3 rounded-full border border-white/10 bg-white/5 hover:border-[#ffd700]/40 transition-all group"
            >
              <ChevronLeft className="w-4 md:w-5 h-4 md:h-5 text-white/50 group-hover:text-[#ffd700]" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 md:p-3 rounded-full border border-white/10 bg-white/5 hover:border-[#ffd700]/40 transition-all group"
            >
              <ChevronRight className="w-4 md:w-5 h-4 md:h-5 text-white/50 group-hover:text-[#ffd700]" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="overflow-hidden pt-12 -mt-12" ref={emblaRef}>
          <div className="flex -ml-3 md:-ml-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-3 md:pl-6"
              >
                <motion.div
                  whileHover={{ y: -15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full p-5 md:p-8 rounded-3xl border border-white/10 overflow-hidden flex flex-col min-h-[480px] md:min-h-[520px] group bg-white/[0.02] backdrop-blur-md transition-all duration-500"
                >
                  {/* Glass Reflection Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Index (Gold Color) */}
                    <span className="text-[10px] font-black tracking-[0.4em] text-[#ffd700]/60 uppercase mb-4 md:mb-5">
                      EXP {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Job Title */}
                    <h3 className="text-lg md:text-2xl font-bold text-white mb-1 leading-tight group-hover:text-[#ffd700]/90 transition-colors">
                      {exp.title}
                    </h3>

                    {/* Company Name */}
                    <p className="text-xs md:text-sm font-bold text-[#ffd700]/80 mb-4 tracking-wide">
                      {exp.company}
                    </p>

                    {/* Skills (Tags) */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-[10px] font-bold tracking-wider bg-white/5 text-slate-300 rounded-full border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Description (Leading 1.8, Slate-400/60) */}
                    <p className="text-base leading-[1.8] text-foreground/60 font-medium mb-8">
                      {exp.description}
                    </p>

                    {/* Footer Area */}
                    <div className="mt-auto flex items-center gap-4">
                      <div className="flex items-center gap-2 text-[10px] font-bold text-white/50 tracking-widest uppercase">
                        <Briefcase className="w-3 h-3 text-[#ffd700]/60" />
                        {exp.period}
                      </div>

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
