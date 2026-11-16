import React from 'react';
import { ShieldCheck, HeartHandshake, Waves, Sparkles, Trophy, Utensils, Baby, Compass, CheckCircle2 } from 'lucide-react';

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
      accentColor: 'text-[#003B73]',
      bgColor: 'bg-[#EFF6FF]',
      borderColor: 'border-[#003B73]/20'
    },
    {
      icon: Sparkles,
      title: 'حفلات وفعاليات عائلية',
      desc: 'أجواء اجتماعية راقية مع تنظيم حفلات دورية، فعاليات مواسم، أعياد ومناسبات خاصة تسعد جميع أفراد الأسرة.',
      tag: 'حياة اجتماعية',
      accentColor: 'text-[#F37021]',
      bgColor: 'bg-[#FFF7ED]',
      borderColor: 'border-[#F37021]/20'
    },
    {
      icon: Trophy,
      title: 'أكاديميات رياضية احترافية',
      desc: 'مدربون معتمدون في أكثر من 10 رياضات فردية وجماعية لبناء جيل رياضي متميز ومستعد للمنافسات والبطولات الرسمية.',
      tag: 'بطولات وتطوير',
      accentColor: 'text-[#16A34A]',
      bgColor: 'bg-[#F0FDF4]',
      borderColor: 'border-[#16A34A]/20'
    },
    {
      icon: Utensils,
      title: 'مطاعم وكافيهات راقية',
      desc: 'خيارات ضيافة ومأكولات متنوعة تلبي كافة الأذواق، مع جلسات عائلية هادئة ومساحات خضراء مفتوحة.',
      tag: 'خدمات متكاملة',
      accentColor: 'text-[#003B73]',
      bgColor: 'bg-[#EFF6FF]',
      borderColor: 'border-[#003B73]/20'
    },
    {
      icon: Baby,
      title: 'منطقة كيدز إريا آمنة',
      desc: 'مناطق ترفيهية للأطفال مجهزة بأحدث وأأمن الألعاب تحت إشراف متخصصين لقضاء أوقات ممتعة وآمنة.',
      tag: 'ترفيه للأطفال',
      accentColor: 'text-[#F37021]',
      bgColor: 'bg-[#FFF7ED]',
      borderColor: 'border-[#F37021]/20'
    },
    {
      icon: Compass,
      title: 'أمن وخدمات راقية 24/7',
      desc: 'فريق أمن وحراسة مدرب على أعلى مستوى، مواقف سيارات واسعة ومؤمنة، وشبكة أتوبيسات خاصة لنقل الأعضاء.',
      tag: 'راحة وأمان',
      accentColor: 'text-[#16A34A]',
      bgColor: 'bg-[#F0FDF4]',
      borderColor: 'border-[#16A34A]/20'
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFF6FF] border border-[#003B73]/20 text-[#003B73] text-xs font-bold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-4 h-4 text-[#16A34A]" />
            <span>من نحن | نادي ريو الإسكندرية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#001D3D] tracking-tight mb-6">
            أكثر من مجرد نادي رياضي.. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B73] via-[#16A34A] to-[#F37021]">
              مجتمع عائلي ترفيهي متكامل
            </span>
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            يُعد <strong className="text-[#001D3D] font-bold">نادي ريو (Rio Club)</strong> وجهتك الأولى في الإسكندرية كنادٍ <span className="text-[#16A34A] font-bold">رياضي، اجتماعي، وترفيهي</span> شامل. صُمم النادي ليوفر أعلى مستويات الرفاهية والنشاط الرياضي لجميع أفراد الأسرة في بيئة صحية، آمنة ومريحة.
          </p>
        </div>

        {/* Big Highlight Card: Lifetime Family Membership That Can Be Inherited */}
        <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-white to-[#F0FDF4] border border-slate-200 shadow-clean relative overflow-hidden">
          
          {/* Top Tri-Color Brand Accent Bar */}
          <div className="absolute top-0 right-0 left-0 h-1.5 brand-stripe" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#003B73] to-[#16A34A] flex items-center justify-center text-white shrink-0 shadow-md">
                <ShieldCheck className="w-9 h-9" />
              </div>
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 rounded-md bg-[#F0FDF4] text-[#16A34A] text-xs font-bold border border-[#16A34A]/20">
                  استثمار لأجيال قادمة
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#001D3D]">
                  العضوية أسرية مدي الحياة وتورث للأبناء
                </h3>
                <p className="text-slate-600 max-w-2xl text-base leading-relaxed">
                  عضويتك في نادي ريو ليست مجرد اشتراك سنوي ينتهي، بل هي أصل عائلي دائم يضمن لك ولأبنائك الاستمتاع بجميع مرافق وأنشطة وخدمات النادي مدى الحياة، مع إمكانية التوريث القانوني طبقاً للوائح النادي المعتمدة.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={scrollToRegister}
                className="w-full lg:w-auto px-8 py-4 rounded-full bg-[#003B73] hover:bg-[#002B5B] text-white font-extrabold text-base transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center block"
              >
                استفسر عن تفاصيل العضوية والتقسيط
              </button>
            </div>
          </div>
        </div>

        {/* Amenities & Services Grid (Light Minimalist Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="card-clean p-6 rounded-3xl bg-white flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${item.bgColor} border ${item.borderColor} ${item.accentColor} flex items-center justify-center transition-transform group-hover:scale-110`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-[#001D3D] mb-2 group-hover:text-[#003B73] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-[#16A34A] font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>متاح بالكامل لحاملي العضوية الأسرية</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
