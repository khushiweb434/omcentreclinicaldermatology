import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { StickyBar } from "./StickyBar";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Nav />
      <main className="flex-1 pb-24 md:pb-0">{children}</main>
      <Footer />
      <StickyBar />
    </div>
  );
}
