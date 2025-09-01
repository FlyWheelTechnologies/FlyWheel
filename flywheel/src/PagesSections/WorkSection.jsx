export default function WorkSection() {
  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-Start gap-6 sm:gap-8 p-4 sm:p-6 pt-25 sm:pt-25 text-center lg:pt-25">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
        Our Work
      </h1>
      <div className="max-w-4xl space-y-6">
        <p className="text-lg sm:text-xl text-white/80">
          A 
          <span className="text-orange-400"> collection</span> of projects that showcase our passion for innovative software <span className="text-orange-400"> development</span>.
        </p>
        
        {/* Sample project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-6 mt-20 sm:mt-8 ">
          <div className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:scale-107 transition-transform hover:bg-white/7">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Web Apps</h3>
            <p className="text-sm sm:text-base text-white/70">Interactive Three.js portfolio with immersive navigation.</p>
          </div>
          <div className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:scale-107 transition-transform hover:bg-white/7">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">E-commerce Platform</h3>
            <p className="text-sm sm:text-base text-white/70">Full-stack React application with modern UX design.</p>
          </div>
        </div>
      </div>
      
      <a 
        href="#contact" 
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur mt-20"
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