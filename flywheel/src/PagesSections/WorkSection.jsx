import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Diet from '../assets/diet.png';
import RideWellLogo from '../assets/ridewell.png';
// Make sure to add a placeholder image named autozone.png to your assets folder
import Autozone from '../assets/autozone.jpg'; 

export default function WorkSection() {
  const [active, setActive] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const closeBtnRef = useRef(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const projects = [
    {
      id: 'ridewell',
      title: 'RideWell',
      preview: 'Route planning and Tracking app for efficient city navigation.',
      logo: RideWellLogo,
      status: 'Live',
      year: '2024',
      slides: [
        {
          title: 'Efficient Urban Navigation',
          content: 'RideWell is a route planning app that helps you navigate your city efficiently using real-time data on public transport, taxis, and minibuses. It allows users to find the most efficient routes, locate nearby bus stops, and identify transfer points.',
          features: ['Real-Time Data', 'Efficient Route Planning', 'Nearby Stop Locator', 'Transfer Points']
        },
        {
          title: 'Live Location & Ride-Sharing',
          content: 'Passengers can share their live location with other users in real-time. This enables commuters to identify available vehicles heading in their direction, improving ride-sharing opportunities.',
          features: ['Live Location Sharing', 'Vehicle Tracking', 'Ride-Sharing', 'Community Commuting']
        },
        {
          title: 'Technical Stack & Scalability',
          content: 'Built with a robust and scalable architecture to ensure a seamless experience for a large user base, capable of handling over 1000 concurrent users and real-time data processing effectively.',
          features: ['Flutter Framework', 'MongoDB Database', 'Google Maps Integration', 'High Concurrency']
        }
      ]
    },
    {
      id: 'dietwithdee',
      title: 'DietWithDee',
      preview: 'Online nutrition consultation platform for culturally relevant dietary guidance.',
      logo: Diet,
      siteUrl: 'https://dietwithdee.org',
      status: 'Live',
      year: '2025',
      slides: [
        {
          title: 'Project Overview',
          content: 'A comprehensive nutrition consultation platform run by Nana Ama Dwamena, a Ghanaian registered dietitian. The platform provides online, culturally relevant nutrition consultations and support tailored for Ghanaian dietary preferences and lifestyle.',
          features: ['Online Consultations', 'Cultural Dietary Focus', 'Appointment Booking', 'Client Dashboard']
        },
        {
          title: 'Key Features',
          content: 'Built with modern web technologies to provide seamless user experience. Features include appointment scheduling, secure client portal, payment integration, and comprehensive admin dashboard for managing consultations.',
          features: ['Secure Client Portal', 'Payment Integration', 'Admin Dashboard', 'Mobile Responsive']
        },
        {
          title: 'Technical Stack',
          content: 'Developed using React for the frontend with a Node.js backend, ensuring fast performance and scalability. Integrated with secure payment systems and designed with accessibility in mind.',
          features: ['React Frontend', 'Node.js Backend', 'Secure Payments', 'Accessibility Focused']
        }
      ]
    },
    {
      id: 'xpress-autozone',
      title: 'Xpress Autozone',
      preview: 'Premier aftermarket car parts retailing platform with curated inventory and fast checkout.',
      logo: Autozone, 
      siteUrl: 'https://xpressautozone.com',
      status: 'Beta',
      year: '2025',
      slides: [
        {
          title: 'Modern E-Commerce for Auto Parts',
          content: 'A specialized marketplace for aftermarket car parts. Solves the fragmentation in the local auto-parts market by providing a curated, searchable inventory with instant pricing and availability.',
          features: ['Curated Inventory', 'Part Number Search', 'Instant Pricing', 'Compatibility Check']
        },
        {
          title: 'Secure Authentication & Checkout',
          content: 'Features a robust dual-layer authentication system for regular users and administrators. Includes a streamlined, high-performance checkout flow designed to minimize cart abandonment.',
          features: ['User/Admin Login', 'JWT Authentication', 'Fast Checkout', 'Order History']
        },
        {
          title: 'Admin Infrastructure',
          content: 'Empowers business owners with a granular admin panel to manage stock levels, view user analytics, and process orders in real-time.',
          features: ['Stock Management', 'Sales Analytics', 'Order Processing', 'Role-Based Access']
        }
      ]
    }
  ];

  const activeProject = projects.find((p) => p.id === active);

  const open = (id) => {
    if (isDesktop) {
      setActive(id);
      setCurrentSlide(0);
    } else {
      setExpandedCard(expandedCard === id ? null : id);
    }
  };
  
  const close = useCallback(() => {
    setActive(null);
    setCurrentSlide(0);
  }, []);

  // Lock background scroll + focus
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      const t = setTimeout(() => closeBtnRef.current?.focus(), 50);
      return () => {
        clearTimeout(t);
        document.body.style.overflow = prev;
      };
    }
  }, [active]);

  // Keyboard Navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close();
      if (!active) return;
      
      const p = projects.find(proj => proj.id === active);
      if (!p) return;

      if (e.key === 'ArrowLeft') {
        setCurrentSlide(prev => prev > 0 ? prev - 1 : p.slides.length - 1);
      }
      if (e.key === 'ArrowRight') {
        setCurrentSlide(prev => prev < p.slides.length - 1 ? prev + 1 : 0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close, active, projects]);

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

  return (
    <section className="relative z-10 w-full py-20 lg:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white"
          >
            Our Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto"
          >
            A collection of our favourite projects showcasing our passion for <span className="text-orange-400 font-medium">innovation</span> and <span className="text-orange-400 font-medium">impact</span>.
          </motion.p>
        </div>

        {/* UPDATED GRID LAYOUT: lg:grid-cols-3 for the third card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.button
              key={project.id}
              layoutId={`card-${project.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => open(project.id)}
              className="group relative flex flex-col p-6 h-full rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-colors duration-300 text-left overflow-hidden"
            >
              {/* Hover Gradient Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 p-3 rounded-xl bg-black/40 border border-white/10 h-16 w-16 flex items-center justify-center">
                   {/* Used object-contain to ensure logos fit nicely */}
                   <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">{project.title}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`flex h-2 w-2 rounded-full ${
                        project.status === 'Live' 
                            ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' 
                            : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]'
                    }`} />
                    <span className="text-sm text-white/60 font-mono">{project.year}</span>
                  </div>
                </div>
              </div>

              <div className="md:block">
                <AnimatePresence>
                  {(isDesktop || expandedCard === project.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="relative z-10 text-white/70 text-base lg:text-lg leading-relaxed my-6 flex-grow">
                        {project.preview}
                      </p>
                      <div 
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click when clicking the button
                          setActive(project.id);
                          setCurrentSlide(0);
                        }}
                        className="relative z-10 flex items-center text-orange-400 font-medium group-hover:translate-x-1 transition-transform cursor-pointer"
                      >
                        View Case Study
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Modal with AnimatePresence for smooth entry/exit */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              layoutId={`card-${activeProject.id}`}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-[#0F0F0F] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
            >
              
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-4">
                  <img src={activeProject.logo} className="w-10 h-10 object-contain" alt="" />
                  <div>
                    <h2 className="text-xl font-bold text-white">{activeProject.title}</h2>
                    <p className="text-xs text-white/50 uppercase tracking-wider">Case Study</p>
                  </div>
                </div>
                <button
                  ref={closeBtnRef}
                  onClick={close}
                  className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Scrollable Content Area */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                {/* Carousel Track */}
                <div className="relative min-h-[400px]">
                    <motion.div 
                        animate={{ x: `-${currentSlide * 100}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="flex h-full"
                    >
                        {activeProject.slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0 p-8 sm:p-12">
                            <div className="max-w-2xl mx-auto">
                                <motion.h3 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600 mb-6"
                                >
                                    {slide.title}
                                </motion.h3>
                                
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg text-white/80 leading-relaxed mb-8"
                                >
                                    {slide.content}
                                </motion.p>
                                
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                                >
                                    {slide.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
                                        <span className="text-sm font-medium text-white/90">{feature}</span>
                                    </div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                        ))}
                    </motion.div>
                </div>
              </div>

              {/* Modal Footer Controls */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                
                {/* Dots */}
                <div className="flex gap-2">
                  {activeProject.slides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentSlide === idx ? 'w-8 bg-orange-500' : 'w-1.5 bg-white/20 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
                    {/* Arrows */}
                    <div className="flex items-center gap-2">
                        <button onClick={prevSlide} className="p-2 rounded-lg border border-white/10 hover:bg-white/10 text-white disabled:opacity-30">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <button onClick={nextSlide} className="p-2 rounded-lg border border-white/10 hover:bg-white/10 text-white disabled:opacity-30">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>

                    {/* Visit Site / Back Button */}
                    {activeProject.siteUrl ? (
                        <a
                        href={activeProject.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-xl transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]"
                        >
                        Visit Site
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 14L21 3M21 3l-6.5 18a0.55 .55 0 0 1 -1 0V10a0.55 .55 0 0 0 -1 0H4a0.55 .55 0 0 1 0 -1l18-6.5"/></svg>
                        </a>
                    ) : (
                        <button
                        onClick={close}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all"
                        >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5m7 7l-7-7 7-7"/></svg>
                        Back
                        </button>
                    )}
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}