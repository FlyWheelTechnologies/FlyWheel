// components/sections/HomeSection.js
import ThreeBackground from "../Components/ThreeBackground";

export default function HomeSection() {
  return (
    <>
      <ThreeBackground />
      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-6 p-6 pt-20 text-center">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight">
          Welcome
        </h1>
        <h2 className="text-2xl md:text-3xl text-white/80 font-light">
          Creative Developer & Designer
        </h2>
        <p className="text-lg md:text-2xl text-white/70 max-w-xl">
          I craft digital experiences that blend creativity with technology.
        </p>
        <a 
          href="#about" 
          className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur"
        >
          <span>Explore My Work</span>
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
    </>
  );
}