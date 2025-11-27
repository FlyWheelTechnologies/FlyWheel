export default function ContactSection() {
  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start gap-6 sm:gap-8 p-4 sm:p-6 pt-25 sm:pt-25 text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight">
        Get In Touch
      </h1>
      <div className="max-w-2xl space-y-6">
        <p className="text-lg sm:text-xl text-white/80">
          Ready to bring your next project to life? Let's collaborate.
        </p>
        
        {/* Contact methods */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-20">
          <a 
            href="mailto:flyweeltehnologies2025@gmail.com"
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
            <span className="text-lg">Email Us</span>
          </a>
          
          <a 
            href="https://linkedin.com/in/flywheeltechnologies"
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
            <span className="text-lg">LinkedIn</span>
          </a>

          <a 
            href="https://wa.me/23320065732?text=Hi,%20I'd%20like%20to%20book%20a%20demo%20with%20flywheel%20technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-green-600/20 hover:bg-green-600/30 ring-1 ring-green-400/20 backdrop-blur transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path 
                d="M3 12c0-4.97 4.03-9 9-9s9 4.03 9 9-4.03 9-9 9c-1.6 0-3.1-.42-4.4-1.16l-4.6 1.16 1.16-4.6C3.42 15.1 3 13.6 3 12z" 
                stroke="currentColor" 
                strokeWidth="2"
              />
              <path 
                d="M8 12h8M12 8v8" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
              />
            </svg>
            <span className="text-lg">WhatsApp</span>
          </a>
        </div>
      </div>
      
      <a 
        href="#home" 
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur mt-25"
      >
        <span className="text-lg">Back to Top</span>
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