import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/sections/footer";

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
      <Navbar />
      
      <main>{children}</main>
      
      {/* 8. Footer (Teil der Kontakt-Sektion) */}
      <Footer />
    </>
  );
}
