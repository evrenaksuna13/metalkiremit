import { useState } from "react";
import { useTranslation } from "../../i18n/LanguageContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react"; // Navigasyon için

export default function LearningCenterPage() {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const kurulumGorselleri = [
    "/kurulum1.jpg", "/kurulum3.jpg", "/kurulum5.jpg", 
    "/kurulum7.jpg"
  ];

  const next = () => setSelectedIndex((prev) => (prev !== null ? (prev + 1) % kurulumGorselleri.length : null));
  const prev = () => setSelectedIndex((prev) => (prev !== null ? (prev - 1 + kurulumGorselleri.length) % kurulumGorselleri.length : null));

  return (
    <div>
      <section className="bg-[var(--gaf-near-black)] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[var(--gaf-red)] text-sm font-semibold uppercase tracking-widest mb-2 font-sans">{t("resources.eyebrow")}</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{t("resources.title")}</h1>
        </div>
      </section>

      <section className="py-12 px-6 bg-[var(--secondary)] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-[var(--gaf-near-black)]">Montaj Rehberi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {kurulumGorselleri.map((img, index) => (
              <button 
                key={index} 
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <img src={img} alt={`Montaj ${index + 1}`} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4">
          <button className="absolute top-6 right-6 text-white hover:text-[var(--gaf-red)]" onClick={() => setSelectedIndex(null)}><X size={40} /></button>
          <button className="absolute left-6 text-white hover:text-[var(--gaf-red)]" onClick={prev}><ChevronLeft size={40} /></button>
          <button className="absolute right-6 text-white hover:text-[var(--gaf-red)]" onClick={next}><ChevronRight size={40} /></button>
          
          <img src={kurulumGorselleri[selectedIndex]} alt="Büyük Görünüm" className="max-w-full max-h-[85vh] shadow-2xl" />
          <p className="absolute bottom-6 text-white font-sans">{selectedIndex + 1} / {kurulumGorselleri.length}</p>
        </div>
      )}
    </div>
  );
}