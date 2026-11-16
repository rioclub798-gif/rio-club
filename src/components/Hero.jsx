import React from 'react';
import { CalendarCheck, Sparkles, Shield, Clock, ArrowDown, Award, Users } from 'lucide-react';

export default function Hero() {
  const scrollToRegister = () => {
    const el = document.getElementById('register');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSports = () => {
    const el = document.getElementById('sports');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background with Ambient Gradients */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transform scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('./placeholder1.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060e18]/80 via-[#060e18]/95 to-[#060e18]" />
        
        {/* Grin-Golf style glowing ambient orbs */}
        <div className="absolute top-1/4 -right-24 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Luxury Pill Badge - Grin Golf Style */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md mb-6 animate-pulse-slow">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <Sparkles className="w-4 h-4 text-emerald-400" />
          <span className="text-xs sm:text-sm font-bold text-emerald-300">
            عرض حصري للعائلات | زيارة مجانية VIP
          </span>
        </div>

        {/* 1. Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white tracking-tight leading-[1.15] sm:leading-[1.2] mb-6">
          اهلا بيك معانا في <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-orange-400 bg-clip-text text-transparent drop-shadow-sm">
            نادي ريو
          </span>
        </h1>

        {/* 2. Sub-headline: Free Visit invitation */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-xl sm:text-2xl font-bold text-slate-100 flex items-center justify-center gap-2 flex-wrap">
            <span>يسعدنا دعوتكم لقضاء</span>
            <span className="relative inline-block px-3 py-1 rounded-lg bg-orange-500/20 text-orange-400 border border-orange-500/40">
              زيارة مجانية
            </span>
            <span>واستكشاف مرافق النادي مع عائلتك</span>
          </p>
        </div>

        {/* 3. Offer Text */}
        <div className="max-w-2xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-xl">
          <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
            احصل دلوقتي علي <span className="text-emerald-400 font-bold">عرض خاص للعضوية الاسرية الدائمة</span> بطرق تقسيط مباشرة مع النادي حتي <span className="text-orange-400 font-bold underline decoration-orange-400/50 underline-offset-4">60 شهر</span> بدون تعقيدات بنكية.
          </p>
        </div>

        {/* 4. CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-12">
          <button
            onClick={scrollToRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-extrabold text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 shadow-xl shadow-emerald-600/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <CalendarCheck className="w-6 h-6 text-emerald-100" />
            <span>احجز زيارتك المجانية الآن</span>
          </button>

          <button
            onClick={scrollToSports}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-base font-bold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            <span>استكشف ألعابنا ومرافقنا</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>

        {/* Feature Highlights Grid (Trust metrics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl text-right">
          
          <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 text-emerald-400">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">60 شهر</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">تقسيط مباشر مع النادي</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30">
            <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-3 text-orange-400">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">مدى الحياة</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">عضوية أسرية وتورث</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-3 text-blue-400">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">10+ ألعاب</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">فردية وجماعية معتمدة</div>
          </div>

          <div className="glass-card p-4 rounded-2xl border border-white/10 hover:border-emerald-500/30">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-3 text-teal-400">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-white">زيارة مجانية</div>
            <div className="text-xs text-slate-400 mt-1 font-medium">يوم عائلي ترفيهي كامل</div>
          </div>

        </div>

      </div>
    </header>
  );
}
