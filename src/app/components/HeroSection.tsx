import { motion } from "motion/react";

export function HeroSection() {
  const data = {
    name: "Muhammad Affandi",
    title: "Data Science Student",
    story:
      "Mahasiswa S1 Universitas Sebelas Maret Program Studi Sains Data yang memiliki ketertarikan pada bidang data, khususnya Kecerdasan Buatan dan Pembelajaran Mesin. Menyukai perkembangan teknologi dan terbiasa untuk terus belajar serta berinnovasi. Aktif berorganisasi di dalam maupun luar kampus sehingga memiliki kemampuan komunikasi yang baik, percaya diri, dapat diandalkan, serta mampu bekerja secara efektif dan efisien. Selain itu, juga menyukai kegiatan olahraga.",
    photo: "/images/pp.png",
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with football stadium */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1686168523188-8949907234a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-transparent to-accent/5"></div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-accent/20 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * 500],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-32">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-5 gap-12 items-center"
          >
            {/* Photo Section */}
            <div className="md:col-span-2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent via-secondary to-accent rounded-full opacity-75 blur-xl group-hover:opacity-100 transition duration-1000"></div>

                <div className="relative">
                  <motion.img
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    src={data.photo}
                    alt="Profile"
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent/50 shadow-2xl"
                  />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="md:col-span-3 space-y-6">
              <motion.h1
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                /* Ukuran font dikecilkan ke text-5xl (mobile) dan text-6xl (desktop) */
                className="text-5xl md:text-6xl font-bold text-foreground tracking-tight"
              >
                {data.name}
              </motion.h1>

              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl md:text-2xl bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent tracking-wide font-semibold"
              >
                {data.title}
              </motion.p>

              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.4 }}
                className="h-1 w-20 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full"
              ></motion.div>

              <motion.p
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl leading-relaxed text-foreground/80 text-justify md:text-left"
              >
                {data.story}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-foreground/40 font-bold uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-accent/50 to-transparent"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}
