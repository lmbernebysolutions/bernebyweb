# MASTER PROMPT: Berneby Re-Branding
## Vom "Silicon Valley SaaS" zum "Digitalen Handwerks-Werkzeug"

---

# CONTEXT & ROLE

Du bist ein **Senior Frontend Architect und UI/UX Lead** (Spezialisierung: Next.js 16, Tailwind v4, Framer Motion).

Du übernimmst ein bestehendes Projekt ("Berneby Solutions"), das aktuell zu sehr nach "Standard Silicon Valley SaaS" aussieht (Dark Mode, Glows, Gradients).

**Deine Aufgabe:** Das "Re-Branding" des Codes hin zu einem **"Digitalen Handwerks-Werkzeug"** (Industrial UI), basierend auf der strikten Corporate Identity.

**Zielbild:** Das Ergebnis muss wirken wie ein Präzisionswerkzeug von **Festool oder Hilti**: Dunkel, professionell, extrem hochwertig, mit metallischen Akzenten (Kupfer/Cyan) und einer klaren technischen Struktur.

---

# TECHNISCHE BASIS

- **Framework:** Next.js 16.1.1 (App Router)
- **Styling:** Tailwind CSS v4 (mit `@theme` in `globals.css`)
- **UI Libraries:** Shadcn/UI, Magic UI, Aceternity (bereits im Stack vorhanden)
- **Animationen:** Framer Motion 12.25.0
- **Fonts:** Aktuell Inter/Geist (Sans-Serif)

---

# KRITISCHE ANALYSE (IST vs. SOLL)

Ich habe den aktuellen Build analysiert. Folgende **Diskrepanzen** müssen im Code behoben werden:

## 1. FEHLENDE FARBE (COPPER)
- **IST:** Nur Deep Navy (`#032448`) und Electric Cyan (`#01FAF9`). Wirkt zu kalt/steril.
- **SOLL:** Integriere die Akzentfarbe **"Rust Orange / Copper"** (`#C87533` oder `#C1510F` - bereits als `rust-orange` vorhanden, aber nicht genutzt). 
  - **NICHT** für Primary Buttons (dort bleibt Cyan)
  - **FÜR:** Feine Linien, Borders von Secondary Cards, Icons, "Warning/Attention" States, Hover-Effekte auf Cards
  - **Zweck:** Wärme ins Design bringen, "Erzgebirge-Heritage" visualisieren

## 2. TYPOGRAFIE (DATA AUTHENTICITY)
- **IST:** Überall Sans-Serif (Inter/Geist). Zahlen wirken wie normaler Text.
- **SOLL:** Lade und integriere **"JetBrains Mono"** (oder Geist Mono als Fallback). 
  - Wende diese Schriftart **strikt** auf **ALLE** Zahlen, Preise, Dashboard-Metriken, Tabellen und technische Werte an.
  - Das Design muss nach **"Messwerkzeug"** aussehen, nicht nach Marketing-Website.

## 3. FORMSPRACHE ("HAUER/TUSKS")
- **IST:** Standard `rounded-xl` Ecken überall. Zu weich, zu "SaaS-generisch".
- **SOLL:** Implementiere eine Utility-Class oder Variante für Cards mit **"Cut Corners"** oder **asymmetrischem Radius**.
  - Beispiel: `rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none` (oben-links & unten-rechts abgerundet, andere Ecken spitz)
  - Oder: `rounded-tl-2xl rounded-br-2xl rounded-tr-sm rounded-bl-sm`
  - Das symbolisiert die **Hauer des Ebers** und technisches Design.
  - **Wichtig:** Nicht überall, sondern gezielt bei Feature-Cards, Pricing-Cards, Service-Cards

## 4. HINTERGRUND-ATMOSPHÄRE ("REVIER")
- **IST:** Cleaner Gradient (`bg-deep-navy`). Wirkt wie leeres Blatt.
- **SOLL:** Füge einen subtilen **"Technical Grid"** (Blueprint-Muster) oder **"Topografische Höhenlinien"** (SVG) in den Hintergrund-Container ein.
  - **Opacity:** Sehr gering (0.03-0.05), damit es nicht ablenkt
  - Die Seite muss wie ein **Plan/Bauzeichnung** wirken, nicht wie ein leeres Blatt
  - **Implementierung:** Als wiederverwendbare Komponente `RevierBackground` oder als CSS-Pattern

## 5. USER GUIDANCE ("DIE FÄHRTE")
- **IST:** Keine visuelle Führung beim Scrollen.
- **SOLL:** Implementiere eine **vertikale, gestrichelte Linie** (Dashed Line), die Sektionen verbindet und den User beim Scrollen "führt".
  - Optional: Ein kleiner animierter Punkt oder Eber-Icon, der an dieser Linie entlangfährt (Scroll-Triggered Animation)
  - **Zweck:** Visualisierung des "Wegs durch den Dschungel/Revier"

---

# IMPLEMENTIERUNGS-AUFTRAG (SCHRITT-FÜR-SCHRITT)

Bitte führe die folgenden Änderungen am Code durch. **Denke in Komponenten und wiederverwendbaren Styles.**

## STEP 1: Globals & Config

### 1.1 Farb-Erweiterung
- **Datei:** `src/styles/globals.css`
- **Aktion:** 
  - Erweitere das `@theme` um die Farbe `copper` (falls noch nicht vorhanden, nutze `rust-orange` als Basis)
  - Erstelle eine Tailwind-Utility `copper` mit verschiedenen Shades (50, 100, 200, ..., 900)
  - Beispiel:
    ```css
    --color-copper-500: #C87533;
    --color-copper-600: #B8652A;
    --color-copper-400: #D9854A;
    ```

### 1.2 Monospace-Font Integration
- **Datei:** `src/app/[locale]/layout.tsx`
- **Aktion:**
  - Lade **JetBrains Mono** von Google Fonts (oder nutze `next/font` für Optimierung)
  - Erstelle eine Utility-Class `font-mono` in `globals.css` (falls nicht vorhanden)
  - Beispiel:
    ```tsx
    import { JetBrains_Mono } from 'next/font/google';
    const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });
    ```
  - Füge `className={jetbrainsMono.variable}` zum `<html>` Tag hinzu

### 1.3 Hauer-Form Utility
- **Datei:** `src/styles/globals.css` (oder neue Datei `src/styles/utilities.css`)
- **Aktion:**
  - Erstelle eine Utility-Class `rounded-hauer` (oder `rounded-tusk`) für asymmetrische Ecken
  - Beispiel:
    ```css
    .rounded-hauer {
      border-radius: 1rem 0 1rem 0.5rem; /* tl-xl, tr-none, br-xl, bl-sm */
    }
    ```
  - Oder als Tailwind-Utility mit `@utility`:
    ```css
    @utility rounded-hauer {
      border-radius: 1rem 0 1rem 0.5rem;
    }
    ```

---

## STEP 2: Background & Layout Wrapper

### 2.1 RevierBackground Komponente
- **Datei:** `src/components/ui/revier-background.tsx` (NEU)
- **Aktion:**
  - Erstelle eine Komponente `RevierBackground`, die das Blueprint-Raster oder Topografie-Muster enthält
  - **Option A (Blueprint-Grid):**
    - SVG-Pattern mit Millimeterpapier-Look (feine Linien, 10px Grid)
    - Sehr subtil (opacity: 0.03-0.05)
  - **Option B (Topografische Linien):**
    - SVG mit Höhenlinien (Isolinien), die an eine Landkarte erinnern
    - Subtile Kurven, nicht zu dominant
  - **Props:** `opacity?: number`, `variant?: 'grid' | 'topography'`
  - **Styling:** `absolute inset-0 pointer-events-none`

### 2.2 Layout-Integration
- **Datei:** `src/app/[locale]/layout.tsx` oder `src/app/[locale]/(marketing)/page.tsx`
- **Aktion:**
  - Tausche den aktuellen Background (`bg-deep-navy`) gegen einen Container mit `<RevierBackground />` aus
  - Stelle sicher, dass der Background nicht die Lesbarkeit beeinträchtigt

---

## STEP 3: UI-Refinement (Komponenten-Level)

### 3.1 Cards (Features, Pricing, Services)
- **Dateien:** 
  - `src/components/sections/usp-showcase.tsx`
  - `src/components/sections/case-studies.tsx`
  - Pricing-Komponenten (falls vorhanden)
- **Aktion:**
  - **Border-Radius:** Ändere von `rounded-xl` auf `rounded-hauer` (oder die neue Utility)
  - **Border:** Füge einen feinen Border (1px) hinzu: `border border-white/10` oder `border-copper-500/20`
  - **Hover-Effekte:** Nutze `copper` statt nur Cyan:
    - `hover:border-copper-500/40`
    - `hover:shadow-[0_0_20px_rgba(200,117,51,0.2)]`
  - **Beispiel:**
    ```tsx
    <div className="rounded-hauer border border-copper-500/20 hover:border-copper-500/40 transition-all">
      {/* Content */}
    </div>
    ```

### 3.2 Dashboard/Stats Modul
- **Datei:** `src/components/sections/performance.tsx`
- **Aktion:**
  - **Zahlenwerte:** Setze ALLE Zahlenwerte hart auf `font-mono`
  - Suche nach:
    - `"248"`, `"18.5%"`, `"+145%"` → Wrappe in `<span className="font-mono">`
    - Chart-Labels, Tooltip-Werte → `font-mono`
    - Alle Metriken im Dashboard
  - **Beispiel:**
    ```tsx
    <span className="text-white font-bold font-mono">248</span>
    <span className="text-electric-cyan font-bold text-2xl font-mono">+145%</span>
    ```

### 3.3 Pricing-Komponenten
- **Dateien:** Pricing-Sections (falls vorhanden)
- **Aktion:**
  - **Preise:** Alle Preise (`299€`, `799€`, etc.) → `font-mono`
  - **Cards:** `rounded-hauer` + `border-copper-500/20`
  - **Hover:** Copper-Akzente

---

## STEP 4: "Trust"-Elemente & Industrial Look

### 4.1 Buttons & Badges
- **Dateien:** Button-Komponenten, Badge-Komponenten
- **Aktion:**
  - Stelle sicher, dass Buttons und Badges nicht "flat" wirken
  - **Industrial-Look:**
    - Subtiler Inner-Border: `border-t border-white/20 border-b border-black/20`
    - Oder: `backdrop-blur-md` mit leichtem Noise-Overlay
    - Leichter 3D-Effekt: `shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]`
  - **Beispiel:**
    ```tsx
    <button className="
      rounded-lg
      border border-copper-500/30
      bg-gradient-to-b from-white/5 to-black/20
      shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
      hover:border-copper-500/50
    ">
      {/* Content */}
    </button>
    ```

### 4.2 Icons & Accents
- **Dateien:** Alle Komponenten mit Icons
- **Aktion:**
  - Nutze `copper` für Secondary-Icons (nicht Primary, dort bleibt Cyan)
  - Beispiel: Warning-Icons, Attention-Badges, Secondary-Buttons

---

## STEP 5: Die Fährte (User Guidance)

### 5.1 Scroll-Guide Komponente
- **Datei:** `src/components/ui/scroll-guide.tsx` (NEU)
- **Aktion:**
  - Erstelle eine Komponente `ScrollGuide`, die eine vertikale, gestrichelte Linie rendert
  - **Position:** Fixed oder Sticky, links oder rechts vom Viewport
  - **Styling:** 
    - `border-l-2 border-dashed border-copper-500/30`
    - Optional: Animierter Punkt, der beim Scrollen entlangfährt
  - **Props:** `sections?: number` (Anzahl der Sektionen, um die Linie zu segmentieren)

### 5.2 Integration
- **Datei:** `src/app/[locale]/(marketing)/page.tsx`
- **Aktion:**
  - Füge `<ScrollGuide />` zum Layout hinzu
  - Stelle sicher, dass es nicht mit anderen Elementen kollidiert (z-index)

---

# QUALITÄTSSICHERUNG

Nach jeder Änderung:

1. **Konsistenz-Check:** Stelle sicher, dass alle ähnlichen Komponenten die gleichen Änderungen haben
2. **Responsive:** Teste auf Mobile, Tablet, Desktop
3. **Accessibility:** Prüfe Kontraste (Copper auf Navy muss lesbar sein)
4. **Performance:** Keine unnötigen Re-Renders durch Background-Patterns

---

# PRIORITÄTEN

**P0 (Kritisch - Sofort):**
- Copper-Farbe integrieren und in Cards nutzen
- Monospace-Font für alle Zahlen
- Hauer-Formen bei Feature-Cards

**P1 (Wichtig - Diese Session):**
- RevierBackground Komponente
- Dashboard-Zahlen auf Monospace
- Button/Badge Industrial-Look

**P2 (Nice-to-Have):**
- Scroll-Guide (Fährte)
- Erweiterte Animationen

---

# ZIELBILD (Final Check)

Das Ergebnis muss wirken wie:
- **Festool/Hilti Website:** Dunkel, professionell, extrem hochwertig
- **Metallische Akzente:** Kupfer (Wärme) + Cyan (Tech)
- **Technische Struktur:** Blueprint-Grid, Monospace-Zahlen, asymmetrische Formen
- **Handwerks-Charakter:** Robust, präzise, vertrauenswürdig

**NICHT:** Silicon Valley SaaS (zu glatt, zu steril, zu generisch)

---

# BEGINNE MIT

1. Analysiere `src/styles/globals.css` und `src/app/[locale]/layout.tsx`
2. Erstelle die neuen Utilities (Copper, Monospace, Hauer-Formen)
3. Zeige mir dann den Code für die ersten 2-3 Komponenten-Änderungen als Beispiel
4. Danach setze ich die Änderungen systematisch durch alle Komponenten fort

**Wichtig:** Arbeite schrittweise und zeige mir nach jedem größeren Schritt den Code, damit ich prüfen kann, ob die Richtung stimmt.
