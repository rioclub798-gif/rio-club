import React from 'react';
import { MapPin, Phone, Mail, Clock, Heart, Shield, Award } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040810] text-slate-300 pt-16 pb-24 sm:pb-16 border-t border-white/10 overflow-hidden">
      
      {/* Decorative ambient gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-emerald-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10 text-right">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/15 bg-white/5 p-1">
                <img
                  src="./logo.jpg"
                  alt="Rio Club Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-2xl text-white block">نادي ريو</span>
                <span className="text-xs text-emerald-400 font-semibold tracking-wider">RIO CLUB ALEXANDRIA</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              نادي رياضي، اجتماعي، وترفيهي متكامل في الإسكندرية. يوفر عضويات أسرية دائمة تورث للأبناء مع تسهيلات تقسيط مباشر حتى 60 شهر.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                عضوية أسرية مدى الحياة وتورث
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-emerald-500 rounded-full"></span>
              <span>روابط سريعة</span>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  عن النادي (من نحن)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sports')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  ألعابنا الرياضية (10 ألعاب)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('location')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  موقعنا وخريطة الوصول
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  معرض الصور
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('register')}
                  className="text-emerald-400 font-bold hover:underline cursor-pointer"
                >
                  سجل لطلب زيارة مجانية
                </button>
              </li>
            </ul>
          </div>

          {/* Sports summary */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
              <span>ألعابنا الرياضية</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              <span className="hover:text-white transition-colors">⚽ كرة قدم</span>
              <span className="hover:text-white transition-colors">🏊‍♂️ سباحة</span>
              <span className="hover:text-white transition-colors">🏀 كرة سلة</span>
              <span className="hover:text-white transition-colors">🎾 تنس أرضي</span>
              <span className="hover:text-white transition-colors">🤸 جمباز</span>
              <span className="hover:text-white transition-colors">🥋 كاراتيه</span>
              <span className="hover:text-white transition-colors">🥋 تايكوندو</span>
              <span className="hover:text-white transition-colors">🥊 كيك بوكس</span>
              <span className="hover:text-white transition-colors">🐉 كونج فو</span>
              <span className="hover:text-white transition-colors">💪 جيم ولياقة</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
              <span>الموقع والاتصال</span>
            </h4>
            
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <span>تقاطع امتداد ش ٤٥ ميامي مع الطريق الدولي الإسكندرية</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-orange-400 shrink-0" />
                <span>يومياً لاستقبال الزيارات: ٩ ص حتى ١١ م</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-blue-400 shrink-0" />
                <span>أتوبيسات خاصة لراحة الأعضاء</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-right">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} نادي ريو الإسكندرية (Rio Club).
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>نادي رياضي • اجتماعي • ترفيهي</span>
            <span>•</span>
            <span className="text-emerald-400">الإسكندرية</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
