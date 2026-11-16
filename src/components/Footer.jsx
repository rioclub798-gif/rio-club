import React from 'react';
import { MapPin, Phone, Mail, Clock, Shield, Award } from 'lucide-react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F8FAFC] text-slate-600 pt-16 pb-24 sm:pb-16 border-t border-slate-200 overflow-hidden">
      
      {/* Top Rio Club Brand Accent Stripe */}
      <div className="absolute top-0 right-0 left-0 h-1 brand-stripe" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-200 text-right">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden border border-slate-200 bg-white p-1 shadow-sm">
                <img
                  src="./logo.jpg"
                  alt="Rio Club Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-black text-2xl text-[#003B73] block">نادي ريو</span>
                <span className="text-xs text-[#16A34A] font-bold tracking-wider">RIO CLUB ALEXANDRIA</span>
              </div>
            </div>

            <p className="text-sm text-slate-500 leading-relaxed font-medium">
              نادي رياضي، اجتماعي، وترفيهي متكامل في الإسكندرية. يوفر عضويات أسرية دائمة تورث للأبناء مع تسهيلات تقسيط مباشر حتى 60 شهر.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="px-3 py-1 rounded-full bg-[#F0FDF4] border border-[#16A34A]/20 text-[#16A34A] text-xs font-bold">
                عضوية أسرية مدى الحياة وتورث
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#001D3D] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#003B73] rounded-full"></span>
              <span>روابط سريعة</span>
            </h4>
            <ul className="space-y-2 text-sm font-semibold">
              <li>
                <button
                  onClick={() => scrollTo('hero')}
                  className="hover:text-[#003B73] transition-colors cursor-pointer"
                >
                  الرئيسية
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-[#003B73] transition-colors cursor-pointer"
                >
                  عن النادي (من نحن)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('sports')}
                  className="hover:text-[#003B73] transition-colors cursor-pointer"
                >
                  ألعابنا الرياضية (10 ألعاب)
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('location')}
                  className="hover:text-[#003B73] transition-colors cursor-pointer"
                >
                  موقعنا وخريطة الوصول
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('gallery')}
                  className="hover:text-[#003B73] transition-colors cursor-pointer"
                >
                  معرض الصور
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('register')}
                  className="text-[#16A34A] font-bold hover:underline cursor-pointer"
                >
                  سجل لطلب زيارة مجانية
                </button>
              </li>
            </ul>
          </div>

          {/* Sports summary */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#001D3D] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#F37021] rounded-full"></span>
              <span>ألعابنا الرياضية</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold text-slate-500">
              <span className="hover:text-[#003B73] transition-colors">⚽ كرة قدم</span>
              <span className="hover:text-[#003B73] transition-colors">🏊‍♂️ سباحة</span>
              <span className="hover:text-[#003B73] transition-colors">🏀 كرة سلة</span>
              <span className="hover:text-[#003B73] transition-colors">🎾 تنس أرضي</span>
              <span className="hover:text-[#003B73] transition-colors">🤸 جمباز</span>
              <span className="hover:text-[#003B73] transition-colors">🥋 كاراتيه</span>
              <span className="hover:text-[#003B73] transition-colors">🥋 تايكوندو</span>
              <span className="hover:text-[#003B73] transition-colors">🥊 كيك بوكس</span>
              <span className="hover:text-[#003B73] transition-colors">🐉 كونج فو</span>
              <span className="hover:text-[#003B73] transition-colors">💪 جيم ولياقة</span>
            </div>
          </div>

          {/* Location & Contact */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#001D3D] mb-4 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#16A34A] rounded-full"></span>
              <span>الموقع والاتصال</span>
            </h4>
            
            <div className="space-y-3 text-sm text-slate-500 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#003B73] shrink-0 mt-0.5" />
                <span>تقاطع امتداد ش ٤٥ ميامي مع الطريق الدولي الإسكندرية</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F37021] shrink-0" />
                <span>يومياً لاستقبال الزيارات: ٩ ص حتى ١١ م</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Shield className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>أتوبيسات خاصة لراحة الأعضاء</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 text-center sm:text-right">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()} نادي ريو الإسكندرية (Rio Club).
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span>نادي رياضي • اجتماعي • ترفيهي</span>
            <span>•</span>
            <span className="text-[#003B73] font-bold">الإسكندرية</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
