import {
    USP,
    Testimonial,
    CaseStudy,
    PricingPlan,
    NavigationItem,
    StatsMetric
} from "@/types";

// ===================================
// NAVIGATION
// ===================================
export const NAV_LINKS: NavigationItem[] = [
    { label: "Lösungen", href: "/services" },
    { label: "Erfolgsgeschichten", href: "/portfolio" },
    { label: "Über uns", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Preise", href: "/pricing" },
];

// ===================================
// USP DATA (6 UNIQUE SERVICES)
// ===================================
export const USP_DATA: USP[] = [
    {
        id: "geo-net",
        title: "Geo-Net Dominator",
        description: "Erobere die lokale Suche. Wir platzieren dein Handwerk in jedem relevanten Ort im Umkreis.",
        icon: "MapPin",
        features: ["Lokale SEO für 10+ Städte", "Automatische Landingpages", "Top 3 Google Rankings"],
        gradient: "from-blue-500 to-cyan-400"
    },
    {
        id: "voice-guard",
        title: "24/7 Voice-Guard",
        description: "Kein Anruf geht mehr ins Leere. Unsere KI nimmt Gespräche an, qualifiziert und terminiert.",
        icon: "PhoneCall",
        features: ["24/7 Erreichbarkeit", "KI-Terminbuchung", "Sofortige SMS-Benachrichtigung"],
        gradient: "from-purple-500 to-indigo-500"
    },
    {
        id: "review-radar",
        title: "Review-Radar",
        description: "Konvertiere zufriedene Kunden automatisch in 5-Sterne-Bewertungen auf Google.",
        icon: "Star",
        features: ["Auto-SMS nach Auftrag", "Schutz vor schlechten Reviews", "Google & Trustpilot"],
        gradient: "from-yellow-400 to-orange-500"
    },
    {
        id: "live-pulse",
        title: "Live-Pulse Dashboard",
        description: "Alle Zahlen auf einen Blick. Verfolge Anrufe, Leads und Umsatz in Echtzeit.",
        icon: "Activity",
        features: ["Echtzeit-Tracking", "Kein unnötiger Schnickschnack", "Monatlicher ROI-Report"],
        gradient: "from-green-400 to-emerald-600"
    },
    {
        id: "vertical-funnels",
        title: "Vertical Funnels",
        description: "Branchenspezifische Funnels, die Besucher in zahlende Aufträge verwandeln.",
        icon: "GitMerge", // Represents funnel flow
        features: ["Psychologisch optimiert", "Mobil-First Design", "A/B Getestet"],
        gradient: "from-pink-500 to-rose-500"
    },
    {
        id: "tradehub-award",
        title: "TradeHub Award",
        description: "Positioniere dich als Marktführer deiner Region mit unserer exklusiven Auszeichnung.",
        icon: "Trophy",
        features: ["Digitales Handwerk Siegel", "Presse-Erwähnung", "Vertrauensvorsprung"],
        gradient: "from-amber-300 to-yellow-600"
    },
];

// ===================================
// TESTIMONIALS
// ===================================
export const TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        rating: 5,
        quote: "Seit wir Berneby nutzen, klingelt das Telefon nicht mehr nur, es sind endlich die RICHTIGEN Aufträge dabei. Absoluter Gamechanger.",
        author: "Michael Bauer",
        role: "Geschäftsführer",
        company: "Bauer Bedachungen",
        avatar: "/avatars/michael.jpg",
        featured: true
    },
    {
        id: "t2",
        rating: 5,
        quote: "Die KI-Telefonassistenz ist besser als meine alte Sekretärin. Sie ist 24/7 wach und vergisst nie einen Termin.",
        author: "Sandra Klein",
        role: "Inhaberin",
        company: "Klein & Söhne Sanitär",
        avatar: "/avatars/sandra.jpg"
    },
    {
        id: "t3",
        rating: 5,
        quote: "Ich dachte SEO ist tot, bis der Geo-Net Dominator kam. Wir sind jetzt in 12 Nachbarorten auf Platz 1.",
        author: "Thomas Weber",
        role: "Meister",
        company: "Weber Elektro",
        avatar: "/avatars/thomas.jpg"
    },
    {
        id: "t4",
        rating: 5,
        quote: "Endlich sehe ich schwarz auf weiß, was mein Marketing bringt. Das Dashboard ist jeden Cent wert.",
        author: "Jürgen Meyer",
        role: "Inhaber",
        company: "Meyer Malereibetrieb",
        avatar: "/avatars/juergen.jpg"
    },
];

// ===================================
// CASE STUDIES
// ===================================
export const CASE_STUDIES: CaseStudy[] = [
    {
        id: "cs-roofing",
        title: "Vom lokalen Dachdecker zum Marktführer im Kreis",
        industry: "Dachdecker",
        beforeMetric: 5,
        afterMetric: 45,
        metricUnit: "Leads/Monat",
        description: "Durch Geo-Net Dominator konnte Bauer Bedachungen seine Reichweite um 300% steigern.",
        testimonialQuote: "Wir mussten nach 3 Monaten neue Mitarbeiter einstellen.",
        authorArg: "Michael Bauer"
    },
    {
        id: "cs-hvac",
        title: "Kein Anruf mehr verpasst dank KI",
        industry: "Heizung & Sanitär",
        beforeMetric: 60,
        afterMetric: 98,
        metricUnit: "% Erreichbarkeit",
        description: "Die Voice-Guard Lösung fängt alle Anrufe nach 17 Uhr und am Wochenende ab.",
        testimonialQuote: "Die Kunden sind begeistert von der sofortigen Terminbestätigung.",
        authorArg: "Sandra Klein"
    }
];

// ===================================
// PRICING PLANS
// ===================================
export const PRICING_PLANS: PricingPlan[] = [
    {
        id: "starter",
        name: "Starter",
        price: 299,
        period: "/monat",
        description: "Perfekt für kleine Betriebe, die online sichtbar werden wollen.",
        features: ["Geo-Net für 1 Stadt", "Basis-Website", "Review-Radar", "Email Support"],
        isPopular: false,
        ctaText: "Starten",
        ctaLink: "/contact?plan=starter"
    },
    {
        id: "growth",
        name: "Wachstum",
        price: 799,
        period: "/monat",
        description: "Der Standard für ambitionierte Handwerker im Erzgebirge.",
        features: ["Geo-Net für 5 Städte", "Premium Website + Funnel", "24/7 Voice-Guard (Basic)", "Live-Pulse Dashboard", "Priorisierter Support"],
        isPopular: true,
        ctaText: "Kostenlos Analysieren",
        ctaLink: "/contact?plan=growth"
    },
    {
        id: "dominator",
        name: "Dominator",
        price: "Custom",
        description: "Branchenführerschaft für große Betriebe und Filialisten.",
        features: ["Unlimited Geo-Net", "Full-Service Marketing", "Voice-Guard Pro AI", "Spezial-Integrationen", "Persönlicher Ansprechpartner"],
        isPopular: false,
        ctaText: "Gespräch buchen",
        ctaLink: "/contact?plan=dominator"
    }
];

// ===================================
// STATS / METRICS
// ===================================
export const DASHBOARD_METRICS: StatsMetric[] = [
    { id: "calls", label: "Erhaltene Anrufe", value: 124, trend: 12, trendUp: true },
    { id: "leads", label: "Qualifizierte Leads", value: 45, trend: 28, trendUp: true },
    { id: "revenue", label: "Geschätzter Umsatz", value: 45000, prefix: "€", trend: 15, trendUp: true },
];
