import React, { useState } from 'react';
import { 
  Trophy, 
  Activity, 
  Dumbbell, 
  Flame, 
  ShieldAlert, 
  Zap, 
  CheckCircle2, 
  Users2, 
  UserCheck 
} from 'lucide-react';

export default function Sports() {
  const [filter, setFilter] = useState('all');

  const sportsList = [
    {
      id: 'football',
      name: 'كرة قدم',
      nameEn: 'Football',
      type: 'group',
      typeLabel: 'لعبة جماعية',
      badge: 'ملاعب معتمدة نجيل صناعي وطبيعي',
      desc: 'ملاعب دولية مجهزة بنجيل عالي الجودة وإضاءة ليلية متكاملة، مع أكاديميات تدريبية بإشراف نخبة من نجوم التدريب لصقل المواهب والاشتراك في البطولات الرسمية.',
      specs: ['ملاعب خماسي وسباعي', 'أكاديمية لجميع الأعمار', 'دوريات وبطولات منتظمة'],
      image: './placeholder2.jpg',
      icon: Trophy,
      color: 'emerald'
    },
    {
      id: 'basketball',
      name: 'كرة سلة',
      nameEn: 'Basketball',
      type: 'group',
      typeLabel: 'لعبة جماعية',
      badge: 'أرضيات باركيه وملاعب خارجية مطاطية',
      desc: 'صالات وملاعب احترافية مجهزة بمواصفات الاتحاد الدولي لكرة السلة، وتدريبات تكتيكية متقدمة تهدف لرفع اللياقة والمهارات الفردية والجماعية.',
      specs: ['مدربون معتمدون', 'فرق ناشئين وبراعم', 'تدريبات لياقة خاصة'],
      image: './placeholder6.jpg',
      icon: Users2,
      color: 'orange'
    },
    {
      id: 'swimming',
      name: 'سباحة',
      nameEn: 'Swimming',
      type: 'aquatic',
      typeLabel: 'فردية ومائية',
      badge: 'مجمع حمامات سباحة مغطى ومكشوف',
      desc: 'حمامات سباحة مجهزة بأنظمة تدفئة وتنقية مياه حديثة، وبرامج تدريبية لتعليم السباحة للمبتدئين وصولاً لفرق السباحة التنافسية للأولاد والفتيات.',
      specs: ['حمام أولمبي ونصف أولمبي', 'تدريب للسيدات والأطفال', 'أعلى معايير الأمان والإنقاذ'],
      image: './placeholder1.jpg',
      icon: Activity,
      color: 'blue'
    },
    {
      id: 'tennis',
      name: 'تنس أرضي',
      nameEn: 'Tennis',
      type: 'individual',
      typeLabel: 'فردية وزوجية',
      badge: 'ملاعب ترابية وصلبة بمواصفات احترافية',
      desc: 'ملاعب تنس مجهزة بأفضل الأرضيات ومضارب وأدوات تدريب حديثة، مع برامج للمبتدئين وجلسات تدريب خاصة لرفع الكفاءة والمستوى التنافسي.',
      specs: ['ملاعب مضاءة ليلاً', 'تدريب فردي وزوجي', 'بطولات داخلية دورية'],
      image: './placeholder3.jpg',
      icon: Trophy,
      color: 'teal'
    },
    {
      id: 'gym',
      name: 'جيم (Gym & Fitness)',
      nameEn: 'Gym & Fitness',
      type: 'fitness',
      typeLabel: 'لياقة وبناء أجسام',
      badge: 'أحدث أجهزة القوة والكارديو العالمية',
      desc: 'صالة جيم متكاملة تضم أحدث أجهزة اللياقة البدنية، أوزان حرة، وأجهزة كارديو ذكية، مع برامج تدريب وتغذية مخصصة بإشراف مدربين وكباتن محترفين.',
      specs: ['أحدث الأجهزة الرياضية', 'مدرب خاص Personal Trainer', 'برامج تأهيل واستشفاء'],
      image: './placeholder4.jpg',
      icon: Dumbbell,
      color: 'amber'
    },
    {
      id: 'gymnastics',
      name: 'جمباز',
      nameEn: 'Gymnastics',
      type: 'individual',
      typeLabel: 'فردية وحركية',
      badge: 'صالة مجهزة بفرش ومعدات أمان فائقة',
      desc: 'رياضة أساسية لبناء المرونة، القوة، والتوازن الحركي للأطفال والناشئين في بيئة آمنة تماماً ومجهزة بأحدث الوسائد وأجهزة الجمباز القياسية.',
      specs: ['تأسيس من سن 4 سنوات', 'إشراف طبي وحركي متخصص', 'مشاركات في بطولات الجمهورية'],
      image: './placeholder5.jpg',
      icon: Zap,
      color: 'purple'
    },
    {
      id: 'karate',
      name: 'كاراتيه',
      nameEn: 'Karate',
      type: 'combat',
      typeLabel: 'دفاع عن النفس',
      badge: 'كاتا وكوميتيه معتمد دولياً',
      desc: 'تعلم فنون الكاراتيه، غرس الانضباط والتركيز، والتدرج في الأحزمة الرسمية حتى الحزام الأسود بإشراف أبطال ومدربي الاتحادات الرياضية.',
      specs: ['اختبارات أحزمة معتمدة', 'تدريب بنين وبنات', 'بناء الشخصية والثقة بالنفس'],
      image: './placeholder2.jpg',
      icon: ShieldAlert,
      color: 'red'
    },
    {
      id: 'taekwondo',
      name: 'تايكوندو',
      nameEn: 'Taekwondo',
      type: 'combat',
      typeLabel: 'فنون قتالية أولمبية',
      badge: 'رياضة أولمبية وسرعة بديهة',
      desc: 'تدريبات مكثفة على الركلات السريعة، الدفاع عن النفس، واللياقة البدنية العالية، مع التجهيز للمنافسات والبطولات المحلية والدولية.',
      specs: ['مدربون حاصلون على شارات دولية', 'أدوات حماية ووقاية كاملة', 'تأهيل لبطولات المدارس والجمهورية'],
      image: './placeholder3.jpg',
      icon: Flame,
      color: 'yellow'
    },
    {
      id: 'kickboxing',
      name: 'كيك بوكس',
      nameEn: 'Kickboxing',
      type: 'combat',
      typeLabel: 'فنون قتالية ولياقة',
      badge: 'حرق دهون ورفع اللياقة القصوى',
      desc: 'مزيج مذهل من اللكمات والركلات التي ترفع معدل حرق الدهون، تقوي عضلات القلب، وتمنحك مهارات حقيقية للدفاع عن النفس واستعادة النشاط.',
      specs: ['حصص للشباب والكبار', 'مناسبة للتخسيس واللياقة', 'تدريبات كيس اللكم والحلبة'],
      image: './placeholder4.jpg',
      icon: Flame,
      color: 'orange'
    },
    {
      id: 'kungfu',
      name: 'كونج فو',
      nameEn: 'Kung Fu',
      type: 'combat',
      typeLabel: 'فنون قتالية صينية',
      badge: 'أساليب وساندا قتالية',
      desc: 'تعلم الفنون التقليدية والقتال الحر (ساندا)، مع التركيز على المرونة الفائقة والسرعة والدفاع التكتيكي وتنمية التركيز الذهني لدى اللاعبين.',
      specs: ['تدريب أساليب وساندا', 'مدربون خبراء بالاتحاد المصري', 'بطولات ومسابقات مستمرة'],
      image: './placeholder1.jpg',
      icon: Zap,
      color: 'emerald'
    }
  ];

  const filteredSports = sportsList.filter(sport => {
    if (filter === 'all') return true;
    if (filter === 'group') return sport.type === 'group';
    if (filter === 'combat') return sport.type === 'combat';
    if (filter === 'fitness_aquatic') return sport.type === 'fitness' || sport.type === 'aquatic' || sport.type === 'individual';
    return true;
  });

  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="sports" className="relative py-24 bg-[#060d17] text-white overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            <span>ألعابنا الرياضية | الفردية والجماعية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            10 رياضات عالمية تلبي طموح كل أفراد أسرتك
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            سواء كنت تبحث عن لعبة جماعية كروية، سباحة منعشة، فنون دفاع عن النفس، أو جيم للياقة البدنية، يضم نادي ريو نخبة من أفضل الملاعب والأكاديميات المعتمدة.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              جميع الألعاب (10)
            </button>
            <button
              onClick={() => setFilter('group')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'group'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              الألعاب الجماعية (كرة قدم، سلة)
            </button>
            <button
              onClick={() => setFilter('combat')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'combat'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              الألعاب القتالية (كاراتيه، تايكوندو، كونج فو، كيك بوكس)
            </button>
            <button
              onClick={() => setFilter('fitness_aquatic')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'fitness_aquatic'
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 scale-105'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              اللياقة، السباحة، والتنس والجمباز
            </button>
          </div>
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSports.map((sport) => {
            const Icon = sport.icon;
            return (
              <div
                key={sport.id}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Header with Badge */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <img
                      src={sport.image}
                      alt={sport.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1626] via-[#0a1626]/40 to-transparent" />
                    
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#060e18]/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                        {sport.typeLabel}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between">
                      <h3 className="text-2xl font-black text-white drop-shadow-md">
                        {sport.name}
                      </h3>
                      <span className="text-xs text-slate-300 font-mono font-medium">
                        {sport.nameEn}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="text-xs font-bold text-orange-400 mb-2 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                      <span>{sport.badge}</span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {sport.desc}
                    </p>

                    {/* Specs checkmarks */}
                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {sport.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={scrollToRegister}
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-emerald-500 text-slate-300 hover:text-white text-xs font-bold transition-all border border-white/10 hover:border-emerald-500 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>احجز زيارتك وجرب {sport.name}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Visit Banner for Sports */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-orange-500/15 via-emerald-500/10 to-transparent border border-orange-500/30 backdrop-blur-md text-center max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
            مش متأكد من الرياضة الأنسب لأولادك؟
          </h3>
          <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-xl mx-auto">
            خلال زيارتك المجانية، يمكنك استشارة المدربين الرياضيين في نادي ريو لتقييم المهارات واختيار الأكاديمية الأنسب لطفلك.
          </p>
          <button
            onClick={scrollToRegister}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-400 hover:to-orange-500 shadow-lg shadow-orange-500/30 transition-all cursor-pointer"
          >
            <span>احجز زيارتك المجانية الآن واستشر المدربين</span>
          </button>
        </div>

      </div>
    </section>
  );
}
