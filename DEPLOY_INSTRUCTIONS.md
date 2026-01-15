# DEPLOY INSTRUCTIONS - GitHub & Vercel

## GitHub Repository Setup

### 1. Git Repository initialisieren (falls noch nicht geschehen)
```bash
cd "/Users/lennardmeyer/Berneby Solutions/Code-Space/Intern/BernebyWeb"
git init
```

### 2. Remote Repository hinzufügen
```bash
git remote add origin https://github.com/lmbernebysolutions/bernebyweb.git
# Oder falls bereits vorhanden:
git remote set-url origin https://github.com/lmbernebysolutions/bernebyweb.git
```

### 3. Alle Dateien hinzufügen und committen
```bash
git add .
git commit -m "Initial commit: Berneby Solutions Website - Complete redesign with new components"
```

### 4. Main Branch setzen und pushen
```bash
git branch -M main
git push -u origin main
```

**Hinweis:** Falls du noch nicht eingeloggt bist, musst du dich bei GitHub authentifizieren. Du kannst entweder:
- Ein Personal Access Token verwenden
- SSH-Keys einrichten
- GitHub CLI verwenden (`gh auth login`)

---

## Vercel Projekt erstellen

### 1. Vercel CLI installieren (falls noch nicht installiert)
```bash
npm install -g vercel
```

### 2. Bei Vercel einloggen
```bash
vercel login
```

### 3. Projekt erstellen und deployen
```bash
cd "/Users/lennardmeyer/Berneby Solutions/Code-Space/Intern/BernebyWeb"
vercel
```

Folge den Anweisungen:
- **Link to existing project?** → Nein (für neues Projekt)
- **Project name:** → `bernebyweb` oder wie gewünscht
- **Directory:** → `./` (aktuelles Verzeichnis)
- **Override settings?** → Nein (oder Ja, wenn du Einstellungen anpassen möchtest)

### 4. Production Deploy
```bash
vercel --prod
```

---

## Automatisches Deployment Setup

Nach dem ersten Deploy kannst du in Vercel das GitHub-Repository verbinden:
1. Gehe zu Vercel Dashboard
2. Wähle dein Projekt
3. Settings → Git
4. Verbinde das Repository: `lmbernebysolutions/bernebyweb`
5. Aktiviere "Automatic deployments from Git"

---

## Wichtige Vercel-Konfiguration

Erstelle eine `vercel.json` Datei (optional, für spezielle Einstellungen):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "regions": ["fra1"]
}
```

---

## Environment Variables

Falls du Environment Variables benötigst:
```bash
vercel env add VARIABLE_NAME
```

Oder im Vercel Dashboard:
Settings → Environment Variables

---

**Nach dem Deploy:** Deine Website wird unter einer Vercel-URL verfügbar sein (z.B. `bernebyweb.vercel.app`)
