import { useEffect, useRef, useState, useCallback } from 'react';

export default function AboutSection() {
  const [active, setActive] = useState(null);
  const closeBtnRef = useRef(null);

  const services = [
    {
      id: 'apps',
      title: 'Apps & Websites',
      content:
        "We design and build modern, intuitive apps and websites that don't just look good—they work hard for your business. From sleek customer-facing platforms to internal tools, we craft digital products that drive engagement and improve everyday operations.",
    },
    {
      id: 'consultation',
      title: 'Digital Consultation & Strategy',
      content:
        'We help businesses make sense of technology by offering tailored digital consultation. From identifying gaps in your systems to crafting strategies for growth, we guide you in choosing the right tools, platforms, and approaches to stay competitive in a fast-changing market.',
    },
    {
      id: 'solutions',
      title: 'Custom Business Solutions',
      content:
        'We develop AI-driven systems that automate data collection, optimize workflows, and streamline reporting to cut down manual work. Our solutions are designed to boost efficiency, reduce errors, and unlock valuable insights—so you can focus on growth while technology handles the heavy lifting.',
    },
  ];

  const open = (id) => setActive(id);
  const close = useCallback(() => setActive(null), []);

  // Lock background scroll + focus the close button when modal opens
  useEffect(() => {
    if (active) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      // small delay so element exists before focus
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
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [close]);

  const activeService = services.find((s) => s.id === active);

  return (
    <div className="relative z-10 h-full w-full flex flex-col items-center justify-start gap-6 sm:gap-8 p-4 sm:p-6 sm:pt-20  pt-23 text-center">
      <h1 className="text-5xl sm:text-5xl md:text-7xl font-black tracking-tight">What We Do</h1>

      <div className="max-w-2xl space-y-4">
        <p className="text-base sm:text-lg text-white/80">
         Flywheel Technologies is an innovation hub building AI-powered solutions tailored for enterprises and SMEs in Ghana, with a strong focus on modernizing traditional business operations. We help organisations digitize processes like inventory tracking, record-keeping, data management, and client interactions and provide scalable, cost-effective software that is simple enough for non-technical users while powerful enough to streamline operations and drive business growth
        </p>
      </div>

      {/* Clickable Service Cards (no inline expansion) */}
      <div className="w-full max-w-4xl space-y-3 sm:space-y-4 mt-6 sm:mt-8">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => open(service.id)}
            className="w-full rounded-xl bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 hover:bg-white/10 cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            aria-haspopup="dialog"
            aria-controls="service-modal"
          >
            <div className="p-4 sm:p-6 flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-semibold">{service.title}</h3>
              <div className="text-xl sm:text-2xl font-light">+</div>
            </div>
          </button>
        ))}
      </div>
      {/* Frosted Glass Modal */}
      {activeService && (
        <div
          id="service-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop with subtle blur; click to close */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md supports-[backdrop-filter]:bg-black/40 transition-opacity duration-200 opacity-100"
            onClick={close}
          />

          {/* Modal panel */}
          <div
            className="relative w-full max-w-lg rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl ring-1 ring-white/10
                       transition-all duration-200 ease-out
                       data-[state=open]:opacity-100 data-[state=open]:scale-100
                       opacity-0 scale-95"
            // trigger the animation on mount
            data-state="open"
          >
            <div className="p-5">
              <div className="flex items-start justify-between gap-4">
                <h2 id="service-modal-title" className="text-xl sm:text-2xl font-bold">
                  {activeService.title}
                </h2>
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

              <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed">{activeService.content}</p>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={close}
                  className="rounded-xl px-4 py-2 bg-white/10 hover:bg-white/20 ring-1 ring-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                >
                  Done
                </button>
              </div>
            </div>
          </div>

          {/* Subtle scale/press cue like iOS long-press */}
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