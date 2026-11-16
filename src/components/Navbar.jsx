import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck, Sparkles } from 'lucide-react';

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
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
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
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 bg-white p-1 shadow-sm transition-transform group-hover:scale-105">
              <img
                src="./logo.jpg"
                alt="Rio Club Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#003B73] font-cairo">
                  نادي ريو
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F0FDF4] text-[#16A34A] border border-[#16A34A]/20">
                  RIO CLUB
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium">
                الإسكندرية • نادي رياضي اجتماعي ترفيهي
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-bold text-slate-600">
            <button
              onClick={() => scrollTo('hero')}
              className="hover:text-[#003B73] transition-colors py-1 cursor-pointer"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="hover:text-[#003B73] transition-colors py-1 cursor-pointer"
            >
              من نحن
            </button>
            <button
              onClick={() => scrollTo('sports')}
              className="hover:text-[#003B73] transition-colors py-1 cursor-pointer"
            >
              ألعابنا الرياضية
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="hover:text-[#003B73] transition-colors py-1 cursor-pointer"
            >
              موقعنا
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="hover:text-[#003B73] transition-colors py-1 cursor-pointer"
            >
              معرض الصور
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo('register')}
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#003B73] via-[#0A4E8C] to-[#16A34A] hover:opacity-95 transition-all duration-300 shadow-md shadow-[#003B73]/20 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-emerald-200" />
              <span>احجز زيارتك المجانية</span>
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => scrollTo('register')}
              className="sm:hidden text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r from-[#003B73] to-[#16A34A] text-white shadow-sm"
            >
              زيارة مجانية
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-[#003B73] hover:bg-slate-200 transition-colors"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-slate-200 px-6 py-6 transition-all duration-300 shadow-lg">
          <div className="flex flex-col gap-3 text-base font-bold text-slate-700">
            <button
              onClick={() => scrollTo('hero')}
              className="text-right py-2 hover:text-[#003B73] transition-colors border-b border-slate-100"
            >
              الرئيسية
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-right py-2 hover:text-[#003B73] transition-colors border-b border-slate-100"
            >
              من نحن (عن النادي)
            </button>
            <button
              onClick={() => scrollTo('sports')}
              className="text-right py-2 hover:text-[#003B73] transition-colors border-b border-slate-100"
            >
              ألعابنا الرياضية (10 ألعاب)
            </button>
            <button
              onClick={() => scrollTo('location')}
              className="text-right py-2 hover:text-[#003B73] transition-colors border-b border-slate-100"
            >
              موقعنا وسهولة الوصول
            </button>
            <button
              onClick={() => scrollTo('gallery')}
              className="text-right py-2 hover:text-[#003B73] transition-colors border-b border-slate-100"
            >
              معرض الصور
            </button>
            <button
              onClick={() => scrollTo('register')}
              className="w-full mt-2 inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-white bg-gradient-to-r from-[#003B73] via-[#0A4E8C] to-[#16A34A] shadow-md shadow-[#003B73]/25"
            >
              <CalendarCheck className="w-5 h-5 text-emerald-200" />
              <span>احجز زيارتك المجانية الآن</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
