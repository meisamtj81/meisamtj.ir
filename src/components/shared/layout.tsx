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
      <div className="w-full min-h-svh p-5 max-w-lg mx-auto flex flex-col justify-between">
        <header className="mt-5">
          <MeisamTjLogo className="w-10 fill-foreground" />
        </header>

        <AnimatePresence>
          <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="flex-1">
            <motion.section key={pathname} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }}>
              {children}
            </motion.section>
          </motion.main>
        </AnimatePresence>

        <motion.footer
          dir="ltr"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="shrink-0 mt-10"
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
