export default function ContactSection() {
  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start gap-6 sm:gap-8 p-4 sm:p-6 pt-25 sm:pt-25 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
        Get In Touch
      </h1>
      <div className="max-w-2xl space-y-6">
        <p className="text-lg sm:text-xl text-white/80">
          Ready to bring your next project to life? Let's collaborate.
        </p>
        
        {/* Contact methods */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-20">
          <a 
            href="mailto:princetetteh963@gmail.com"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-teal-600/20 hover:bg-teal-600/30 ring-1 ring-teal-400/20 backdrop-blur transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>Email Me</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/yourprofile"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-blue-600/20 hover:bg-blue-600/30 ring-1 ring-blue-400/20 backdrop-blur transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      
      <a 
        href="#home" 
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur mt-25"
      >
        <span>Back to Top</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path 
            d="M17 14l-5-5-5 5" 
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