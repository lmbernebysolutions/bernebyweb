import Link from "next/link";
import { cn } from "@/lib/utils";

interface Service {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ServicesGridProps {
  /** Dynamischer Ortsname */
  cityName: string;
  className?: string;
}

const services: Service[] = [
  {
    slug: "dachreparatur",
    title: "Dachreparatur",
    description:
      "Schnelle und professionelle Reparatur von Dachschäden aller Art. Von einzelnen Ziegeln bis zur kompletten Sanierung.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    slug: "dachrinnenreinigung",
    title: "Dachrinnenreinigung",
    description:
      "Professionelle Reinigung und Wartung Ihrer Dachrinnen. Verstopfungen beseitigen und Wasserschäden vorbeugen.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
  },
  {
    slug: "daemmung",
    title: "Dämmung & Isolierung",
    description:
      "Energetische Dachsanierung mit modernsten Dämmmaterialien. Senken Sie Ihre Heizkosten nachhaltig.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
        />
      </svg>
    ),
  },
  {
    slug: "flachdach",
    title: "Flachdach",
    description:
      "Spezialist für Flachdächer. Von der Neueindeckung bis zur Abdichtung und Begrünung.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
        />
      </svg>
    ),
  },
  {
    slug: "dachfenster",
    title: "Dachfenster",
    description:
      "Einbau und Austausch von Dachfenstern. Mehr Licht und frische Luft für Ihr Zuhause.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z"
        />
      </svg>
    ),
  },
  {
    slug: "notdienst",
    title: "24h Notdienst",
    description:
      "Rund um die Uhr für Sie erreichbar. Bei Sturmschäden und Notfällen sind wir schnell vor Ort.",
    icon: (
      <svg
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
        />
      </svg>
    ),
  },
];

/**
 * Dienstleistungen Card Grid gemäß Layout-Struktur:
 * - Kacheln für alle Leistungen
 * - Jede Karte verlinkt auf Detailseite
 * - Card-based Design mit Hover-Effekt
 */
export function ServicesGrid({ cityName, className }: ServicesGridProps) {
  return (
    <section className={cn("bg-white py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-section-title text-primary-900">
            Unsere Dienstleistungen in {cityName}
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-slate-600">
            Umfassender Service für Ihr Dach – von der Reparatur bis zur
            Komplettsanierung.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`#${service.slug}`}
              className="group rounded-lg border border-slate-200 bg-white p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-card-hover"
            >
              {/* Icon */}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary-100 text-primary-900 transition-colors group-hover:bg-primary-900 group-hover:text-white">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 font-heading text-card-title text-slate-900 group-hover:text-primary-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-4 font-body text-sm text-slate-600">
                {service.description}
              </p>

              {/* Link Arrow */}
              <span className="inline-flex items-center gap-1 font-heading text-sm font-semibold uppercase tracking-wide text-primary-900">
                Mehr erfahren
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

