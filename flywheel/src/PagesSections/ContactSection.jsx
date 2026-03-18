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
            href="https://www.linkedin.com/company/flywheeltechnologies/"
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
          <a 
            href="https://wa.me/233200645732?text=Hello%20I%20would%20like%20to%20start%20a%20project%20with%20flywheel%20technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 ring-1 ring-emerald-400/20 backdrop-blur transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 2c-5.516 0-9.985 4.469-9.985 9.985 0 1.93.547 3.742 1.492 5.289l-1.547 5.664 5.813-1.524a9.92 9.92 0 0 0 4.227.976c5.516 0 9.985-4.469 9.985-9.985a9.945 9.945 0 0 0-2.922-7.062A9.945 9.945 0 0 0 12.031 2zm6.672 14.133c-.273.766-1.57 1.398-2.18 1.477-.547.078-1.25.133-2.023-.117a10.02 10.02 0 0 1-5.11-3.414 10.14 10.14 0 0 1-2.102-3.867c-.242-.719-.008-1.11.234-1.383.203-.219.469-.539.703-.805.234-.273.313-.469.469-.781.156-.305.078-.578-.039-.813-.117-.234-.961-2.313-1.32-3.172-.344-.851-.703-.734-.961-.742-.242-.016-.516-.016-.781-.016-.273 0-.711.102-1.078.469-.375.375-1.43 1.406-1.43 3.422 0 2.016 1.469 3.961 1.672 4.234.203.273 2.891 4.414 6.992 6.188a13.36 13.36 0 0 0 2.336.781c1.031.328 1.969.281 2.711.172.82-.125 2.508-1.023 2.86-2.016.344-.992.344-1.844.242-2.016-.102-.18-.367-.281-.773-.484z" />
            </svg>
            <span>WhatsApp</span>
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