import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export function BioSection() {
  const bio = {
    email: "muhammadaffandi180162@gmail.com",
    phone: "+6281390504819",
    location: "Surakarta, Indonesia",
    website: "www.website.com",
    about:
      "Mahasiswa S1 Universitas Sebelas Maret Program Studi Sains Data yang memiliki minat pada Kecerdasan Buatan, Machine Learning, dan analisis data. Memiliki kemampuan dasar dalam Python, SQL, JS, Laravel, ReactJS, serta pengolahan dan visualisasi data. Aktif berorganisasi sehingga terbiasa bekerja sama, berkomunikasi dengan baik, dan cepat beradaptasi. Saya tertarik untuk terus berkembang dan menciptakan solusi teknologi yang bermanfaat bagi masyarakat.",
  };

  const contactItems = [
    { icon: Mail, label: "Email", value: bio.email },
    { icon: Phone, label: "Telepon", value: bio.phone },
    { icon: MapPin, label: "Lokasi", value: bio.location },
    { icon: Globe, label: "Website", value: bio.website },
  ];

  return (
    <section className="relative py-24 sm:py-36 md:py-48 px-4 sm:px-6 bg-[#050505] overflow-hidden">
      {/* Background Glows (Diselaraskan dengan Experience & Hobbies) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-[600px] h-[600px] bg-[#4a1a1e]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-10 w-[600px] h-[600px] bg-[#1a233a]/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 sm:mb-16 md:mb-20 gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white pb-2 mb-4">
                Tentang Saya
              </h2>
              {/* Line Burgundy-Navy Seragam */}
              <div className="h-[3px] w-32 bg-gradient-to-r from-[#4a1a1e] via-[#32161f] to-[#1a233a] rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
            {/* Contact Info Side */}
            <div className="space-y-6 md:space-y-8 bg-white/[0.02] backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl">
              {contactItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <div className="p-3 md:p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[#4a1a1e]/20 group-hover:border-[#4a1a1e]/50 transition-all duration-300 flex-shrink-0">
                        <Icon className="w-5 h-5 text-white/70 group-hover:text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {/* Label Gold-ish Tracking Wide */}
                        <p className="text-[10px] font-bold tracking-[0.2em] text-[#ffd700]/60 mb-1 uppercase">
                          {item.label}
                        </p>
                        <p className="text-sm md:text-lg text-slate-200 font-medium break-words">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Profile Description Side */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-2"
            >
              <p className="text-[11px] font-bold tracking-[0.2em] text-[#ffd700]/70 uppercase mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-[#ffd700]/30"></span>
                Profil Profesional
              </p>

              {/* Deskripsi Seragam: Leading 1.8, Slate/Foreground 60 */}
              <p className="text-sm md:text-lg leading-[1.8] text-foreground/60 font-medium italic mb-8">
                "{bio.about}"
              </p>

              {/* Dekorasi Footer */}
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-[#4a1a1e] shadow-[0_0_10px_#4a1a1e]" />
                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
