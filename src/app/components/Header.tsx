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

  const handleHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/5">
      <div className="container mx-auto px-3 sm:px-6 py-3 sm:py-6">
        <div className="flex items-center justify-between">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={handleHome}
            className="text-lg sm:text-xl tracking-wider bg-gradient-to-r from-accent via-accent to-secondary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            PORTOFOLIO
          </motion.button>

          <nav className="hidden md:flex items-center gap-2 sm:gap-4">
            {/* Tombol Home */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleHome}
              className="px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wide transition-all rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/5"
            >
              <span>Home</span>
            </motion.button>

            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 1) * 0.1 }}
                onClick={() => onNavigate(item.id)}
                className={`px-4 sm:px-6 py-2 text-xs sm:text-sm tracking-wide transition-all rounded-full ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-accent to-secondary text-accent-foreground shadow-lg shadow-accent/30"
                    : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                <span>{item.label}</span>
              </motion.button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
