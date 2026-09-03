import type { ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "@tanstack/react-router";
import { DirectionProvider } from "@/components/ui/direction";
import { MeisamTjLogo } from "./meisamtj-logo";
import { ThemeModeToggle } from "./theme-mode-toggle";
export const AppLayout = ({ children }: { children: ReactNode }) => {
  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  return (
    <DirectionProvider direction="ltr">
      <div className="w-full min-h-svh p-10 max-w-lg mx-auto flex flex-col justify-between">
        <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }}>
          <MeisamTjLogo className="w-10 fill-foreground" />
        </motion.header>

        <AnimatePresence>
          <main>
            <motion.section key={pathname} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{delay: 0.5}} exit={{ y: -10, opacity: 0 }}>
              {children}
            </motion.section>
          </main>
        </AnimatePresence>

        <motion.footer
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.25 }}
          className="shrink-0"
        >
          <section className="flex items-center justify-center">
            <p className="text-xs">Choose your preferred theme -&gt; </p>
            <ThemeModeToggle />
          </section>

          <p className="text-center font-mono text-muted-foreground text-xs">Meisam Tj. | Full-Stack Web Developer</p>
        </motion.footer>
      </div>
    </DirectionProvider>
  );
};
