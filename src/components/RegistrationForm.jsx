import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Phone, 
  User, 
  Briefcase, 
  MapPin, 
  MessageCircle, 
  ShieldCheck, 
  Clock, 
  Calendar 
} from 'lucide-react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    occupation: '',
    residentialArea: '',
    sportPreference: 'كرة قدم',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const alexandriaAreas = [
    'ميامي',
    'سيدي بشر',
    'العصافرة',
    'المندرة',
    'المنتزه',
    'المعمورة',
    'أبو قير',
    'لوران',
    'جناكليس',
    'سان ستيفانو',
    'جليم',
    'زيزينيا',
    'رشدي',
    'ستانلي',
    'سيدي جابر',
    'كليوباترا',
    'سبورتنج',
    'الإبراهيمية',
    'الشاطبي',
    'محطة الرمل',
    'سموحة',
    'فيكتوريا',
    'سيدي كرير / الساحل',
    'العجمي / الدخيلة',
    'دمنهور / البحيرة',
    'منطقة أخرى بالإسكندرية'
  ];

  const sportsOptions = [
    'كرة قدم',
    'سباحة',
    'كرة سلة',
    'تنس أرضي',
    'جيم ولياقة بدنية',
    'جمباز للأطفال',
    'كاراتيه / تايكوندو',
    'كونج فو / كيك بوكس',
    'زيارة استكشافية عامة لكافة المرافق'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Save lead to localStorage for offline persistence
    try {
      const existingLeads = JSON.parse(localStorage.getItem('rio_leads') || '[]');
      const newLead = {
        ...formData,
        date: new Date().toISOString()
      };
      existingLeads.push(newLead);
      localStorage.setItem('rio_leads', JSON.stringify(existingLeads));
    } catch (err) {
      console.warn('Storage save error:', err);
    }

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  // WhatsApp pre-filled link
  const createWhatsAppLink = () => {
    const message = encodeURIComponent(
      `أهلاً نادي ريو، سجلت لطلب الزيارة المجانية وعرض العضوية:\n` +
      `👤 الاسم: ${formData.name}\n` +
      `📱 رقم الهاتف: ${formData.phone}\n` +
      `💼 طبيعة العمل: ${formData.occupation}\n` +
      `📍 منطقة السكن: ${formData.residentialArea}\n` +
      `⚽ النشاط المفضل: ${formData.sportPreference}`
    );
    // Egyptian WhatsApp format
    return `https://wa.me/201000000000?text=${message}`;
  };

  return (
    <section id="register" className="relative py-24 bg-[#070e17] overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>عرض العضوية والزيارة المجانية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            سجل بياناتك واستلم دعوتك لزيارة النادي
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            املأ النموذج في دقيقة واحدة، واستفد من <strong className="text-emerald-400 font-bold">عرض التقسيط المباشر حتى 60 شهر</strong> للعضوية الأسرية الدائمة مدى الحياة.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-12 px-4 space-y-6 animate-fade-in">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  تم استلام بياناتك بنجاح!
                </h3>
                <p className="text-slate-300 text-base max-w-lg mx-auto">
                  أهلاً بك أستاذ <strong className="text-emerald-400">{formData.name}</strong>، تم تسجيل طلبك لحجز الزيارة المجانية وعرض تقسيط الـ 60 شهر.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-sm text-slate-300 space-y-2">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold">
                  <Clock className="w-4 h-4" />
                  <span>وهنتواصل معاك هاتفياً أو عبر واتساب خلال دقائق</span>
                </div>
                <p className="text-xs text-slate-400">
                  لتأكيد موعد الزيارة الأنسب لك ولعائلتك وتجهيز تصريح الدخول الخاص بكم.
                </p>
              </div>

              {/* Direct WhatsApp Quick Chat Option */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-sm transition-all shadow-lg shadow-emerald-500/30 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تواصل فوري عبر الواتساب لتأكيد الموعد الآن</span>
                </a>

                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      occupation: '',
                      residentialArea: '',
                      sportPreference: 'كرة قدم',
                      notes: ''
                    });
                  }}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-sm font-semibold transition-all cursor-pointer"
                >
                  تسجيل طلب آخر
                </button>
              </div>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* 1. Name (الاسم) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="name" className="block text-sm font-bold text-slate-200">
                    الاسم بالكامل <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="اكتب اسمك ثلاثي أو رباعي"
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#060e18]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
                    />
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Phone / WhatsApp (رقم الموبايل / واتساب) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-200">
                    رقم الهاتف / الواتساب <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="010xxxxxxxx"
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#060e18]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm text-right font-mono"
                    />
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* 2. Occupation (طبيعة العمل) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="occupation" className="block text-sm font-bold text-slate-200">
                    طبيعة العمل (الوظيفة أو مجال العمل) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="occupation"
                      name="occupation"
                      required
                      value={formData.occupation}
                      onChange={handleChange}
                      placeholder="مثال: مهندس، طبيب، صاحب عمل، موظف..."
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#060e18]/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
                    />
                    <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* 3. Residential Area in Alexandria (منطقة السكن بالاسكندرية) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="residentialArea" className="block text-sm font-bold text-slate-200">
                    منطقة السكن بالإسكندرية <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="residentialArea"
                      name="residentialArea"
                      required
                      value={formData.residentialArea}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-[#060e18] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm appearance-none cursor-pointer"
                    >
                      <option value="" disabled className="text-slate-500">اختر منطقة سكنك</option>
                      {alexandriaAreas.map((area, idx) => (
                        <option key={idx} value={area} className="bg-slate-900 text-white">
                          {area}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Activity / Sport of Interest */}
              <div className="space-y-2 text-right">
                <label htmlFor="sportPreference" className="block text-sm font-bold text-slate-200">
                  النشاط أو الرياضة المفضلة لك ولأبنائك
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {sportsOptions.map((opt, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setFormData(prev => ({ ...prev, sportPreference: opt }))}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center cursor-pointer ${
                        formData.sportPreference === opt
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-white/5 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>بياناتك سرية ومحمية تماماً</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span>تأكيد الموعد في أقل من 24 ساعة</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span>تقسيط مباشر حتى 60 شهر بدون فوائد بنكية</span>
                </div>
              </div>

              {/* Submit Button & Sub-note */}
              <div className="text-center pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-2/3 mx-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-lg font-black text-white bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:from-emerald-400 hover:to-emerald-500 shadow-xl shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-emerald-100" />
                      <span>سجل الآن</span>
                    </>
                  )}
                </button>

                {/* Required note: "وهنتواصل معاك" */}
                <p className="text-sm sm:text-base font-bold text-orange-400 flex items-center justify-center gap-1.5">
                  <span>✨ سجل الآن..</span>
                  <span className="underline underline-offset-4 decoration-orange-400/60">
                    وهنتواصل معاك
                  </span>
                  <span>فوراً لتأكيد الزيارة وتفاصيل العرض</span>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
