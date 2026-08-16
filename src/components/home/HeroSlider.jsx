import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { ShieldCheck, ArrowRight, Sparkles, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: "PESHAWAR'S TRUSTED PHARMACY SINCE 2007",
    title: "100% Genuine Certified Medicines & Health Supplies",
    description: "Get authentic prescription medicines, baby care essentials, and diagnostic devices delivered straight to your doorstep in Peshawar with one click on WhatsApp.",
    highlight: "⚡ 30-Min Fast Local Dispatch",
    primaryCta: "Order via WhatsApp",
    primaryLink: "https://wa.me/923349238785?text=Hello%20Waqas%20Pharmacy,%20I%20want%20to%20order%20medicines%20for%20home%20delivery.",
    secondaryCta: "Explore Categories",
    secondaryAnchor: "#categories",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800",
    badge: "Verified Stock"
  },
  {
    id: 2,
    tag: "HEALTH, WELLNESS & NUTRITION",
    title: "Comprehensive Multivitamins & Daily Health Supplements",
    description: "Support your family's immune health and daily vitality with authentic imported and local multivitamins, minerals, fish oil, and wellness formulations.",
    highlight: "🌿 Certified Authentic Formulations",
    primaryCta: "Inquire Supplements on WhatsApp",
    primaryLink: "https://wa.me/923349238785?text=Hello,%20I%20want%20to%20inquire%20about%20Health%20Supplements%20and%20Multivitamins.",
    secondaryCta: "Explore Categories",
    secondaryAnchor: "#categories",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?auto=format&fit=crop&q=80&w=800",
    badge: "Immunity & Vitality"
  },
  {
    id: 3,
    tag: "CLINICAL GRADE HEALTHCARE DEVICES",
    title: "Certified Blood Pressure Monitors, Glucometers & Nebulizers",
    description: "Accurate health monitoring equipment from Omron, Accu-Chek, and Beurer with official brand warranty and qualified pharmacist demonstration.",
    highlight: "🩺 100% Brand Certified with Official Warranty",
    primaryCta: "Inquire Medical Devices",
    primaryLink: "https://wa.me/923349238785?text=Hello,%20I%20want%20to%20inquire%20about%20Healthcare%20Devices%20(BP%20Monitor/Glucometer/Nebulizer).",
    secondaryCta: "View Store Services",
    secondaryAnchor: "#services",
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800",
    badge: "Clinical Accuracy"
  }
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  const slide = SLIDES[currentSlide];

  return (
    <section 
      id="home"
      className="relative bg-white text-[#0F172A] overflow-hidden py-8 sm:py-14 lg:py-18 border-b border-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Text & CTAs */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-3.5 sm:space-y-5"
              >
                {/* Tagline Badge */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-red-50 border border-red-200 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-black text-[#B91C1C]">
                  <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#B91C1C] shrink-0" />
                  <span>{slide.tag}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#0F172A] leading-tight">
                  {slide.title}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-[#475569] text-xs sm:text-base leading-relaxed max-w-2xl font-medium">
                  {slide.description}
                </p>

                {/* Pill highlight */}
                <div className="flex items-center gap-3 pt-0.5">
                  <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-extrabold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-xl shadow-2xs">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>{slide.highlight}</span>
                  </div>
                </div>

                {/* CTAs (Mobile: full width stack, Desktop: inline flex) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 pt-2">
                  <a
                    href={slide.primaryLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-base px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-lg shadow-green-950/15 hover:shadow-green-950/25 active:scale-95 transition-all duration-200 cursor-pointer text-center"
                  >
                    <FaWhatsapp className="text-lg sm:text-xl" />
                    <span>{slide.primaryCta}</span>
                  </a>

                  <a
                    href={slide.secondaryAnchor}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs sm:text-base px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl sm:rounded-2xl border border-slate-200 transition-all duration-200 cursor-pointer text-center"
                  >
                    <span>{slide.secondaryCta}</span>
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B91C1C]" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Dots & Navigation Controls */}
            <div className="flex items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === idx ? 'w-6 sm:w-8 bg-[#B91C1C]' : 'w-2 sm:w-2.5 bg-slate-200 hover:bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-1.5 ml-2">
                <button
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                >
                  <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer border border-slate-200"
                >
                  <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Card */}
          <div className="lg:col-span-5 relative mt-2 sm:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-xl border border-slate-200 bg-white p-2 sm:p-2.5"
              >
                <div className="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent"></div>
                  
                  {/* Floating Card Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-md px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg sm:rounded-xl shadow-md flex items-center gap-1.5 border border-slate-100">
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B91C1C]" />
                    <span className="text-[10px] sm:text-xs font-black text-[#0F172A] uppercase tracking-wider">{slide.badge}</span>
                  </div>

                  {/* Bottom Store Details */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-amber-300">Waqas Pharmacy</p>
                        <p className="text-xs sm:text-sm font-extrabold text-white">Dabgari Garden Chowk, Peshawar</p>
                      </div>
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow-md shrink-0 ml-2">
                        <FaWhatsapp className="text-base sm:text-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
