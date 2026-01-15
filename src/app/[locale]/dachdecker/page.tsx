import { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { cities } from "@/features/location-page/data/cities";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://dachdecker-meisterbetrieb.de";

export const metadata: Metadata = {
  title: "Dachdecker in Ihrer Nähe - Alle Standorte",
  description:
    "Finden Sie Ihren Dachdecker-Meisterbetrieb in Ihrer Stadt. Professionelle Dacharbeiten, 24h Notdienst und kostenlose Beratung in ganz Deutschland.",
  alternates: {
    canonical: `${baseUrl}/dachdecker`,
  },
};

/**
 * Übersichtsseite für alle Dachdecker-Standorte
 * Pfad: /dachdecker
 */
export default function DachdeckerOverviewPage() {
  // Gruppiere Städte nach Region
  const citiesByRegion = cities.reduce(
    (acc, city) => {
      const region = city.region || "Weitere Standorte";
      if (!acc[region]) {
        acc[region] = [];
      }
      acc[region].push(city);
      return acc;
    },
    {} as Record<string, typeof cities>
  );

  const sortedRegions = Object.keys(citiesByRegion).sort();

  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-primary-900 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="mb-4 font-heading text-sm uppercase tracking-widest text-accent-400">
                Deutschlandweit für Sie da
              </p>
              <h1 className="mb-6 font-heading text-hero-title text-white">
                Dachdecker in Ihrer Nähe
              </h1>
              <p className="mx-auto max-w-2xl font-body text-lg text-white/80">
                Wählen Sie Ihren Standort und erhalten Sie ein kostenloses
                Angebot von Ihrem lokalen Dachdecker-Meisterbetrieb.
              </p>
            </div>
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="bg-surface-light py-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 font-body text-sm text-slate-600">
                <li>
                  <Link href="/" className="hover:text-primary-900">
                    Home
                  </Link>
                </li>
                <li className="text-slate-400">/</li>
                <li className="font-semibold text-primary-900">Dachdecker</li>
              </ol>
            </nav>
          </div>
        </section>

        {/* Städte nach Region */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-section-title text-primary-900">
                Unsere Standorte
              </h2>
              <p className="mx-auto max-w-2xl font-body text-lg text-slate-600">
                {cities.length} Standorte in ganz Deutschland. Klicken Sie auf
                Ihre Stadt für lokale Informationen.
              </p>
            </div>

            <div className="space-y-12">
              {sortedRegions.map((region) => (
                <div key={region}>
                  <h3 className="mb-6 font-heading text-xl font-semibold text-slate-800">
                    {region}
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {(citiesByRegion[region] || []).map((city) => (
                      <Link
                        key={city.slug}
                        href={`/dachdecker/${city.slug}`}
                        className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-primary-300 hover:shadow-card-hover"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-900 transition-colors group-hover:bg-primary-900 group-hover:text-white">
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
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                        <span className="font-heading text-lg font-semibold text-slate-900 group-hover:text-primary-900">
                          {city.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

