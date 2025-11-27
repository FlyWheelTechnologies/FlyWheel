// components/Navbar.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/FlywheelLogo.png'; // Ensure you have a logo image in the specified path

export default function Navbar({ sections, activeId }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // Track scroll direction to hide/show navbar
  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    let lastScrollY = mainElement.scrollTop;
    let timeout;

    // Hide navbar after 4 seconds of inactivity on load
    const startTimeout = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (mainElement.scrollTop > 50) {
          setIsHidden(true);
        }
      }, 4000);
    };

    const handleScroll = () => {
      const currentScrollY = mainElement.scrollTop;
      
      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true); // Scrolling down
      } else {
        setIsHidden(false); // Scrolling up
      }
      lastScrollY = currentScrollY;

      // Manage background blur effect
      setIsScrolled(currentScrollY > 20);
      
      // Reset inactivity timer on scroll
      startTimeout();
    };

    mainElement.addEventListener('scroll', handleScroll);
    startTimeout(); // Start initial timer

    return () => {
      mainElement.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
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
      <nav>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: '-120%' }, // Moves the nav completely out of view
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={`fixed top-4 left-4 right-4 z-50 transition-colors duration-500 rounded-2xl ${
          isScrolled
            ? 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl'
            : 'bg-white/5 backdrop-blur-md border border-white/10'
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo with icon */}
            <div className="flex items-center gap-4">
              <img src={Logo} alt="Logo" className='w-10 h-10' />
              <button
                onClick={() => scrollToSection('home')}
                className="text-lg  font-semibold text-white hover:text-orange-400 transition-colors"
              >
                Flywheel Technologies
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
        </motion.nav>
      </nav>
    </>
  )
};