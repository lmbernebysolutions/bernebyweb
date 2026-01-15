export interface USP {
    id: string;
    title: string;
    description: string;
    icon: string; // Name of the icon to render
    features: string[];
    gradient: string; // Tailwind gradient class
}

export interface Testimonial {
    id: string;
    rating: number; // 1-5
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string; // Path to image
    featured?: boolean;
}

export interface CaseStudy {
    id: string;
    title: string;
    industry: string;
    beforeMetric: number;
    afterMetric: number;
    metricUnit: string;
    description: string;
    testimonialQuote: string;
    authorArg: string;
}

export interface VerticalFunnel {
    id: string;
    name: string;
    slug: string; // e.g., 'heizungsbauer'
    icon: string;
    stats: string; // e.g., "+150 Leads"
    description: string;
    features: string[];
}

export interface PricingPlan {
    id: string;
    name: string;
    price: number | "Custom";
    period?: string; // e.g., "/monat"
    description: string;
    features: string[];
    isPopular?: boolean;
    ctaText: string;
    ctaLink: string;
}

export interface NavigationItem {
    label: string;
    href: string;
    children?: NavigationItem[];
}

export interface StatsMetric {
    id: string;
    label: string;
    value: number;
    suffix?: string;
    prefix?: string;
    trend?: number; // percentage change
    trendUp?: boolean; // true = green/good, false = red/bad
}
