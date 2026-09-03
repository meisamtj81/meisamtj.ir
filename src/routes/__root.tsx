import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { AppLayout } from "@/components/shared/layout";
import "@/styles/app.css";

export const Route = createRootRoute({
  component: () => (
    <>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppLayout>
            <Outlet />
          </AppLayout>
        </ThemeProvider>
        <TanStackRouterDevtools />
    </>
  ),
});
