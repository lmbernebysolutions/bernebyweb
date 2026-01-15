import { StickyHeader } from "@/components/layout/StickyHeader";
import { Footer } from "@/components/layout/Footer";

/**
 * Layout für dynamische Orts-Seiten
 * Enthält den Sticky Header und Footer
 * die auf allen Location Pages erscheinen
 */
export default function LocationPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 1. Sticky Header */}
      <StickyHeader />
      
      <main>{children}</main>
      
      {/* 8. Footer (Teil der Kontakt-Sektion) */}
      <Footer />
    </>
  );
}
