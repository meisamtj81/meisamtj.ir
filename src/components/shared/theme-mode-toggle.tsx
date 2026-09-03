import { useTheme } from "@/components/shared/theme-provider";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Monitor } from "lucide-react";

const themes = {
  light: { icon: Sun },
  dark: { icon: Moon },
  system: { icon: Monitor },
} as const;

type Theme = keyof typeof themes;

export function ThemeModeToggle() {
  const { theme, setTheme } = useTheme();
  const order: Theme[] = ["light", "dark", "system"];

  const cycleTheme = () => {
    const currentIndex = order.indexOf((theme as Theme) || "system");
    const next = order[(currentIndex + 1) % order.length];

    setTheme(next);
  };

  const currentTheme = themes[theme as Theme];
  const Icon = currentTheme.icon;

  return (
    <Button variant="ghost" size="icon-lg" onClick={cycleTheme}>
      <Icon className="size-5" />
    </Button>
  );
}
