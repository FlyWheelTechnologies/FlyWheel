// components/Navbar.js
import { useState, useEffect } from 'react';
import Logo from '../assets/FlywheelLogo.png'; // Ensure you have a logo image in the specified path

export default function Navbar({ sections, activeId }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Track scroll to add background blur when scrolled
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.querySelector('main')?.scrollTop || 0;
      setIsScrolled(scrollTop > 20);
    };

    const mainElement = document.querySelector('main');
    mainElement?.addEventListener('scroll', handleScroll);
    return () => mainElement?.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        isScrolled 
          ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl' 
          : 'bg-white/5 backdrop-blur-md border border-white/10'
      }`}>
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo with icon */}
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className='w-10 h-10' />
              <button
                onClick={() => scrollToSection('home')}
                className="text-lg font-semibold text-white hover:text-orange-400 transition-colors"
              >
                FlyWheelTechnologies
              </button>
            </div>

            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <div className="flex items-center space-x-1 bg-black/20 backdrop-blur-sm rounded-xl p-1 border border-white/10">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      activeId === section.id
                        ? 'bg-white/20 text-white backdrop-blur-md shadow-lg ring-1 ring-white/30 scale-105'
                        : 'text-white/70 hover:text-white hover:bg-white/10 hover:scale-102'
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact button */}
            <div className="hidden md:block">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500/20 to-orange-500/20 hover:from-orange-500/40 hover:to-orange-400/30 text-white-300 hover:text-white font-medium transition-all duration-300 border border-orange-500/20 backdrop-blur-sm"
              >
                <span>Contact</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M9 9h.01M15 9h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-expanded={isMobileMenuOpen}
              >
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isMobileMenuOpen ? 'rotate-90' : ''
                  }`}
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-80 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-4 space-y-2 bg-black/40 backdrop-blur-xl border-t border-white/10 rounded-b-2xl">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeId === section.id
                    ? 'bg-white/20 text-white backdrop-blur-md ring-1 ring-white/30'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}