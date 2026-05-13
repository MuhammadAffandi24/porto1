import { motion } from "motion/react";

interface HeaderProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export function Header({ onNavigate, activeSection }: HeaderProps) {
  const navItems = [
    { id: "bio", label: "Tentang" },
    { id: "hobbies", label: "Hobi" },
    { id: "experience", label: "Pengalaman" },
    { id: "projects", label: "Proyek" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-6">
        <div className="flex items-center justify-between">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-lg sm:text-xl tracking-wider bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent"
          >
            PORTOFOLIO
          </motion.h1>

          <nav className="hidden md:flex items-center gap-2 sm:gap-4">
            {navItems.map((item, index) => {
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wide transition-all rounded-full ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-accent to-secondary text-accent-foreground shadow-lg shadow-accent/30"
                      : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
