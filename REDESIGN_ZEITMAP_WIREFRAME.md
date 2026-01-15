    # BERNEBY SOLUTIONS - REDESIGN ZEIT-MAP & WIREFRAME

    **Zweck:** Vollständige Dokumentation der aktuellen Website-Struktur, Inhalte und Assets für ein vollständiges Redesign durch eine KI.

    **Wichtig:** Dieses Dokument enthält NUR strukturelle und inhaltliche Vorgaben. Design-Entscheidungen (Layout, Spacing, visuelle Umsetzung) werden der Redesign-KI überlassen, ABER: Das Farbsystem und Design-Konsistenz-Patterns (Rundungen, Unique Points, Special Grafiken) MÜSSEN beibehalten werden.

    ---

    ## 📐 SITE-MAP (Zeit-Map)

    ### Hauptseite (`/`)
    1. **Hero Section**
    2. **Review Bar** (Social Proof)
    3. **Solution Reveal** (Scroll-Story mit 4 Problem-Lösung-Paaren)
    4. **Section Trail Divider** (Paw Print Pattern)
    5. **Hero Scroll Demo** (USP Intro)
    6. **USP Showcase** (Bento Grid mit 5 Services)
    7. **Section Trail Divider**
    8. **Performance Section** (Dashboard Deep Dive)
    9. **Voice-Guard Section** (Service Deep Dive)
    10. **Geo-Net Section** (Service Deep Dive)
    11. **Web Marketing Section** (Service Deep Dive)
    12. **Section Trail Divider**
    13. **Case Studies Section** (Erfolgsgeschichten)
    14. **Section Trail Divider**
    15. **Final CTA Section**
    16. **Analysis Form** (Multi-Step Lead-Generierung)
    17. **Newsletter Section**

    ### Weitere Seiten (Referenz)
    - `/services` - Detaillierte Service-Beschreibungen
    - `/portfolio` - Case Studies mit Metriken
    - `/about` - Firmenprofil
    - `/blog` - Content Marketing
    - `/pricing` - Pricing-Pläne

    ---

    ## 🎨 FARBSYSTEM (MUSS BEIBEHALTEN WERDEN)

    ### Primärfarben
    - **Deep Navy (Hintergrund):** `#032448` / `#050A14`
    - **Electric Cyan (Akzent):** `#01FAF9`
    - **Rust Orange (Sekundär):** `#C1510F`
    - **Concrete Gray (Text):** `#F8FAFC`

    ### Verwendung
    - **Electric Cyan:** Primäre Akzentfarbe für CTAs, Highlights, Icons, Glow-Effekte
    - **Rust Orange:** Sekundäre Akzente, Badges, Warnungen
    - **Deep Navy:** Haupt-Hintergrund, Cards
    - **Concrete Gray:** Text, Subtitles

    ---

    ## 🔤 TYPOGRAPHY SYSTEM

    ### Fonts
    - **Sans-Serif:** Inter (Headlines, Body)
    - **Monospace:** JetBrains Mono (Zahlen, Code, technische Daten)

    ### Verwendung
    - **Headlines:** Bold, uppercase optional, tracking-tighter
    - **Body:** Regular, normal case, leading-relaxed
    - **Zahlen/Metriken:** `font-mono` (JetBrains Mono)
    - **CTAs:** Bold, uppercase, tracking-wider

    ---

    ## 🎯 DESIGN-KONSISTENZ (MUSS BEIBEHALTEN WERDEN)

    ### Rundungen
    - **Cut Corner / Hauer:** `rounded-hauer` - Top-left und Bottom-right abgerundet, Top-right und Bottom-left scharf
    - **Standard Cards:** `rounded-2xl` oder `rounded-3xl`
    - **Buttons:** `rounded-full` oder `rounded-hauer`

    ### Special Grafiken (MÜSSEN INTEGRIERT WERDEN)
    1. **Berneby Logo (SVG):** Vollständiger Pfad in `ANHANG A`
    2. **Cyan B Icon:** Vollständiger Pfad in `ANHANG B`
    3. **Paw Print Pattern:** Für Section Dividers (siehe `ANHANG C`)

    ### Unique Design Points
    - **Glassmorphism:** `bg-white/5`, `backdrop-blur-md`, `border-white/10`
    - **Glow-Effekte:** `drop-shadow` mit Electric Cyan
    - **Gradient Overlays:** `bg-gradient-to-r from-electric-cyan to-blue-500` für Text
    - **Grid Pattern:** Subtiles technisches Raster im Hintergrund

    ---

    ## 📄 SEKTION 1: HERO SECTION

    ### Struktur
    - **Layout:** Full-width, centered content
    - **Hintergrund:** Aurora Background (animiertes Gradient)
    - **Watermark:** Berneby Logo (groß, rechts, halb angeschnitten, opacity-5, blur-sm, floating animation)

    ### Inhalte
    - **Headline:** "Der digitale Revierführer für dein Handwerk"
    - "Revierführer" in Gradient (Electric Cyan → Blue)
    - **Subline:** "Wir kombinieren High-End Webdesign mit smarten Automatisierungen, damit du dich auf dein Handwerk konzentrieren kannst."
    - **Quick USPs (4 Punkte):**
    1. Regionale Dominanz
    2. 24/7 Voice-Guard
    3. Social Media Marketing
    4. Website Erstellung
    - **CTAs:**
    - Primary: "Kostenlose Analyse starten" (Interactive Hover Button)
    - Secondary: "Zur Live-Demo" (Border Button)

    ### Zusätzliche Komponenten
    - **Hero Feature Switcher:** Interaktive Feature-Präsentation (optional)

    ---

    ## 📄 SEKTION 2: REVIEW BAR

    ### Struktur
    - **Layout:** Horizontal scrolling marquee
    - **Hintergrund:** Deep Navy, border-bottom white/5

    ### Inhalte (6 Reviews)
    1. **Bauer Bedachungen:** "Die Anfragen-Qualität hat sich massiv verbessert."
    2. **Klein Fensterbau:** "Endlich werden wir auch in den Nachbarorten gefunden."
    3. **Weber Elektro:** "Keine verpassten Anrufe mehr dank Voice-Guard."
    4. **Holzbau Meyer:** "Umsatz ist seit dem Relaunch um 30% gestiegen."
    5. **Zimmerei Holzbau:** "Top Service! Wir fühlen uns verstanden."
    6. **Schmidt SHK:** "Mehr 5-Sterne Bewertungen als in 5 Jahren davor."

    ### Format
    - Avatar (32x32)
    - Name (Bold)
    - Username (Gray)
    - Review Text

    ---

    ## 📄 SEKTION 3: SOLUTION REVEAL (Scroll-Story)

    ### Struktur
    - **Layout:** Sticky scroll, 600vh Höhe
    - **Mechanik:** 4 Problem-Lösung-Paare, die beim Scrollen aufgedeckt werden
    - **Visual:** Links Text, Rechts animierte Visuals

    ### Problem-Lösung-Paare

    #### 1. Digitale Unsichtbarkeit → Geo-Net Dominator
    - **Problem Label:** "Digitale Unsichtbarkeit"
    - **Problem Title:** "Die Konkurrenz schnappt dir die Aufträge weg."
    - **Problem Description:** "Deine Kunden suchen online, aber finden dich nicht. Während du echte Qualitätsarbeit leistest, gewinnt die laute Konkurrenz mit schlechterer Leistung, nur weil sie besser sichtbar ist."
    - **Solution Label:** "Geo-Net Dominator"
    - **Solution Title:** "Regionale Marktdominanz auf Knopfdruck."
    - **Solution Description:** "Wir verwandeln deine digitale Abwesenheit in absolute regionale Dominanz. Jedes Dorf, jede Stadt – dein Betrieb steht ganz oben, wo die Kunden suchen."
    - **Visual Components:** `Problem1Unsichtbarkeit.tsx`, `Solution1GeoNet.tsx`

    #### 2. Fachkräftemangel → Premium Web & Branding
    - **Problem Label:** "Fachkräftemangel"
    - **Problem Title:** "Gute Leute finden dich nicht attraktiv."
    - **Problem Description:** "Zeitungsanzeigen sind tot. Top-Talente bewerben sich nicht bei Firmen, die digital verstaubt wirken. Dein Team altert, und der Nachwuchs fehlt."
    - **Solution Label:** "Premium Web & Branding"
    - **Solution Title:** "Werde zum Magneten für Top-Leute."
    - **Solution Description:** "Deine neue Website wird zur digitalen Hochglanz-Broschüre. Wir positionieren dich als modernsten Arbeitgeber der Region, bei dem jeder Profi arbeiten will."
    - **Visual Components:** `Problem2Fachkraeftemangel.tsx`, `Solution2PremiumWeb.tsx`

    #### 3. Büro-Wahnsinn → 24/7 Voice-Guard
    - **Problem Label:** "Büro-Wahnsinn"
    - **Problem Title:** "Du opferst deine Abende für Papierkram."
    - **Problem Description:** "Angebote am Wochenende, verpasste Anrufe auf der Baustelle. Dein Büro ist ein Papierstapel, der dir die Freiheit und Energie für das Wesentliche raubt."
    - **Solution Label:** "24/7 Voice-Guard"
    - **Solution Title:** "Backoffice-Vollautomatik rund um die Uhr."
    - **Solution Description:** "Keine verpassten Anrufe, kein Terminstress. Unsere KI übernimmt dein Backoffice, qualifiziert Leads und bucht Termine, während du arbeitest oder schläfst."
    - **Visual Components:** `Problem3BueroWahnsinn.tsx`, `Solution3VoiceGuard.tsx`

    #### 4. Preiskampf → Premium Positioning
    - **Problem Label:** "Preiskampf"
    - **Problem Title:** "Du bist für Kunden nur eine Zahl."
    - **Problem Description:** "Kunden feilschen um jeden Euro, weil sie deinen Wert nicht erkennen. Du wirst vergleichbar gemacht und verlierst Marge an Billiganbieter."
    - **Solution Label:** "Premium Positioning"
    - **Solution Title:** "Verkaufe Wert statt billige Stunden."
    - **Solution Description:** "Wir machen dich zur einzigen logischen Wahl. Keine Preisdiskussionen mehr – Kunden buchen dich, weil du der Experte mit dem besten Ruf bist."
    - **Visual Components:** `Problem4Preiskampf.tsx`, `Solution4PremiumPositioning.tsx`

    ### Animation-Mechanik
    - Problem: Sofort sichtbar, fade-out bei Scroll
    - Solution: Clip-path reveal von rechts nach links
    - Scanline: Cyan-Linie zeigt Reveal-Progress

    ---

    ## 📄 SEKTION 4: SECTION TRAIL DIVIDER

    ### Struktur
    - **Layout:** Full-width, 100px Höhe
    - **Pattern:** Paw Prints (Schweinepfoten-Fußabdrücke) horizontal verteilt
    - **Styling:** Electric Cyan, opacity-0.3, mit leuchtendem Cyan Schatten
    - **Padding:** Container mit px-8 md:px-16 (gleichmäßiger Abstand zu den Rändern)

    ### SVG-Pattern
    - Siehe `ANHANG C` für vollständige SVG-Definition

    ---

    ## 📄 SEKTION 5: HERO SCROLL DEMO (USP Intro)

    ### Struktur
    - **Layout:** Container Scroll Animation
    - **Hintergrund:** Deep Navy

    ### Inhalte
    - **Label:** "Deine Digitale Werkstatt"
    - **Headline:** "Alle Werkzeuge für dein digitales Wachstum"
    - "digitales Wachstum" in Gradient
    - **Visual:** `/images/assets/usp_intro_visual.png` (1400x720)

    ---

    ## 📄 SEKTION 6: USP SHOWCASE (Bento Grid)

    ### Struktur
    - **Layout:** Bento Grid (6 Spalten, auto-rows)
    - **Hintergrund:** Deep Navy mit Grid Pattern

    ### Header
    - **Label:** "Vorsprung durch Technik"
    - **Headline:** "Digitale Werkzeuge für dein Wachstum"
    - "dein Wachstum" in Gradient
    - **Description:** "Wir kombinieren High-End Webdesign mit smarten Automatisierungen, damit du dich auf dein Handwerk konzentrieren kannst."

    ### Bento Cards (5 Services)

    #### 1. Umsatz & Anfragen (2 Spalten)
    - **Icon:** BarChart3
    - **Name:** "Umsatz & Anfragen"
    - **Description:** "Echtzeit-Tracking deiner Leads und des generierten Umsatzes durch unsere Strategie."
    - **CTA:** "Statistiken ansehen"
    - **Background:** Marquee mit Lead-Cards
    - **Sticker:** `/assets/images/dashboard-transparent.png` (176x176)

    #### 2. 24/7 Voice-Guard (2 Spalten)
    - **Icon:** PhoneCall
    - **Name:** "24/7 Voice-Guard"
    - **Description:** "Unser AI-Assistent lässt keinen Kunden ins Leere laufen und qualifiziert sofort."
    - **CTA:** "Demo starten"
    - **Background:** Animated List mit Notifications
    - **Sticker:** `/assets/images/voice-transparent.png` (176x176)

    #### 3. Regionale Dominanz (2 Spalten)
    - **Icon:** Map
    - **Name:** "Regionale Dominanz"
    - **Description:** "Werde in deinem gesamten Einzugsgebiet zur Nummer 1 bei Google & Social Media."
    - **CTA:** "Karte prüfen"
    - **Background:** Globe Icon mit Pulsing Circles
    - **Sticker:** `/assets/images/geo-transparent.png` (176x176)

    #### 4. Website Erstellung (3 Spalten)
    - **Icon:** Layout
    - **Name:** "Website Erstellung"
    - **Description:** "Hochperformante, verkaufsoptimierte Websites, die speziell für das Handwerk entwickelt wurden – einfach und effektiv."
    - **CTA:** "Beispiele ansehen"
    - **Background:** Browser Window Mockup
    - **Sticker:** `/assets/images/web-transparent.png` (176x176)

    #### 5. Social Media Marketing (3 Spalten)
    - **Icon:** Globe
    - **Name:** "Social Media Marketing"
    - **Description:** "Gewinne neue Mitarbeiter und Kunden dort, wo sie sich täglich aufhalten – auf Instagram, Facebook & Co."
    - **CTA:** "Sichtbarkeit erhöhen"
    - **Background:** Social Media Icons (Instagram, Facebook, LinkedIn)
    - **Sticker:** `/assets/images/dgvo-transparent.png` (176x176)

    ---

    ## 📄 SEKTION 7: PERFORMANCE SECTION

    ### Struktur
    - **Layout:** 2-Spalten (Desktop), Stack (Mobile)
    - **Hintergrund:** Deep Navy mit Grid Pattern

    ### Inhalte
    - **Headline:** "Umsatz & Anfragen"
    - **Description:** "Echtzeit-Tracking deiner Leads und des generierten Umsatzes durch unsere Strategie."
    - **Visual:** Dashboard Mockup mit Metriken
    - **Sticker:** `/assets/images/dashboard-transparent.png` (176x176, drop-shadow-lg)

    ### Metriken (Beispiel)
    - Erhaltene Anrufe: 124 (+12%)
    - Qualifizierte Leads: 45 (+28%)
    - Geschätzter Umsatz: €45.000 (+15%)

    ---

    ## 📄 SEKTION 8: VOICE-GUARD SECTION

    ### Struktur
    - **Layout:** 2-Spalten (Desktop), Stack (Mobile)
    - **Hintergrund:** Deep Navy mit Grid Pattern

    ### Inhalte
    - **Headline:** "24/7 Voice-Guard"
    - **Description:** "Unser AI-Assistent lässt keinen Kunden ins Leere laufen und qualifiziert sofort."
    - **Visual:** Phone/Notification Interface
    - **Sticker:** `/assets/images/voice-transparent.png` (176x176, drop-shadow-lg)

    ### Features
    - KI-basierte Anrufqualifizierung
    - 24/7 Verfügbarkeit
    - Automatische Terminbuchung
    - Lead-Tracking

    ---

    ## 📄 SEKTION 9: GEO-NET SECTION

    ### Struktur
    - **Layout:** 2-Spalten (Desktop), Stack (Mobile)
    - **Hintergrund:** Deep Navy mit Grid Pattern

    ### Inhalte
    - **Headline:** "Geo-Net Dominator"
    - **Subline:** "Regionale Marktdominanz auf Knopfdruck"
    - **Description:** "Werde in deinem gesamten Einzugsgebiet zur Nummer 1 bei Google & Social Media."
    - **Visual:** Map/Geographic Visualization
    - **Sticker:** `/assets/images/geo-transparent.png` (176x176, drop-shadow-lg)

    ---

    ## 📄 SEKTION 10: WEB MARKETING SECTION

    ### Struktur
    - **Layout:** 2-Spalten (Desktop), Stack (Mobile)
    - **Hintergrund:** Deep Navy mit Grid Pattern

    ### Inhalte
    - **Headline:** "Websites & Marketing"
    - **Description:** "Hochperformante, verkaufsoptimierte Websites, die speziell für das Handwerk entwickelt wurden – einfach und effektiv."
    - **Visual:** Website Mockup/Browser Window
    - **Sticker:** `/assets/images/web-transparent.png` (176x176, drop-shadow-lg)

    ---

    ## 📄 SEKTION 11: CASE STUDIES SECTION

    ### Struktur
    - **Layout:** Vertical Stack
    - **Hintergrund:** Deep Navy mit Grid Pattern

    ### Header
    - **Label:** "Erfolgsgeschichten"
    - **Headline:** "Ergebnisse, die für sich sprechen"
    - "für sich sprechen" in Gradient
    - **Description:** "Wir erzählen keine Märchen. Wir liefern messbares Wachstum für Handwerksbetriebe im Erzgebirge."

    ### Case Studies (2)

    #### 1. Bedachungen Weber
    - **Industry:** Dachdecker
    - **Description:** "Von 'Man findet uns nicht' zu Marktführer in Annaberg-Buchholz. Durch SEO-Optimierung und Geo-Net Dominator konnten wir die Sichtbarkeit massiv steigern."
    - **Quote:** "Wir müssen jetzt Aufträge ablehnen, weil wir so viele Anfragen bekommen. Ein Luxusproblem!"
    - **Author:** "Thomas Weber, Inhaber"
    - **Image:** `/images/mockups/bedachungen_weber.png`
    - **Metrics:**
    - Monatliche Anfragen: 3 → 28
    - Sichtbarkeit (Städte): 1 → 12

    #### 2. Sanitär Klein & Söhne
    - **Industry:** SHK
    - **Description:** "Das Telefon klingelte früher nur für Kleinreparaturen. Dank Voice-Guard und Vertical Funnels kommen jetzt hochwertige Komplettbad-Sanierungen rein."
    - **Quote:** "Die Qualität der Anfragen ist eine ganz andere Welt. Wir arbeiten weniger, verdienen aber mehr."
    - **Author:** "Michael Klein, Geschäftsführer"
    - **Image:** `/images/mockups/sanitaer_klein.png`
    - **Metrics:**
    - Auftragswert Ø: €850 → €12.500
    - Verlorene Anrufe: 15 → 0

    ### Footer CTA
    - **Text:** "Möchtest du die nächste Erfolgsgeschichte sein?"
    - **Button:** "Gespräch vereinbaren" (Interactive Hover Button)

    ---

    ## 📄 SEKTION 12: FINAL CTA SECTION

    ### Struktur
    - **Layout:** Centered, max-width
    - **Hintergrund:** Deep Navy

    ### Inhalte
    - **Headline:** "Bereit für echtes Wachstum?"
    - "echtes Wachstum" in Gradient
    - **Description:** "Keine Agentur-Buzzwords. Keine leeren Versprechen. Nur messbare Ergebnisse für dein Handwerksunternehmen."
    - **CTAs:**
    - Primary: "Jetzt Analyse anfordern" (Interactive Hover Button)
    - Secondary: "Termin vereinbaren" (Border Button mit Arrow Icon)

    ---

    ## 📄 SEKTION 13: ANALYSIS FORM

    ### Struktur
    - **Layout:** Centered, max-width-xl
    - **Hintergrund:** Deep Navy mit Cyan Glow

    ### Header
    - **Label:** "Kostenlos & Unverbindlich"
    - **Headline:** "Starte deine Potenzial-Analyse"
    - "Potenzial-Analyse" in Gradient
    - **Description:** "Finde heraus, wie viele Kunden dir in deiner Region aktuell entgehen."

    ### Form (Multi-Step, 3 Steps)

    #### Step 1: Website
    - **Field:** "Deine Website (falls vorhanden)"
    - **Placeholder:** "www.dein-betrieb.de"
    - **Type:** URL input

    #### Step 2: Kontakt
    - **Fields:**
    - Name (Text)
    - E-Mail (Email)
    - Telefon (Tel)
    - Rolle (Select: Inhaber, Marketing, Andere)
    - Ziel (Select: Wachstum, Fachkräfte, Automatisierung, Andere)

    #### Step 3: Submit
    - **Button:** "Analyse anfordern" (mit Loading State)
    - **Success State:**
    - Icon: CheckCircle2 (Green)
    - Headline: "Anfrage erhalten!"
    - Description: "Wir haben deine Daten erhalten und starten die Analyse. Du hörst in Kürze von uns (meist innerhalb von 2 Stunden)."
    - Link: "Neue Anfrage starten"

    ### Progress Bar
    - 3 Steps, visual progress indicator

    ### Sticker
    - **DSGVO Badge:** `/assets/images/dgvo-transparent.png` (176x176, drop-shadow-lg)

    ---

    ## 📄 SEKTION 14: NEWSLETTER SECTION

    ### Struktur
    - **Layout:** Card mit 2 Spalten (Desktop), Stack (Mobile)
    - **Hintergrund:** Deep Navy, border-top white/5

    ### Inhalte
    - **Icon:** Mail (Electric Cyan)
    - **Badge:** "Insider Wissen" (Electric Cyan)
    - **Headline:** "Die 'Handwerk 4.0' Strategie-Mails"
    - **Description:** "Erhalte 1x pro Woche konkrete Tipps, wie du Fachkräfte gewinnst und deine Prozesse automatisierst. Keine Werbung, nur Mehrwert."
    - **Form:**
    - Email Input
    - Submit Button: "Anmelden"
    - Disclaimer: "100% kostenlos. Jederzeit abmeldbar."
    - **Success State:**
    - Icon: CheckCircle2 (Green)
    - Message: "Willkommen im Verteiler!"

    ---

    ## 🎨 DESIGN-PATTERNS (MÜSSEN BEIBEHALTEN WERDEN)

    ### Glassmorphism
    ```css
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    ```

    ### Cut Corner / Hauer
    ```css
    border-top-left-radius: 1.5rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 0;
    ```

    ### Glow-Effekte
    ```css
    filter: drop-shadow(0 0 15px rgba(1, 250, 249, 0.5));
    ```

    ### Gradient Text
    ```css
    background: linear-gradient(to right, #01FAF9, #3B82F6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ```

    ---

    ## 📦 ASSETS & BILDER

    ### Sticker Images (alle transparent PNG, 176x176, drop-shadow-lg)
    - `/assets/images/dashboard-transparent.png`
    - `/assets/images/voice-transparent.png`
    - `/assets/images/geo-transparent.png`
    - `/assets/images/web-transparent.png`
    - `/assets/images/dgvo-transparent.png`

    ### Mockup Images
    - `/images/mockups/bedachungen_weber.png`
    - `/images/mockups/sanitaer_klein.png`
    - `/images/assets/usp_intro_visual.png`

    ---

    ## 🔗 NAVIGATION & FOOTER

    ### Navigation (Sticky Header)
    - **Logo:** Berneby Logo (Electric Cyan) + Text "Berneby Solutions"
    - **Links:** Leistungen, Über Uns, Preise
    - **CTA:** "Revier markieren" (Electric Cyan Button)

    ### Footer
    - **Logo:** Berneby Logo (Footer Variant)
    - **Slogan:** "Der digitale Revierführer für dein Handwerk"
    - **Links:** Services, Über Uns, Kontakt, Impressum, Datenschutz
    - **Social Media:** Instagram, Facebook, LinkedIn

    ---

    ## 📝 ANHANG A: BERNEBY LOGO SVG

    ```svg
    <svg viewBox="0 0 1350 1350" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M776.704468,1144.839844 C772.942505,1149.307129 769.649841,1154.304810 765.322632,1158.133301 C755.771484,1166.583374 746.035217,1174.904053 735.749268,1182.422241 C724.442261,1190.686768 712.794922,1198.625977 700.634583,1205.544922 C687.078613,1213.258179 672.868652,1219.854126 658.753357,1226.534912 C653.776611,1228.890503 648.184021,1229.909790 642.970520,1231.807983 C634.771179,1234.793335 626.850769,1238.758057 618.457275,1240.946655 C605.883118,1244.225586 593.054260,1246.635864 580.232239,1248.819702 C571.145325,1250.367432 561.911804,1251.366821 552.705139,1251.812012 C543.360474,1252.264038 537.926514,1246.196655 537.003540,1236.841064 C532.872009,1194.964233 535.939453,1152.995483 535.199402,1111.077637 C534.708191,1083.255371 534.868530,1055.414185 535.206726,1027.587158 C535.473206,1005.657776 536.412842,983.735596 537.166321,961.814087 C537.285278,958.354614 537.979126,954.912598 538.447571,951.467957 C539.817810,941.392639 547.789307,939.037659 555.764648,937.209961 C571.471985,933.610352 587.363586,930.774536 602.971741,926.807434 C607.525269,925.650024 611.413147,921.786865 615.539429,919.062805 C618.816467,916.899353 621.777832,914.157288 625.250000,912.407593 C638.798584,905.580078 651.277161,897.194153 661.992004,886.503967 C670.040955,878.473511 678.212830,870.309448 684.748474,861.084412 C692.848511,849.651489 698.098511,836.594788 701.240234,822.749451 C702.904297,815.416077 706.374023,808.429260 707.496155,801.052856 C708.781860,792.600708 709.246765,783.809143 708.464233,775.312805 C707.550781,765.394653 705.589722,755.441040 702.861877,745.850159 C697.627441,727.446350 691.044312,709.547058 678.946045,694.209656 C676.222961,690.757507 674.236816,686.662720 672.275391,682.684265 C668.338257,674.698425 660.513611,670.795593 654.462830,665.013611 C642.109192,653.208679 625.960632,648.874634 611.320801,641.451782 C602.309753,636.883057 592.638184,635.407410 583.487305,631.867188 C574.661865,628.452820 564.817871,627.610840 555.381836,625.850525 C544.052185,623.736816 537.157837,611.727661 537.188416,603.685364 C537.283447,578.719238 537.544495,553.750916 538.073669,528.790527 C538.330139,516.688599 539.376770,504.604767 539.973511,492.508179 C540.360718,484.659210 545.360901,477.813904 552.617737,475.051849 C558.109802,472.961487 563.398926,470.315857 568.942078,468.388245 C574.069214,466.605286 579.699829,466.080444 584.596069,463.867371 C591.988342,460.526031 599.100830,456.468842 606.024170,452.214539 C612.860291,448.013794 619.179077,442.975677 625.977417,438.707275 C631.452820,435.269470 635.727966,430.951691 638.659607,425.222504 C638.922791,424.708069 639.699463,424.456360 640.624878,424.384216 C640.971375,425.433716 640.930664,426.181702 640.632446,427.113190 C639.922852,428.200714 639.470642,429.104675 638.946411,430.186279 C638.874268,430.363922 638.808167,430.741608 638.506348,430.840240 C637.767639,431.603149 637.330688,432.267395 636.620300,433.099548 C634.882874,434.821564 633.418884,436.375641 631.608643,437.973633 C627.507202,440.677490 623.752075,443.337402 619.721375,446.132935 C618.621277,447.164459 617.796631,448.060303 616.619446,448.989563 C614.115723,450.215424 611.866882,451.262604 609.833374,452.630127 C605.434204,455.588623 601.145447,458.711273 596.861084,461.854706 C596.910767,461.942657 596.775330,461.792786 596.414490,461.807953 C586.065186,465.363647 575.995117,468.693909 566.119019,472.524200 C560.266235,474.794098 554.295166,477.243805 549.198975,480.792694 C546.287476,482.820251 543.565369,487.090057 543.265747,490.566437 C541.740601,508.260101 540.489258,526.015137 540.188232,543.766479 C539.858093,563.228516 540.612244,582.711060 541.010376,602.182312 C541.174194,610.195007 548.672180,619.530457 556.504761,621.699463 C571.522278,625.858154 586.571350,629.903625 601.576965,634.104675 C603.953491,634.769958 606.167908,636.010437 608.462952,636.971191 C614.115723,639.337402 619.979736,641.300659 625.379456,644.145996 C634.274109,648.832886 643.007507,653.866028 651.542114,659.181580 C657.262756,662.744629 662.522217,667.048035 668.106384,671.231689 C668.428345,671.708130 668.688782,671.893005 669.027405,672.350342 C674.994995,682.235291 681.129578,691.657043 686.826172,701.336609 C691.174316,708.724854 694.967651,716.439697 699.029785,724.330078 C699.163818,725.063843 699.275879,725.476868 699.313293,726.271912 C700.488770,730.757812 701.772827,734.851807 702.982971,738.967468 C707.180664,753.244324 712.087158,767.373047 711.170532,782.634460 C710.882690,787.426453 711.127136,792.250366 711.074158,797.376465 C711.007629,798.120911 710.994934,798.548584 710.705933,799.226929 C706.624023,812.140259 703.206116,824.937256 698.880005,837.419556 C695.858826,846.136597 691.594299,854.422791 687.945190,862.943604 C688.005249,862.985901 687.892334,862.889954 687.579834,862.948364 C686.837585,863.666931 686.407715,864.327209 685.690430,865.155518 C683.880676,867.180481 682.358276,869.037292 680.535645,870.959717 C679.802673,871.656494 679.369873,872.287659 678.962402,872.953613 C678.987793,872.988281 678.918457,872.937500 678.586182,872.987061 C677.514221,874.038208 676.774414,875.039795 675.972656,876.246704 C675.910645,876.452026 675.763184,876.854980 675.439819,876.926514 C667.541382,884.044495 659.931580,891.054443 652.422485,898.170593 C651.029663,899.490601 650.043518,901.239807 648.668701,902.860474 C648.467712,902.930054 648.060852,903.054504 647.696350,903.060791 C638.580383,907.902710 629.781250,912.655945 621.125366,917.657043 C619.714233,918.472351 618.935974,920.382812 617.670532,921.863953 C617.475830,921.940735 617.077637,922.069702 616.721313,922.068420 C614.867188,923.308960 613.369385,924.550720 611.659790,925.852661 C611.448059,925.912842 611.020203,926.016724 610.677246,926.022888 C609.222168,926.740417 608.110107,927.451782 606.665405,928.195312 C605.275574,928.543762 604.218323,928.859924 602.816650,929.113403 C601.581421,929.551392 600.690613,930.052185 599.500000,930.622314 C598.791626,930.720215 598.382996,930.748718 597.721191,930.572632 C595.249512,931.112244 593.030945,931.856262 590.461792,932.662964 C589.399780,932.742126 588.688477,932.758606 587.720947,932.571533 C584.307617,933.255859 581.150513,934.143738 577.651978,935.064514 C576.630371,935.182373 575.950195,935.267395 574.856567,935.255859 C565.824768,937.526611 557.134216,939.665100 548.615417,942.348633 C543.683716,943.902283 541.304565,948.067322 541.051697,953.100037 C540.260071,968.851562 539.550537,984.608765 539.001465,1000.370483 C538.608398,1011.654785 538.524231,1022.949951 538.284058,1034.617310 C538.272095,1036.252319 538.278198,1037.510376 538.179016,1039.216919 C538.145142,1041.188354 538.216553,1042.711182 538.270447,1044.686646 C538.211731,1090.089844 538.170654,1135.040527 537.813354,1180.270508 C537.351624,1187.003662 537.096069,1193.457886 537.118530,1199.911011 C537.126831,1202.276978 537.794006,1204.640625 538.151245,1207.406982 C538.161560,1209.146606 538.181335,1210.484619 538.114990,1212.301270 C538.360840,1220.390381 538.540161,1228.011597 539.073303,1235.608032 C539.496582,1241.638916 543.716125,1248.023315 548.298035,1248.470703 C559.299316,1249.544556 570.369263,1249.965088 581.440186,1245.846680 C584.159363,1245.780762 586.446167,1245.718140 589.130554,1245.755615 C591.687805,1245.179688 593.847473,1244.503296 596.298462,1243.808838 C596.972168,1243.728638 597.354553,1243.666626 598.128235,1243.680420 C616.945923,1237.702637 635.498657,1232.002686 653.757446,1225.479858 C667.491760,1220.573242 680.305176,1213.587402 693.296326,1206.879761 C708.062561,1199.255615 720.650818,1188.805054 734.412659,1179.944824 C742.179688,1174.944214 749.214233,1168.779907 756.420105,1162.943970 C760.514343,1159.628174 764.281677,1155.909546 768.209778,1152.387451 C771.029785,1149.858765 773.872131,1147.354858 776.704468,1144.839844 z" />
    </svg>
    ```

    **ViewBox:** `0 0 1350 1350`  
    **Fill:** `currentColor` (für flexible Farbanpassung)

    ---

    ## 📝 ANHANG B: CYAN B ICON SVG

    Das Cyan B Icon verwendet den gleichen SVG-Pfad wie das Berneby Logo, aber mit:
    - **Fill:** `#01FAF9` (Electric Cyan)
    - **ViewBox:** `0 0 1350 1350`

    Siehe `ANHANG A` für den vollständigen Pfad.

    ---

    ## 📝 ANHANG C: PAW PRINT PATTERN (Section Trail Divider)

    Das Paw Print Pattern ist in `public/trail.svg` definiert. Es besteht aus:
    - **2 Pfoten-Paare** (links und rechts)
    - **Farbe:** Electric Cyan (`#01FAF9`)
    - **Opacity:** 0.3
    - **Filter:** Leuchtender Cyan Schatten (Glow)
    - **Verteilung:** Horizontal, gleichmäßig verteilt
    - **Spacing:** ~120px zwischen Paaren
    - **Offset:** Realistische Versetzung für natürlichen Look

    **Vollständige SVG-Definition:** Siehe `src/components/ui/section-trail-divider.tsx` für die komplette Implementierung.

    ---

    ## ✅ CHECKLIST FÜR REDESIGN-KI

    ### Muss beibehalten werden:
    - [ ] Farbsystem (Deep Navy, Electric Cyan, Rust Orange, Concrete Gray)
    - [ ] Cut Corner / Hauer Rundungen
    - [ ] Berneby Logo Integration
    - [ ] Cyan B Icon Integration
    - [ ] Paw Print Pattern für Section Dividers
    - [ ] Glassmorphism-Effekte
    - [ ] Glow-Effekte mit Electric Cyan
    - [ ] Gradient Text für Highlights
    - [ ] Font-Mono für Zahlen/Metriken
    - [ ] Alle Inhalte (Texte, Headlines, CTAs)
    - [ ] Alle Assets (Sticker, Mockups)

    ### Kann neu gestaltet werden:
    - [ ] Layout-Struktur (Spalten, Grids, Spacing)
    - [ ] Animationen (außer Logo/Icon Animationen)
    - [ ] Visual Hierarchy (Größen, Gewichtungen)
    - [ ] Komponenten-Anordnung
    - [ ] Responsive Breakpoints
    - [ ] Interaktive Elemente (Hover, Click)

    ---

    **Erstellt:** 2025  
    **Zweck:** Vollständige Redesign-Dokumentation für KI-basierte Neugestaltung  
    **Wichtig:** Design-Freiheit bei struktureller und inhaltlicher Konsistenz
