import React, { useState, useEffect } from 'react';
import { MessageCircle, X, CalendarCheck } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "201000000000"; // Can be easily configured
  const prefilledMessage = encodeURIComponent(
    "أهلاً نادي ريو، أود الاستفسار عن عرض العضوية الأسرية وحجز الزيارة المجانية."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${prefilledMessage}`;

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Floating WhatsApp Action Button */}
      <aside aria-label="WhatsApp and quick actions" className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-2">
        {showTooltip && (
          <div className="relative bg-[#060e18] border border-emerald-500/30 text-white text-xs px-3.5 py-2 rounded-2xl shadow-2xl flex items-center gap-2 animate-bounce">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>تواصل معنا مباشرة عبر واتساب</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 text-white shadow-xl shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>
      </aside>

      {/* Sticky Mobile Bottom Bar (Optimized for WhatsApp traffic) */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-[#060e18]/95 backdrop-blur-md border-t border-white/10 p-3 flex items-center justify-between gap-3 shadow-2xl">
        <div className="text-right flex-1">
          <div className="text-xs font-bold text-emerald-400">عرض تقسيط حتى 60 شهر</div>
          <div className="text-[11px] text-slate-300">عضوية أسرية مدى الحياة</div>
        </div>
        <button
          onClick={scrollToRegister}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs font-black shadow-lg shadow-emerald-500/25 flex items-center gap-1.5"
        >
          <CalendarCheck className="w-3.5 h-3.5" />
          <span>احجز زيارتك المجانية</span>
        </button>
      </div>
    </>
  );
}
