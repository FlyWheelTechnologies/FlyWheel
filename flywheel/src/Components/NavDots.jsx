export default function NavDots({ sections, activeId }) {
return (
<nav
aria-label="Section navigation"
className="pointer-events-none fixed right-4 top-1/2 -translate-y-1/2 z-50"
>
<ul className="flex flex-col lg:gap-4 gap-2">
{sections.map(s => {
const isActive = activeId === s.id;
return (
<li key={s.id} className="pointer-events-auto">
<a
href={`#${s.id}`}
className={`block w-3 h-3 rounded-full ring-2 transition-all duration-200 ${
isActive
? "bg-white ring-white lg:scale-125 scale-80"
: "bg-white/30 hover:bg-white/60 ring-white/40 scale-60 lg:scale-100"
}`}
aria-label={`Go to ${s.label}`}
/>
</li>
);
})}
</ul>
</nav>
);
}