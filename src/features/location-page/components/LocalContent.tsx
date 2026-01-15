import { cn } from "@/lib/utils";

interface LocalContentProps {
  /** Dynamischer Ortsname */
  cityName: string;
  /** Optionale Region für erweiterten Content */
  region?: string;
  className?: string;
}

/**
 * Lokaler Content-Block für SEO gemäß Layout-Struktur:
 * - Spezifisch auf {Stadt} eingehender Text
 * - Keywords: "Dachreparatur {Stadt}", "Sturmschaden {Stadt}"
 */
export function LocalContent({ cityName, region, className }: LocalContentProps) {
  return (
    <section className={cn("bg-surface-light py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Section Header */}
          <h2 className="mb-8 font-heading text-section-title text-primary-900">
            Ihr Dachdecker-Meisterbetrieb in {cityName}
          </h2>

          {/* SEO-optimierter Content */}
          <div className="space-y-6 font-body text-lg leading-relaxed text-slate-700">
            <p>
              Als etablierter <strong>Dachdecker in {cityName}</strong> sind wir
              Ihr kompetenter Partner für alle Arbeiten rund ums Dach.{" "}
              {region && (
                <>
                  Seit über 20 Jahren betreuen wir Kunden in {cityName} und der
                  gesamten Region {region}.
                </>
              )}
              {!region && (
                <>
                  Seit über 20 Jahren betreuen wir Kunden in {cityName} und
                  Umgebung mit höchster Qualität und Zuverlässigkeit.
                </>
              )}
            </p>

            <p>
              Ob <strong>Dachreparatur in {cityName}</strong>, professionelle
              Dachsanierung oder schnelle Hilfe bei{" "}
              <strong>Sturmschäden in {cityName}</strong> – unser erfahrenes
              Team ist für Sie da. Als Meisterbetrieb garantieren wir
              fachgerechte Ausführung nach den neuesten Standards der
              Dachdeckerkunst.
            </p>

            <p>
              Besonders im Raum {cityName} kennen wir die lokalen Gegebenheiten
              und Bauvorschriften genau. Das ermöglicht uns, Ihnen nicht nur
              handwerklich perfekte Arbeit zu liefern, sondern auch bei der
              Planung und Genehmigung optimal zu unterstützen.
            </p>

            {/* Leistungen Highlight */}
            <div className="mt-8 rounded-lg border border-primary-200 bg-white p-6">
              <h3 className="mb-4 font-heading text-xl font-semibold text-primary-900">
                Unsere Leistungen in {cityName}:
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  `Dachreparatur ${cityName}`,
                  `Dachsanierung ${cityName}`,
                  `Flachdach ${cityName}`,
                  `Dachrinnenreinigung ${cityName}`,
                  `Dachwartung ${cityName}`,
                  `Sturmschaden-Beseitigung ${cityName}`,
                  `Dachfenster-Einbau ${cityName}`,
                  `Dämmung & Isolierung ${cityName}`,
                ].map((service) => (
                  <li key={service} className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-accent-600"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              Vertrauen Sie auf unsere Expertise als{" "}
              <strong>Dachdeckermeister in {cityName}</strong>. Kontaktieren Sie
              uns für ein unverbindliches Angebot – wir beraten Sie gerne vor
              Ort und erstellen Ihnen ein faires Festpreisangebot.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

