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
  UserCheck,
  ChevronLeft
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
      badgeColor: 'bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]/20'
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
      badgeColor: 'bg-[#FFF7ED] text-[#F37021] border-[#F37021]/20'
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
      badgeColor: 'bg-[#EFF6FF] text-[#003B73] border-[#003B73]/20'
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
      badgeColor: 'bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]/20'
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
      badgeColor: 'bg-[#FFF7ED] text-[#F37021] border-[#F37021]/20'
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
      badgeColor: 'bg-[#EFF6FF] text-[#003B73] border-[#003B73]/20'
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
      badgeColor: 'bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]/20'
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
      badgeColor: 'bg-[#FFF7ED] text-[#F37021] border-[#F37021]/20'
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
      badgeColor: 'bg-[#FFF7ED] text-[#F37021] border-[#F37021]/20'
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
      badgeColor: 'bg-[#EFF6FF] text-[#003B73] border-[#003B73]/20'
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
    <section id="sports" className="relative py-24 bg-[#F8FAFC] text-slate-800 overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#F37021]/30 text-[#F37021] text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4" />
            <span>ألعابنا الرياضية | الفردية والجماعية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#001D3D] tracking-tight mb-4">
            10 رياضات عالمية تلبي طموح كل أفراد أسرتك
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            سواء كنت تبحث عن لعبة جماعية، سباحة صيفية وشتوية، فنون دفاع عن النفس، أو صالة جيم للياقة البدنية، يضم نادي ريو نخبة من أفضل الملاعب والأكاديميات المعتمدة.
          </p>

          {/* Minimalist Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              جميع الألعاب (10)
            </button>
            <button
              onClick={() => setFilter('group')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'group'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              الألعاب الجماعية (قدم، سلة)
            </button>
            <button
              onClick={() => setFilter('combat')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'combat'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              الألعاب القتالية (كاراتيه، تايكوندو، كونج فو، كيك بوكس)
            </button>
            <button
              onClick={() => setFilter('fitness_aquatic')}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all cursor-pointer ${
                filter === 'fitness_aquatic'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              اللياقة، السباحة، والتنس والجمباز
            </button>
          </div>
        </div>

        {/* Sports Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSports.map((sport) => (
            <div
              key={sport.id}
              className="card-clean rounded-3xl overflow-hidden bg-white flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/95 ${sport.badgeColor}`}>
                      {sport.typeLabel}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between text-white">
                    <h3 className="text-2xl font-black drop-shadow-sm">
                      {sport.name}
                    </h3>
                    <span className="text-xs font-semibold text-slate-200">
                      {sport.nameEn}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <div className="text-xs font-bold text-[#F37021] mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F37021]"></span>
                    <span>{sport.badge}</span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {sport.desc}
                  </p>

                  {/* Specs checkmarks */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {sport.specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
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
                  className="w-full py-2.5 rounded-2xl bg-slate-50 hover:bg-[#003B73] text-slate-700 hover:text-white text-xs font-bold transition-all border border-slate-200 hover:border-[#003B73] cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>احجز زيارتك واستكشف {sport.name}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Free Visit Banner for Sports */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-clean text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 left-0 h-1.5 brand-stripe" />
          <h3 className="text-xl sm:text-2xl font-black text-[#001D3D] mb-2">
            مش متأكد من الرياضة الأنسب لأولادك؟
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-xl mx-auto font-medium">
            خلال زيارتك المجانية، يمكنك استشارة المدربين الرياضيين في نادي ريو لتقييم المهارات واختيار الأكاديمية الأنسب لطفلك.
          </p>
          <button
            onClick={scrollToRegister}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-gradient-to-r from-[#003B73] via-[#0A4E8C] to-[#16A34A] hover:opacity-95 shadow-md shadow-[#003B73]/20 transition-all cursor-pointer"
          >
            <span>احجز زيارتك المجانية الآن واستشر المدربين</span>
          </button>
        </div>

      </div>
    </section>
  );
}
