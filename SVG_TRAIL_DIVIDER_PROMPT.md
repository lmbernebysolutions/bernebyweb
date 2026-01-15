# SVG Trail-Divider Generator Prompt - SCHWEINEPFOTEN / EBER-FUßABDRÜCKE

## Prompt für AI/Code-Generatoren (z.B. ChatGPT, Claude, GitHub Copilot)

```
Erstelle SVG-Dateien für Trail-Divider mit SCHWEINEPFOTEN-FUßABDRÜCKEN zwischen Website-Sektionen, inspiriert von react-section-dividers (https://github.com/openscript-ch/react-section-dividers.git).

## Anforderungen:

### Design-Spezifikationen:
1. **Zwei parallele Spuren mit Schweinepfoten-Fußabdrücken** (Wildschwein/Eber-Pfoten)
   - Linke Spur bei 35% der Breite
   - Rechte Spur bei 65% der Breite
   - Vertikale Ausrichtung (von oben nach unten)
   - **WICHTIG: Echte Fußabdrücke/Pfoten-Abdrücke, nicht nur Linien!**

2. **Schweinepfoten-Design:**
   - Jeder Fußabdruck zeigt eine Schweinepfote (wie vom Eber/Wildschwein)
   - Form: Oval/elliptisch mit 4 Zehen vorne (Klauen)
   - Größe: Ca. 8-12px Breite, 12-16px Höhe pro Fußabdruck
   - Abstand zwischen Fußabdrücken: Ca. 30-40px vertikal
   - Alternierend: Linke Pfote, dann rechte Pfote (wie beim Gehen)
   - Minimalistisch und subtil, aber erkennbar als Pfoten-Spuren
   - Farbe: Electric Cyan (#01FAF9) mit 40-50% Opacity

3. **Technische Spezifikationen:**
   - SVG-Format
   - Responsive (width="100%", preserveAspectRatio="none")
   - Höhe: 100px (anpassbar)
   - ViewBox: "0 0 100 100" (für Skalierung)

### SVG-Struktur für Schweinepfoten-Fußabdrücke:

```svg
<svg
  width="100%"
  height="100"
  viewBox="0 0 100 100"
  xmlns="http://www.w3.org/2000/svg"
  preserveAspectRatio="none"
>
  <!-- Linke Spur - Schweinepfoten-Fußabdrücke -->
  <g transform="translate(30, 0)">
    <!-- Fußabdruck 1 (oben) -->
    <ellipse cx="0" cy="15" rx="4" ry="6" fill="#01FAF9" fill-opacity="0.5" />
    <!-- 4 Zehen/Klauen vorne -->
    <circle cx="-2" cy="10" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="9" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="2" cy="10" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="8" r="1" fill="#01FAF9" fill-opacity="0.5" />
    
    <!-- Fußabdruck 2 (mitte) -->
    <ellipse cx="0" cy="50" rx="4" ry="6" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="-2" cy="45" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="44" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="2" cy="45" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="43" r="1" fill="#01FAF9" fill-opacity="0.5" />
    
    <!-- Fußabdruck 3 (unten) -->
    <ellipse cx="0" cy="85" rx="4" ry="6" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="-2" cy="80" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="79" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="2" cy="80" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="78" r="1" fill="#01FAF9" fill-opacity="0.5" />
  </g>

  <!-- Rechte Spur - Schweinepfoten-Fußabdrücke (leicht versetzt) -->
  <g transform="translate(65, 0)">
    <!-- Fußabdruck 1 (oben, leicht nach rechts versetzt) -->
    <ellipse cx="0" cy="25" rx="4" ry="6" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="-2" cy="20" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="19" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="2" cy="20" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="18" r="1" fill="#01FAF9" fill-opacity="0.5" />
    
    <!-- Fußabdruck 2 (mitte) -->
    <ellipse cx="0" cy="60" rx="4" ry="6" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="-2" cy="55" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="54" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="2" cy="55" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="53" r="1" fill="#01FAF9" fill-opacity="0.5" />
    
    <!-- Fußabdruck 3 (unten) -->
    <ellipse cx="0" cy="95" rx="4" ry="6" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="-2" cy="90" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="89" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="2" cy="90" r="1.5" fill="#01FAF9" fill-opacity="0.5" />
    <circle cx="0" cy="88" r="1" fill="#01FAF9" fill-opacity="0.5" />
  </g>
</svg>
```

### Varianten erstellen:

1. **Variant 1: Klare Schweinepfoten-Fußabdrücke (Standard)**
   - Deutlich sichtbare Pfoten-Abdrücke
   - 3-4 Fußabdrücke pro Spur
   - Füllung: Electric Cyan mit 50% Opacity
   - Zehen/Klauen sichtbar

2. **Variant 2: Subtile Schweinepfoten-Fußabdrücke**
   - Leichtere, subtilere Pfoten-Abdrücke
   - 3-4 Fußabdrücke pro Spur
   - Füllung: Electric Cyan mit 30% Opacity
   - Für dezenteren Look

3. **Variant 3: Outline Schweinepfoten (Nur Umrisse)**
   - Nur Umrisse der Pfoten, nicht gefüllt
   - Stroke: Electric Cyan, 1px
   - Opacity: 40%
   - Minimalistischer Stil

4. **Variant 4: Gradient Schweinepfoten (Optional)**
   - Pfoten mit Verlauf von oben nach unten
   - Von Electric Cyan zu transparent
   - Für subtileren, verblassenden Effekt

### React/Next.js Integration:

Die SVG-Dateien sollen in eine React-Komponente integriert werden können:

```tsx
interface SectionTrailDividerProps {
  variant?: 'solid' | 'dashed' | 'dotted' | 'gradient';
  height?: number;
  color?: string;
  opacity?: number;
}
```

### Design-Inspiration:

- **WICHTIG: Echte Schweinepfoten/Wildschwein-Pfoten (Eber-Pfoten)!**
- Wie eine Fährte/Spur im Wald - erkennbare Fußabdrücke
- Zwei parallele Spuren (links und rechts)
- Alternierend angeordnet (wie beim Gehen: links, rechts, links, rechts)
- Minimalistisch, aber klar als Pfoten erkennbar
- Inspiriert vom Eber-Logo (Wildschwein) der Marke
- Sollte wie eine visuelle "Fährte" zwischen Sektionen wirken

### Farbschema:

- Primary: Electric Cyan (#01FAF9)
- Background: Deep Navy (#032448)
- Opacity Levels: 30-50% für Subtilität

### Responsive Verhalten:

- Auf Mobile: Linien können dünner sein (stroke-width: 1.5px)
- Auf Desktop: Volle Breite und Sichtbarkeit
- Sollte in allen Viewport-Größen gut aussehen

## Erwartete Ausgabe:

Erstelle 4 SVG-Dateien mit SCHWEINEPFOTEN-FUßABDRÜCKEN:
1. `trail-divider-pawprints-solid.svg` - Klare, gefüllte Schweinepfoten-Fußabdrücke
2. `trail-divider-pawprints-subtle.svg` - Subtile, leichtere Pfoten-Abdrücke
3. `trail-divider-pawprints-outline.svg` - Nur Umrisse der Pfoten
4. `trail-divider-pawprints-gradient.svg` - Pfoten mit Verlauf

Jede Datei sollte:
- **Echte Schweinepfoten-Fußabdrücke zeigen** (nicht nur Linien!)
- Oval/elliptische Form mit 4 Zehen/Klauen vorne
- Zwei parallele Spuren (35% und 65% Breite)
- 3-4 Fußabdrücke pro Spur, alternierend angeordnet
- Sauberen, optimierten SVG-Code enthalten
- Kommentare für Anpassungen haben
- Responsive sein (width="100%", preserveAspectRatio="none")
- In React/Next.js verwendbar sein
- Electric Cyan (#01FAF9) Farbe verwenden
```

---

## Alternative: Prompt für DALL-E / Midjourney (Visuelle Referenz)

```
Create a minimalist SVG design showing two parallel vertical trails with WILD BOAR / PIG FOOTPRINTS (Schweinepfoten), like animal tracks connecting website sections. 

Style: 
- Two parallel vertical trails at 35% and 65% width
- Each trail shows 3-4 pig/wild boar footprints (hoof prints)
- Footprints are oval/elliptical with 4 toes/claws visible at the front
- Alternating pattern (left foot, right foot, left foot, right foot)
- Electric cyan color (#01FAF9) with 50% opacity
- Minimalist, clean, like a trail or path in the forest
- Vertical orientation, connecting top to bottom
- Industrial, technical aesthetic
- Similar to section dividers in modern web design

Technical requirements:
- SVG format
- Vector graphics
- Scalable
- Clear, recognizable pig/wild boar footprints (not just lines!)
- Each footprint: oval shape with 4 small circles for toes/claws
- Clean and professional
```

---

## Verwendung des Prompts:

### Mit ChatGPT/Claude:
Kopiere den ersten Prompt (für Code-Generatoren) und füge ihn ein. Die AI wird dann die SVG-Dateien generieren.

### Mit GitHub Copilot:
1. Öffne eine neue `.svg` Datei
2. Schreibe einen Kommentar mit dem Prompt
3. Copilot wird den SVG-Code vorschlagen

### Mit VS Code Extensions:
- SVG Preview Extension
- SVG Optimizer
- SVG to React Component Converter

---

## Integration in React:

Nach der Generierung können die SVG-Dateien so verwendet werden:

```tsx
import SolidTrailDivider from './trail-divider-solid.svg';
import DashedTrailDivider from './trail-divider-dashed.svg';

export const SectionTrailDivider = ({ variant = 'solid' }) => {
  const SvgComponent = variant === 'dashed' ? DashedTrailDivider : SolidTrailDivider;
  
  return (
    <div className="w-full h-24 bg-deep-navy">
      <SvgComponent className="w-full h-full" />
    </div>
  );
};
```

---

## Referenzen:

- [react-section-dividers GitHub Repo](https://github.com/openscript-ch/react-section-dividers.git)
- [SVG Specification](https://www.w3.org/TR/SVG/)
- [React SVG Integration](https://react-svgr.com/)
