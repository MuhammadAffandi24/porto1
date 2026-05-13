import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function HobbiesSection() {
  const images = [
    "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1200&auto=format&fit=crop",
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  return (
    // Background disesuaikan menjadi #050505 agar seragam dengan Experience
    <section className="relative py-48 px-6 overflow-hidden bg-[#050505]">
      {/* Background Glows (Disamakan persis dengan ExperienceSection) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Cahaya Burgundy - Sisi Kiri Atas */}
        <div className="absolute top-1/4 -left-10 w-[600px] h-[600px] bg-[#4a1a1e]/20 rounded-full blur-[120px]" />

        {/* Cahaya Navy Blue - Sisi Kanan Bawah */}
        <div className="absolute bottom-1/4 -right-10 w-[600px] h-[600px] bg-[#1a233a]/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent pb-2 mb-4"
          >
            Hobi & Minat
          </motion.h2>
          {/* Garis Burgundy-Navy Seragam */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-[3px] w-32 bg-gradient-to-r from-[#4a1a1e] via-[#32161f] to-[#1a233a] mx-auto rounded-full"
          />
        </div>

        {/* Card Container - Glassmorphism style */}
        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden p-4 md:p-8 shadow-2xl transition-all duration-500"
        >
          <div className="grid gap-10">
            {/* Carousel Foto */}
            <div
              className="overflow-hidden rounded-2xl border border-white/5 shadow-inner"
              ref={emblaRef}
            >
              <div className="flex">
                {images.map((src, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 relative aspect-video md:aspect-[21/9]"
                  >
                    <img
                      src={src}
                      alt={`Football hobby ${index}`}
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                    />
                    {/* Overlay Navy-Burgundy halus pada gambar */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent pointer-events-none" />
                  </div>
                ))}
              </div>
            </div>

            {/* Deskripsi */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-center max-w-2xl mx-auto pb-4"
            >
              <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-[#ffd700] transition-colors">
                Sepakbola & Futsal
              </h3>
              {/* Font diseragamkan: Leading 1.8 & Slate-400/60 */}
              <p className="text-base leading-[1.8] text-foreground/60 font-medium">
                Saya penggemar berat sepakbola, terutama dalam menganalisis
                taktik permainan yang presisi. Bagi saya, berada di lapangan
                hijau bukan sekadar olahraga, melainkan cara melatih kerjasama
                tim dan strategi dalam menghadapi tekanan.
              </p>

              {/* Dekorasi Footer Kartu agar seragam dengan Experience */}
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#ffd700]/50 shadow-[0_0_8px_#ffd700]" />
                <div className="h-[1px] w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#4a1a1e] shadow-[0_0_8px_#4a1a1e]" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
