import { useEffect, useRef, useState, useCallback } from 'react';
import Diet from '.././assets/diet.png';
import Smart from '.././assets/smart.png';

export default function WorkSection() {
  const [active, setActive] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const closeBtnRef = useRef(null);

  const projects = [
    {
      id: 'dietwithdee',
      title: 'DietWithDee',
      preview: 'Online nutrition consultation platform for culturally relevant dietary guidance.',
      logo: Diet,
      siteUrl: 'https://dietwithdee.org',
      status: 'Live',
      year: '2024',
      slides: [
        {
          type: 'content',
          title: 'Project Overview',
          content: 'A comprehensive nutrition consultation platform run by Nana Ama Dwamena, a Ghanaian registered dietitian. The platform provides online, culturally relevant nutrition consultations and support tailored for Ghanaian dietary preferences and lifestyle.',
          features: ['Online Consultations', 'Cultural Dietary Focus', 'Appointment Booking', 'Client Dashboard']
        },
        {
          type: 'content',
          title: 'Key Features',
          content: 'Built with modern web technologies to provide seamless user experience. Features include appointment scheduling, secure client portal, payment integration, and comprehensive admin dashboard for managing consultations.',
          features: ['Secure Client Portal', 'Payment Integration', 'Admin Dashboard', 'Mobile Responsive']
        },
        {
          type: 'content',
          title: 'Technical Stack',
          content: 'Developed using React for the frontend with a Node.js backend, ensuring fast performance and scalability. Integrated with secure payment systems and designed with accessibility in mind.',
          features: ['React Frontend', 'Node.js Backend', 'Secure Payments', 'Accessibility Focused']
        }
      ]
    },
    {
      id: 'inventory-system',
      title: 'Smart Inventory',
      preview: 'AI-powered inventory management system for SMEs.',
      logo: Smart,
      siteUrl: 'https://smartinventory.flywheel.com',
      status: 'Live',
      year: '2024',
      slides: [
        {
          type: 'content',
          title: 'Revolutionary Inventory Management',
          content: 'An AI-powered inventory management system designed specifically for Ghanaian SMEs. Automates stock tracking, predicts demand patterns, and optimizes supply chain operations .',
          features: ['AI Demand Prediction', 'Real-time Tracking', 'Supply Chain', 'Mobile Access']
        },
        {
          type: 'content',
          title: 'Smart Analytics & Reporting',
          content: 'Advanced analytics dashboard providing insights into inventory trends, sales patterns, and business performance. Generate comprehensive reports for better decision-making and business growth.',
          features: ['Advanced Analytics', 'Custom Reports', 'Performance Insights', 'Trend Analysis']
        },
        {
          type: 'content',
          title: 'User-Friendly Design',
          content: 'Designed with non-technical users in mind, featuring intuitive interfaces and simple workflows. Multi-language support including local Ghanaian languages for better accessibility.',
          features: ['Intuitive Interface', 'Multi-language Support', 'Simple Workflows', 'Training Included']
        }
      ]
    }
  ];

  const open = (id) => {
    setActive(id);
    setCurrentSlide(0);
  };
  
  const close = useCallback(() => {
    setActive(null);
    setCurrentSlide(0);
  }, []);

  // Lock background scroll + focus the close button when modal opens
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => closeBtnRef.current?.focus(), 0);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  // ESC to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft' && active) {
        const activeProject = projects.find(p => p.id === active);
        if (activeProject) {
          setCurrentSlide(prev => prev > 0 ? prev - 1 : activeProject.slides.length - 1);
        }
      }
      if (e.key === 'ArrowRight' && active) {
        const activeProject = projects.find(p => p.id === active);
        if (activeProject) {
          setCurrentSlide(prev => prev < activeProject.slides.length - 1 ? prev + 1 : 0);
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close, active]);

  const activeProject = projects.find((p) => p.id === active);

  const nextSlide = () => {
    if (activeProject) {
      setCurrentSlide(prev => prev < activeProject.slides.length - 1 ? prev + 1 : 0);
    }
  };

  const prevSlide = () => {
    if (activeProject) {
      setCurrentSlide(prev => prev > 0 ? prev - 1 : activeProject.slides.length - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start gap-4 sm:gap-8 p-4 sm:p-6 pt-20 sm:pt-25 text-center lg:pt-25">
      <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight">
        Our Works
      </h1>
      <div className="max-w-4xl space-y-6">
        <p className="text-lg sm:text-xl text-white/80">
          A 
          <span className="text-orange-400"> collection</span> of projects that showcase our passion for innovative software <span className="text-orange-400"> development</span>.
        </p>
        
        {/* Project grid with clickable cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 sm:gap-6 mt-6 sm:mt-8">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => open(project.id)}
              className="p-4 sm:p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur hover:scale-105 transition-all duration-300 hover:bg-white/10 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
              aria-haspopup="dialog"
              aria-controls="project-modal"
            >
              <div className="flex items-start gap-4 mb-3">
                <img src={project.logo} className="flex-shrink-0 p-2 rounded-lg bg-white/10 h-26 w-30">
                  
                </img>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="text-xs text-white/50 mb-2">{project.year}</div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-white/70 mb-3">{project.preview}</p>
              <div className="mt-3 text-orange-400 text-sm font-medium">View Details →</div>
            </button>
          ))}
        </div>
      </div>
      
      <a 
        href="#contact" 
        className="inline-flex items-center gap-2 rounded-2xl px-3 py-1 bg-white/10 hover:bg-white/15 ring-1 ring-white/20 backdrop-blur lg:mt-25 lg:py-3 lg:px-5 "
      >
        <span>More</span>
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

      {/* Modal with Carousel */}
      {activeProject && (
        <div
          id="project-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex lg:justify-center pt-25 pb-25 sm:pt-25 sm:pb-25 p-4 lg:mb-20 mb-43"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md transition-opacity duration-200 opacity-100"
            onClick={close}
          />

          {/* Modal panel */}
          <div
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl ring-1 ring-white/10 transition-all duration-200 ease-out data-[state=open]:opacity-100 data-[state=open]:scale-100 opacity-0 scale-95 overflow-hidden"
            data-state="open"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img  src={activeProject.logo} className="p-2 rounded-lg bg-white/10 h-30 w-30">
                </img>
                <div>
                  <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold">
                    {activeProject.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${
                      activeProject.status === 'Live' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                    }`}>
                      {activeProject.status}
                    </span>
                    <span className="text-xs text-white/50">{activeProject.year}</span>
                  </div>
                </div>
              </div>
              <button
                ref={closeBtnRef}
                onClick={close}
                className="shrink-0 rounded-full p-2 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                aria-label="Close dialog"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Carousel Content */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {activeProject.slides.map((slide, index) => (
                  <div key={index} className="w-full flex-shrink-0 p-6">
                    <div className="max-w-3xl mx-auto">
                      <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-orange-400">
                        {slide.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-6">
                        {slide.content}
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {slide.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-sm text-white/70">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between p-5 border-t border-white/10">
              {/* Previous/Next buttons */}
              <div className="flex gap-2">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50"
                  aria-label="Previous slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 disabled:opacity-50"
                  aria-label="Next slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {activeProject.slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      currentSlide === index ? 'bg-orange-400' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Visit Site & Close buttons */}
              <div className="flex gap-3">
                {activeProject.siteUrl && (
                  <a
                    href={activeProject.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl lg:px-4 lg:py-2 py-1 px-2 bg-orange-500/20 hover:bg-orange-500/30 ring-1 ring-orange-500/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 text-orange-400 font-medium"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Visit Site
                  </a>
                )}
                <button
                  onClick={close}
                  className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 ring-1 ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Done
                </button>
              </div>
            </div>
          </div>

          {/* Animation styles */}
          <style jsx>{`
            @media (prefers-reduced-motion: no-preference) {
              [role='dialog'] [data-state='open'] {
                animation: modal-in 180ms ease-out forwards;
              }
              @keyframes modal-in {
                from {
                  opacity: 0;
                  transform: translateY(6px) scale(0.96);
                  filter: saturate(0.9);
                }
                to {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                  filter: saturate(1);
                }
              }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}