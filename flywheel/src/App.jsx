// App.js
import NavDots from "./components/NavDots";
import Section from "./components/Section";
import Navbar from "./Components/Navbar";
import { useActiveSection } from "./hooks/useActiveSection";
import HomeSection from "./PagesSections/HomeSection";
import AboutSection from "./PagesSections/AboutSection";
import WorkSection from "./PagesSections/WorkSection";
import ContactSection from "./PagesSections/ContactSection";

const SECTIONS = [
  { 
    id: "home", 
    label: "Home", 
    bg: "from-zinc-900 via-zinc-800 to-zinc-900", 
    component: HomeSection 
  },
  { 
    id: "about", 
    label: "About", 
    bg: "from-orange-900 via-orange-800 to-orange-900", 
    component: AboutSection 
  },
  { 
    id: "work", 
    label: "Work", 
    bg: "bg-gray-400", 
    component: WorkSection 
  },
  { 
    id: "contact", 
    label: "Contact", 
    bg: "from-teal-950 via-teal-900 to-teal-950", 
    component: ContactSection 
  },
];

export default function App() {
  const { activeId, register } = useActiveSection(SECTIONS.map(s => s.id));

  return (
    <div className="relative h-screen w-screen overflow-hidden from-bg-black via-bg-blue-900 to-bg-black ">
      {/* Frosted Glass Navbar */}
      <Navbar sections={SECTIONS} activeId={activeId} />
      
      {/* Snap container: vertical, mandatory snapping */}
      <main 
        className="h-screen w-full overflow-y-scroll snap-y snap-mandatory edge-fade" 
        aria-label="Fullpage sections"
      >
        {SECTIONS.map((s) => {
          const SectionComponent = s.component;
          return (
            <Section
              ref={el => register(s.id, el)}
              key={s.id}
              id={s.id}
              className={`snap-start h-screen w-full relative bg-gradient-to-b ${s.bg}`}
            >
              <SectionComponent />
            </Section>
          );
        })}
      </main>

      {/* Right-side dot navigation (sticky) */}
      <NavDots sections={SECTIONS} activeId={activeId} />
    </div>
  );
}