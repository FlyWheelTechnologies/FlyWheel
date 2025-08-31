import NavDots from "./components/NavDots";
import Section from "./components/Section";
import ThreeBackground from "./components/ThreeBackground"; // 3D option A (3D as background)
import { useActiveSection } from "./hooks/useActiveSection";


const SECTIONS = [
{ id: "home", label: "Home", bg: "from-zinc-900 via-zinc-800 to-zinc-900" },
{ id: "about", label: "About", bg: "from-slate-900 via-slate-800 to-slate-900" },
{ id: "work", label: "Work", bg: "from-indigo-950 via-indigo-900 to-indigo-950" },
{ id: "contact", label: "Contact", bg: "from-teal-950 via-teal-900 to-teal-950" },
];


export default function App() {
const { activeId, register } = useActiveSection(SECTIONS.map(s => s.id));


return (
<div className="relative h-screen w-screen overflow-hidden from-bg-black via-bg-blue-900 to-bg-black text-white">
{/* Snap container: vertical, mandatory snapping */}
<main
className="h-screen w-full overflow-y-scroll snap-y snap-mandatory edge-fade"
aria-label="Fullpage sections"
>
{SECTIONS.map((s, i) => (
<Section
ref={el => register(s.id, el)}
key={s.id}
id={s.id}
className={`snap-start h-screen w-full relative bg-gradient-to-b ${s.bg}`}
>
{/* 3D background only on the first section for demo */}
{i === 0 && (
<ThreeBackground />
)}


<div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-6 p-6 text-center">
<h1 className="text-5xl md:text-7xl font-black tracking-tight">
{s.label}
</h1>
<p className="text-lg md:text-2xl text-white/70 max-w-xl">
This is the <span className="font-semibold">{s.label}</span> section.
Scroll or use the dots to snap between screens.
</p>
{/* Anchor to next section */}
{i < SECTIONS.length - 1 && (
<a href={`#${SECTIONS[i + 1].id}`} className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur">
<span>Next</span>
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
<path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
</a>
)}
</div>
</Section>
))}
</main>


{/* Right-side dot navigation (sticky) */}
<NavDots sections={SECTIONS} activeId={activeId} />
</div>
);
}