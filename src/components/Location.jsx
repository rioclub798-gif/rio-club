import React from 'react';
import { MapPin, Navigation, Bus, Clock, ExternalLink, Compass, ShieldCheck } from 'lucide-react';

export default function Location() {
  const accessibilityList = [
    {
      time: '15 دقيقة',
      from: 'كارفور سيتي سنتر الإسكندرية',
      route: 'عبر الطريق الدولي الساحلي مباشرة',
      badge: 'سريع ومباشر'
    },
    {
      time: '15 دقيقة',
      from: 'جامعة فاروس',
      route: 'عبر محور المحمودية الجديد',
      badge: 'محور سريع'
    },
    {
      time: '15 دقيقة',
      from: 'سموحة (ميدان فيكتور عمانويل)',
      route: 'طريق سهل وسريع بدون إشارات',
      badge: 'قلب الإسكندرية'
    },
    {
      time: '15 دقيقة',
      from: 'كورنيش ميامي',
      route: 'امتداد شارع 45 الرئيسي',
      badge: 'شرق الإسكندرية'
    },
    {
      time: '15 دقيقة',
      from: 'منطقة أبو قير',
      route: 'الوصلة الساحلية المباشرة',
      badge: 'ساحلي'
    },
    {
      time: '30 دقيقة',
      from: 'دمنهور والمحافظات المجاورة',
      route: 'طريق دمنهور الدولي السريع',
      badge: 'محافظة البحيرة'
    }
  ];

  const mapsUrl = "https://www.google.com/maps/place/Rio+Club/@31.2588,30.0152,15z";

  return (
    <section id="location" className="relative py-24 bg-[#070e17] overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.1),rgba(255,255,255,0))] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4" />
            <span>موقع النادي وسهولة الوصول</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            في قلب الإسكندرية وعلى بعد دقائق منك
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            موقع استراتيجي فريد يجمع بين الهدوء بعيداً عن زحام المدينة، وسهولة الوصول الفائقة عبر المحاور والطرق السريعة الرئيسية.
          </p>

          {/* Exact Address Highlight */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-emerald-300 font-bold text-base sm:text-lg">
            <Navigation className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>العنوان: تقاطع امتداد ش ٤٥ ميامي مع الطريق الدولي الإسكندرية</span>
          </div>
        </div>

        {/* Accessibility Grid (The 6 locations) */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-orange-400" />
            <span>زمن الوصول التقديري من أهم المناطق:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessibilityList.map((item, index) => (
              <div
                key={index}
                className="glass-card p-5 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-sm shrink-0 group-hover:scale-105 transition-transform">
                  {item.time.split(' ')[0]}
                  <span className="text-[10px] font-normal mr-0.5">د</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-white/5 text-slate-400">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-emerald-400">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.from}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {item.route}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bus Service Feature Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-950/70 via-slate-900/80 to-emerald-950/70 border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Bus className="w-8 h-8" />
            </div>
            <div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold mb-1">
                خدمة راحة الأعضاء
              </div>
              <h4 className="text-xl font-bold text-white">
                أتوبيسات خاصة لنقل الأعضاء متاحة في مختلف المناطق
              </h4>
              <p className="text-slate-300 text-sm mt-1 max-w-xl">
                يوفر النادي خطوط نقل مكيفة ومؤمنة تنطلق بمواعيد منتظمة لتغطية كبرى ميادين وأحياء الإسكندرية لضمان راحة وسلامة أبنائك وعائلتك.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>مواعيد دقيقة وأمان كامل</span>
            </span>
          </div>
        </div>

        {/* Interactive Map Section & Google Maps Link */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl font-black text-white">
                خريطة الموقع المباشر (Google Maps)
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                اضغط على الزر لفتح الموقع في تطبيق خرائط جوجل والحصول على الاتجاهات خطوة بخطوة.
              </p>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/25 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4" />
              <span>فتح الموقع على خرائط Google Maps</span>
            </a>
          </div>

          {/* Embedded Map Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-inner">
            <iframe
              title="Rio Club Alexandria Location"
              src="https://maps.google.com/maps?q=31.2588,30.0152&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'contrast(1.1) opacity(0.85)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Overlay Card on Map */}
            <div className="absolute bottom-4 right-4 bg-[#060e18]/90 backdrop-blur-md p-4 rounded-xl border border-white/15 max-w-xs shadow-xl hidden sm:block text-right">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>نادي ريو الرياضي Rio Club</span>
              </div>
              <p className="text-xs text-slate-300">
                تقاطع امتداد ش ٤٥ ميامي مع الطريق الدولي الإسكندرية
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
