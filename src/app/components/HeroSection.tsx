import { motion } from "motion/react";

export function HeroSection() {
  const data = {
    name: "Muhammad Affandi",
    university: "Universitas Sebelas Maret",
    major: "S1 Sains Data",
    photo: "/images/pp.png",
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background with Stadium Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1686168523188-8949907234a5?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40"></div>
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-background/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Profile Image with Glow Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="absolute -inset-4 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-accent via-secondary to-accent">
            <img
              src={data.photo}
              alt={data.name}
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-background shadow-2xl"
            />
          </div>
        </motion.div>

        {/* Text Details */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-7xl font-black text-foreground tracking-tighter uppercase italic"
          >
            {data.name}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col items-center gap-1"
          >
            <span className="px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm md:text-lg font-bold tracking-widest uppercase">
              {data.major}
            </span>
            <p className="text-foreground/60 text-lg md:text-xl font-medium mt-2">
              {data.university}
            </p>
          </motion.div>
        </div>

        {/* Call to Action / Social Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-4"
        >
          <div className="h-[1px] w-12 bg-accent/50 self-center"></div>
          <span className="text-xs uppercase tracking-[0.3em] text-foreground/40 font-bold">
            Data Science & Sports Enthusiast
          </span>
          <div className="h-[1px] w-12 bg-accent/50 self-center"></div>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-accent rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
