import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function HobbiesSection() {
  // Menggunakan path lokal dari folder public/images
  const images = [
    "/images/DSC03400.JPG",
    "/images/NEX08361-194.JPG",
    "/images/RPS_1109.jpg",
    "/images/RPS_1115.jpg",
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative py-24 sm:py-36 md:py-48 px-4 sm:px-6 overflow-hidden bg-[#050505]">
      {/* Background Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-[600px] h-[600px] bg-[#4a1a1e]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-[600px] h-[600px] bg-[#1a233a]/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-6xl font-bold text-white pb-2 mb-4"
          >
            Hobi & Minat
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            className="h-[3px] w-32 bg-gradient-to-r from-[#4a1a1e] via-[#32161f] to-[#1a233a] mx-auto rounded-full"
          />
        </div>

        <motion.div
          whileHover={{ y: -10 }}
          className="bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden p-4 sm:p-6 md:p-8 shadow-2xl transition-all duration-500"
        >
          <div className="grid gap-6 md:gap-10">
            {/* Carousel Foto */}
            <div
              className="overflow-hidden rounded-2xl border border-white/5 shadow-inner cursor-grab active:cursor-grabbing"
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
                      alt={`Hobby image ${index}`}
                      className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                      loading="lazy"
                    />
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
              className="space-y-3 md:space-y-4 text-center max-w-2xl mx-auto pb-2 md:pb-4"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white group-hover:text-[#ffd700] transition-colors">
                Sepakbola/Futsal/Mini-Soccer
              </h3>
              <p className="text-sm sm:text-base leading-[1.8] text-foreground/60 font-medium">
                Selain berfokus pada data, saya sangat menikmati aktivitas fisik
                seperti sepakbola dan futsal untuk menjaga keseimbangan.
              </p>

              <div className="flex items-center justify-center gap-4 pt-3 md:pt-4">
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
