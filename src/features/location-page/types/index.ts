/**
 * TypeScript Types für Location Pages
 */

export interface City {
  slug: string;
  name: string;
  region?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationPageData {
  city: City;
  heroHeadline: string;
  heroSubline: string;
  services: Service[];
  faqs: FAQ[];
  localContent: string;
}

