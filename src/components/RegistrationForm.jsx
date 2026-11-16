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
  Clock 
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
    }, 600);
  };

  const createWhatsAppLink = () => {
    const message = encodeURIComponent(
      `أهلاً نادي ريو، سجلت لطلب الزيارة المجانية وعرض العضوية:\n` +
      `👤 الاسم: ${formData.name}\n` +
      `📱 رقم الهاتف: ${formData.phone}\n` +
      `💼 طبيعة العمل: ${formData.occupation}\n` +
      `📍 منطقة السكن: ${formData.residentialArea}\n` +
      `⚽ النشاط المفضل: ${formData.sportPreference}`
    );
    return `https://wa.me/201000000000?text=${message}`;
  };

  return (
    <section id="register" className="relative py-24 bg-white overflow-hidden">
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF7ED] border border-[#F37021]/30 text-[#F37021] text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>عرض العضوية والزيارة المجانية</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#001D3D] tracking-tight mb-4">
            سجل بياناتك واستلم دعوتك لزيارة النادي
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            املأ النموذج في دقيقة واحدة، واستفد من <strong className="text-[#003B73] font-bold">عرض التقسيط المباشر حتى 60 شهر</strong> للعضوية الأسرية الدائمة مدى الحياة.
          </p>
        </div>

        {/* Minimalist Form Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-clean relative overflow-hidden">
          
          {/* Top Tri-Color Brand Stripe */}
          <div className="absolute top-0 right-0 left-0 h-1.5 brand-stripe" />

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-12 px-4 space-y-6">
              <div className="w-20 h-20 rounded-full bg-[#F0FDF4] border-2 border-[#16A34A]/30 text-[#16A34A] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black text-[#001D3D]">
                  تم استلام بياناتك بنجاح!
                </h3>
                <p className="text-slate-600 text-base max-w-lg mx-auto">
                  أهلاً بك أستاذ <strong className="text-[#003B73]">{formData.name}</strong>، تم تسجيل طلبك لحجز الزيارة المجانية وعرض تقسيط الـ 60 شهر.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-sm text-slate-700 space-y-2">
                <div className="flex items-center justify-center gap-2 text-[#16A34A] font-bold">
                  <Clock className="w-4 h-4" />
                  <span>وهنتواصل معاك هاتفياً أو عبر واتساب خلال دقائق</span>
                </div>
                <p className="text-xs text-slate-500">
                  لتأكيد موعد الزيارة الأنسب لك ولعائلتك وتجهيز تصريح الدخول الخاص بكم.
                </p>
              </div>

              {/* Direct WhatsApp Quick Chat Option */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href={createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#16A34A] hover:bg-[#15803D] text-white font-extrabold text-sm transition-all shadow-md shadow-[#16A34A]/25 cursor-pointer"
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
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 text-sm font-bold transition-all cursor-pointer"
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
                  <label htmlFor="name" className="block text-sm font-bold text-slate-700">
                    الاسم بالكامل <span className="text-[#F37021]">*</span>
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
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#003B73] focus:ring-2 focus:ring-[#003B73]/15 transition-all text-sm font-medium"
                    />
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* Phone / WhatsApp (رقم الموبايل / واتساب) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700">
                    رقم الهاتف / الواتساب <span className="text-[#F37021]">*</span>
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
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#003B73] focus:ring-2 focus:ring-[#003B73]/15 transition-all text-sm text-right font-mono"
                    />
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* 2. Occupation (طبيعة العمل) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="occupation" className="block text-sm font-bold text-slate-700">
                    طبيعة العمل (الوظيفة أو مجال العمل) <span className="text-[#F37021]">*</span>
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
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#003B73] focus:ring-2 focus:ring-[#003B73]/15 transition-all text-sm font-medium"
                    />
                    <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  </div>
                </div>

                {/* 3. Residential Area in Alexandria (منطقة السكن بالاسكندرية) */}
                <div className="space-y-2 text-right">
                  <label htmlFor="residentialArea" className="block text-sm font-bold text-slate-700">
                    منطقة السكن بالإسكندرية <span className="text-[#F37021]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="residentialArea"
                      name="residentialArea"
                      required
                      value={formData.residentialArea}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 pl-11 rounded-2xl bg-slate-50 border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#003B73] focus:ring-2 focus:ring-[#003B73]/15 transition-all text-sm appearance-none cursor-pointer font-medium"
                    >
                      <option value="" disabled className="text-slate-400">اختر منطقة سكنك</option>
                      {alexandriaAreas.map((area, idx) => (
                        <option key={idx} value={area} className="bg-white text-slate-800">
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
                <label htmlFor="sportPreference" className="block text-sm font-bold text-slate-700">
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
                          ? 'bg-[#EFF6FF] border-[#003B73] text-[#003B73] font-bold shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-100 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                  <span>بياناتك سرية ومحمية تماماً</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#F37021]" />
                  <span>تأكيد الموعد في أقل من 24 ساعة</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#003B73]" />
                  <span>تقسيط مباشر حتى 60 شهر</span>
                </div>
              </div>

              {/* Submit Button & Sub-note */}
              <div className="text-center pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full sm:w-2/3 mx-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-base sm:text-lg font-black text-white bg-gradient-to-r from-[#003B73] via-[#0A4E8C] to-[#16A34A] hover:opacity-95 shadow-btn-navy hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5 text-emerald-200" />
                      <span>سجل الآن</span>
                    </>
                  )}
                </button>

                {/* Required note: "وهنتواصل معاك" */}
                <p className="text-sm sm:text-base font-bold text-[#F37021] flex items-center justify-center gap-1.5">
                  <span>✨ سجل الآن..</span>
                  <span className="underline underline-offset-4 decoration-[#F37021]/50 font-black">
                    وهنتواصل معاك
                  </span>
                  <span>فوراً لتأكيد موعد زيارتك المجانية وعرض التقسيط</span>
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
