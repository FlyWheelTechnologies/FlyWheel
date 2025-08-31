import { useEffect, useMemo, useRef, useState } from "react";


export function useActiveSection(ids = []) {
const [activeId, setActiveId] = useState(ids[0]);
const elementsRef = useRef(new Map());


const register = (id, el) => {
if (!el) return;
elementsRef.current.set(id, el);
};


const observer = useMemo(() => {
if (typeof window === "undefined") return null;
return new IntersectionObserver(
entries => {
for (const entry of entries) {
if (entry.isIntersecting) {
const id = entry.target.getAttribute("id");
if (id) setActiveId(id);
}
}
},
{
/* Trigger when section is near the middle of the viewport */
root: null,
threshold: 0.6,
}
);
}, []);


useEffect(() => {
if (!observer) return;
const els = ids.map(id => elementsRef.current.get(id)).filter(Boolean);
els.forEach(el => observer.observe(el));
return () => els.forEach(el => observer.unobserve(el));
}, [observer, ids.join("|")]);


return { activeId, register };
}