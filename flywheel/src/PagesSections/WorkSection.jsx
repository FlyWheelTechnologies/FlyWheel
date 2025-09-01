// components/sections/WorkSection.js
export default function WorkSection() {
  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-8 p-6 pt-10 text-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight">
        Our Work
      </h1>
      <div className="max-w-4xl space-y-6">
        <p className="text-xl text-white/80">
          A collection of projects that showcase my passion for innovative web development.
        </p>
        
        {/* Sample project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">Web Apps</h3>
            <p className="text-white/70">Interactive Three.js portfolio with immersive navigation.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur">
            <h3 className="text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p className="text-white/70">Full-stack React application with modern UX design.</p>
          </div>
        </div>
      </div>
      
      <a 
        href="#contact" 
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur"
      >
        <span>Get In Touch</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path 
            d="M7 10l5 5 5-5" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </div>
  );
}