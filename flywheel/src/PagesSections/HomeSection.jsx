// components/sections/HomeSection.js
import ThreeBackground from "../Components/ThreeBackground";

export default function HomeSection() {
  return (
    <>
      <ThreeBackground />
      <div className="relative z-10 h-full w-full flex flex-col justify-start p-4 sm:p-6 pt-22 sm:pt-20 lg:pt-50 bg-black/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column - Hero Text */}
          <div className="space-y-4 sm:space-y-6 ">
            <div className="space-y-1 mb-9">
              <h1 className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-shadow-black">
                Design
              </h1>
              <h2 className="text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none text-orange-400">
                Develop
              </h2>
              <h3 className="text-7xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none">
                Deploy
              </h3>
            </div>
            
            <div className="space-y-1">
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                Flywheel Digital
              </h4>
              <p className="text-base sm:text-lg text-orange-300 font-medium">
                AI-Driven Innovation Studio
              </p>
            </div>
          </div>
          
          {/* Right Column - Description */}
          <div className="space-y-8 sm:space-y-8">
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed">
              Building AI-powered tools to <span className="text-orange-400 font-semibold">modernize operations</span> for Ghanaian SMEs.
            </p>
            
            <p className="text-base sm:text-lg text-white/70">
              We help small businesses scale effortlessly with enterprise-grade software.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-500 hover:from-orange-400 hover:to-red-500 text-white font-semibold transition-all duration-300 shadow-lg"
              >
                <span>Learn More</span>
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
              
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-white/10 hover:bg-white/20 ring-1 ring-white/30 backdrop-blur-sm text-white font-medium transition-all duration-300"
              >
                <span>Start Project</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}