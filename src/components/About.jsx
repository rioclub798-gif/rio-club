import React from 'react';
import { ShieldCheck, HeartHandshake, Waves, Sparkles, Trophy, Utensils, Baby, Compass } from 'lucide-react';

export default function About() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const amenities = [
    {
      icon: Waves,
      title: 'حمامات سباحة مجهزة',
      desc: 'مجمع سباحة متكامل يضم حمامات سباحة ترفيهية وأولمبية، مخصصة للعائلات وتدريب الأكاديميات بإشراف طاقم إنقاذ احترافي.',
      tag: 'سباحة وترفيه',
      color: 'from-blue-500/20 to-teal-500/20 text-blue-400 border-blue-500/30'
    },
    {
      icon: Sparkles,
      title: 'حفلات وفعاليات اجتماعية',
      desc: 'أجواء عائلية راقية مع تنظيم حفلات دورية، فعاليات مواسم، أعياد ومناسبات اجتماعية خاصة تسعد جميع أفراد الأسرة.',
      tag: 'حياة اجتماعية',
      color: 'from-orange-500/20 to-amber-500/20 text-orange-400 border-orange-500/30'
    },
    {
      icon: Trophy,
      title: 'أكاديميات رياضية احترافية',
      desc: 'مدربون معتمدون في أكثر من 10 رياضات فردية وجماعية لبناء جيل رياضي متميز ومستعد للبطولات الرسمية.',
      tag: 'بطولات وتطوير',
      color: 'from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/30'
    },
    {
      icon: Utensils,
      title: 'مطاعم وكافيهات راقية',
      desc: 'خيارات طعام وخدمات ضيافة متنوعة تلبي كافة الأذواق، مع جلسات عائلية هادئة ومساحات خضراء مفتوحة.',
      tag: 'خدمات متكاملة',
      color: 'from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/30'
    },
    {
      icon: Baby,
      title: 'منطقة كيدز إريا آمنة',
      desc: 'مناطق ترفيهية للأطفال مجهزة بأحدث وأأمن الألعاب تحت إشراف متخصصين لقضاء أوقات ممتعة وآمنة.',
      tag: 'ترفيه للأطفال',
      color: 'from-yellow-500/20 to-orange-500/20 text-yellow-400 border-yellow-500/30'
    },
    {
      icon: Compass,
      title: 'أمن وخدمات فندقية 24/7',
      desc: 'فريق أمن وحراسة مدرب على أعلى مستوى، مع مواقف سيارات مؤمنة وشبكة أتوبيسات خاصة لنقل الأعضاء.',
      tag: 'راحة وأمان',
      color: 'from-emerald-500/20 to-blue-500/20 text-emerald-400 border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#070e17] overflow-hidden">
      
      {/* Decorative Grid Lines - Grin Golf Style */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>من نحن | نادي ريو الإسكندرية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6">
            أكثر من مجرد نادي رياضي.. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
              مجتمع متكامل يجمع عائلتك
            </span>
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed font-medium">
            يُعد <strong className="text-white font-bold">نادي ريو (Rio Club)</strong> وجهتك الأولى في الإسكندرية كنادٍ <span className="text-emerald-400 font-bold">رياضي، اجتماعي، وترفيهي</span> شامل. صُمم النادي ليوفر أعلى مستويات الرفاهية والنشاط الرياضي لجميع أفراد الأسرة في بيئة صحية، آمنة وراقية.
          </p>
        </div>

        {/* Big Highlight Banner: Lifetime Membership Can Be Inherited */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-emerald-950/60 via-slate-900/90 to-blue-950/60 border border-emerald-500/30 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-500/30">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                  استثمار لأجيال قادمة
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  العضوية أسرية مدى الحياة وتورث للأبناء
                </h3>
                <p className="text-slate-300 max-w-2xl text-base leading-relaxed">
                  عضويتك في نادي ريو ليست مجرد اشتراك سنوي، بل هي أصل عائلي دائم يضمن لك ولأبنائك الاستمتاع بجميع مرافق وأنشطة وخدمات النادي مدى الحياة، مع إمكانية التوريث القانوني طبقاً للوائح النادي.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={scrollToRegister}
                className="w-full lg:w-auto px-8 py-4 rounded-2xl bg-white text-slate-950 hover:bg-slate-100 font-extrabold text-base transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer text-center block"
              >
                استفسر عن تفاصيل العضوية الآن
              </button>
            </div>
          </div>
        </div>

        {/* Amenities & Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} border flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400/80 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>متاح لجميع حاملي العضوية الأسرية</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
