import { cn } from "@/lib/utils";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureListProps {
  /** Dynamischer Ortsname für personalisierte Texte */
  cityName: string;
  className?: string;
}

/**
 * Feature-Liste gemäß Layout-Struktur:
 * - 3-Spalten Grid (stapelt auf Mobile)
 * - "Warum uns wählen?"
 * - Icons + Titel + Beschreibung
 */
export function FeatureList({ cityName, className }: FeatureListProps) {
  const features: Feature[] = [
    {
      title: `Schnelle Anfahrt in ${cityName}`,
      description: `Als lokaler Betrieb sind wir schnell bei Ihnen in ${cityName}. Bei Notfällen meist innerhalb von 60 Minuten.`,
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
          />
        </svg>
      ),
    },
    {
      title: "Transparente Preise",
      description:
        "Keine versteckten Kosten. Sie erhalten vorab ein detailliertes Angebot mit Festpreisgarantie.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
          />
        </svg>
      ),
    },
    {
      title: "Garantierte Qualität",
      description:
        "Meisterbetrieb mit über 20 Jahren Erfahrung. Alle Arbeiten mit Gewährleistung und Qualitätssiegel.",
      icon: (
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className={cn("bg-white py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-section-title text-primary-900">
            Warum uns wählen?
          </h2>
          <p className="mx-auto max-w-2xl font-body text-lg text-slate-600">
            Als Ihr lokaler Dachdecker-Meisterbetrieb in {cityName} bieten wir
            Ihnen erstklassigen Service.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg border border-slate-200 bg-white p-8 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-card-hover"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary-100 text-primary-900 transition-colors group-hover:bg-primary-900 group-hover:text-white">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mb-3 font-heading text-card-title text-slate-900">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

