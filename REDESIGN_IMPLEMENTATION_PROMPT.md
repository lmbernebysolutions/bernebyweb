# IMPLEMENTATION PROMPT: BERNEBY SOLUTIONS WEBSITE REDESIGN

Du bist ein **Expert-Frontend-Entwickler**, der das Redesign-Konzept für die Berneby Solutions Website **vollständig umsetzt**.

## DEINE AUFGABE

Implementiere das **vollständige Redesign** basierend auf:
1. **Design-Konzept** (aus dem System-Prompt)
2. **Zeit-Map & Wireframe** (`REDESIGN_ZEITMAP_WIREFRAME.md`)
3. **System-Prompt** (`REDESIGN_SYSTEM_PROMPT.md`)

## TECHNISCHE SPEZIFIKATIONEN

### Projekt-Setup
- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Icons:** Lucide React

### Projekt-Struktur
```
src/
├── app/
│   └── [locale]/
│       └── (marketing)/
│           └── page.tsx          # Hauptseite
├── components/
│   ├── sections/                  # Alle Sektionen
│   │   ├── hero.tsx
│   │   ├── review-bar.tsx
│   │   ├── solution-reveal.tsx
│   │   ├── usp-showcase.tsx
│   │   ├── performance.tsx
│   │   ├── voice-guard.tsx
│   │   ├── geo-net.tsx
│   │   ├── web-marketing.tsx
│   │   ├── case-studies.tsx
│   │   ├── final-cta.tsx
│   │   ├── analysis-form.tsx
│   │   └── newsletter.tsx
│   ├── ui/                         # Reusable UI Components
│   │   ├── logo.tsx
│   │   ├── watermark.tsx
│   │   ├── section-trail-divider.tsx
│   │   └── ...
│   └── icons/
│       └── BernebyLogo.tsx
└── styles/
    └── globals.css
```

## IMPLEMENTIERUNGS-CHECKLISTE

### Phase 1: Setup & Grundlagen
- [ ] Next.js Projekt initialisieren (falls nicht vorhanden)
- [ ] Dependencies installieren (Tailwind, Framer Motion, etc.)
- [ ] Farbsystem in `globals.css` definieren
- [ ] Custom Utilities (Cut Corner, Font-Mono) erstellen
- [ ] Berneby Logo Komponente erstellen (`src/components/icons/BernebyLogo.tsx`)
- [ ] Cyan B Icon Komponente erstellen

### Phase 2: Core Components
- [ ] Logo Component (`src/components/ui/logo.tsx`)
- [ ] Watermark Component (`src/components/ui/watermark.tsx`)
- [ ] Section Trail Divider (`src/components/ui/section-trail-divider.tsx`)
- [ ] Revier Background (`src/components/ui/revier-background.tsx`)
- [ ] Scroll Guide (`src/components/ui/scroll-guide.tsx`)

### Phase 3: Hero Section
- [ ] Hero Section Component
- [ ] Hero Content (Headline, Subline, CTAs)
- [ ] Hero Feature Switcher (optional)
- [ ] Aurora Background Integration
- [ ] Watermark Integration

### Phase 4: Review Bar
- [ ] Review Bar Component
- [ ] Marquee Animation
- [ ] Review Cards
- [ ] Gradient Overlays

### Phase 5: Solution Reveal (Scroll-Story)
- [ ] Solution Reveal Container
- [ ] Scroll Progress Tracking
- [ ] Problem-Lösung-Paare (4x)
- [ ] Problem Visuals (4x Components)
- [ ] Solution Visuals (4x Components)
- [ ] Clip-Path Reveal Animation
- [ ] Scanline Animation

### Phase 6: USP Showcase
- [ ] USP Showcase Container
- [ ] Bento Grid Layout
- [ ] 5 Bento Cards:
  - [ ] Umsatz & Anfragen
  - [ ] 24/7 Voice-Guard
  - [ ] Regionale Dominanz
  - [ ] Website Erstellung
  - [ ] Social Media Marketing
- [ ] Sticker Integration (alle 5)
- [ ] Hover Effects

### Phase 7: Service Deep Dives
- [ ] Performance Section
- [ ] Voice-Guard Section
- [ ] Geo-Net Section
- [ ] Web Marketing Section
- [ ] Alle mit Sticker Integration

### Phase 8: Case Studies
- [ ] Case Studies Container
- [ ] Case Study Cards (2x)
- [ ] Metrics Display
- [ ] Quote Display
- [ ] Footer CTA

### Phase 9: Conversion Sections
- [ ] Final CTA Section
- [ ] Analysis Form (Multi-Step)
- [ ] Newsletter Section
- [ ] Success States

### Phase 10: Navigation & Footer
- [ ] Sticky Navigation
- [ ] Logo Integration
- [ ] Footer Component
- [ ] Social Media Links

### Phase 11: Integration & Polish
- [ ] Alle Sektionen in `page.tsx` integrieren
- [ ] Section Trail Dividers platzieren
- [ ] Revier Backgrounds platzieren
- [ ] Watermarks platzieren
- [ ] Responsive Design testen
- [ ] Animationen optimieren
- [ ] Performance optimieren

## CODE-STANDARDS

### TypeScript
```typescript
// Strict Mode aktiviert
// Alle Props typisiert
// Keine `any` Types (außer bei externen Libraries)

interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}
```

### Component Structure
```typescript
"use client"; // Nur wenn Client-Side Features benötigt

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ComponentName = ({ 
  title, 
  description,
  className 
}: ComponentProps) => {
  return (
    <section className={cn("py-24 bg-deep-navy", className)}>
      {/* Content */}
    </section>
  );
};
```

### Styling
```typescript
// Tailwind CSS Utility Classes
// Custom Utilities für wiederkehrende Patterns
// Inline Styles nur für dynamische Werte

// ✅ Gut
<div className="bg-deep-navy text-white rounded-hauer">

// ❌ Schlecht
<div style={{ backgroundColor: '#032448', color: 'white' }}>
```

### Animation
```typescript
// Framer Motion für komplexe Animationen
// CSS Transitions für einfache Hover-Effekte

// ✅ Gut
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## ASSETS INTEGRATION

### SVG Logos
```typescript
// Berneby Logo
import { BernebyLogo } from "@/components/icons/BernebyLogo";

<BernebyLogo className="w-32 h-32 text-electric-cyan" />
```

### Sticker Images
```typescript
import Image from "next/image";

<Image
  src="/assets/images/dashboard-transparent.png"
  alt="Dashboard Sticker"
  width={176}
  height={176}
  className="drop-shadow-lg"
  style={{ background: 'transparent' }}
  unoptimized
/>
```

### Paw Print Pattern
```typescript
// Siehe src/components/ui/section-trail-divider.tsx
// Vollständige SVG-Definition aus ANHANG C
```

## RESPONSIVE DESIGN

### Breakpoints
```typescript
// Mobile First
<div className="
  text-sm md:text-base lg:text-lg
  px-4 md:px-8 lg:px-16
  flex-col md:flex-row
">
```

### Mobile Optimizations
- Touch-friendly Buttons (min. 44x44px)
- Readable Font Sizes (min. 16px)
- Adequate Spacing
- Simplified Animations

## PERFORMANCE OPTIMIZATIONS

### Images
```typescript
// Next.js Image Component
import Image from "next/image";

<Image
  src="/path/to/image.png"
  alt="Description"
  width={800}
  height={600}
  priority // Für Above-the-Fold Images
/>
```

### Code Splitting
```typescript
// Dynamic Imports für schwere Komponenten
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### Animation Performance
```typescript
// GPU-accelerated Properties
// transform, opacity statt width, height

// ✅ Gut
transform: translateX(100px)

// ❌ Schlecht
left: 100px
```

## TESTING CHECKLIST

### Functionality
- [ ] Alle Links funktionieren
- [ ] Alle Formulare funktionieren
- [ ] Alle Animationen laufen smooth
- [ ] Alle CTAs führen zu korrekten Zielen

### Responsive
- [ ] Mobile (320px - 640px)
- [ ] Tablet (640px - 1024px)
- [ ] Desktop (1024px+)
- [ ] Large Desktop (1536px+)

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)

### Performance
- [ ] Lighthouse Score >90
- [ ] First Contentful Paint <1.5s
- [ ] Time to Interactive <3s
- [ ] No Layout Shift

### Accessibility
- [ ] Keyboard Navigation
- [ ] Screen Reader Compatibility
- [ ] Color Contrast (WCAG AA)
- [ ] ARIA Labels

## FINAL STEPS

1. **Code Review:** Überprüfe alle Komponenten auf Konsistenz
2. **Design Review:** Vergleiche mit Design-Konzept
3. **Content Review:** Alle Texte korrekt aus Zeit-Map übernommen
4. **Asset Review:** Alle Assets korrekt integriert
5. **Documentation:** Code-Kommentare für komplexe Logik

## OUTPUT

### Deliverables
1. **Vollständiger Code** (alle Komponenten, Styles, Assets)
2. **README.md** mit Setup-Anleitung
3. **CHANGELOG.md** mit allen Änderungen
4. **Komponenten-Dokumentation** (wenn nötig)

### Code-Qualität
- ✅ Sauberer, wartbarer Code
- ✅ Konsistente Namenskonventionen
- ✅ Vollständige TypeScript-Typisierung
- ✅ Kommentare für komplexe Logik

## WICHTIGE ERINNERUNGEN

1. **Farbsystem beibehalten:** Deep Navy, Electric Cyan, Rust Orange, Concrete Gray
2. **Design-Patterns beibehalten:** Cut Corner, Glassmorphism, Glow-Effekte
3. **Special Grafiken integrieren:** Logo, Cyan B, Paw Prints
4. **Alle Inhalte übernehmen:** Aus Zeit-Map & Wireframe
5. **Performance optimieren:** Lighthouse Score >90

## START

Beginne mit Phase 1 (Setup & Grundlagen) und arbeite dich durch alle Phasen.

**Viel Erfolg bei der Implementierung! 🚀**
