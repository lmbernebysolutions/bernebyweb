import type { City } from "../types";

/**
 * Liste aller verfügbaren Städte für Programmatic SEO
 * Diese Daten werden für generateStaticParams verwendet
 */
export const cities: City[] = [
  {
    slug: "berlin",
    name: "Berlin",
    region: "Berlin",
    coordinates: { lat: 52.52, lng: 13.405 },
  },
  {
    slug: "potsdam",
    name: "Potsdam",
    region: "Brandenburg",
    coordinates: { lat: 52.3906, lng: 13.0645 },
  },
  {
    slug: "hamburg",
    name: "Hamburg",
    region: "Hamburg",
    coordinates: { lat: 53.5511, lng: 9.9937 },
  },
  {
    slug: "muenchen",
    name: "München",
    region: "Bayern",
    coordinates: { lat: 48.1351, lng: 11.582 },
  },
  {
    slug: "koeln",
    name: "Köln",
    region: "Nordrhein-Westfalen",
    coordinates: { lat: 50.9375, lng: 6.9603 },
  },
  {
    slug: "frankfurt",
    name: "Frankfurt am Main",
    region: "Hessen",
    coordinates: { lat: 50.1109, lng: 8.6821 },
  },
  {
    slug: "stuttgart",
    name: "Stuttgart",
    region: "Baden-Württemberg",
    coordinates: { lat: 48.7758, lng: 9.1829 },
  },
  {
    slug: "duesseldorf",
    name: "Düsseldorf",
    region: "Nordrhein-Westfalen",
    coordinates: { lat: 51.2277, lng: 6.7735 },
  },
  {
    slug: "leipzig",
    name: "Leipzig",
    region: "Sachsen",
    coordinates: { lat: 51.3397, lng: 12.3731 },
  },
  {
    slug: "dresden",
    name: "Dresden",
    region: "Sachsen",
    coordinates: { lat: 51.0504, lng: 13.7373 },
  },
  {
    slug: "aue-bad-schlema",
    name: "Aue-Bad Schlema",
    region: "Sachsen",
    coordinates: { lat: 50.5922, lng: 12.695 },
  },
];

/**
 * Findet eine Stadt anhand ihres Slugs
 */
export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

/**
 * Gibt alle Stadt-Slugs zurück (für generateStaticParams)
 */
export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}

