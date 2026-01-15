import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  HeroSection,
  FeatureList,
  LocalContent,
  ServicesGrid,
  FAQSection,
  ContactSection,
} from "@/features/location-page/components";
import { cities, getCityBySlug } from "@/features/location-page/data/cities";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://dachdecker-meisterbetrieb.de";

interface LocationPageProps {
  params: Promise<{
    stadt: string;
  }>;
}

/**
 * Revalidiert gecachte Seiten alle 24 Stunden
 * Best Practice für Programmatic SEO
 */
export const revalidate = 86400; // 24 Stunden in Sekunden

/**
 * Generiert statische Params für alle Städte
 * Verwendet für Static Site Generation (SSG)
 */
export async function generateStaticParams() {
  return cities.map((city) => ({
    stadt: city.slug,
  }));
}

/**
 * Generiert dynamische Metadaten für SEO
 */
export async function generateMetadata({
  params,
}: LocationPageProps): Promise<Metadata> {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);

  if (!city) {
    return {
      title: "Seite nicht gefunden",
    };
  }

  return {
    title: `Dachdecker ${city.name} - Ihr Meisterbetrieb für Dacharbeiten`,
    description: `Professionelle Dachdeckerarbeiten in ${city.name}${city.region ? ` (${city.region})` : ""}. Dachreparatur, Dachrinnenreinigung, Dämmung und mehr. 24h Notdienst verfügbar.`,
    alternates: {
      canonical: `${baseUrl}/dachdecker/${city.slug}`,
    },
    openGraph: {
      title: `Dachdecker ${city.name} - Professionelle Dacharbeiten`,
      description: `Ihr Dachdecker-Meisterbetrieb in ${city.name}. Dachreparatur, Dachrinnenreinigung, Dämmung und 24h Notdienst.`,
      url: `${baseUrl}/dachdecker/${city.slug}`,
      type: "website",
      locale: "de_DE",
      images: [
        {
          url: `${baseUrl}/images/og-dachdecker.jpg`,
          width: 1200,
          height: 630,
          alt: `Dachdecker Meisterbetrieb ${city.name}`,
        },
      ],
    },
  };
}

// Dienstleistungen für Schema.org
const services = [
  {
    name: "Dachreparatur",
    description: "Professionelle Reparatur von Dachschäden aller Art",
  },
  {
    name: "Dachsanierung",
    description: "Komplette Erneuerung und Modernisierung Ihres Daches",
  },
  {
    name: "Dachrinnenreinigung",
    description: "Reinigung und Wartung von Dachrinnen und Fallrohren",
  },
  {
    name: "Dämmung",
    description: "Energetische Dachsanierung mit modernsten Materialien",
  },
  {
    name: "Flachdach",
    description: "Spezialist für Flachdächer und Abdichtungen",
  },
  {
    name: "24h Notdienst",
    description: "Rund um die Uhr bei Sturmschäden und Notfällen",
  },
];

/**
 * Dynamische Location Page für Programmatic SEO
 * Pfad: /dachdecker/[stadt]
 *
 * Enthält alle 8 geforderten Sektionen gemäß Layout-Struktur:
 * 1. Sticky Header (im Layout)
 * 2. Hero-Sektion
 * 3. Breadcrumbs
 * 4. Feature-Liste
 * 5. Lokaler Content-Block
 * 6. Dienstleistungen
 * 7. FAQ-Sektion
 * 8. Kontakt-Sektion (Footer im Layout)
 */
export default async function LocationPage({ params }: LocationPageProps) {
  const { stadt } = await params;
  const city = getCityBySlug(stadt);

  // 404 wenn Stadt nicht gefunden
  if (!city) {
    notFound();
  }

  return (
    <>
      {/* Schema.org LocalBusiness JSON-LD mit Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${baseUrl}/dachdecker/${city.slug}#business`,
            name: `Dachdecker Meisterbetrieb ${city.name}`,
            description: `Professionelle Dachdeckerarbeiten in ${city.name}. Dachreparatur, Dachrinnenreinigung, Dämmung und mehr.`,
            url: `${baseUrl}/dachdecker/${city.slug}`,
            telephone: "+4930123456789",
            email: "info@dachdecker-meisterbetrieb.de",
            address: {
              "@type": "PostalAddress",
              addressLocality: city.name,
              addressRegion: city.region || "",
              addressCountry: "DE",
            },
            geo: city.coordinates
              ? {
                  "@type": "GeoCoordinates",
                  latitude: city.coordinates.lat,
                  longitude: city.coordinates.lng,
                }
              : undefined,
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            priceRange: "€€",
            image: `${baseUrl}/images/logo.png`,
            areaServed: {
              "@type": "City",
              name: city.name,
            },
            // Erweitert um Services
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Dachdeckerleistungen",
              itemListElement: services.map((service, index) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: `${service.name} ${city.name}`,
                  description: service.description,
                },
                position: index + 1,
              })),
            },
            // Aggregierte Bewertung (Beispieldaten)
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
              bestRating: "5",
              worstRating: "1",
            },
          }),
        }}
      />

      {/* Schema.org BreadcrumbList */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Leistungen",
                item: `${baseUrl}/#leistungen`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Dachdecker",
                item: `${baseUrl}/dachdecker`,
              },
              {
                "@type": "ListItem",
                position: 4,
                name: city.name,
                item: `${baseUrl}/dachdecker/${city.slug}`,
              },
            ],
          }),
        }}
      />

      {/* 2. Hero Sektion */}
      <HeroSection
        cityName={city.name}
        subline={`Professionelle Dacharbeiten in ${city.name}${city.region ? ` und Umgebung (${city.region})` : ""}. Schnell, zuverlässig und fair.`}
      />

      {/* 3. Breadcrumbs */}
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
              <li>
                <Link href="#leistungen" className="hover:text-primary-900">
                  Leistungen
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li>
                <Link href="/dachdecker" className="hover:text-primary-900">
                  Dachdecker
                </Link>
              </li>
              <li className="text-slate-400">/</li>
              <li className="font-semibold text-primary-900">{city.name}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* 4. Feature-Liste (3-Spalten Grid) */}
      <FeatureList cityName={city.name} />

      {/* 5. Lokaler Content-Block (SEO Text) */}
      <LocalContent cityName={city.name} region={city.region} />

      {/* 6. Dienstleistungen (Card Grid) */}
      <ServicesGrid cityName={city.name} />

      {/* 7. FAQ-Sektion (Accordion) */}
      <FAQSection cityName={city.name} />

      {/* 8. Kontakt-Sektion */}
      <ContactSection cityName={city.name} coordinates={city.coordinates} />
    </>
  );
}
