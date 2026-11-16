import React, { useState } from 'react';
import { Camera, Image as ImageIcon, X, Maximize2, Info } from 'lucide-react';

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  /*
   * =========================================================================
   * PHOTO GALLERY PLACEHOLDERS (معرض صور نادي ريو)
   * You can easily replace "placeholder1.jpg", "placeholder2.jpg", etc. 
   * with your actual club photos in the public/ folder or adjust file names!
   * =========================================================================
   */
  const galleryItems = [
    {
      id: 1,
      src: 'placeholder1.jpg', // <img src="placeholder1.jpg" alt="صورة مجمع حمامات السباحة بنادي ريو" />
      title: 'مجمع حمامات السباحة الأولمبية والترفيهية',
      category: 'pool',
      categoryLabel: 'حمامات السباحة',
      desc: 'مساحات مائية واسعة ونظافة دورية بأعلى المعايير الصحية العالمية.',
      badgeColor: 'bg-[#EFF6FF] text-[#003B73] border-[#003B73]/20'
    },
    {
      id: 2,
      src: 'placeholder2.jpg', // <img src="placeholder2.jpg" alt="صورة ملاعب كرة القدم المعتمدة" />
      title: 'ملاعب كرة القدم الدولية المضاءة',
      category: 'fields',
      categoryLabel: 'ملاعب كرة القدم',
      desc: 'نجيل عالي الجودة مع إنارة ليلية وأكاديميات تدريب ناشئين.',
      badgeColor: 'bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]/20'
    },
    {
      id: 3,
      src: 'placeholder3.jpg', // <img src="placeholder3.jpg" alt="صورة ملاعب التنس الأرضي" />
      title: 'ملاعب التنس الأرضي الاحترافية',
      category: 'courts',
      categoryLabel: 'ملاعب التنس',
      desc: 'ملاعب مجهزة للتدريبات والمباريات الرسمية والودية.',
      badgeColor: 'bg-[#EFF6FF] text-[#003B73] border-[#003B73]/20'
    },
    {
      id: 4,
      src: 'placeholder4.jpg', // <img src="placeholder4.jpg" alt="صورة صالة الجيم واللياقة البدنية" />
      title: 'صالة الجيم واللياقة البدنية المتكاملة',
      category: 'gym',
      categoryLabel: 'الجيم واللياقة',
      desc: 'أحدث أجهزة القوة والكارديو مع كباتن ومدربين شخصيين معتمدين.',
      badgeColor: 'bg-[#FFF7ED] text-[#F37021] border-[#F37021]/20'
    },
    {
      id: 5,
      src: 'placeholder5.jpg', // <img src="placeholder5.jpg" alt="صورة الفعاليات والحفلات العائلية" />
      title: 'حفلات وفعاليات عائلية مميزة',
      category: 'events',
      categoryLabel: 'حفلات ومناسبات',
      desc: 'أمسيات راقية وأجواء احتفالية تسعد الكبار والصغار طوال العام.',
      badgeColor: 'bg-[#FFF7ED] text-[#F37021] border-[#F37021]/20'
    },
    {
      id: 6,
      src: 'placeholder6.jpg', // <img src="placeholder6.jpg" alt="صورة ملاعب كرة السلة والأنشطة المتعددة" />
      title: 'ملاعب كرة السلة والصالات المغطاة',
      category: 'courts',
      categoryLabel: 'ألعاب الصالات',
      desc: 'أرضيات مطاطية احترافية تحافظ على سلامة مفاصل اللاعبين.',
      badgeColor: 'bg-[#F0FDF4] text-[#16A34A] border-[#16A34A]/20'
    }
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 bg-[#F8FAFC] overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FDF4] border border-[#16A34A]/20 text-[#16A34A] text-xs font-bold uppercase tracking-wider mb-4">
            <Camera className="w-4 h-4" />
            <span>معرض الصور | جولة في نادي ريو</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#001D3D] tracking-tight mb-4">
            لقطات من قلب نادي ريو الإسكندرية
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            استكشف مرافق النادي وملاعبه وحمامات السباحة والأنشطة الاجتماعية من خلال معرض الصور.
          </p>

          {/* User Guide Pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-600 text-xs shadow-sm">
            <Info className="w-4 h-4 text-[#003B73] shrink-0" />
            <span>يمكنك استبدال الصور بالضغط على الألبوم أو تغيير ملفات placeholder1.jpg مباشرة</span>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              جميع الصور ({galleryItems.length})
            </button>
            <button
              onClick={() => setActiveFilter('pool')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'pool'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              حمامات السباحة
            </button>
            <button
              onClick={() => setActiveFilter('fields')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'fields'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              ملاعب كرة القدم
            </button>
            <button
              onClick={() => setActiveFilter('courts')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'courts'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              التنس وملاعب الصالات
            </button>
            <button
              onClick={() => setActiveFilter('gym')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'gym'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              الجيم واللياقة
            </button>
            <button
              onClick={() => setActiveFilter('events')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeFilter === 'events'
                  ? 'bg-[#003B73] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              الفعاليات والحفلات
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="card-clean group relative h-80 rounded-3xl overflow-hidden bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Labeled placeholder image tag for easy replacement */}
              {/* <img src="placeholder1.jpg" alt="صورة للنادي"> */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              {/* Subtle Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

              {/* Zoom Button Icon on Hover */}
              <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                <Maximize2 className="w-5 h-5 text-[#003B73]" />
              </div>

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md bg-white/95 ${item.badgeColor}`}>
                  {item.categoryLabel}
                </span>
              </div>

              {/* Caption Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 text-right text-white">
                <div className="text-[11px] font-mono text-emerald-300 mb-1">
                  ملف: {item.src}
                </div>
                <h3 className="text-lg font-bold group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 left-4 z-10 w-11 h-11 rounded-full bg-white/80 text-slate-800 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors cursor-pointer shadow-md"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain max-h-[70vh]"
                />
              </div>

              <div className="p-6 text-right bg-white">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedImage.badgeColor}`}>
                    {selectedImage.categoryLabel}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    ملف الصورة: {selectedImage.src}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#001D3D] mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600 text-sm">
                  {selectedImage.desc}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
