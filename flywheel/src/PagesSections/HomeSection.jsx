import { useState, useEffect } from "react";
import ThreeBackground from "../Components/ThreeBackground";
import { AnimatePresence, motion } from "framer-motion";

export default function HomeSection() {
  const [count, setCount] = useState(3);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount(count - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [count]);

  // Animation variants for staggering elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  // Typewriting variant for the final text
  const typingContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline-block" },
  };

  const finalMessage = "Accepting New Projects";

  return (
    <>
      <ThreeBackground />
      
      <div className="relative z-10 h-full w-full min-h-screen flex flex-col justify-center overflow-hidden bg-black/40 backdrop-blur-[2px]">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-20 items-center"
        >

          {/* Left Column - Hero Text */}
          <div className="space-y-6 sm:space-y-2 text-center lg:text-left">
            
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium min-w-[180px]">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                
                <AnimatePresence mode="wait">
                  {!isComplete ? (
                    <motion.span
                      key="counting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="whitespace-nowrap"
                    >
                      Checking for backlogs {count}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="complete"
                      variants={typingContainer}
                      initial="hidden"
                      animate="visible"
                      className="whitespace-nowrap"
                    >
                      {finalMessage.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariant}>
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
                Turn Any Idea <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                  Into a Working
                </span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-amber-600">
                  Product.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="text-lg sm:text-xl font-medium text-white/80 max-w-lg mx-auto lg:mx-0">
                Flywheel Technologies — The AI-Driven Product Studio
              </h4>
            </motion.div>
          </div>

          {/* Right Column - Description & CTAs */}
          <motion.div 
            variants={itemVariants}
            className="space-y-1 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-5 backdrop-blur-md shadow-2xl"
          >
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed font-light">
                We help founders and organizations transform concepts into clean, <span className="text-white font-semibold">production-ready software</span>.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 bg-orange-500 text-white font-semibold transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>

              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3.5 bg-white/5 hover:bg-white/10 ring-1 ring-white/20 text-white font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>View Our Work</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}