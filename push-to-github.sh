#!/bin/bash
set -e

cd "/Users/lennardmeyer/Berneby Solutions/Code-Space/Intern/BernebyWeb"

echo "📦 Git Status prüfen..."
git status

echo ""
echo "➕ Alle Änderungen hinzufügen..."
git add -A

echo ""
echo "💾 Committen..."
git commit -m "Fix: Korrigiere Import-Pfade für Navbar, Footer und StickyHeader" || echo "Keine Änderungen zum Committen"

echo ""
echo "🔗 Remote Repository prüfen..."
git remote get-url origin 2>/dev/null || git remote add origin https://github.com/lmbernebysolutions/bernebyweb.git

echo ""
echo "🌿 Branch auf 'main' setzen..."
git branch -M main

echo ""
echo "🚀 Auf GitHub pushen..."
git push -u origin main

echo ""
echo "✅ Fertig! Alle Änderungen wurden auf GitHub gepusht."
