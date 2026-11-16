import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck, ShieldCheck, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060e18]/90 backdrop-blur-md border-b border-white/10 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Rio Club Alexandria"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/15 bg-white/5 p-1 shadow-lg transition-transform group-hover:scale-105">
              <img
                src="./logo.jpg"
                alt="Rio Club Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1.5 font-cairo">
                نادي ريو <span className="text-emerald-400 text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 font-medium">RIO CLUB</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium">
                الإسكندرية - نادي رياضي اجتماعي ترفيهي
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollTo('sports')}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              ألعابنا الرياضية
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              موقعنا
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="hover:text-emerald-400 transition-colors py-1 cursor-pointer"
            >
              معرض الصور
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo('register')}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>احجز زيارتك المجانية</span>
              <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => scrollTo('register')}
              className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-500 text-white"
            >
              زيارة مجانية
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#060e18]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-4 text-base font-semibold text-slate-200">
            <button
              onClick={() => scrollTo('hero')}
              className="text-right py-2 hover:text-emerald-400 transition-colors border-b border-white/5"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-right py-2 hover:text-emerald-400 transition-colors border-b border-white/5"
            >
              من نحن (عن النادي)
            </button>
            <button
              onClick={() => scrollTo('sports')}
              className="text-right py-2 hover:text-emerald-400 transition-colors border-b border-white/5"
            >
              ألعابنا الرياضية (10 ألعاب)
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="text-right py-2 hover:text-emerald-400 transition-colors border-b border-white/5"
            >
              موقعنا وسهولة الوصول
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="text-right py-2 hover:text-emerald-400 transition-colors border-b border-white/5"
            >
              معرض الصور
            </button>
            <button
              onClick={() => scrollTo('register')}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/25"
            >
              <CalendarCheck className="w-5 h-5" />
              <span>احجز زيارتك المجانية الآن</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
