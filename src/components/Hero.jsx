import React from 'react';
import { CalendarCheck, Sparkles, Shield, Clock, ArrowDown, Award, Users, ChevronLeft } from 'lucide-react';

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
    <header id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-white">
      
      {/* Minimalist Ambient Light Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft subtle washes using Logo Colors: Green, Navy, Orange */}
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] bg-[#16A34A]/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[500px] bg-[#003B73]/6 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#F37021]/8 rounded-full blur-[100px]" />
        
        {/* Subtle grid pattern for modern minimalist structure */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#003B7308_1px,transparent_1px),linear-gradient(to_bottom,#003B7308_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)] opacity-70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Rio Club Tri-Color Signature Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border border-slate-200/90 shadow-sm mb-6">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16A34A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#16A34A]"></span>
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-700">
            عرض العضوية الأسرية لفترة محدودة | <span className="text-[#F37021]">زيارة مجانية VIP</span>
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#F37021]" />
        </div>

        {/* 1. Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.2] text-[#001D3D] mb-6">
          اهلا بيك معانا في <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#003B73] via-[#16A34A] to-[#F37021]">
            نادي ريو
          </span>
        </h1>

        {/* 2. Sub-headline: Free Visit invitation */}
        <div className="max-w-2xl mx-auto mb-6">
          <p className="text-xl sm:text-2xl font-bold text-slate-700 flex items-center justify-center gap-2 flex-wrap">
            <span>يسعدنا دعوتكم لقضاء</span>
            <span className="relative inline-block px-3 py-1 rounded-xl bg-[#FFF7ED] text-[#F37021] border border-[#F37021]/30 font-black shadow-sm">
              زيارة مجانية
            </span>
            <span>واستكشاف مرافق النادي مع عائلتك</span>
          </p>
        </div>

        {/* 3. Offer Text */}
        <div className="max-w-2xl mx-auto p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-clean mb-10 text-slate-700">
          <p className="text-base sm:text-lg font-medium leading-relaxed">
            احصل دلوقتي علي <strong className="text-[#003B73] font-bold">عرض خاص للعضوية الاسرية الدائمة</strong> بطرق تقسيط مباشرة مع النادي حتي <strong className="text-[#F37021] font-black underline decoration-[#F37021]/40 underline-offset-4">60 شهر</strong> بدون أي إجراءات بنكية معقدة.
          </p>
        </div>

        {/* 4. CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-14">
          <button
            onClick={scrollToRegister}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-extrabold text-white bg-gradient-to-r from-[#003B73] via-[#0A4E8C] to-[#16A34A] hover:opacity-95 shadow-btn-navy hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 text-emerald-200" />
            <span>احجز زيارتك المجانية الآن</span>
          </button>

          <button
            onClick={scrollToSports}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-base font-bold text-slate-700 hover:text-[#003B73] bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all cursor-pointer"
          >
            <span>استكشف ألعابنا الرياضية</span>
            <ArrowDown className="w-4 h-4 text-[#F37021] animate-bounce" />
          </button>
        </div>

        {/* Minimalist Key Stats Grid (Light Cards with Rio Logo Accents) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl text-right">
          
          <div className="card-clean p-5 rounded-2xl bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1 bg-[#16A34A]" />
            <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] border border-[#16A34A]/20 flex items-center justify-center mb-3 text-[#16A34A]">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-[#001D3D]">60 شهر</div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">أطول فترة تقسيط مباشر</div>
          </div>

          <div className="card-clean p-5 rounded-2xl bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1 bg-[#003B73]" />
            <div className="w-10 h-10 rounded-xl bg-[#EFF6FF] border border-[#003B73]/20 flex items-center justify-center mb-3 text-[#003B73]">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-[#001D3D]">مدى الحياة</div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">عضوية أسرية وتورث</div>
          </div>

          <div className="card-clean p-5 rounded-2xl bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1 bg-[#F37021]" />
            <div className="w-10 h-10 rounded-xl bg-[#FFF7ED] border border-[#F37021]/20 flex items-center justify-center mb-3 text-[#F37021]">
              <Award className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-[#001D3D]">10+ ألعاب</div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">فردية وجماعية معتمدة</div>
          </div>

          <div className="card-clean p-5 rounded-2xl bg-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-[#16A34A] via-[#003B73] to-[#F37021]" />
            <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center mb-3 text-[#003B73]">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-black text-[#001D3D]">زيارة مجانية</div>
            <div className="text-xs text-slate-500 mt-1 font-semibold">لكل أفراد الأسرة</div>
          </div>

        </div>

      </div>
    </header>
  );
}
