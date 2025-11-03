# Onboarding für Copilot‑Coding‑Agent (Fate‑Orakel)

Dieses kurze Handbuch hilft Coding Agents und neuen Mitwirkenden, schnell produktiv zu werden.
Sprache: Deutsch (de). Ton: mystisch, freundlich, präzise.

Kernprinzipien
- Minimal‑Änderungen: Bevorzuge gezielte, kleine Änderungen. Große Refaktorings nur nach Absprache.
- Deutsch & Mystik: Alle user‑facing Texte müssen Deutsch sein und die Tonalität des Projekts wahren.
- Accessibility: Respektiere `prefers-high-motion` und andere Zugänglichkeitsanforderungen.
- Tests & Reproduzierbarkeit: Verwende die im Repo vorhandenen Tests und die seedete RNG‑Methodik.

Wichtige Dateien (erst lesen)
- `.github/copilot-instructions.md` — ausführliche, repository‑weite Richtlinien (beste Quelle für Entscheidungen).
- `docs/Fate-Orakel-Masterclass.md` — Design‑ und Animations‑Spezifikation (visuelle Regeln, Glitch‑Levels).
- `app.js`, `index.html`, `styles.css` — Implementierung und CSS. Änderungen hier haben hohe Priorität bei Reviews.
- `tests/fate.spec.ts` — Playwright E2E Tests.

Schnellstart — lokal prüfen
1. Abhängigkeiten installieren:

```bash
npm install
```

2. Lokalen Server starten (falls im Projekt):

```bash
npm start
```

3. Tests ausführen:

```bash
npm test
```

Worauf Du bei Änderungen achten solltest
- UI‑Strings: Nie ins Englische übersetzen. Verwende vorhandene Formulierungen oder halte neuen Text im mystischen Stil.
- Glitch‑System: Die 8 Levels sind zentral. Ändere nicht die Level‑Logik ohne Rücksprache.
- Seeds: Behalte oder erweitere die seedete Zufallsfunktion (`mulberry32` etc.) für reproduzierbare Ergebnisse.
- Performance: Animationen sollten transform/opacity-basiert sein; canvas‑Jobs sollen ordentlich gecancelt werden.
- Images: Nutze vorhandene PNGs und `decoding="async"`, `fetchpriority="high"` für hero assets.

Code‑Qualität & Tests
- Füge `data-testid` Attribute zu neuen interaktiven Elementen hinzu.
- Schreibe mindestens einen Playwright Test für jede neue Benutzerinteraktion.
- Führe `npm test` lokal aus bevor du einen PR öffnest.

PR‑Checklist (für Contributors / Agenten)
- [ ] To‑Do genutzt und aktualisiert (`manage_todo_list`).
- [ ] Änderungen minimal und rückwärtskompatibel.
- [ ] Unit/E2E Tests aktualisiert oder ergänzt (falls nötig).
- [ ] Dokumentation/README aktualisiert, wenn API/UX sich ändert.
- [ ] Commit‑Nachricht klar und in Deutsch.

Kontakt & Eskalation
Bei Unsicherheit oder größeren Änderungen öffne ein Issue mit dem Label `discussion` und verlinke die relevanten Dateien. Maintainer: HookedToFate (siehe README).

---
Kleine, klare Änderungen sind willkommen — halte den Schleier respektvoll. 
