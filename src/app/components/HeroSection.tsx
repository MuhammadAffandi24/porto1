import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Spline from "@splinetool/react-spline";

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const [hasEntered, setHasEntered] = useState(false);
  const [isStarterLoaded, setIsStarterLoaded] = useState(false);
  const [isMain3DLoaded, setIsMain3DLoaded] = useState(false);
  const [ripple, setRipple] = useState<{ x: number; y: number } | null>(null);
  const touchStartPos = useRef<{ x: number; y: number; time: number } | null>(
    null,
  );

  useEffect(() => {
    document.body.style.overflow = hasEntered ? "unset" : "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [hasEntered]);

  const handleStarterClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isStarterLoaded) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setTimeout(() => setHasEntered(true), 600);
  };

  const handleStarterTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isStarterLoaded) return;
    const touch = e.changedTouches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({ x: touch.clientX - rect.left, y: touch.clientY - rect.top });
    setTimeout(() => setHasEntered(true), 600);
  };

  // Touch start — catat posisi dan waktu
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    touchStartPos.current = {
      x: touch.clientX,
      y: touch.clientY,
      time: Date.now(),
    };
  };

  // Touch end — cek apakah tap atau swipe
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStartPos.current) return;

    const touch = e.changedTouches[0];
    const dx = Math.abs(touch.clientX - touchStartPos.current.x);
    const dy = Math.abs(touch.clientY - touchStartPos.current.y);
    const duration = Date.now() - touchStartPos.current.time;

    // Kalau gerak lebih dari 10px atau tahan lebih dari 300ms = swipe/drag, skip
    if (dx > 10 || dy > 10 || duration > 300) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (touch.clientX - rect.left) / rect.width;
    const y = (touch.clientY - rect.top) / rect.height;

    console.log(`👆 Touch x:${x.toFixed(2)} y:${y.toFixed(2)}`);

    navigateByPosition(x, y);
  };

  // Mouse click (desktop)
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    touchStartPos.current = { x: e.clientX, y: e.clientY, time: Date.now() };
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (touchStartPos.current) {
      const dx = Math.abs(e.clientX - touchStartPos.current.x);
      const dy = Math.abs(e.clientY - touchStartPos.current.y);
      if (dx > 5 || dy > 5) return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    console.log(`🖱️ Click x:${x.toFixed(2)} y:${y.toFixed(2)}`);

    navigateByPosition(x, y);
  };

  const navigateByPosition = (x: number, y: number) => {
    if (x < 0.44) return;

    if (y < 0.55) {
      if (x < 0.78) onNavigate("bio");
      else onNavigate("hobbies");
    } else {
      if (x < 0.68) onNavigate("experience");
      else onNavigate("projects");
    }
  };

  return (
    <section
      className="relative w-full bg-[#050505] z-10 select-none"
      style={{ height: "100vh", maxWidth: "100vw", overflow: "hidden" }}
    >
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div
            key="starter-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={handleStarterClick}
            onTouchEnd={handleStarterTouch}
            style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            className={`z-50 bg-[#050505] ${isStarterLoaded ? "cursor-pointer" : "cursor-wait"}`}
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute top-1/4 -left-10 w-[600px] h-[600px] bg-[#1a233a]/40 rounded-full blur-[120px]" />
              <div className="absolute bottom-1/4 -right-10 w-[600px] h-[600px] bg-[#4a1a1e]/40 rounded-full blur-[140px]" />
            </div>

            <div
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Spline
                scene="https://prod.spline.design/EX2xSXS1xmHoINoW/scene.splinecode"
                onLoad={() => setIsStarterLoaded(true)}
                style={{ width: "100%", height: "100%", display: "block" }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/10 via-transparent to-[#050505] pointer-events-none" />
            </div>

            {ripple && (
              <motion.span
                initial={{ opacity: 0.8, scale: 0 }}
                animate={{ opacity: 0, scale: 24 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                style={{
                  position: "absolute",
                  left: ripple.x,
                  top: ripple.y,
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "none",
                }}
                className="w-12 h-12 bg-transparent border-[3px] border-cyan-400/50 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.4)] z-40"
              />
            )}

            <div className="absolute top-16 w-full text-center z-20 pointer-events-none">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={isStarterLoaded ? { opacity: 1, y: 0 } : {}}
                className="text-xs tracking-[0.4em] text-zinc-500 font-bold uppercase"
              >
                Interactive Workspace
              </motion.h2>
            </div>

            <div className="absolute bottom-16 w-full text-center z-20 pointer-events-none">
              {isStarterLoaded ? (
                <motion.div
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                  }}
                  className="flex flex-col items-center gap-2"
                >
                  <p className="text-sm tracking-[0.3em] text-white font-bold">
                    CLICK ANYWHERE TO ENTER
                  </p>
                </motion.div>
              ) : (
                <div className="flex flex-col items-center gap-3">
                  <div className="w-5 h-5 border-2 border-zinc-700 border-t-cyan-400 rounded-full animate-spin" />
                  <p className="text-[10px] tracking-[0.25em] text-zinc-500 font-bold uppercase animate-pulse">
                    Please Wait....
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main-workspace"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: "absolute", inset: 0, overflow: "hidden" }}
            onMouseDown={handleMouseDown}
            onClick={handleCanvasClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <Spline
              scene="https://prod.spline.design/vm1UdBShWmQDEw0c/scene.splinecode"
              onLoad={() => setIsMain3DLoaded(true)}
              style={{ width: "100%", height: "100%", display: "block" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />

            {isMain3DLoaded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 pointer-events-none select-none text-center"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-400/60 font-bold animate-bounce">
                  ⌨️ Tap keyboard untuk navigasi halaman
                </p>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
