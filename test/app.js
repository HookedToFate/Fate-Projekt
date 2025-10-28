// Bundled build: FortuneCore + VisualFX + App
// Auto-generated extraction of core logic
;(function(){
  const FALLBACK_FORTUNE = 'Der Schleier bleibt still.';

  const NEGATIVE_MAP = {
            love: ['obsession', 'possession'], heart: ['ego', 'impulse'], intuition: ['doubt', 'second-guessing'], healing: ['wounding', 'erosion'], emotional: ['volatile', 'fragile'], family: ['distance', 'silence'], bonds: ['fractures', 'ties'], compassion: ['pity', 'neglect'], opportunity: ['debt', 'trap'], practical: ['tedious', 'dry'], skills: ['vanity', 'tricks'], rewarded: ['exploited', 'taxed'], resource: ['burden', 'leash'], stability: ['stagnation', 'plateau'], planning: ['paranoia', 'overthinking'], investment: ['gamble', 'sacrifice'], creative: ['chaotic', 'scattered'], project: ['distraction', 'detour'], passion: ['burnout', 'urge'], growth: ['decay', 'bloat'], action: ['impulse', 'rashness'], talents: ['tricks', 'vanities'], flourish: ['fizzle', 'wither'], collaboration: ['conflict', 'friction'], innovative: ['impractical', 'fragile'], leadership: ['dominance', 'egoism'], challenge: ['crisis', 'mess'], strength: ['stubbornness', 'rigidity'], wisdom: ['cynicism', 'distrust'], clarity: ['confusion', 'fog'], doubt: ['despair', 'fear'], decisions: ['mistakes', 'missteps'], transformative: ['destructive', 'corrosive'], victory: ['hollow victory', 'pyrrhic win'], strategic: ['manipulative', 'scheming'], patience: ['delay', 'stalling'], patterns: ['habits', 'loops'], beginnings: ['endings', 'closures'], know: ['distrust', 'forget'], flows: ['decays', 'congeals'], questioning: ['fearing', 'doubting'], life: ['void', 'noise'],
        }

  function hashString(seed) {
            let h = 2166136261 >>> 0;
            for (let i = 0; i < seed.length; i++) {
                h ^= seed.charCodeAt(i);
                h = Math.imul(h, 16777619);
            }
            return h >>> 0;
        }

  function mulberry32(seedInt) {
            let t = seedInt >>> 0;
            return function () {
                t += 0x6D2B79F5;
                let r = Math.imul(t ^ (t >>> 15), 1 | t);
                r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
                return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
            };
        }

  function pick(arr, rnd, fallback) {
            if (!Array.isArray(arr) || arr.length === 0) return fallback;
            return arr[Math.floor(rnd() * arr.length)];
        }

  function preserveCase(sample, replacement) {
            if (sample.toUpperCase() === sample) return replacement.toUpperCase();
            if (sample[0] && sample[0] === sample[0].toUpperCase()) return replacement[0].toUpperCase() + replacement.slice(1);
            return replacement;
        }

  function twistFortuneText(original, rnd) {
            const tokens = original.split(/(\W+)/);
            const candidateIndexes = [];
            for (let i = 0; i < tokens.length; i++) {
                const word = tokens[i];
                if (!/^[\p{L}A-Za-z]+$/u.test(word)) continue;
                if (NEGATIVE_MAP[word.toLowerCase()]) candidateIndexes.push(i);
            }

            let replacementIndex = candidateIndexes.length ? pick(candidateIndexes, rnd) : -1;

            if (replacementIndex === -1) {
                for (let i = 0; i < tokens.length; i++) {
                    if (/^[\p{L}A-Za-z]{5,}$/u.test(tokens[i])) {
                        replacementIndex = i;
                        break;
                    }
                }
                if (replacementIndex === -1) return original;

                const bleak = ['loss', 'void', 'ruin'];
                tokens[replacementIndex] = preserveCase(tokens[replacementIndex], pick(bleak, rnd, bleak[0]));
                return tokens.join('');
            }

            const negatives = NEGATIVE_MAP[tokens[replacementIndex].toLowerCase()];
            tokens[replacementIndex] = preserveCase(tokens[replacementIndex], pick(negatives, rnd, negatives[0]));
            return tokens.join('');
        }
function createFateCore(registry, opts = {}) {
            const history = [];
            const historyLimit = opts.historyLimit ?? 5;

            function draw(input = {}) {
                const { seed, bonusChance = 0.1, boostActive = false, glitchChain = 0 } = input;
                const rng = seed ? mulberry32(hashString(seed)) : Math.random;
                const bonusRoll = rng() < Math.max(0, Math.min(1, bonusChance));
                const pool = Object.entries(bonusRoll ? registry.bonus : registry.primary);
                const [pickedKey, pickedSuit] = pick(pool, rng, [null, null]);
                const fortunes = pickedSuit?.fortunes?.length ? pickedSuit.fortunes : [FALLBACK_FORTUNE];
                const chosenFortune = pick(fortunes, rng, FALLBACK_FORTUNE);
                const isBonusSuit = pickedKey === 'schelm' || pickedKey === 'stern';
                const baseGlitch = isBonusSuit ? 0.20 : 0.08;
                const boostAdd = boostActive ? 0.08 : 0;
                const chainAdd = Math.min(glitchChain * 0.025, 0.25);
                const didGlitch = rng() < Math.min(1, Math.max(0, baseGlitch + boostAdd + chainAdd));
                const isBlitz = didGlitch && (boostActive || (glitchChain >= 2 && rng() < 0.25 * (glitchChain - 1)));
                const glitchVariant = isBlitz ? 'blitz' : didGlitch ? 'normal' : undefined;

                const reading = {
                    suit: pickedKey,
                    ...pickedSuit,
                    fortune: didGlitch ? twistFortuneText(chosenFortune, rng) : chosenFortune,
                    timestamp: new Date().toLocaleTimeString('de-DE'),
                    glitch: didGlitch,
                    glitchVariant,
                };

                // ...existing code...
                history.unshift(reading);
                if (history.length > historyLimit) history.pop();
                return reading;
            }

            return {
                draw,
                getHistory: () => [...history],
                clearHistory: () => { history.length = 0; },
            };
        }  // end createFateCore

  window.FortuneCore = { createFateCore, twistFortuneText, hashString, mulberry32, pick };
})(); 
// ...existing code...


// VisualFX scaffold (no-op baseline to preserve current visuals)
;(function(){
  function initFX(canvasId){
    var c = document.getElementById(canvasId);
    if(!c) return;
    function resize(){ c.width = window.innerWidth; c.height = window.innerHeight; }
    resize();
    window.addEventListener('resize', resize);
    // No drawing yet to keep visuals identical
  }
  function updateAmbient(suit){ /* no-op baseline */ }
  function shootParticles(x, y, opts){ /* no-op baseline */ }
  window.VisualFX = { initFX, updateAmbient, shootParticles };
})();


        const { useMemo, useState, useEffect, useRef } = React;
const { createFateCore } = window.FortuneCore;

        const Shuffle = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" /><path d="m18 2 4 4-4 4" /><path d="M2 6h1.4c1.3 0 2.5.6 3.3 1.7l6.1 8.6c.7 1.1 2 1.7 3.3 1.7H22" /><path d="m18 22 4-4-4-4" />
            </svg>
        );
        const Eye = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" />
            </svg>
        );
        const Sparkles = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="m12 3-1.9 5.8-5.8 1.9 5.8 1.9 1.9 5.8 1.9-5.8 5.8-1.9-5.8-1.9Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />
            </svg>
        );
        const Heart = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
        );
        const Sword = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M14.5 17.5 3 6V3h3l11.5 11.5" /><path d="m21 3-9.5 9.5" /><path d="m13.5 18.5 5-5" /><path d="m6 15 3.5 3.5" /><path d="M3 21h3v-3" /><path d="M18 6V3h3" />
            </svg>
        );
        const Gem = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M6 3h12l4 6-10 13L2 9Z" /><path d="m12 22 4-13-3-6" /><path d="M12 22 8 9l3-6" /><path d="M2 9h20" />
            </svg>
        );
        const Puzzle = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M19.43 12.03c.32.2.57.44.81.71s.45.56.64.88c.18.32.33.66.44.99.12.33.2.68.24.99.04.32.06.65.06.91s-.02.59-.06.91a4.94 4.94 0 0 1-.24.99c-.11.33-.26.66-.44.99-.19.32-.4.6-.64.88-.24.27-.5.52-.81.71-1.35 1.05-3.33.64-4.24-.95-.23-.4-.3-.85-.2-1.33.1-.49.34-.94.7-1.33.37-.39.84-.69 1.39-.85.55-.16 1.15-.14 1.74.05.6.2 1.15.54 1.62.99z" />
                <path d="M12.03 4.57c.2.32.44.57.71.81.27.24.56.45.88.64.32.18.66.33.99.44.33.12.68.2.99.24.32.04.65.06.91.06s.59-.02.91-.06a4.94 4.94 0 0 0 .99-.24c.33-.11.66-.26.99-.44.32-.19.6-.4.88-.64.27-.24.52-.5.71-.81 1.05-1.35.64-3.33-.95-4.24-.4-.23-.85-.3-1.33-.2-.49.1-.94.34-1.33.7-.39.37-.69.84-.85 1.39-.16.55-.14 1.15.05 1.74.2.6.54 1.15.99 1.62z" />
                <path d="M4.57 12.03c-.32.2-.57.44-.81.71s-.45.56-.64.88c-.18.32-.33.66-.44.99-.12.33-.2.68-.24.99-.04.32-.06.65-.06.91s.02.59.06.91a4.94 4.94 0 0 0 .24.99c.11.33.26.66.44.99.19.32.4.6.64.88.24.27.5.52.81.71 1.35 1.05 3.33.64 4.24-.95.23-.4.3-.85.2-1.33-.1-.49-.34-.94-.7-1.33-.37-.39-.84-.69-1.39-.85-.55-.16-1.15-.14-1.74.05-.6.2-1.15.54-1.62.99z" />
                <path d="M12.03 19.43c-.2.32-.44.57-.71.81-.27.24-.56.45-.88.64-.32.18-.66.33-.99.44-.33.12-.68.2-.99.24-.32.04-.65.06-.91.06s-.59-.02-.91-.06a4.94 4.94 0 0 1-.99-.24c-.33-.11-.66-.26-.99-.44-.32-.19-.6-.4-.88-.64-.27-.24-.52-.5-.71-.81-1.05-1.35-.64-3.33.95-4.24.4-.23.85-.3 1.33-.2.49.1.94.34 1.33.7.39.37.69.84.85 1.39.16.55.14 1.15-.05 1.74-.2.6-.54 1.15-.99 1.62z" />
            </svg>
        );
        const GraduationCap = ({ className, ...props }) => (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
                <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.084a1 1 0 0 0 0 1.838l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
        );

        const SUIT_META = {
            hearts: { gradient: 'from-red-400 to-pink-500', flash: '#ef4444' },
            diamonds: { gradient: 'from-blue-400 to-cyan-500', flash: '#3b82f6' },
            clubs: { gradient: 'from-green-400 to-emerald-500', flash: '#10b981' },
            spades: { gradient: 'from-gray-600 to-slate-700', flash: '#9ca3af' },
            schelm: { gradient: 'from-amber-400 to-orange-500', flash: '#f59e0b' },
            stern: { gradient: 'from-indigo-500 to-violet-600', flash: '#8b5cf6' },
        };
        const getSuitMeta = (suit) => SUIT_META[suit] ?? { gradient: 'from-purple-400 to-indigo-500', flash: '#ffffff' };
        const SUIT_FONT_CLASS = { schelm: 'font-schelm', stern: 'font-stern' };
        const TITLE_COLORS = ['#ef4444', '#f97316', '#facc15', '#22c55e', '#14b8a6', '#3b82f6', '#8b5cf6', '#ec4899'];
        const SUIT_MUSIC = {
            hearts: 'https://cdn.pixabay.com/download/audio/2022/03/02/audio_8c82112f2b.mp3?filename=soft-ambient-11119.mp3',
            diamonds: 'https://cdn.pixabay.com/download/audio/2022/10/22/audio_1c9c886e60.mp3?filename=ethereal-chime-124069.mp3',
            clubs: 'https://cdn.pixabay.com/download/audio/2022/02/23/audio_8db02ec220.mp3?filename=inspiring-ambient-11061.mp3',
            spades: 'https://cdn.pixabay.com/download/audio/2021/11/16/audio_c8b1b6c758.mp3?filename=dark-ambient-background-11099.mp3',
            schelm: 'https://cdn.pixabay.com/download/audio/2022/03/15/audio_e75374e4ec.mp3?filename=quirky-funny-11276.mp3',
            stern: 'https://cdn.pixabay.com/download/audio/2021/09/01/audio_3f1635c823.mp3?filename=cold-breeze-ambient-9091.mp3',
            default: 'https://cdn.pixabay.com/download/audio/2022/02/23/audio_5a5b5d2ff1.mp3?filename=magic-forest-11062.mp3',
        };

        const PRIMARY_SUITS = {
            hearts: { symbol: '\u2665', name: 'Herz', archetype: 'The Lover', element: 'Wasser', meaning: 'Emotionen, Beziehungen, Liebe, Intuition, Heilung', color: 'text-red-500', bgColor: 'bg-red-50', borderColor: 'border-red-200', icon: Heart, fortunes: [
                'Eine neue Liebe tritt in dein Leben und bringt Wärme und Freude.',
                'Vertraue deinem Herzen – deine Intuition führt dich richtig.',
                'Heilung geschieht durch Mitgefühl, gegeben und empfangen.',
                'Ein emotionaler Durchbruch steht bevor.',
                'Familienbande stärken sich durch gemeinsames Verständnis.'
            ] },
            diamonds: { symbol: '\u2666', name: 'Karo', archetype: 'The Merchant', element: 'Erde', meaning: 'Materieller Wohlstand, praktische Angelegenheiten, Ressourcen, Manifestation', color: 'text-blue-600', bgColor: 'bg-blue-50', borderColor: 'border-blue-200', icon: Gem, fortunes: [
                'Eine finanzielle Gelegenheit bietet sich aus unerwarteten Kanälen.',
                'Deine praktischen Fähigkeiten werden bald reichlich belohnt.',
                'Eine wertvolle Ressource gelangt in deinen Besitz.',
                'Materielle Stabilität wächst durch sorgfältige Planung.',
                'Die Investition in dich selbst zahlt sich über alle Maßen aus.'
            ] },
            clubs: { symbol: '\u2663', name: 'Kreuz', archetype: 'The Creator', element: 'Feuer', meaning: 'Kreativität, Leidenschaft, Wachstum, Inspiration, Handeln', color: 'text-green-600', bgColor: 'bg-green-50', borderColor: 'border-green-200', icon: Sparkles, fortunes: [
                'Ein kreatives Projekt entfacht deine Leidenschaft und deinen Sinn.',
                'Wachstum entsteht durch mutiges, inspiriertes Handeln.',
                'Deine einzigartigen Talente sind bereit, öffentlich zu erblühen.',
                'Zusammenarbeit führt zu innovativen Lösungen.',
                'Natürliche Führungsqualitäten treten in Gruppen hervor.'
            ] },
            spades: { symbol: '\u2660', name: 'Pik', archetype: 'The Warrior', element: 'Luft', meaning: 'Herausforderungen, Konfliktlösung, geistige Klarheit, Transformation', color: 'text-gray-800', bgColor: 'bg-gray-50', borderColor: 'border-gray-300', icon: Sword, fortunes: [
                'Eine Herausforderung offenbart deine verborgene Stärke und Weisheit.',
                'Geistige Klarheit durchbricht Verwirrung und Zweifel.',
                'Schwierige Entscheidungen führen zu transformativen Ergebnissen.',
                'Der Sieg kommt durch strategisches Denken und Geduld.',
                'Alte Muster lösen sich auf und machen Platz für neue Anfänge.'
            ] },
        };

        const BONUS_SUITS = {
            schelm: { symbol: '\uD83C\uDFB7', name: 'Schelm', archetype: 'The Trickster', element: 'Chaos', meaning: 'Nonsens, spielerische Störung, komische Einsicht, Unfug', color: 'text-amber-500', bgColor: 'bg-amber-50', borderColor: 'border-amber-200', icon: Puzzle, fortunes: [
                'Vertraue keinem Schmetterling, der Geheimnisse trägt.',
                'Der Teppichrand kennt mehr Abenteuer als der Stuhl.',
                'Wenn der Mond gähnt, vergisst die Uhr zu zählen.',
                'Bananen konsultieren keine Karten, bevor sie aufbrechen.',
                'Trage niemals Socken an einem Dienstag, wenn du Besuch erwartest.'
            ] },
            stern: { symbol: '\u2605', name: 'Stern', archetype: 'The Philosopher', element: 'Kosmos', meaning: 'Gedanke, Einsicht, zitierte Weisheit, Reflexion', color: 'text-violet-400', bgColor: 'bg-violet-50', borderColor: 'border-violet-200', icon: GraduationCap, fortunes: [
                '"Erkenne dich selbst." — Sokrates',
                '"Alles fließt." — Heraklit',
                '"Wir sind, was wir wiederholt tun." — (zugeschrieben) Aristoteles',
                '"Das Wichtigste ist, nicht aufzuhören zu fragen." — Einstein',
                '"Ein ungeprüftes Leben ist nicht lebenswert." — Sokrates'
            ] },
        };

        const SUIT_REGISTRY = { primary: PRIMARY_SUITS, bonus: BONUS_SUITS };
        const PRIMARY_SUIT_ENTRIES = Object.entries(PRIMARY_SUITS);
        const BONUS_SUIT_ENTRIES = Object.entries(BONUS_SUITS);
        const RECENT_CARD_OPACITY = ['opacity-100', 'opacity-90', 'opacity-75', 'opacity-60', 'opacity-45'];
        

        

        

        

        ;

        

        


        const BonusBadge = () => (
            <div className="absolute -top-3 right-3 text-[10px] px-2 py-1 rounded-full bg-white/80 text-black font-semibold" aria-label="Bonus-Farbe">BONUS</div>
        );

        const ChainMeter = ({ value }) => {
            const maxNodes = 5;
            const activeCount = Math.min(value, maxNodes);
            const icons = ['🃏', '★'];
            return (
                <div className="chain-meter" role="status" aria-live="polite" aria-label={`Glitch-Kette: ${value}`}>
                    {Array.from({ length: maxNodes }).map((_, idx) => (
                        <span key={idx} className={`chain-node ${idx < activeCount ? 'active' : ''}`}>
                            {icons[idx % icons.length]}
                        </span>
                    ))}
                    {value > maxNodes && <span className="chain-extra">+{value - maxNodes}</span>}
                </div>
            );
        };

        function buildGlitchClass(reading) {
            if (!reading?.glitch) return '';
            const classes = ['glitch-card'];
            if (reading.glitchVariant === 'blitz') classes.push('glitch-blitz');
            if (reading.suit === 'schelm') classes.push('glitch-schelm');
            if (reading.suit === 'stern') classes.push('glitch-stern');
            return classes.join(' ');
        }

        const InfoRow = ({ label, value }) => (
            <p><strong>{label}:</strong> {value}</p>
        );

        const SuitCard = ({ gradient, Icon, archetype, symbol, name, meaning, containerClass, withBadge }) => (
            <div className={`${containerClass} ${withBadge ? 'relative' : ''}`}>
                {withBadge && <BonusBadge />}
                <div className="text-center mb-4">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} mb-3`}>
                        <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{archetype}</h3>
                    <p className="text-lg text-purple-200">{symbol} {name}</p>
                </div>
                <p className="text-sm text-purple-200 text-center">{meaning}</p>
            </div>
        );

        const FateOracle = () => {
            const [currentReading, setCurrentReading] = useState(null);
            const [isDrawing, setIsDrawing] = useState(false);
            const [drawnCards, setDrawnCards] = useState([]);
            const [showInterpretation, setShowInterpretation] = useState(false);
            const [glitchBoostLeft, setGlitchBoostLeft] = useState(0);
            const [glitchChain, setGlitchChain] = useState(0);
            const [preGlitch, setPreGlitch] = useState(false);
            const [question, setQuestion] = useState('');
            const [musicEnabled, setMusicEnabled] = useState(false);
            const [activeTrack, setActiveTrack] = useState(null);
            const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
            const [fireworkVisible, setFireworkVisible] = useState(false);
            const [fortuneKey, setFortuneKey] = useState(0);
            const audioRef = useRef(null);
            const fireworkTimeoutRef = useRef(null);

            const core = useMemo(() => createFateCore(SUIT_REGISTRY), []);

            useEffect(() => {
                const media = window.matchMedia('(prefers-reduced-motion: reduce)');
                const handleChange = (event) => setPrefersReducedMotion(event.matches);
                setPrefersReducedMotion(media.matches);
                if (media.addEventListener) media.addEventListener('change', handleChange);
                else media.addListener(handleChange);
                return () => {
                    if (media.removeEventListener) media.removeEventListener('change', handleChange);
                    else media.removeListener(handleChange);
                };
            }, []);

            useEffect(() => {
                if (prefersReducedMotion && musicEnabled) {
                    setMusicEnabled(false);
                }
            }, [prefersReducedMotion, musicEnabled]);

            useEffect(() => {
                const audio = audioRef.current;
                if (!audio) return;
                if (!musicEnabled || !activeTrack || prefersReducedMotion) {
                    audio.pause();
                    if (!musicEnabled || prefersReducedMotion) audio.currentTime = 0;
                    return;
                }

                if (audio.src !== activeTrack) {
                    audio.src = activeTrack;
                }

                audio.loop = true;
                audio.volume = 0.35;
                audio.play().catch(() => {});
            }, [musicEnabled, activeTrack, prefersReducedMotion]);

            useEffect(() => () => {
                if (fireworkTimeoutRef.current) {
                    clearTimeout(fireworkTimeoutRef.current);
                }
            }, []);

            const drawFateCard = () => {
                if (isDrawing) return;
                setCurrentReading(null);
                setShowInterpretation(false);
                setIsDrawing(true);

                const trimmedQuestion = question.trim();
                const draftReading = core.draw({ bonusChance: 0.10, boostActive: glitchBoostLeft > 0, glitchChain });
                setPreGlitch(Boolean(draftReading.glitch));
                const readingWithQuestion = { ...draftReading, question: trimmedQuestion || null };

                setTimeout(() => {
                    try {
                        const reading = readingWithQuestion;
                        let nextBoost = glitchBoostLeft;
                        let nextChain = glitchChain;

                        if (reading.glitch) {
                            nextBoost = 5;
                            nextChain = glitchBoostLeft > 0 ? glitchChain + 1 : 1;
                        } else if (glitchBoostLeft > 0) {
                            nextBoost = glitchBoostLeft - 1;
                            if (nextBoost <= 0) nextChain = 0;
                        }

                        setGlitchBoostLeft(nextBoost);
                        setGlitchChain(nextChain);
                        setCurrentReading(reading);
                        setDrawnCards((prev) => [reading, ...prev].slice(0, RECENT_CARD_OPACITY.length));
                        setFortuneKey((prev) => prev + 1);

                        if (nextChain >= 5) {
                            setFireworkVisible(true);
                            if (fireworkTimeoutRef.current) clearTimeout(fireworkTimeoutRef.current);
                            fireworkTimeoutRef.current = setTimeout(() => {
                                setFireworkVisible(false);
                                fireworkTimeoutRef.current = null;
                            }, 2200);
                        } else if (fireworkVisible) {
                            setFireworkVisible(false);
                        }

                        if (musicEnabled && !prefersReducedMotion) {
                            const track = SUIT_MUSIC[reading.suit] ?? SUIT_MUSIC.default;
                            setActiveTrack(track);
                        } else {
                            setActiveTrack(null);
                        }
                    } finally {
                        setIsDrawing(false);
                        setPreGlitch(false);
                        setTimeout(() => setShowInterpretation(true), 500);
                    }
                }, 1200);
            };

            return (
                <>
                    <div className="nebula-layer" aria-hidden="true">
                        <div className="nebula-cloud"></div>
                        <div className="nebula-cloud"></div>
                        <div className="nebula-cloud"></div>
                    </div>
                    <div className="fate-root min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-6">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-wide title-rainbow title-wave" aria-label="Fate Orakel ✨">
                                    {Array.from('Fate Orakel ✨').map((ch, i) => {
                                        const color = TITLE_COLORS[i % TITLE_COLORS.length];
                                        const nextColor = TITLE_COLORS[(i + 1) % TITLE_COLORS.length];
                                        return (
                                            <span
                                                aria-hidden="true"
                                                key={i}
                                                className="wave-char gradient-text"
                                                style={{ '--char-color': color, '--char-next': nextColor, '--char-delay': `${i * 0.08}s` }}
                                            >
                                                {ch}
                                            </span>
                                        );
                                    })}
                                </h1>
                            <p className="text-purple-200 text-xl mb-8">Der Schleier lauscht.</p>
                            <div className="flex justify-center items-center space-x-4 text-3xl mb-8">
                                <span className="text-red-400 emoji-glow emoji-breathe">{'\u2665'}</span>
                                <span className="text-blue-400 emoji-glow emoji-breathe">{'\u2666'}</span>
                                <span className="text-green-400 emoji-glow emoji-breathe">{'\u2663'}</span>
                                <span className="text-gray-300 emoji-glow emoji-breathe">{'\u2660'}</span>
                                <span className="mx-3 h-5 w-px bg-white/20" />
                                <span className="text-amber-300 emoji-glow emoji-breathe">{'\uD83C\uDFB7'}</span>
                                <span className="text-violet-300 emoji-glow emoji-breathe">{'\u2605'}</span>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 mb-8 border border-white/20">
                            <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                                <div className="flex-1 text-left">
                                    <label className="question-label" htmlFor="oracle-question">Deine Frage an den Schleier</label>
                                    <input
                                        id="oracle-question"
                                        type="text"
                                        className="question-input"
                                        placeholder="Welche Wahrheit möchtest du lüften?"
                                        value={question}
                                        onChange={(event) => setQuestion(event.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col gap-2 text-left">
                                    <span className="question-label">Hintergrundmusik</span>
                                    <button
                                        type="button"
                                        onClick={() => setMusicEnabled((prev) => !prev)}
                                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ${
                                            musicEnabled ? 'bg-white/20 border-white/40 text-white' : 'bg-white/10 border-white/20 text-purple-100'
                                        }`}
                                        aria-pressed={musicEnabled}
                                    >
                                        <span role="img" aria-hidden="true">{musicEnabled ? '🔊' : '🔇'}</span>
                                        <span>{musicEnabled ? 'Musik aktiviert' : 'Stille bewahren'}</span>
                                    </button>
                                    {prefersReducedMotion && (
                                        <span className="text-xs text-purple-200 max-w-[220px]">
                                            Systemweite Barrierefreiheits-Einstellungen deaktivieren Animationen und Klang automatisch.
                                        </span>
                                    )}
                                </div>
                            </div>

                            {!currentReading && !isDrawing && (
                                <div className="text-center">
                                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center border-2 border-dashed border-white/30">
                                        <Eye className="w-12 h-12 text-white/70" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white mb-4">Der Schleier erwartet deine Frage</h2>
                                    <p className="text-purple-200 mb-6">Konzentriere dich auf deine Frage und ziehe dann eine Karte, um dein Schicksal zu enthüllen.</p>
                                    <button onClick={drawFateCard} className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                                        <Shuffle className="inline-block w-5 h-5 mr-2" />
                                        Ziehe dein Schicksal
                                    </button>
                                </div>
                            )}

                            {isDrawing && (
                                <div className="text-center">
                                    <div className={`w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl flex items-center justify-center animate-pulse relative ${preGlitch ? 'pre-glitch' : ''}`}>
                                        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mystic-focus" role="status" aria-live="polite" aria-busy={true}></div>
                                        {preGlitch && <div className="draw-glitch-layer" aria-hidden="true"></div>}
                                    </div>
                                    <h2 className="text-2xl font-semibold text-white mb-4">Die Schicksalsgöttinnen entscheiden...</h2>
                                    <p className="text-purple-200">Die kosmischen Kräfte richten sich aus, um dein Schicksal zu offenbaren.</p>
                                </div>
                            )}

                            {currentReading && (
                                <div className={`text-center card-stage draw-field relative ${currentReading.glitch ? 'glitch-shake' : ''}`} aria-live="polite">
                                    <div className="shockwave-layer animate-shockwave" style={{ '--card-color-flash': getSuitMeta(currentReading.suit).flash }} />
                                    <div className="deck-slot" aria-hidden="true"></div>
                                    {fireworkVisible && (
                                        <div className="firework-layer" aria-hidden="true">
                                            {Array.from({ length: 5 }).map((_, idx) => (
                                                <div key={idx} className="firework"></div>
                                            ))}
                                        </div>
                                    )}
                                    <div
                                        className={`inline-block p-8 bg-gradient-to-br ${getSuitMeta(currentReading.suit).gradient} mystic-ripple mystic-sweep card-reel ${buildGlitchClass(currentReading)} animate-cardFromDeck rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 border-4 border-white/30 mb-6 ${
                                            SUIT_FONT_CLASS[currentReading.suit] || ''
                                        }`}
                                        style={{ '--card-color-flash': getSuitMeta(currentReading.suit).flash }}
                                    >
                                        {currentReading.glitch && glitchChain > 0 && (
                                            <div className="chain-chip">KETTE x{glitchChain}</div>
                                        )}
                                        <div className="relative glitch-target text-8xl text-white mb-4 emoji-glow emoji-breathe mystic-bloom animate-scaleIn">{currentReading.symbol}</div>
                                        <h3 className="text-2xl font-bold text-white">{currentReading.archetype}</h3>
                                        <p className="text-white/90 font-medium">{currentReading.name} • {currentReading.element}</p>
                                    </div>
                                    {glitchChain > 0 && <ChainMeter value={glitchChain} />}
                                    {showInterpretation && (
                                        <div className={currentReading.glitch ? 'interpretation-glitch' : 'animate-fadeIn'}>
                                            <h2 className="text-3xl font-bold text-white mb-4">Dein Schicksal enthüllt</h2>
                                            <div className="bg-white/5 rounded-2xl p-6 border border-white/20 mb-6">
                                                {currentReading.question && (
                                                    <div className="mb-4">
                                                        <span className="question-preview text-sm text-purple-100">
                                                            <Sparkles className="w-4 h-4 text-purple-200" aria-hidden="true" />
                                                            <span>Deine Frage: {currentReading.question}</span>
                                                        </span>
                                                    </div>
                                                )}
                                                <p className={`text-xl text-purple-100 leading-relaxed mb-4 ${SUIT_FONT_CLASS[currentReading.suit] || ''}`}>
                                                    <span
                                                        key={fortuneKey}
                                                        className={`fortune-type ${currentReading.glitch ? 'glitchy' : ''}`}
                                                        style={{ '--fortune-steps': Math.max(20, Math.min(70, currentReading.fortune.length)) }}
                                                    >
                                                        {currentReading.fortune}
                                                    </span>
                                                </p>
                                                <div className="text-sm text-purple-200 text-left md:text-center">
                                                    <InfoRow label="Archetyp" value={currentReading.archetype} />
                                                    <InfoRow label="Element" value={currentReading.element} />
                                                    <InfoRow label="Einfluss" value={currentReading.meaning} />
                                                    <InfoRow label="Gezogen um" value={currentReading.timestamp} />
                                                </div>
                                            </div>

                                            <button onClick={drawFateCard} className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300">
                                                <Shuffle className="inline-block w-4 h-4 mr-2" />
                                                Erneut ziehen
                                            </button>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {PRIMARY_SUIT_ENTRIES.map(([key, suit]) => (
                                <SuitCard
                                    key={key}
                                    gradient={getSuitMeta(key).gradient}
                                    Icon={suit.icon}
                                    archetype={suit.archetype}
                                    symbol={suit.symbol}
                                    name={suit.name}
                                    meaning={suit.meaning}
                                    containerClass="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
                                />
                            ))}
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {BONUS_SUIT_ENTRIES.map(([key, suit]) => (
                                <SuitCard
                                    key={key}
                                    gradient={getSuitMeta(key).gradient}
                                    Icon={suit.icon}
                                    archetype={suit.archetype}
                                    symbol={suit.symbol}
                                    name={suit.name}
                                    meaning={suit.meaning}
                                    containerClass="bg-white/6 backdrop-blur-lg rounded-2xl p-6 border border-white/12 transition-all duration-300 col-span-2"
                                    withBadge
                                />
                            ))}
                        </div>

                        {drawnCards.length > 0 && (
                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                                <h3 className="text-xl font-bold text-white mb-4 text-center">Letzte Deutungen</h3>
                                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                    {drawnCards.map((card, index) => (
                                        <div
                                            key={`${card.timestamp}-${card.suit}-${index}`}
                                            className={`text-center p-4 rounded-xl bg-gradient-to-br ${getSuitMeta(card.suit).gradient} ${RECENT_CARD_OPACITY[index] || 'opacity-40'}`}
                                            title={card.question ? `Frage: ${card.question}` : undefined}
                                        >
                                            <div className="text-3xl text-white mb-2 emoji-glow emoji-breathe">{card.symbol}</div>
                                            <p className="text-xs text-white/90">{card.timestamp}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                    <audio ref={audioRef} className="hidden" aria-hidden="true" />
                </>
            );
        };

        ReactDOM.render(<FateOracle />, document.getElementById('root'));
    
