// components/sections/AboutSection.js
export default function AboutSection() {
  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-8 p-6 pt-20 text-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight">
        About Me
      </h1>
      <div className="max-w-2xl space-y-4">
        <p className="text-xl text-white/80">
          I'm a passionate full-stack developer with a love for creating immersive digital experiences.
        </p>
        <p className="text-lg text-white/70">
          Specializing in React, Three.js, and modern web technologies, I bring ideas to life through code and creativity.
        </p>
      </div>
      <a 
        href="#work" 
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur"
      >
        <span>View My Work</span>
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