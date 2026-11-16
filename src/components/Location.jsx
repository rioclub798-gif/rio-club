import React from 'react';
import { MapPin, Navigation, Bus, Clock, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Location() {
  const accessibilityList = [
    {
      time: '15 دقيقة',
      from: 'كارفور سيتي سنتر الإسكندرية',
      route: 'عبر الطريق الدولي الساحلي مباشرة',
      badge: 'سريع ومباشر',
      color: 'text-[#16A34A] bg-[#F0FDF4] border-[#16A34A]/20'
    },
    {
      time: '15 دقيقة',
      from: 'جامعة فاروس',
      route: 'عبر محور المحمودية الجديد',
      badge: 'محور سريع',
      color: 'text-[#003B73] bg-[#EFF6FF] border-[#003B73]/20'
    },
    {
      time: '15 دقيقة',
      from: 'سموحة (ميدان فيكتور عمانويل)',
      route: 'طريق سهل وسريع بدون إشارات',
      badge: 'قلب الإسكندرية',
      color: 'text-[#F37021] bg-[#FFF7ED] border-[#F37021]/20'
    },
    {
      time: '15 دقيقة',
      from: 'كورنيش ميامي',
      route: 'امتداد شارع 45 الرئيسي',
      badge: 'شرق الإسكندرية',
      color: 'text-[#16A34A] bg-[#F0FDF4] border-[#16A34A]/20'
    },
    {
      time: '15 دقيقة',
      from: 'منطقة أبو قير',
      route: 'الوصلة الساحلية المباشرة',
      badge: 'ساحلي',
      color: 'text-[#003B73] bg-[#EFF6FF] border-[#003B73]/20'
    },
    {
      time: '30 دقيقة',
      from: 'دمنهور والمحافظات المجاورة',
      route: 'طريق دمنهور الدولي السريع',
      badge: 'محافظة البحيرة',
      color: 'text-[#F37021] bg-[#FFF7ED] border-[#F37021]/20'
    }
  ];

  const mapsUrl = "https://www.google.com/maps/place/Rio+Club/@31.2588,30.0152,15z";

  return (
    <section id="location" className="relative py-24 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#003B73]/20 text-[#003B73] text-xs font-bold uppercase tracking-wider mb-4">
            <MapPin className="w-4 h-4 text-[#16A34A]" />
            <span>موقع النادي وسهولة الوصول</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#001D3D] tracking-tight mb-4">
            في قلب الإسكندرية وعلى بعد دقائق منك
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            موقع استراتيجي فريد يجمع بين الهدوء بعيداً عن زحام المدينة، وسهولة الوصول الفائقة عبر المحاور والطرق السريعة الرئيسية.
          </p>

          {/* Exact Address Highlight */}
          <div className="mt-6 inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-[#003B73] font-bold text-base sm:text-lg shadow-sm">
            <Navigation className="w-5 h-5 text-[#16A34A] shrink-0" />
            <span>العنوان: تقاطع امتداد ش ٤٥ ميامي مع الطريق الدولي الإسكندرية</span>
          </div>
        </div>

        {/* Accessibility Grid (The 6 locations) */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-[#001D3D] mb-6 flex items-center gap-2">
            <Clock className="w-5 h-5 text-[#F37021]" />
            <span>زمن الوصول التقديري من أهم المناطق:</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {accessibilityList.map((item, index) => (
              <div
                key={index}
                className="card-clean p-5 rounded-2xl bg-white flex items-start gap-4 group"
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center font-black text-sm shrink-0 ${item.color}`}>
                  {item.time.split(' ')[0]}
                  <span className="text-[10px] font-normal mr-0.5">د</span>
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600">
                      {item.badge}
                    </span>
                    <span className="text-xs font-bold text-[#003B73]">
                      {item.time}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-[#001D3D] group-hover:text-[#003B73] transition-colors">
                    {item.from}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    {item.route}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bus Service Feature Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#EFF6FF] via-white to-[#F0FDF4] border border-slate-200 shadow-clean flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white border border-[#003B73]/20 flex items-center justify-center text-[#003B73] shrink-0 shadow-sm">
              <Bus className="w-8 h-8 text-[#003B73]" />
            </div>
            <div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#EFF6FF] text-[#003B73] text-xs font-bold mb-1">
                خدمة راحة الأعضاء
              </div>
              <h4 className="text-xl font-bold text-[#001D3D]">
                أتوبيسات خاصة لنقل الأعضاء متاحة في مختلف المناطق
              </h4>
              <p className="text-slate-600 text-sm mt-1 max-w-xl">
                يوفر النادي خطوط نقل مكيفة ومؤمنة تنطلق بمواعيد منتظمة لتغطية كبرى ميادين وأحياء الإسكندرية لضمان راحة وسلامة أبنائك وعائلتك.
              </p>
            </div>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-bold shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>مواعيد دقيقة وأمان كامل</span>
            </span>
          </div>
        </div>

        {/* Interactive Map Section & Google Maps Link */}
        <div className="card-clean p-6 sm:p-8 rounded-3xl bg-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
            <div>
              <h3 className="text-2xl font-black text-[#001D3D]">
                خريطة الموقع المباشر (Google Maps)
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                اضغط على الزر لفتح الموقع في تطبيق خرائط جوجل والحصول على الاتجاهات خطوة بخطوة.
              </p>
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#003B73] hover:bg-[#002855] text-white font-extrabold text-sm transition-all shadow-md shadow-[#003B73]/20 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <ExternalLink className="w-4 h-4 text-emerald-300" />
              <span>فتح الموقع على خرائط Google Maps</span>
            </a>
          </div>

          {/* Embedded Map Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="Rio Club Alexandria Location"
              src="https://maps.google.com/maps?q=31.2588,30.0152&z=14&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            
            {/* Overlay Card on Map */}
            <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 max-w-xs shadow-md hidden sm:block text-right">
              <div className="flex items-center gap-2 text-[#003B73] text-xs font-bold mb-1">
                <MapPin className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>نادي ريو الرياضي Rio Club</span>
              </div>
              <p className="text-xs text-slate-600">
                تقاطع امتداد ش ٤٥ ميامي مع الطريق الدولي الإسكندرية
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
