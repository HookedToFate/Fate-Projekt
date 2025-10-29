# Fate-Orakel
Karten Zieh Artefakt - Stand 21.10.2025

> Masterclass: Für eine vollständige, design‑ und entwicklungsnahe Beschreibung der Erscheinung, Interaktionen und Effekte siehe
> `docs/Fate-Orakel-Masterclass.md`.

# Vollständige Beschreibung des Fate-Orakels 

## Grundkonzept und Thema

Das Fate-Orakel ist eine mystische, interaktive Weissagungs-Anwendung, die an Tarot-Lesungen erinnert, aber ein eigenes Kartensystem verwendet. Die gesamte Ästhetik ist kosmisch-mystisch: dunkle Violett-, Indigo- und Pinktöne dominieren, als würde man in einen Sternenhimmel blicken. Der "Schleier" ist die zentrale Metapher – eine unsichtbare Grenze zwischen Wissen und Unwissen, die durch die Karten gelüftet wird.


## Visuelle Gestaltung und Atmosphäre

### Hintergrund und Umgebung
Der Hintergrund ist ein fließender Farbverlauf von tiefem Indigo über Violett zu dunklem Pink, wie ein kosmischer Nebel. Darüber liegen mehrere animierte Ebenen:

- **Nebula-Wolken**: Drei große, halbtransparente weiße Nebel-Schichten, die sehr langsam über den Bildschirm driften (jede hat eine eigene Geschwindigkeit und Richtung). Sie bewegen sich über 40-65 Sekunden hinweg, was eine meditative, traumartige Qualität erzeugt.

- **Sternenstaub-Funken**: In bestimmten Bereichen des Bildschirms pulsieren sanfte Lichtflecken – wie entfernte Sterne oder Galaxien, die aufleuchten und wieder verblassen.

- **Papier-Textur**: Über vielen UI-Elementen liegt eine subtile Papier-Textur – feine horizontale Linien, die an handgeschöpftes Papier erinnern und dem Digitalen eine taktile, authentische Qualität verleihen.

### Typografie und Schriftarten
- **Hauptschrift**: Inter – eine moderne, klare serifenlose Schrift für die meisten Texte
- **Überschriften**: Playfair Display – eine elegante Serifenschrift für den Titel und wichtige Überschriften, die Würde und Tradition vermittelt
- **Besondere Karten**: 
  - Schelm-Karten verwenden Comic Sans – absichtlich verspielt und leicht chaotisch
  - Stern-Karten verwenden Playfair Display – philosophisch und würdevoll



## Haupttitel und Einführung

### Der große Titel "Fate Orakel ✨"
Der Titel ist nicht einfach statischer Text, sondern ein lebendiges Element:

- Jeder Buchstabe ist einzeln animiert und schwingt in einer sanften Wellen-Bewegung auf und ab (wie Wasser, das sich kräuselt)
- Die Buchstaben durchlaufen einen Regenbogen-Farbverlauf, der sich langsam bewegt: Rot → Orange → Gelb → Grün → Türkis → Blau → Violett → Pink und zurück zu Rot
- Jeder Buchstabe hat eine leichte zeitliche Verzögerung zur nächsten, sodass die Welle durch das Wort fließt
- Die Buchstaben haben einen subtilen Schein/Glow-Effekt, als würden sie von innen leuchten

### Untertitel und Symbol-Reihe
Unter dem Titel steht "Der Schleier lauscht" in zartem Violett – eine Einladung, die andeutet, dass das Orakel bereit ist, Fragen zu empfangen.

Darunter folgt eine Reihe von sechs großen Symbolen, die die sechs Kartenfarben repräsentieren:
- ♥ (Herz) in Rot mit Glow-Effekt
- ♦ (Karo) in Blau mit Glow-Effekt
- ♣ (Kreuz) in Grün mit Glow-Effekt
- ♠ (Pik) in Grau mit Glow-Effekt
- 🎷 (Saxophon für Schelm) in Bernstein mit Glow-Effekt
- ★ (Stern) in Violett mit Glow-Effekt

Alle Symbole "atmen" – sie werden langsam größer und wieder kleiner in einem 2,6-Sekunden-Rhythmus, als hätten sie einen eigenen Herzschlag.



## Fragebereich und Interaktion

### Das Frage-Eingabefeld
Ein großes, halbtransparentes Textfeld mit weißem Rahmen und Glasmorphismus-Effekt (wie gefrorenes, mattiertes Glas). Der Platzhaltertext lautet: "Welche Wahrheit möchtest du lüften?"

Wenn der Nutzer tippt:
- Das Feld pulsiert sanft (wird kurz heller und bekommt einen stärkeren Schatten)
- Die gesamte Seite wechselt in einen "Resonanz"-Zustand: Die Nebula-Wolken bewegen sich etwas schneller, die Farben werden intensiver
- Dieser Effekt hält für etwa 320 Millisekunden nach jedem Tastendruck an

Das Label über dem Feld: "Deine Frage an den Schleier" ist in zartem Lavendel gehalten.

### Musik-Toggle
Rechts neben dem Fragefeld befindet sich ein Button für Hintergrundmusik:
- **Aus-Zustand**: Zeigt ein durchgestrichenes Lautsprecher-Symbol und den Text "Stille bewahren"
- **An-Zustand**: Zeigt ein Lautsprecher-Symbol und den Text "Musik aktiviert", mit stärkerem Glow und hellerem Hintergrund

Wenn der Nutzer reduzierte Bewegung in seinen Systemeinstellungen aktiviert hat (Barrierefreiheit), erscheint ein kleiner Hinweistext, dass Animationen und Musik automatisch deaktiviert wurden.



## Karten-Ziehungs-Prozess

### Vor der ersten Ziehung
In der Mitte des Bildschirms erscheint:
- Ein großes, abgerundetes Quadrat mit gestricheltem Rahmen (wie ein leerer Rahmen, der auf ein Bild wartet)
- Darin ein Augen-Symbol (👁️) – das "sehende Auge" des Orakels
- Text: "Der Schleier erwartet deine Frage"
- Ein großer violett-pinker Button: "Ziehe dein Schicksal" mit einem Shuffle-Symbol (🔀)

### Während des Ziehens
Wenn der Button geklickt wird:
1. Der Button verschwindet
2. Ein rotierender Ring erscheint (eine kreisförmige Lade-Animation)
3. Der Ring pulsiert mit einem mystischen Schimmer
4. Text: "Die Schicksalsgöttinnen entscheiden..."
5. Wenn ein Glitch bevorsteht (siehe unten), beginnt schon jetzt ein feines Rauschen über dem Ring zu flackern

Dieser Zustand dauert 1,2 Sekunden – lang genug, um Spannung aufzubauen, kurz genug, um nicht langweilig zu werden.

### Die Karten-Enthüllung
Nach der Wartezeit erscheint die Karte mit einer dramatischen Animation:

**Normale Karte**:
- Die Karte fliegt aus dem Nichts heran (von hinten und leicht gedreht)
- Sie wirbelt einmal um ihre eigene Achse (540 Grad Rotation)
- Während der Drehung gibt es einen Moment, wo sie etwas über ihre Zielgröße hinausschießt (Overshoot), bevor sie sich auf normale Größe einpendelt
- Ein Schockwellen-Effekt: Drei konzentrische Ringe expandieren vom Kartenzentrum nach außen (wie wenn ein Stein ins Wasser fällt)
- Ein heller Lichtblitz erhellt kurz den gesamten Bildschirm in der Farbe der Karte
- Ein sanfter Schatten-Effekt legt sich um die Karte

**Die Karte selbst** hat mehrere Schichten:
- **Basis**: Ein Rechteck mit abgerundeten Ecken im Farbverlauf der jeweiligen Farbe
- **Mikrostruktur**: Je nach Kartenfarbe ein kaum sichtbares Muster (Punkte bei Herz, Linien bei Karo, Kreise bei Kreuz, Gitter bei Pik, etc.)
- **Folienschicht**: Ein Glanz-Effekt, der über die Karte streicht (wie bei Sammelkarten mit Hologramm-Effekt)
- **Randleuchten**: Die Karte hat einen weißen Innenrahmen und einen sanften Leuchtrand
- **Atmende Aura**: Um die Karte pulsiert ein sehr subtiler Schein

Auf der Karte:
- **Oben**: Das große Symbol (♥, ♦, ♣, ♠, 🎷, oder ★) – riesig, weiß, mit Glow, sanft atmend
- **Zentrum**: Der Archetyp-Name (z.B. "The Lover", "The Merchant")
- **Unten**: Kartenname und Element (z.B. "Herz • Wasser")

**Bonus-Karten** (Schelm und Stern) haben zusätzlich eine kleine "BONUS"-Plakette in der oberen rechten Ecke.


## Glitch-System (Instabilität)

### Was ist ein Glitch?
Ein Glitch ist ein spezieller Zustand, der zufällig oder durch bestimmte Bedingungen ausgelöst wird. Er repräsentiert kosmische Instabilität – die Karte ist "fehlerhaft", ihre Bedeutung wird verdreht. Visuell und inhaltlich wird alles intensiver und chaotischer.

### Visuelle Glitch-Effekte

**Normale Glitch-Karte**:
- **RGB-Trennung**: Die Karte zeigt drei versetzte Versionen von sich selbst in Rot, Grün und Blau (wie ein Fernseher mit schlechtem Signal). Diese Geister-Versionen schweben leicht um die Hauptkarte und verblassen langsam.

- **Risse und Tränen**: Horizontale Streifen der Karte scheinen sich zu verschieben – Teile der Karte "gleiten" zur Seite, als würde das Bild reißen. Diese Risse bewegen sich wellenförmig über die Karte.

- **Geister-Schatten**: Mehrere halbtransparente Umrisse der Karte erscheinen drumherum, versetzt in verschiedene Richtungen. Sie haben unterschiedliche Farbtönungen und verblassen nach außen.

- **Scanlines**: Horizontale Linien rasen über die Karte von oben nach unten, wie bei einem alten Fernseher oder einem Fehler in der Matrix.

- **Frame-Skips**: Die gesamte Karte scheint kurz "einzufrieren", dann springen Teile vor – als würden Frames in einem Video fehlen.

- **Statik-Rauschen**: Über der Karte liegt ein feines, bewegendes Rauschen aus weißen und grauen Pixeln.

- **Energie-Aura**: Eine wirbelnde, mehrfarbige Aura umgibt die Karte (Pink, Cyan, Blau in einem konischen Gradienten, der sich dreht).

- **Leuchtrahmen**: Ein doppelter gestrichelter Rahmen um die Karte, der zwischen verschiedenen Farben flackert und leicht pulsiert.

- **Glitch-Badge**: Oben links ein rundes Abzeichen mit Blitz-Symbol (⚡) und dem Wort "GLITCH", das leuchtet und pulsiert.

**Blitz-Glitch** (noch intensiver):
- Alle oben genannten Effekte, aber stärker und schneller
- **Blitz-Effekt**: Ein heller, vertikaler Blitz schießt von oben durch die Karte (mit Verzweigungen wie ein echter Blitz)
- **Farb-Inversion**: Die Karte wird kurz in negativen Farben angezeigt (wie ein fotografisches Negativ), mit extremer Farbverschiebung
- **Bildschirm-Blitz**: Der gesamte Bildschirm wird kurz in der Kartenfarbe überflutet (wie ein Kamera-Blitz)
- **Bildschirm-Shake**: Der gesamte Viewport wackelt kurz heftig hin und her

**Spezielle Glitches**:
- **Schelm-Glitch**: Verwendet zusätzlich extreme Farbsättigung, Zittern der Karte und Text-Verzerrungen (als würde der Text zerfließen). Die Karte wirkt "pixelig" und übersättigt.
- **Stern-Glitch**: Sanftere Effekte mit kosmischen Sternen-Twinkles, einem violett-blauen Schimmer und einem rotierenden Halo um die Karte (wie Sternenstaub).

### Glitch-Ketten und Instabilitäts-Zähler
Wenn ein Glitch auftritt, startet eine "Glitch-Kette":
- Die nächsten 5 Ziehungen haben eine erhöhte Glitch-Wahrscheinlichkeit
- Ein Zähler erscheint unter der Karte: Das **Instabilitätsmeter**

**Instabilitätsmeter**:
- Eine abgerundete Box mit dunklem Hintergrund und Glasmorphismus
- Oben: "Kosmische Instabilität" und ein Zähler "x3" (Anzahl der Glitches in der Kette)
- Mitte: Eine Fortschrittsleiste mit 6 Symbolen (⚡ ☄️ ✶ 🜂 🪐 ♾️)
- Jedes Symbol repräsentiert einen Glitch-Level. Erreichte Level leuchten auf, springen leicht hoch und bekommen einen Glow
- Die Fortschrittsleiste füllt sich mit einem mehrfarbigen Verlauf (Gold → Orange → Hellblau)
- Unten: Text "Die Echos des Schleiers summen"
- Ab Level 3: "Schwelle überschritten: das Orakel lodert."

Wenn Level 5-6 erreicht werden: **Feuerwerk**! Mehrere funkelnde Lichtpunkte explodieren über den Bildschirm (simuliert mit radialen Gradienten, die sich schnell ausdehnen und verblassen).

Unter dem Meter: Ein Button **"Schleier harmonisieren"** (siehe unten).

### Instabilitäts-Hintergrund-Effekte
Je höher die Glitch-Kette, desto mehr verändert sich die gesamte Seite:

- **Level 1**: Leichtes Rauschen im Hintergrund (kaum sichtbar)
- **Level 2**: Stärkeres Rauschen, Scanlines über den gesamten Bildschirm, Nebula-Wolken werden farbenfroher
- **Level 3**: Intensive Störungen, die Farben des Hintergrunds verschieben sich (Hue-Rotation), bewegliche "Echo"-Kreise erscheinen an zufälligen Stellen (wie kosmische Störfelder)

Diese Echo-Kreise sind große, halbtransparente Ringe in der Farbe der letzten Glitch-Karte. Sie driften langsam über den Bildschirm und verblassen nach 8 Sekunden.

### Harmonisieren
Wenn der Nutzer "Schleier harmonisieren" klickt:
- Eine helle, weiße Welle expandiert vom Zentrum über den gesamten Bildschirm (wie eine Reinigungswelle)
- Alle Glitch-Effekte verschwinden sofort
- Der Zähler setzt sich auf 0 zurück
- Die Seite kehrt zu ihrem ruhigen Ausgangszustand zurück
- Für 0,9 Sekunden ist eine sanfte "Harmonisierungs-Aura" sichtbar


## Kosmische Ereignisse

Bestimmte Kartenkombinationen lösen spezielle kosmische Ereignisse aus, die mit einem Banner angezeigt werden:

### Event-Banner-Design
Ein abgerundetes Rechteck mit:
- Halbdurchsichtigem Hintergrund in einer Ereignis-spezifischen Farbe
- Leuchtender Rahmen
- Ein rotierendes konisches Gradient-Overlay (wie eine Aurora, die um das Banner kreist)
- Oben: Titel des Ereignisses (z.B. "Elementarer Einklang")
- Unten: Beschreibung des Effekts

### Die vier Ereignis-Typen

**1. Harmonie (Blau-Grün)**:
- Auslöser: Drei gleiche Kartenfarben in Folge
- Effekt: Die nächste Karte kann NICHT glitchen (garantiert rein)
- Banner-Text: "Dreifache [Farbe]-Resonanz beruhigt den Schleier. Die nächste Deutung wird klar und unverzerrt ausgesprochen."

**2. Konflikt (Rot)**:
- Auslöser: Gegensätzliche Farben hintereinander (Herz↔Kreuz oder Karo↔Pik)
- Effekt: Erhöhte Glitch-Chance für die nächste Karte, aber auch erhöhte Bonus-Karten-Chance
- Banner-Text: "[Farbe 1] und [Farbe 2] geraten in Widerstreit. Kosmische Instabilität steigt, doch Bonuskarten locken."

**3. Chaos (Gelb-Orange)**:
- Auslöser: Schelm erscheint nach einer roten Karte (Herz oder Karo)
- Effekt: Die nächste Karte wird "chaotisch verdreht" – die Fortune wird negativ umformuliert, aber OHNE visuellen Glitch
- Banner-Text: "Der Schelm hallt nach und färbt die nächste Weissagung mit absurden Funken."
- Die Karte hat eine kleine Markierung: "Chaos-Echo aktiv"

**4. Konvergenz (Violett)**:
- Auslöser: Stern erscheint, dann eine schwarze Karte (Pik oder Kreuz)
- Effekt: Ein zusätzlicher philosophischer Anhang wird zur Interpretation hinzugefügt
- Banner-Text: "Die Weisheit des Sterns verschmilzt mit [Farbe]. Diese Deutung trägt einen erweiterten philosophischen Nachhall."

Das Event-Banner erscheint für 5,2 Sekunden über der Karte und verblasst dann.


## Die sechs Kartenfarben

### Haupt-Farben (Standard-Deck)

**1. Herz (♥) – The Lover**
- Farbe: Rot-zu-Pink-Verlauf
- Element: Wasser
- Bedeutung: Emotionen, Beziehungen, Liebe, Intuition, Heilung
- Symbol-Stil: Herz-Symbol
- Beispiel-Fortune: "Eine neue Liebe tritt in dein Leben und bringt Wärme und Freude."
- Vibe: Warm, emotional, fließend

**2. Karo (♦) – The Merchant**
- Farbe: Blau-zu-Cyan-Verlauf
- Element: Erde
- Bedeutung: Materieller Wohlstand, praktische Angelegenheiten, Ressourcen, Manifestation
- Symbol-Stil: Diamant-Symbol
- Beispiel-Fortune: "Eine finanzielle Gelegenheit bietet sich aus unerwarteten Kanälen."
- Vibe: Kühl, rational, stabil

**3. Kreuz (♣) – The Creator**
- Farbe: Grün-zu-Smaragd-Verlauf
- Element: Feuer
- Bedeutung: Kreativität, Leidenschaft, Wachstum, Inspiration, Handeln
- Symbol-Stil: Kleeblatt-Symbol
- Beispiel-Fortune: "Ein kreatives Projekt entfacht deine Leidenschaft und deinen Sinn."
- Vibe: Lebendig, energetisch, wachsend

**4. Pik (♠) – The Warrior**
- Farbe: Grau-zu-Dunkelgrau-Verlauf
- Element: Luft
- Bedeutung: Herausforderungen, Konfliktlösung, geistige Klarheit, Transformation
- Symbol-Stil: Pik-Symbol (umgedrehtes Herz mit Stiel)
- Beispiel-Fortune: "Eine Herausforderung offenbart deine verborgene Stärke und Weisheit."
- Vibe: Scharf, herausfordernd, transformativ

### Bonus-Farben (Selten)

**5. Schelm (🎷) – The Trickster**
- Farbe: Bernstein-zu-Orange-Verlauf
- Element: Chaos
- Bedeutung: Nonsens, spielerische Störung, komische Einsicht, Unfug
- Symbol-Stil: Saxophon-Emoji (als Repräsentation von Jazz/Improvisation/Chaos)
- Beispiel-Fortune: "Vertraue keinem Schmetterling, der Geheimnisse trägt."
- Vibe: Absurd, verspielt, unvorhersehbar
- Besonderheit: Verwendet Comic Sans Schrift, Fortune-Texte sind bewusst surreal und sinnlos

**6. Stern (★) – The Philosopher**
- Farbe: Indigo-zu-Violett-Verlauf
- Element: Kosmos
- Bedeutung: Gedanke, Einsicht, zitierte Weisheit, Reflexion
- Symbol-Stil: Stern-Symbol
- Beispiel-Fortune: "Erkenne dich selbst." – Sokrates
- Vibe: Ruhig, weise, tiefgründig
- Besonderheit: Verwendet Playfair Display Schrift, Fortunes sind echte philosophische Zitate

## Interpretations-Anzeige

Nach 0,52 Sekunden (nachdem die Karte vollständig enthüllt ist) erscheint die Interpretation:

### Überschrift
"Dein Schicksal enthüllt" – in großer, weißer Schrift. Bei Glitch-Karten:
- Der Text zittert oder fragmentiert kurz
- Bei Blitz-Glitch: Die Buchstaben erscheinen in Fragmenten (von unten nach oben aufbauend, mit Versatz)

### Frage-Echo
Wenn der Nutzer eine Frage eingegeben hat, wird sie hier wiederholt:
- In einer kleinen, abgerundeten Blase mit Glasmorphismus
- Mit einem Funkeln-Symbol (✨) davor
- Text: "Deine Frage: [Frage]"

### Fortune (Weissagung)
Die Haupt-Weissagung wird in großer, gut lesbarer Schrift angezeigt. Sie erscheint mit einer farb-spezifischen Animation:

- **Herz**: Sanftes Einblenden von unten mit leichtem Blur, der sich auflöst
- **Karo**: Einrutschen von rechts mit leichtem Skew-Effekt
- **Kreuz**: Einzoomen mit leichter Rotation
- **Pik**: Von oben fallen mit Bounce-Effekt
- **Schelm**: Chaotisches Einblenden mit Farbverschiebungen
- **Stern**: Sanftes Aufhellen aus Dunkelheit

Bei Glitch-Karten: Nachdem die Fortune erschienen ist, laufen über 1,2 Sekunden zusätzliche Glitch-Effekte über sie (Farbverschiebungen, Kontrast-Änderungen, Hue-Rotation).

### Info-Box
Darunter folgt eine halbtransparente Box mit Details:
- **Archetyp**: z.B. "The Lover"
- **Element**: z.B. "Wasser"
- **Einfluss**: Die Bedeutungs-Beschreibung der Farbe
- **Gezogen um**: Die Uhrzeit der Ziehung (z.B. "14:23:47")

Bei **Konvergenz-Ereignissen**: Ein zusätzliches Feld erscheint:
- "Philosophischer Nachhall"
- Text: Eine Verbindung zwischen der Stern-Karte und der aktuellen Karte (z.B. "Die Leuchte des Sterns verweilt über Kreuz. Sie verbindet Kosmos mit dem Impuls von Feuer und öffnet eine tiefere Perspektive.")

### Action-Buttons

**"Erneut ziehen"** (Indigo-Violett-Verlauf):
- Symbol: Shuffle-Icon (🔀)
- Zieht eine neue Karte (setzt NUR die aktuelle Karte zurück, behält aber Glitch-Kette und Historie)

**"Insight 🕯️"** (Bernstein-Gelb-Verlauf):
- Nur sichtbar, wenn eine Frage eingegeben wurde
- Wenn geklickt: Eine zusätzliche Box erscheint unter den Buttons

### Insight (Einblick)
Die Insight ist eine personalisierte Interpretation, die:
- Die Frage des Nutzers analysiert
- Die wichtigsten 1-2 Keywords extrahiert
- Diese mit der gezogenen Karte verknüpft
- Eine zusammenhängende Antwort formuliert

Beispiel:
- Frage: "Wird meine Beziehung halten?"
- Keyword: "Beziehung"
- Gezogene Karte: Pik (The Warrior)
- Insight: "The Warrior schärft für „Beziehung" deinen Blick auf das Wesentliche. Eine Herausforderung offenbart deine verborgene Stärke und Weisheit. Bewahre Klarheit und triff überlegte Entscheidungen."

Die Insight erscheint in einer dunklen Box mit gelbem Akzent und dem Label "Antwort:".



## Letzte Deutungen (Historie)

Unter dem Hauptbereich erscheint ein weiterer Bereich: "Letzte Deutungen".

Hier werden die letzten 5 gezogenen Karten als kleine Vorschau angezeigt:
- Jede Karte ist ein kleines Rechteck mit dem Farbverlauf der Kartenfarbe
- Das Symbol in der Mitte
- Die Uhrzeit der Ziehung darunter
- Die Karten sind von links nach rechts sortiert (neueste zuerst)
- Mit jeder Position wird die Karte transparenter (neueste: 100%, zweitneuste: 90%, drittneuste: 75%, etc.)
- Wenn man mit der Maus über eine alte Karte fährt, erscheint ein Tooltip mit der Frage (falls vorhanden)



## Farb-Beschreibungen (Unten auf der Seite)

Unter der Historie gibt es zwei Reihen von Info-Karten:

### Hauptfarben (4 Karten in einer Reihe)
Jede Karte zeigt:
- Ein rundes Icon mit dem Farbverlauf und dem Symbol der Farbe
- Den Archetyp-Namen
- Symbol und Farbname
- Die Bedeutung in kleinerer Schrift

### Bonusfarben (2 größere Karten)
Schelm und Stern werden in einer separaten Reihe gezeigt, wobei jede Karte doppelt so breit ist wie die Hauptfarben.
Beide haben zusätzlich eine kleine "BONUS"-Plakette in der oberen rechten Ecke.

Alle Info-Karten haben:
- Leichte Transparenz und Glasmorphismus
- Einen sanften Hover-Effekt (werden etwas heller, wenn man drüber fährt)
- Eine gestaffelte Einblend-Animation beim Laden der Seite (erscheinen nacheinander mit 60ms Verzögerung)

---

## Tagebuch des Suchenden

Oben rechts auf der Seite (fixiert) befindet sich ein runder Button mit einem Schriftrolle-Emoji (📜).

Wenn man darauf klickt, öffnet sich ein Panel von rechts oben:

### Journal-Panel
- Ein halbtransparentes Overlay mit dunklem Hintergrund und Glasmorphismus

---

## Onboarding für Contributors & Coding Agents

Kurz: Für Hinweise zum Arbeiten mit automatisierten Coding Agents (z. B. GitHub Copilot Coding Agent)
und für repository‑spezifische Regeln, siehe die Dateien im Verzeichnis `.github/`:

- `.github/copilot-instructions.md` – ausführliche, repository‑weite Anweisungen für Copilot
- `.github/copilot-assistant.yml` – kompakte Agentenkonfiguration (maschinell lesbar)
- `.github/ONBOARDING_COPILOT.md` – praktisches Kurz‑Onboarding und PR‑Checklist

Bitte lese diese Dateien bevor du Änderungen vorschlägst oder einen PR öffnest.
- Breite: 340px
- Position: Oben rechts, fixiert

**Inhalt**:
- Überschrift: "Das Tagebuch des Suchenden"
- Erklärung: "Entdecke deine gezogenen Karten und erinnere dich an ihre Worte."
- Ein 2x3-Raster mit allen 6 Kartenfarben

**Jede Karte im Journal**:
- Zeigt Symbol, Name und Bedeutung
- Wenn noch nicht freigeschaltet: Graustufen und halbtransparent
- Wenn freigeschaltet: Volle Farben und es erscheint eine Liste der gezogenen Fortunes (bis zu 6 Stück)

**Journal-Vollendung**:
- Wenn alle 6 Farben freigeschaltet wurden, erscheint ein goldenes Band ("VOLL") oben im Panel
- Der Journal-Button bekommt einen goldenen Glow

---

## Admin-Panel (versteckt)

Unten links auf der Seite befindet sich ein kleiner, runder Button mit einem Zahnrad-Symbol (⚙️).

Wenn aktiviert, öffnet sich ein Admin-Kontrollpanel (für Testzwecke):

### Admin-Panel-Funktionen

**Karte erzwingen**:
- Dropdown: Wähle eine Farbe (Herz, Karo, Kreuz, Pik, Schelm, Stern)
- Checkbox: "Glitch erzwingen"
- Dropdown: "Normal" oder "Blitz" (nur aktiv, wenn Glitch aktiviert)
- Button: "Karte simulieren" – zieht eine Karte mit den gewählten Einstellungen

**Verwaltung**:
- Button: "Glitch-Boost auffüllen" – setzt den Boost-Zähler auf 5
- Button: "Kette & Boost zurücksetzen" – setzt Glitch-Kette auf 0
- Button: "Verlauf leeren" (rot) – löscht alle gezogenen Karten und setzt das Journal zurück


---

## Musik-System

Das Orakel verfügt über ein stimmungsvolles Hintergrundmusik-System, das sich dynamisch an die gezogenen Karten anpasst.

### Musik-Quellen
Jede Kartenfarbe hat ihre eigene thematische Hintergrundmusik:

- **Herz**: Sanfte, ambient-romantische Klänge mit warmen Synthesizern
- **Karo**: Ätherische Glockenklänge, kristallin und klar
- **Kreuz**: Inspirierende, erhebende Ambient-Musik mit wachsenden Melodien
- **Pik**: Dunkle, dramatische Ambient-Klänge mit tiefen Bässen
- **Schelm**: Skurrile, verspielte Musik mit unerwarteten Wendungen
- **Stern**: Kühle, breite Ambient-Sounds mit kosmischer Qualität
- **Standard**: Eine neutrale mystische Forest-Ambient als Fallback

### Funktionsweise
- Die Musik ist standardmäßig ausgeschaltet
- Wenn aktiviert: Beim Ziehen einer Karte wechselt die Musik zur passenden Farbe
- Die Musik läuft in einer Endlosschleife (Loop)
- Lautstärke: 35% (angenehm im Hintergrund)
- Übergang: Wenn eine neue Karte gezogen wird, wechselt die Musik sofort (kein Fade)
- Die Musik pausiert automatisch, wenn:
  - Der Nutzer Musik deaktiviert
  - Der Nutzer reduzierte Bewegung in Systemeinstellungen hat
  - Das Browser-Tab nicht aktiv ist

---

## Responsive Design und mobile Anpassungen

Die gesamte Anwendung passt sich verschiedenen Bildschirmgrößen an:

### Desktop (groß)
- Volle Breite mit maximal 1280px Container
- Alle Animationen in voller Geschwindigkeit
- Nebula-Wolken deutlich sichtbar
- Karten-Größe: bis zu 440px breit
- Vier Spalten bei den Farb-Info-Karten

### Tablet (mittel)
- Container nimmt 90% der Breite ein
- Karten-Größe: angepasst an Viewport-Breite (ca. 46% der Ansicht)
- Zwei Spalten bei den Farb-Info-Karten
- Admin-Panel und Journal-Panel verkleinert

### Mobile (klein)
- Container nimmt fast volle Breite ein (mit kleinem Padding)
- Karten-Größe: 86% der Viewport-Breite
- Eine Spalte für Farb-Info-Karten
- Buttons stapeln sich vertikal statt horizontal
- Fragefeld und Musik-Button erscheinen untereinander statt nebeneinander
- Journal-Panel nimmt fast volle Breite ein
- Touch-freundlichere Button-Größen (min. 48px Höhe)

### Barrierefreiheit-Modus
Wenn der Nutzer "reduzierte Bewegung" in seinen Systemeinstellungen aktiviert hat:
- Alle Animationen werden auf Dauer 0 gesetzt (passieren sofort)
- Keine Rotationen, Skalierungen oder komplexe Transformationen
- Nebula-Wolken bewegen sich nicht
- Titel-Wellen-Effekt ist statisch
- Glitch-Effekte sind stark reduziert oder ganz ausgeschaltet
- Musik ist automatisch deaktiviert
- Alle Elemente haben volle Opazität (keine Pulsierungen)

---

## Interaktionsdetails und Mikro-Animationen

### Button-Verhalten
Jeder Button in der Anwendung hat subtile Feedback-Mechanismen:

**Standard-Zustand**: 
- Leichter Glow um den Button
- Sanfter Schatten

**Hover** (Maus drüber):
- Button hebt sich um 2px nach oben
- Schatten wird stärker und größer
- Leichte Vergrößerung (103% der Originalgröße)
- Hintergrund wird etwas heller
- Übergang dauert 300ms mit einer sanften Easing-Kurve

**Klick/Active**:
- Button bewegt sich 1px nach unten
- Schrumpft auf 98% der Größe
- Ein Glanz-Effekt streicht von links nach rechts über den Button (wie ein Lichtstrahl)
- Dieser Effekt dauert 180ms

**Focus** (Tastatur-Navigation):
- Ein deutlicher Fokus-Ring in der Farbe des Buttons erscheint
- 2px Abstand zum Button-Rand
- Respektiert die Systemeinstellungen für Fokus-Indikatoren

### Eingabefeld-Verhalten
Das Frage-Eingabefeld reagiert auf Interaktion:

**Standard**:
- Halbtransparent mit weißem Rahmen
- Subtiler Glow (kaum sichtbar)

**Focus** (wenn aktiv zum Tippen):
- Rahmen wird heller und dicker
- Glow wird stärker (violett-pink)
- Feld hebt sich visuell vom Hintergrund ab

**Beim Tippen**:
- Bei jedem Tastendruck "pulsiert" das Feld kurz (key in `questionPulseKey`)
- Transformation: Bewegt sich 2px nach oben
- Glow verstärkt sich kurz maximal
- Zusätzliche Leucht-Schicht erscheint am Rand
- Nach 320ms kehrt es zur Focus-Darstellung zurück

### Karten-Hover (auf Desktop)
Wenn man mit der Maus über eine gezogene Karte fährt:
- Die Karte vergrößert sich leicht (105%)
- Der Schatten wird tiefer und dramatischer
- Die Farben werden minimal intensiver
- Übergang: 500ms mit smooth Easing
- Bei Glitch-Karten: Die Glitch-Effekte intensivieren sich kurz

### Journal-Button-Pulsierung
Wenn das Journal vollständig ist (alle Karten freigeschaltet):
- Der Button bekommt einen goldenen Rahmen
- Ein pulsierender goldener Glow erscheint
- Die Pulsierung wechselt zwischen 80% und 100% Intensität in 2 Sekunden

---

## Technische Animationsdetails

### Timing und Easing-Funktionen
Die Anwendung verwendet verschiedene Easing-Kurven für unterschiedliche Effekte:

**Ease-Enter** (für Eintreten von Elementen):
- Kubische Bézierkurve: (0.2, 0.9, 0.2, 1.02)
- Effekt: Startet langsam, beschleunigt schnell, endet mit einem leichten "Overshoot" (geht über das Ziel hinaus und schwingt zurück)

**Ease-Exit** (für Verlassen von Elementen):
- Kubische Bézierkurve: (0.22, 0.58, 0.12, 0.98)
- Effekt: Startet schnell, verlangsamt sanft zum Ende

**Ease-Elastic** (für spielerische Bewegungen):
- Kubische Bézierkurve: (0.34, 1.56, 0.64, 1)
- Effekt: Startet, überschießt deutlich, schwingt zurück – wie ein Gummiband

### Staggering (Zeitversetztes Erscheinen)
Wenn mehrere Elemente gleichzeitig erscheinen sollen (z.B. die Farb-Info-Karten), werden sie zeitversetzt animiert:

- Erstes Element: Verzögerung 0ms
- Zweites Element: Verzögerung 60ms
- Drittes Element: Verzögerung 120ms
- Viertes Element: Verzögerung 180ms
- Fünftes Element: Verzögerung 240ms

Dies erzeugt eine wellenartige Erscheinung, die organisch und angenehm wirkt.

### Animationsdauern
Verschiedene Animationstypen haben unterschiedliche Standard-Dauern:

- **Extra kurz** (xs): 180ms – für sofortiges Feedback (Button-Klicks)
- **Kurz** (s): 500ms – für kleine Bewegungen (Hovers, Fades)
- **Mittel** (m): 800ms – für Standard-Übergänge (Karten-Erscheinen)
- **Lang** (l): 1200ms – für dramatische Enthüllungen (Karten-Rotation)
- **Extra lang** (xl): 1800ms – für langsame Ambient-Effekte (Nebula-Drift)

---

## Farbpsychologie und semantisches Design

### Farbcodierung der Kartenfarben

**Rot/Pink (Herz)**:
- Psychologie: Leidenschaft, Wärme, Liebe, Emotion
- Verwendung: Für emotionale und beziehungsbezogene Inhalte
- Der Rot-zu-Pink-Verlauf vermittelt eine Entwicklung von intensiver Leidenschaft zu sanfter Zuneigung

**Blau/Cyan (Karo)**:
- Psychologie: Vertrauen, Stabilität, Kühle, Klarheit
- Verwendung: Für praktische und materielle Themen
- Der Blau-zu-Cyan-Verlauf vermittelt Tiefe und Klarheit, wie Wasser oder Kristall

**Grün/Smaragd (Kreuz)**:
- Psychologie: Wachstum, Natur, Frische, Leben
- Verwendung: Für Kreativität und Expansion
- Der Grün-zu-Smaragd-Verlauf vermittelt natürliches Wachstum und Reichtum

**Grau/Dunkelgrau (Pik)**:
- Psychologie: Neutralität, Ernsthaftigkeit, Stärke, Klarheit
- Verwendung: Für Herausforderungen und mentale Klarheit
- Die grauen Töne vermitteln nüchterne Objektivität und Fokus

**Bernstein/Orange (Schelm)**:
- Psychologie: Energie, Verspieltheit, Unvorhersehbarkeit
- Verwendung: Für chaotische und humorvolle Inhalte
- Der warme Verlauf vermittelt kreative Anarchie und Freude

**Indigo/Violett (Stern)**:
- Psychologie: Spiritualität, Weisheit, Mysterium, Tiefe
- Verwendung: Für philosophische und transzendente Themen
- Der Verlauf vermittelt kosmische Weite und tiefe Kontemplation

### Verwendung von Weiß und Transparenz
- **Reines Weiß**: Wird für Text verwendet, um maximale Lesbarkeit auf dunklem Hintergrund zu gewährken
- **Halbtransparentes Weiß**: Wird für UI-Elemente verwendet (Glasmorphismus-Effekt) – vermittelt Leichtigkeit und Eleganz
- **Schwarze Akzente**: Sehr sparsam eingesetzt, hauptsächlich in Schatten und sehr dunklen Hintergrund-Elementen

---

## Text-Verarbeitung und Fortunes-Logik

### Wie Fortunes ausgewählt werden
Jede Kartenfarbe hat 5 vordefinierte Fortunes (Weissagungen). Wenn eine Karte gezogen wird:

1. Das System wählt basierend auf einem Zufallsgenerator eine der 5 Fortunes aus
2. Bei Glitch oder Chaos-Echo wird die Fortune "verdreht" (siehe unten)
3. Die Fortune wird angezeigt

### Fortune-Verdrehung (für Glitches und Chaos)
Wenn ein Glitch oder Chaos-Echo aktiv ist, wird die normale Fortune in eine düstere Version transformiert:

**Prozess**:
1. Der Text wird in Wörter zerlegt
2. Das System sucht nach "positiven" Schlüsselwörtern (z.B. "Liebe", "Heilung", "Erfolg", "Wachstum")
3. Für jedes gefundene Wort gibt es eine Liste negativer Gegenstücke:
   - "Liebe" → "Obsession" oder "Besessenheit"
   - "Heilung" → "Wunden" oder "Erosion"
   - "Erfolg" → "Ausgebeutet werden" oder "Besteuert werden"
   - "Wachstum" → "Verfall" oder "Aufblähung"
4. Ein zufälliges negatives Wort ersetzt das positive
5. Die Groß-/Kleinschreibung des Originals wird beibehalten

**Beispiel**:
- Original: "Eine neue Liebe tritt in dein Leben und bringt Wärme und Freude."
- Verdreht: "Eine neue Obsession tritt in dein Leben und bringt Wärme und Freude."

Wenn kein passendes Wort gefunden wird, wird ein zufälliges längeres Wort durch "Verlust", "Leere" oder "Ruin" ersetzt.

### Keyword-Extraktion aus Fragen
Wenn der Nutzer eine Frage eingibt, analysiert das System sie:

1. Der Text wird in Wörter aufgeteilt
2. "Stoppwörter" werden entfernt – häufige, bedeutungslose Wörter wie "der", "die", "das", "und", "ist", "wird", etc.
3. Sehr kurze Wörter (unter 3 Buchstaben) werden ignoriert
4. Die ersten 2 verbleibenden Wörter werden als "Keywords" extrahiert
5. Diese Keywords werden in der Insight verwendet

**Beispiel**:
- Frage: "Wird meine Beziehung zu meinem Partner halten?"
- Nach Entfernung der Stoppwörter: "Beziehung", "Partner", "halten"
- Extrahierte Keywords: "Beziehung", "Partner"

### Frage-Profil und Kartenfarben-Gewichtung
Das System erstellt ein "Profil" der Frage, um die Kartenziehung zu beeinflussen:

**Schritt 1: Themen-Erkennung**
Jede Kartenfarbe hat eine Liste assoziierter Wörter:
- Herz: "liebe", "gefühl", "beziehung", "partner", "emotion", etc.
- Karo: "geld", "arbeit", "job", "karriere", "erfolg", etc.
- Kreuz: "kreativ", "idee", "projekt", "kunst", etc.
- Pik: "konflikt", "problem", "entscheidung", "angst", etc.
- Schelm: "chaos", "spaß", "zufall", "überraschung", etc.
- Stern: "weisheit", "sinn", "bedeutung", "philosophie", etc.

**Schritt 2: Gewichtung berechnen**
Wenn ein Wort aus der Frage in einer Themen-Liste gefunden wird:
- Die entsprechende Kartenfarbe bekommt +0.35 Gewicht
- Wenn mehrere Treffer für dieselbe Farbe: Gewicht addiert sich

**Schritt 3: Spezielle Boni**
- Wenn emotionale Wörter erkannt werden: Herz bekommt +0.45 Bonus
- Wenn die Frage sehr lang ist (über 120 Zeichen): Stern bekommt +0.5 Bonus
- Wenn "Chaos" erkannt wird: Schelm bekommt +0.45 Bonus

**Schritt 4: Ziehung**
Statt komplett zufällig wird die Karte basierend auf den Gewichten gezogen:
- Alle Gewichte werden summiert
- Eine Zufallszahl wird generiert
- Die Karte mit dem entsprechenden Gewichtsbereich wird ausgewählt

**Beispiel**:
- Frage: "Wird meine Beziehung halten?"
- "Beziehung" ist in Herz-Liste → Herz: 1.35 Gewicht (1.0 Standard + 0.35 Bonus)
- Emotionale Erkennung → Herz: 1.80 Gewicht (+ 0.45 Bonus)
- Karo, Kreuz, Pik haben je 1.0 Gewicht
- Gesamtgewicht: 6.80
- Herz hat 26.5% Chance (statt 25%), die anderen je ~18%

Dies macht die Ziehungen nicht deterministisch, sondern nur sanft beeinflusst – es bleibt mystisch und überraschend.

---

## Insight-Generierung

Die Insight ist die personalisierte Antwort auf die Frage des Nutzers. Sie wird aus mehreren Komponenten zusammengesetzt:

### Komponenten einer Insight

**1. Focus (Fokus)**
- Das erste extrahierte Keyword wird in Anführungszeichen gesetzt
- Format: „Keyword"
- Beispiel: „Beziehung"
- Fallback, wenn kein Keyword: "dein Anliegen"

**2. Nuance (Nuance)**
- Das zweite extrahierte Keyword (falls vorhanden)
- Wird nur verwendet, wenn vorhanden
- Format: „Keyword"
- Beispiel: „Partner"

**3. Fortune-Text**
- Die gezogene Fortune, aber bereinigt: Alle Anführungszeichen werden entfernt
- Wird wörtlich eingefügt

**4. Guidance (Leitfaden)**
- Jede Kartenfarbe hat einen spezifischen Ratschlag:
  - Herz: "Folge deinem Gefühl und teile deine Offenheit."
  - Karo: "Setze auf greifbare Schritte und sorge für Stabilität."
  - Kreuz: "Bringe deine Ideen mutig ins Handeln."
  - Pik: "Bewahre Klarheit und triff überlegte Entscheidungen."
  - Schelm: "Umarme das Unvorhersehbare mit einem Augenzwinkern."
  - Stern: "Suche stille Weisheit und vertraue auf Erkenntnis."

**5. Template (Vorlage)**
Jede Kartenfarbe hat eine eigene Satz-Vorlage:

**Herz-Template**:
"Deine Frage zu [Focus] trifft auf [Archetyp], der dein Herz ausrichtet. [Fortune]. [Guidance]. [Optional: Nimm [Nuance] bewusst wahr, bevor du antwortest.]"

**Karo-Template**:
"Für [Focus] bietet [Archetyp] eine nüchterne Einschätzung: [Fortune] [Guidance]. [Optional: Plane konkrete Schritte, um [Nuance] zu sichern.]"

**Kreuz-Template**:
"Der Archetyp [Archetyp] sieht um [Focus] einen auflodernden Impuls. [Fortune] [Guidance]. [Optional: Lass [Nuance] als zusätzlichen Funken nicht verstreichen.]"

**Pik-Template**:
"[Archetyp] schärft für [Focus] deinen Blick auf das Wesentliche. [Fortune] [Guidance]. [Optional: Prüfe dabei, wie [Nuance] deine Entscheidung färbt.]"

**Schelm-Template**:
"[Archetyp] verwirbelt [Focus] mit schelmischer Logik: [Fortune] [Guidance]. [Optional: Behalte [Nuance] dabei locker im Auge.]"

**Stern-Template**:
"[Archetyp] beantwortet [Focus] mit stiller Erkenntnis. [Fortune] [Guidance]. [Optional: Richte deine Reflexion auch auf [Nuance].]"

### Beispiel einer vollständigen Insight-Generierung

**Input**:
- Frage: "Soll ich meinen Job wechseln und etwas Neues wagen?"
- Gezogene Karte: Kreuz (The Creator)
- Fortune: "Ein kreatives Projekt entfacht deine Leidenschaft und deinen Sinn."

**Verarbeitung**:
1. Keywords extrahiert: "Job", "Neues"
2. Focus: „Job"
3. Nuance: „Neues"
4. Archetyp: "The Creator"
5. Guidance: "Bringe deine Ideen mutig ins Handeln."
6. Template: Kreuz

**Output**:
"Der Archetyp The Creator sieht um „Job" einen auflodernden Impuls. Ein kreatives Projekt entfacht deine Leidenschaft und deinen Sinn. Bringe deine Ideen mutig ins Handeln. Lass „Neues" als zusätzlichen Funken nicht verstreichen."

---

## Persistenz und Speicherung (konzeptuell)

Obwohl die Anwendung aktuell keine echte LocalStorage-Integration hat, ist das Journal-System so konzipiert, dass es vorbereitet ist:

### Was theoretisch gespeichert würde

**Journal-Status**:
- Für jede der 6 Kartenfarben:
  - Ob sie freigeschaltet wurde (Boolean)
  - Liste der gezogenen Fortunes (bis zu 6 Stück)

**Ziehungs-Historie**:
- Die letzten 50-100 Ziehungen mit:
  - Kartenfarbe
  - Gezogene Fortune
  - Gestellte Frage (falls vorhanden)
  - Zeitstempel
  - Ob Glitch aufgetreten ist

**Glitch-Ketten-Status**:
- Aktueller Glitch-Zähler
- Verbleibende Boost-Ziehungen

**Statistiken** (für potentielles Dashboard):
- Gesamtzahl der Ziehungen
- Häufigste Kartenfarbe
- Längste Glitch-Kette
- Anzahl der Glitches insgesamt
- Häufigste Frage-Themen

### Session-Verhalten
Aktuell werden alle Daten nur während der Browser-Session gespeichert:
- Wenn die Seite neu geladen wird: Alles wird zurückgesetzt
- Journal bleibt leer
- Historie verschwindet
- Glitch-Ketten enden

Dies erzeugt ein "frisches Orakel"-Gefühl bei jedem Besuch, könnte aber für langfristige Nutzer frustrierend sein.

---

## Deck-Slot und spielerische Details

### Der Deck-Slot
Am unteren Rand der Karten-Bühne (wo die Karte erscheint) gibt es einen subtilen "Deck-Slot":
- Eine kleine, ovale Form in dunklem Grau mit Schatten
- Sieht aus wie ein Schlitz, aus dem die Karten "gezogen" werden
- Hat einen Verlauf von hellgrau zu transparent
- Innenschatten erweckt Tiefe
- Ist 120px breit und 10px hoch

Dies ist ein rein visuelles Detail, das die Metapher des "Karten-Ziehens" verstärkt.

### Folienschicht auf Karten
Jede Karte hat eine "Foil"-Schicht (wie Sammelkarten):
- Ein diagonaler Glanz-Effekt, der über die Karte läuft
- Kombiniert zwei Gradienten:
  1. Ein diagonaler transparenter Streifen (wie ein Lichtstrahl)
  2. Ein horizontaler Verlauf in der Kartenfarbe
- Während der Karten-Animation bewegt sich dieser Glanz von links nach rechts (wie ein Laser-Scanner)
- Dauert 0,9 Sekunden
- Startet mit 400ms Verzögerung nach Kartenbeginn
- Erzeugt einen "Premium"-Eindruck

### Mikrostruktur-Muster
Unter der Folienschicht hat jede Karte ein kaum sichtbares Muster, das zur Kartenfarbe passt:

- **Herz**: Kleine Punkte in einem 18px-Raster (wie ein gepunkteter Stoff)
- **Karo**: Diagonale Linien in 45°-Winkel
- **Kreuz**: Doppelte radiale Punkt-Muster, versetzt
- **Pik**: Horizontale und vertikale Linien, die ein Gitter bilden
- **Schelm**: Kreuzende horizontale und vertikale Linien (chaotisches Gitter)
- **Stern**: Zwei versetzte radiale Punkt-Muster (wie Sternenstaub)

Diese Muster sind nur 10-12% Opazität und kaum wahrnehmbar, aber sie geben den Karten subtile Textur und Tiefe.

---

## Sprachliche Besonderheiten und Tonalität

### Deutscher Mystik-Stil
Die gesamte Anwendung ist in deutscher Sprache und verwendet einen spezifischen Ton:

**Formell, aber zugänglich**:
- Sie-Form wird nicht verwendet, stattdessen direkte "Du"-Ansprache
- Schafft Nähe, bleibt aber würdevoll

**Mystische Metaphern**:
- "Der Schleier" als zentrale Metapher für die Grenze zwischen Wissen und Unwissen
- "Echos" für Nachwirkungen und Resonanzen
- "Kosmisch" für alles Übergeordnete
- "Schicksalsgöttinnen" statt "Algorithmus"

**Poetische Sprache**:
- "Der Schleier lauscht" statt "Gib eine Frage ein"
- "Ziehe dein Schicksal" statt "Ziehe eine Karte"
- "Die Wahrheit lüften" statt "Antwort erhalten"

**Philosophische Begriffe**:
- "Archetyp" statt "Typ"
- "Element" für die mystische Zuordnung
- "Einfluss" für die Bedeutung
- "Deutung" statt "Ergebnis"

### Fortunes-Stil pro Kartenfarbe

**Herz**: Warm, emotional, fließend
- "Eine neue Liebe tritt in dein Leben..."
- Fokus auf Gefühle und Beziehungen

**Karo**: Nüchtern, praktisch, konkret
- "Eine finanzielle Gelegenheit bietet sich..."
- Fokus auf materielle Realität

**Kreuz**: Energetisch, aktiv, inspirierend
- "Ein kreatives Projekt entfacht..."
- Fokus auf Handlung und Schöpfung

**Pik**: Ernst, herausfordernd, transformativ
- "Eine Herausforderung offenbart..."
- Fokus auf Schwierigkeiten und Wachstum

**Schelm**: Absurd, verspielt, nonsensisch
- "Vertraue keinem Schmetterling, der Geheimnisse trägt."
- Bewusst sinnlos und surreal

**Stern**: Weise, philosophisch, zitierend
- "Erkenne dich selbst." – Sokrates
- Echte Zitate berühmter Denker

---

## Performance-Optimierungen (konzeptuell erwähnt)

Obwohl nicht explizit im Code beschrieben, lassen sich einige Performance-Überlegungen erkennen:

### Will-Change-Properties
Elemente, die häufig animiert werden, sind mit `will-change` markiert:
- Karten haben `will-change: transform, opacity`
- Signalisiert dem Browser, diese Eigenschaften zu optimieren
- Verhindert Ruckeln bei Animationen

### Transform-basierte Animationen
Alle Bewegungen verwenden `transform` statt `top`/`left`:
- `transform: translateX()` statt `left: 100px`
- GPU-beschleunigt
- Smoother und performanter

### Contain-Property
Die Karten-Reel hat `contain: layout style`:
- Isoliert Layout-Berechnungen
- Verhindert, dass Karten-Änderungen das gesamte Dokument neu berechnen

### Backdrop-Filter-Nutzung
Glasmorphismus wird mit `backdrop-filter: blur()` erreicht:
- Moderne Browser-Feature
- Kann auf älteren Geräten langsam sein
- Wird sparsam eingesetzt

---

## Zukunftsfähigkeit und Erweiterbarkeit

Das Design ist so aufgebaut, dass Erweiterungen leicht möglich wären:

### Modulare Kartenfarben
Das `SUIT_REGISTRY`-Objekt trennt Haupt- und Bonusfarben:
- Neue Farben könnten einfach hinzugefügt werden
- Jede Farbe ist ein eigenständiges Objekt mit allen Eigenschaften
- Das System würde automatisch neue Farben in alle UI-Bereiche integrieren

### Template-basierte Insights
Die Insight-Generierung verwendet Templates:
- Neue Templates könnten hinzugefügt werden
- Verschiedene "Stimmungen" oder "Stile" wären möglich
- Mehrsprachigkeit wäre durch Template-Austausch machbar

### Event-System
Die kosmischen Ereignisse sind in einer Liste definiert:
- Neue Ereignisse könnten hinzugefügt werden
- Jedes Ereignis hat klare Trigger-Bedingungen
- Effekte sind modular definiert

### Glitch-Variants
Das Glitch-System unterscheidet bereits zwischen "normal" und "blitz":
- Weitere Varianten wären leicht hinzuzufügen
- Jede Variante hätte eigene visuelle Parameter
- Das System ist dafür vorbereitet

---

Dies vervollständigt die detaillierte Beschreibung des Fate-Orakels. Die Anwendung ist ein komplexes Zusammenspiel aus mystischer Ästhetik, technischen Animationen, semantischer Text-Verarbeitung und spielerischen Interaktionselementen – alles darauf ausgelegt, ein immersives, fast magisches Erlebnis zu schaffen.

---

## Entwicklung und Beiträge

### Für Entwickler

Wenn Sie zu diesem Projekt beitragen möchten, lesen Sie bitte die [CONTRIBUTING.md](CONTRIBUTING.md) für detaillierte Richtlinien.

**Schnellstart:**
```bash
npm install           # Abhängigkeiten installieren
npm start            # Entwicklungsserver starten
npm test             # Tests ausführen
```

### Für GitHub Copilot

Dieses Repository enthält umfassende Anweisungen für GitHub Copilot Coding Agent unter [`.github/copilot-instructions.md`](.github/copilot-instructions.md). Diese Datei enthält:

- Vollständige Projektübersicht und Architektur
- Technologie-Stack und Abhängigkeiten
- Programmierkonventionen und Richtlinien
- Test-Strategien und Entwicklungsworkflow
- Häufige Fallstricke und KI-spezifische Hinweise

---
