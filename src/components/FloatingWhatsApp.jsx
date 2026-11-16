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

  const whatsappNumber = "201000000000";
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
          <div className="relative bg-white border border-slate-200 text-slate-800 text-xs font-bold px-3.5 py-2 rounded-2xl shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping"></span>
            <span>تواصل معنا عبر واتساب</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#16A34A] to-[#22C55E] text-white shadow-lg shadow-[#16A34A]/30 hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
        </a>
      </aside>

      {/* Sticky Mobile Bottom Bar (Light & Clean) */}
      <div className="fixed bottom-0 inset-x-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 flex items-center justify-between gap-3 shadow-lg">
        <div className="text-right flex-1">
          <div className="text-xs font-black text-[#003B73]">عرض تقسيط حتى 60 شهر</div>
          <div className="text-[11px] text-slate-500 font-medium">عضوية أسرية مدى الحياة</div>
        </div>
        <button
          onClick={scrollToRegister}
          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#003B73] via-[#0A4E8C] to-[#16A34A] text-white text-xs font-black shadow-md flex items-center gap-1.5"
        >
          <CalendarCheck className="w-3.5 h-3.5 text-emerald-200" />
          <span>احجز زيارتك المجانية</span>
        </button>
      </div>
    </>
  );
}
