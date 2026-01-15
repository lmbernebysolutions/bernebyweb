# TEIL 2: VISUELLE KOMMUNIKATION & GESTALTUNGSSYSTEME

## 2.1 Typografie-Systeme 2025 <a id="21-typografie-systeme"></a>

### Variable Fonts – Die Zukunft der Typografie

**Was sind Variable Fonts?**
Eine einzelne Font-Datei mit unendlichen Gewichtsvariationen (statt separate Dateien für Bold, Semibold, etc.)

**Top Variable Fonts 2025:**
```
1. Inter Variable (Google)
   - Neutral, optimiert für UI
   - Gewichte: 100-900
   - Fallback für alle Projekte

2. Geist Sans/Mono (Vercel)
   - Modern, GitHubesque
   - Perfekt für Tech/Developer Tools
   - Kostenlos, Open Source

3. Satoshi Variable
   - Geometric, warm
   - Beste für Human-Centered Design
   - Commercial/Open Source

4. Cabinet Grotesk
   - Display-Font mit Charakter
   - Große Headlines
   - Premium-Feel

5. Playfair Display Variable
   - Serif, elegant
   - Editorial/Luxury
   - High contrast design
```

**CSS Implementation:**
```css
/* Variable Font laden */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-display: 'Cabinet Grotesk', sans-serif;
  --font-serif: 'Playfair Display', serif;
}

/* Fluid Typescale mit clamp() */
html {
  font-size: clamp(14px, 1.5vw, 16px);
}

h1 {
  font-size: clamp(2.5rem, 5vw + 1rem, 4rem);
  font-weight: 700;
  letter-spacing: -0.02em;
}

h2 {
  font-size: clamp(2rem, 4vw + 0.8rem, 3rem);
  font-weight: 600;
}

h3 {
  font-size: clamp(1.5rem, 3vw + 0.5rem, 2rem);
  font-weight: 550;
}

body {
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

/* Text Levels für Nutzbarkeit */
.text-xs { font-size: 0.75rem; line-height: 1.2; }
.text-sm { font-size: 0.875rem; line-height: 1.4; }
.text-base { font-size: 1rem; line-height: 1.5; }
.text-lg { font-size: 1.125rem; line-height: 1.6; }
.text-xl { font-size: 1.25rem; line-height: 1.6; }
```

### Modular Scale (Typografische Harmonie)

**Ratio-Basierte Skalierung:**
```
Perfect Fourth (1.25): Gemütlich, harmonisch
Golden Ratio (1.618): Elegant, natürlich
Augmented Fourth (1.414): Neutral, wissenschaftlich
Major Third (1.25): Standard, ausgewogen
```

**Berechnung mit Ratio 1.25 (Perfect Fourth):**
```
Base: 16px (--text-base)

--text-xs:   16 / 1.25² / 1.25² = 10.24px
--text-sm:   16 / 1.25² = 10.24px  
--text-base: 16px
--text-lg:   16 × 1.25 = 20px
--text-xl:   16 × 1.25² = 25px
--text-2xl:  16 × 1.25³ = 31.25px
--text-3xl:  16 × 1.25⁴ = 39px
--text-4xl:  16 × 1.25⁵ = 49px
--text-5xl:  16 × 1.25⁶ = 61px
```

**Praktische Implementation:**
```scss
$base-size: 16px;
$ratio: 1.25;

// Automatisch generierte Scale
@for $i from -3 through 5 {
  .text-#{$i} {
    font-size: #{$base-size * pow($ratio, $i)};
  }
}
```

### Font-Paarungen (Professionelle Kombinationen)

**Best Practice Pairing:**
```
1. MODERN TECH (SaaS, Startups)
   Display: Cabinet Grotesk / Space Grotesk
   Body: Inter / Geist Sans
   Mono: IBM Plex Mono / JetBrains Mono

2. EDITORIAL (Content, Blog, Publishing)
   Display: Playfair Display / Fraunces
   Body: Inter / Work Sans
   Caption: IBM Plex Serif

3. LUXURY & HIGH-END
   Display: Prata / Libre Baskerville
   Body: Crimson Text / Lora
   Accent: Montserrat / Raleway

4. PLAYFUL & CREATIVE
   Display: Syne / Clashboard
   Body: Outfit / DM Sans
   Mono: Space Mono

5. MINIMALIST & CLEAN
   Display: Aeonik / Neue Kabel
   Body: Roboto Flex / Source Sans Pro
   Everything: Single Font Family (Inter)
```

---

## 2.2 Farbpsychologie & OKLCH <a id="22-farbpsychologie-oklch"></a>

### OKLCH vs. RGB/HSL – Warum der Wechsel?

**RGB Problem:**
```
#FF0000 (Rot) und #0000FF (Blau)
→ Beide 100% Sättigung, aber Blau wirkt dunkler
→ Mathematisch wahr, aber wahrnehmungsmäßig falsch
```

**OKLCH Lösung:**
```
oklch(50% 0.2 0°)   = Leuchtkraft 50%, Sättigung 0.2, Rot
oklch(50% 0.2 240°) = Leuchtkraft 50%, Sättigung 0.2, Blau
→ Beide wahrnehmungsmäßig gleich hell!
```

**OKLCH Syntax:**
```
oklch(Lightness Chroma Hue / Alpha)

Lightness:  0-1 (0% = schwarz, 1 = weiß, 0.5 = mittel)
Chroma:     0-0.4 (Sättigung, 0 = grau, 0.4 = sehr lebendig)
Hue:        0-360 (Farbton in Grad)
Alpha:      0-1 (Transparenz)
```

**Praktische Farbpalette mit OKLCH:**
```css
:root {
  /* Primary Brand Color - Blau */
  --color-primary-50:  oklch(0.97 0.01 245);
  --color-primary-100: oklch(0.94 0.03 245);
  --color-primary-200: oklch(0.88 0.07 245);
  --color-primary-300: oklch(0.80 0.12 245);
  --color-primary-400: oklch(0.65 0.18 245);
  --color-primary-500: oklch(0.50 0.15 245);  /* Base */
  --color-primary-600: oklch(0.40 0.13 245);
  --color-primary-700: oklch(0.30 0.11 245);
  --color-primary-800: oklch(0.25 0.08 245);
  --color-primary-900: oklch(0.18 0.05 245);

  /* Success - Grün */
  --color-success-50:  oklch(0.97 0.01 140);
  --color-success-500: oklch(0.70 0.15 140);
  --color-success-900: oklch(0.35 0.10 140);

  /* Danger - Rot */
  --color-danger-50:  oklch(0.97 0.02 0);
  --color-danger-500: oklch(0.60 0.22 0);
  --color-danger-900: oklch(0.30 0.18 0);

  /* Warning - Orange */
  --color-warning-50:  oklch(0.97 0.02 30);
  --color-warning-500: oklch(0.70 0.18 30);
  --color-warning-900: oklch(0.35 0.14 30);

  /* Neutral - Grau */
  --color-neutral-50:  oklch(0.98 0.00 0);
  --color-neutral-500: oklch(0.50 0.00 0);
  --color-neutral-900: oklch(0.20 0.00 0);

  /* Dark Mode */
  --color-bg-dark:  oklch(0.15 0.02 245);
  --color-text-dark: oklch(0.95 0.01 245);
}
```

**Farbwirkung & Psychologie:**

| Farbe | Psychologische Wirkung | Beste Einsätze |
|-------|------------------------|-----------------|
| **Blau** (240-260°) | Vertrauen, Stabilität, Kühle | Banking, Tech, Enterprise |
| **Grün** (120-150°) | Wachstum, Gesundheit, Natur | Healthcare, Eco, Apps |
| **Orange** (25-45°) | Energie, Aktion, Wärme | E-Commerce, CTA, Gaming |
| **Lila** (270-300°) | Kreativität, Premium, Innovation | Luxury, Creative Tools |
| **Rot** (0-15°) | Dringlichkeit, Warnung, Passion | Alerts, Deals, Zustimmung |
| **Gelb** (60-80°) | Optimismus, Aufmerksamkeit | Highlights, Warnings |

---

## 2.3 Grid-Systeme & Layout-Patterns <a id="23-grid-systeme"></a>

### CSS Grid Modern – Bento Grid & Container Queries

**Bento Grid Implementierung:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1rem, 2vw, 2rem);
  grid-auto-rows: 300px;
}

/* Featured Item spanning 2x2 */
.bento-item.featured {
  grid-column: span 2;
  grid-row: span 2;
}

/* Responsive ohne Media Queries */
@container (min-width: 600px) {
  .bento-item {
    grid-column: span 1;
  }
  
  .bento-item.featured {
    grid-column: span 2;
  }
}

@container (min-width: 900px) {
  .bento-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**HTML Struktur:**
```html
<div class="bento-grid">
  <div class="bento-item featured">
    <img src="hero.jpg" alt="Featured" />
    <h2>Main Feature</h2>
  </div>
  <div class="bento-item">
    <h3>Item 2</h3>
  </div>
  <div class="bento-item">
    <h3>Item 3</h3>
  </div>
  <div class="bento-item">
    <h3>Item 4</h3>
  </div>
</div>
```

### Moderne Layout-Patterns

**1. MASONRY LAYOUT:**
```css
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  grid-auto-rows: auto;
}

/* Alternating heights */
.masonry-item:nth-child(3n) {
  grid-row: span 2;
}
```

**2. SPLIT-SCREEN LAYOUT:**
```css
.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.split-left {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  padding: 60px;
}

.split-right {
  display: flex;
  align-items: center;
  padding: 60px;
  background: white;
}

/* Responsive */
@media (max-width: 768px) {
  .split-layout {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    min-height: auto;
  }
}
```

**3. CARD GRID MIT ASPECT RATIO:**
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
}

.card {
  aspect-ratio: 16 / 9; /* Fixed Ratio */
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-8px);
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

---

## 2.4 Design Tokens & Semantische Variablen <a id="24-design-tokens"></a>

### Token-Hierarchie (W3C Design Tokens Format)

**3-Ebenen-Modell:**
```json
{
  "primitive": {
    "color": {
      "blue": { "50": "#f0f9ff", "500": "#3b82f6" }
    },
    "spacing": { "4": "4px", "8": "8px" }
  },
  "semantic": {
    "color": {
      "brand": { "primary": "{primitive.color.blue.500}" },
      "status": { "success": "{primitive.color.green.500}" }
    }
  },
  "component": {
    "button": {
      "primary": { "bg": "{semantic.color.brand.primary}" }
    }
  }
}
```

**CSS Output mit Style Dictionary:**
```css
/* Primitive Layer */
--primitive-color-blue-50: #f0f9ff;
--primitive-color-blue-500: #3b82f6;
--primitive-spacing-4: 4px;
--primitive-spacing-8: 8px;

/* Semantic Layer */
--color-brand-primary: var(--primitive-color-blue-500);
--color-brand-on-primary: white;
--color-status-success: #10b981;
--color-status-error: #ef4444;

/* Component Layer */
--button-primary-bg: var(--color-brand-primary);
--button-primary-text: var(--color-brand-on-primary);
--button-primary-padding: var(--primitive-spacing-8);
```

**Dark Mode mit CSS Variables:**
```css
:root {
  --color-bg: white;
  --color-text: #1f2937;
  --color-border: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1f2937;
    --color-text: #f3f4f6;
    --color-border: #374151;
  }
}

/* Manual toggle fallback */
[data-theme="dark"] {
  --color-bg: #1f2937;
  --color-text: #f3f4f6;
}
```

---

# TEIL 3: UI, INTERAKTIONSMUSTER & MIKROMOMENTE

## 3.1 Navigationstypen <a id="31-navigationstypen"></a>

### Command Palette Implementation

**Complete Code Example:**
```tsx
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

export function CommandPalette() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen(open => !open)
      }
      if (e.key === 'Escape') {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const commands = [
    { id: '1', label: 'Dashboard', icon: '📊', action: () => router.push('/dashboard') },
    { id: '2', label: 'Settings', icon: '⚙️', action: () => router.push('/settings') },
    { id: '3', label: 'Create New', icon: '✨', action: () => console.log('create') },
    { id: '4', label: 'Dark Mode', icon: '🌙', action: () => toggleDarkMode() },
  ]

  const filtered = commands.filter(cmd =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      {open && (
        <div className="command-palette-overlay" onClick={() => setOpen(false)}>
          <div className="command-palette" onClick={e => e.stopPropagation()}>
            <input
              autoFocus
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="command-input"
            />
            <div className="command-list">
              {filtered.map(cmd => (
                <button
                  key={cmd.id}
                  className="command-item"
                  onClick={() => {
                    cmd.action()
                    setOpen(false)
                  }}
                >
                  <span className="icon">{cmd.icon}</span>
                  <span>{cmd.label}</span>
                </button>
              ))}
            </div>
            <div className="command-hint">
              Press <kbd>ESC</kbd> to close
            </div>
          </div>
        </div>
      )}
    </>
  )
}
```

**CSS Styling:**
```css
.command-palette-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 100px;
  z-index: 1000;
}

.command-palette {
  width: 90%;
  max-width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.command-input {
  width: 100%;
  padding: 16px;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  font-size: 16px;
  outline: none;
}

.command-list {
  max-height: 400px;
  overflow-y: auto;
}

.command-item {
  width: 100%;
  padding: 12px 16px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
  border: none;
  background: none;
  cursor: pointer;
  transition: background 0.2s;
}

.command-item:hover {
  background: #f3f4f6;
}

.command-hint {
  padding: 8px 16px;
  font-size: 12px;
  color: #9ca3af;
  border-top: 1px solid #e5e7eb;
}
```

### Mega Menu (Accessible)

```tsx
export function MegaMenu() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="mega-menu">
      <button
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen(!open)}
        className="mega-trigger"
      >
        Products
        <ChevronIcon />
      </button>

      {open && (
        <div className="mega-panel" role="menu">
          <div className="mega-group">
            <h3 id="products-label" className="mega-label">By Product</h3>
            <ul aria-labelledby="products-label">
              <li><a href="/products/analytics" role="menuitem">Analytics</a></li>
              <li><a href="/products/automation" role="menuitem">Automation</a></li>
            </ul>
          </div>

          <div className="mega-group">
            <h3 id="solutions-label" className="mega-label">By Use Case</h3>
            <ul aria-labelledby="solutions-label">
              <li><a href="/solutions/marketing" role="menuitem">For Marketing</a></li>
              <li><a href="/solutions/sales" role="menuitem">For Sales</a></li>
            </ul>
          </div>

          <div className="mega-featured">
            <img src="promo.jpg" alt="New Feature" />
            <h4>Introducing AI Assistant</h4>
            <a href="/features/ai" className="learn-more">Learn More →</a>
          </div>
        </div>
      )}
    </nav>
  )
}
```

---

## 3.2 Mikrointeraktionen <a id="32-mikrointeraktionen"></a>

### Optimistic UI Pattern

```tsx
import { useState } from 'react'

export function OptimisticLike({ postId, initialLikes }) {
  const [optimisticCount, setOptimisticCount] = useState(initialLikes)
  const [isLoading, setIsLoading] = useState(false)

  const handleLike = async () => {
    // 1. Sofortiges visuelles Feedback
    setOptimisticCount(prev => prev + 1)
    setIsLoading(true)

    try {
      // 2. API-Call
      const response = await fetch(`/api/posts/${postId}/like`, {
        method: 'POST',
      })

      if (!response.ok) throw new Error('Failed to like')

      const data = await response.json()
      
      // 3. Sync mit Server-Zustand
      setOptimisticCount(data.likes)
    } catch (error) {
      // 4. Rollback bei Fehler
      setOptimisticCount(initialLikes)
      toast.error('Failed to like post')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button onClick={handleLike} disabled={isLoading}>
      ❤️ {optimisticCount}
    </button>
  )
}
```

### Skeleton Loader

```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f3f4f6 0%,
    #e5e7eb 50%,
    #f3f4f6 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

.skeleton-card {
  padding: 16px;
}

.skeleton-title {
  height: 24px;
  margin-bottom: 12px;
  width: 80%;
}

.skeleton-text {
  height: 16px;
  margin-bottom: 8px;
}

.skeleton-text.short {
  width: 60%;
}
```

---

## 3.3 Animations-Kurven & Spring Physics <a id="33-animations-kurven"></a>

### Framer Motion – Vollständige Beispiele

```tsx
import { motion } from 'framer-motion'

// 1. VARIANTS für Orchestration
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export function AnimatedList({ items }) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map(item => (
        <motion.li key={item.id} variants={itemVariants}>
          {item.text}
        </motion.li>
      ))}
    </motion.ul>
  )
}

// 2. GESTURES
export function DragCard() {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -50, bottom: 50 }}
      dragElastic={0.2}
      whileDrag={{ scale: 1.1 }}
      whileHover={{ shadow: '0 10px 30px rgba(0,0,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="card"
    >
      Drag me!
    </motion.div>
  )
}

// 3. LAYOUT ANIMATIONS
export function LayoutExample() {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div layout onClick={() => setExpanded(!expanded)}>
      {expanded ? <FullContent /> : <Summary />}
    </motion.div>
  )
}

// 4. SCROLL ANIMATIONS
export function ParallaxHero() {
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2])

  return (
    <motion.div style={{ opacity, scale }}>
      <h1>Parallax Hero</h1>
    </motion.div>
  )
}
```

---

# TEIL 4: UX-STRATEGIE & INFORMATIONSARCHITEKTUR

## 4.1 Card Sorting <a id="41-card-sorting"></a>

**Prozess & Tools:**
```
1. VORBEREITUNG:
   - 30-60 Karten mit Features/Topics
   - 15-30 Teilnehmer
   - Tool: Optimal Workshop, Miro, UserZoom

2. DURCHFÜHRUNG:
   - Open Card Sorting: Nutzer erstellen Kategorien
   - Closed: Vordefinierte Kategorien validieren
   - 15-30 Min pro Session

3. ANALYSE:
   - Dendrogramm (Cluster-Tree) erstellen
   - Häufigste Gruppierungen
   - Naming-Conventions ableiten

4. UMSETZUNG:
   - Navigation neu strukturieren
   - Kategorie-Namen anpassen
   - A/B-Test mit altem Design
```

---

## 4.2 Tree Testing <a id="42-tree-testing"></a>

**Implementierung:**
```
1. STRUKTUR:
   - Text-only Sitemap
   - Keine Bilder/Designer-Tricks
   - 3-4 Ebenen maximal

2. TASKS:
   - "Wo würden Sie X finden?"
   - 8-12 realistische Aufgaben
   - First-Click-Analyse (80% Erfolgsvorhersage)

3. METRIKEN:
   - Success Rate
   - Time on Task
   - Directness (direkt vs. umweg)

4. TOOLS:
   - Treejack (Industry Standard)
   - Maze
   - UserZoom
```

---

## 4.3 Mental Models <a id="43-mental-models"></a>

**Anwendungen:**
- Logo links oben = Home
- Hamburger ☰ = Mobile Nav
- Herz ❤️ = Favorit
- Lupe 🔍 = Suche
- Warenkorb = E-Commerce

---

## 4.4 User Journeys & Flow Design <a id="44-user-journeys"></a>

**Struktur:**
```
Awareness → Consideration → Decision → Retention → Advocacy
   ↓             ↓              ↓           ↓          ↓
Touchpoints  Pain Points   Conversion   Engagement  Referral
```

---

# TEIL 5: STYLING-STRATEGIEN & CSS-FRAMEWORKS

## 5.1 Tailwind CSS v4 <a id="51-tailwind-v4"></a>

**Neue Features 2025:**
- OKLCH Native Palette
- Container Queries @container
- CSS Cascade Layers
- 3D Transforms transform-style-3d
- @starting-style für Enter Animations
- not-* Variants für Negation

**Performance Boost:**
```
v3 → v4:
- Full Build: 378ms → 100ms (3.78× faster)
- Incremental: 44ms → 5ms (8.8× faster)
```

**config.js Beispiel:**
```javascript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: 'oklch(0.97 0.01 245)',
          500: 'oklch(0.50 0.15 245)',
        },
      },
      animation: {
        'bounce-in': 'bounceIn 0.5s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
```

---

## 5.2 PandaCSS <a id="52-pandacss"></a>

**Zero-Runtime CSS-in-JS:**
```tsx
import { css } from '@panda/css'

const buttonStyle = css({
  bg: 'blue.500',
  color: 'white',
  px: '4',
  py: '2',
  _hover: { bg: 'blue.600' },
})

export function Button() {
  return <button className={buttonStyle}>Click</button>
}
```

---

## 5.3 UnoCSS <a id="53-unocss"></a>

**Instant Atomic CSS:**
```tsx
// Attributify Mode
<div bg="blue-500" text="white" p="4">
  Hello
</div>
```

---

## 5.4 Vanilla Extract <a id="54-vanilla-extract"></a>

**TypeScript-First CSS:**
```ts
import { style, createTheme } from '@vanilla-extract/css'

export const [themeClass, vars] = createTheme({
  colors: {
    primary: '#0070f3',
  },
})

export const button = style({
  background: vars.colors.primary,
})
```

---

## 5.5 Style Dictionary <a id="55-style-dictionary"></a>

**Design Token Pipeline:**
```json
{
  "color": {
    "brand": {
      "primary": { "value": "#0070f3" }
    }
  }
}
```

Output: CSS, JS, iOS, Android Tokens

---

# TEIL 6: UI COMPONENT LIBRARIES

## 6.1 shadcn/ui <a id="61-shadcnui"></a>

**Installation:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button dialog form
```

**50+ Components, Copy-Paste Model, Radix + Tailwind**

---

## 6.2 Radix UI + Motion One <a id="62-radix-ui"></a>

**Accessible Primitives + Motion:**
```tsx
<Dialog.Root>
  <Dialog.Content asChild>
    <motion.div animate={{ opacity: 1 }} />
  </Dialog.Content>
</Dialog.Root>
```

---

## 6.3 Magic UI <a id="63-magic-ui"></a>

**50+ Animated Components**
- Backgrounds, Text Effects, Cards, Buttons
- Production-ready, Copy-paste

---

## 6.4 Aceternity UI <a id="64-aceternity-ui"></a>

**High-End Interactive Components**
- 3D Cards, Parallax, WebGL Effects
- Premium Interactions

---

## 6.5 NextUI / HeroUI <a id="65-nextui-heroui"></a>

**40+ Components, RSC Support**
- Theming, Accessibility, Light/Dark Mode

---

## 6.6 Mantine v7 <a id="66-mantine-v7"></a>

**150+ Hooks & Components**
- Native CSS, Dark Mode, TypeScript-first
- Exceptional Documentation

---

# TEIL 7: ANIMATIONS-BIBLIOTHEKEN

## 7.1 Framer Motion <a id="71-framer-motion"></a>

**Siehe 3.3 – Vollständige Code-Beispiele**

---

## 7.2 React Spring <a id="72-react-spring"></a>

**Physics-Based:**
```tsx
const spring = useSpring({
  from: { opacity: 0 },
  to: { opacity: 1 },
  config: { tension: 280, friction: 60 },
})
```

---

## 7.3 Motion One <a id="73-motion-one"></a>

**5KB Alternative:**
```typescript
animate('.element', { opacity: 1 }, { duration: 1 })
```

---

# TEIL 8: CURSOR & AI-GESTÜTZTES DESIGN

## 8.1 Cursor Tool <a id="81-cursor-tool"></a>

**Workflow:**
1. Figma/Sketch Design
2. Cursor Chat: "Implement with shadcn/ui"
3. Component Code generieren
4. Iterativ verfeinern
5. Deployment

---

## 8.2 AI Tools <a id="82-ai-tools"></a>

- **v0.dev**: Text → shadcn/ui Component
- **Galileo**: Screenshot → Design
- **Locofy**: Figma → React Code

---

# TEIL 9: DESIGNSYSTEM-GOVERNANCE

## 9.1 Storybook 8 <a id="91-storybook"></a>

```bash
npx storybook@latest init
npm run storybook
```

**Addons:** a11y, interactions, viewport, themes

---

## 9.2 Dokumentation <a id="92-dokumentation"></a>

- **Nextra/Mintlify**: Professionelle Docs
- **GitHub Pages**: Hosting
- **Versioning**: Semantic Versioning

---

# TEIL 10: PRAKTISCHE IMPLEMENTIERUNG

## 10.1 Component Checklist <a id="101-component-checklist"></a>

```
☑ Accessibility (ARIA, Keyboard Nav)
☑ Dark Mode Support
☑ Responsive (Mobile-First)
☑ Loading States
☑ Error States
☑ Empty States
☑ TypeScript Types
☑ Unit Tests (Vitest)
☑ E2E Tests (Playwright)
☑ Storybook Story
☑ Documentation
```

---

## 10.2 Performance-Optimierung <a id="102-performance"></a>

**Core Web Vitals:**
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1

**Techniques:**
- Code Splitting
- Image Optimization
- Font Loading with display: swap
- CSS-in-JS Alternative (Zero-Runtime)

---

## 10.3 Accessibility Checklist (WCAG 2.2) <a id="103-accessibility"></a>

```
☑ Semantic HTML
☑ ARIA Labels & Roles
☑ Keyboard Navigation
☑ Focus Management
☑ Color Contrast (4.5:1)
☑ Screen Reader Testing
☑ Skip Links
☑ Form Labels
☑ Alt Text
☑ Reduced Motion Support
```

**Reduced Motion CSS:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## RESSOURCEN & TOOLS

### Design
- Figma, Sketch, Penpot

### Prototyping
- ProtoPie, Principle, Rive

### Testing
- Maze, Optimal Workshop, Hotjar

### Color & Typography
- Leonardo, Huetone, FontShare

### Component Discovery
- Omlet, Mobbin, Awwwards

### Code Quality
- Biome, Vitest, Playwright

---

## ZUSAMMENFASSUNG: COMPLETE WORKFLOW

### 1. RESEARCH
→ Card Sorting → Tree Testing → Mental Models

### 2. DESIGN
→ Figma → Design Tokens → Component Specs

### 3. DEVELOP
→ Cursor AI → shadcn/ui → Tailwind/PandaCSS

### 4. DOCUMENT
→ Storybook → Nextra → GitHub Pages

### 5. TEST
→ Vitest (Unit) → Playwright (E2E) → Accessibility

### 6. DEPLOY
→ Vercel/Netlify → Monitoring

---

**Ende der vollständigen Wissensbasis 2025/2026**
Alle 10 Teile mit umfassenden Implementierungsbeispielen, Best Practices und praktischen Code-Snippets.
