import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  /** Dynamischer Ortsname */
  cityName?: string;
  /** Optionaler Subtitel */
  subline?: string;
  className?: string;
}

const trustBadges = [
  {
    label: "Meisterbetrieb",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "24h Notdienst",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: "Kostenlose Beratung",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
  },
];

/**
 * Hero-Sektion gemäß Layout-Struktur:
 * - Full-Screen mit abgedunkeltem Hintergrundbild
 * - Dynamische Headline mit Ortsnamen
 * - CTA Button "Kostenloses Angebot anfordern"
 * - Trust-Badges (Meisterbetrieb, 24h Service)
 */
export function HeroSection({
  cityName,
  subline = "Professionelle Dacharbeiten mit Qualitätsgarantie. Schnell, zuverlässig und fair.",
  className,
}: HeroSectionProps) {
  // Dynamische Headline
  const headline = cityName
    ? `Ihr zuverlässiger Dachdecker in ${cityName}`
    : "Ihr zuverlässiger Dachdecker in Ihrer Nähe";

  return (
    <section
      className={cn(
        "relative flex min-h-[calc(100vh-5rem)] items-center",
        className
      )}
    >
      {/* Hintergrundbild */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1632759145354-c9b079e6ced4?q=80&w=2070"
          alt="Dachdecker bei der Arbeit"
          fill
          priority
          className="object-cover"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMCwsLCwwNDhAQDg0NDxMQEBMWFBQWFBcZGRkZGx0dHR0dHR3/2wBDAQMEBAUEBQkFBQkdDwsPHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFBhESITFBE2Fx/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAbEQABBQEBAAAAAAAAAAAAAAABAAIDERIhMf/aAAwDAQACEQMRAD8A0LcG+NS2/qsunV9Npr8kKIzSw2XZV5UFuORwPWMYxFKI9c3NFFz/2Q=="
        />
        {/* Overlay mit Farbverlauf */}
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow / Label */}
          <p className="mb-4 font-heading text-sm uppercase tracking-widest text-accent-400">
            Dachdeckermeister in Ihrer Region
          </p>

          {/* Headline */}
          <h1 className="mb-6 font-heading text-hero-title text-white">
            {headline}
          </h1>

          {/* Subline */}
          <p className="mb-8 max-w-xl font-body text-lg leading-relaxed text-white/90 md:text-xl">
            {subline}
          </p>

          {/* CTA Buttons */}
          <div className="mb-10 flex flex-wrap gap-4">
            <Button href="#kontakt" variant="accent" size="lg">
              Kostenloses Angebot anfordern
            </Button>
            <Button
              href="tel:+4930123456789"
              variant="secondary"
              size="lg"
              className="border-white bg-transparent text-white hover:bg-white hover:text-primary-900"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Jetzt anrufen
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <Badge
                key={badge.label}
                variant="glass"
                size="md"
                icon={badge.icon}
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Organische Trennlinie zum nächsten Abschnitt */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="h-16 w-full text-surface-light"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,50 C360,100 1080,0 1440,50 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
}

