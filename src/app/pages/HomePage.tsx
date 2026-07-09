import { Link } from "react-router";
import { Shield, Wind } from "lucide-react";
import HeroBanner from "../components/shared/HeroBanner";
import StatBar from "../components/shared/StatBar";
import CTABanner from "../components/shared/CTABanner";
import { useTranslation } from "../i18n/LanguageContext";
import { NAV_ITEMS } from "../data/navigation";

export default function HomePage() {
  const { t } = useTranslation();
  const residentialSeries = NAV_ITEMS.find((item) => item.labelKey === "nav.products")?.megaMenu?.[0];

  const seriesImages = ["/Classic (1).jpg", "/Alaturka (2).jpg", "/Ottoman (7).jpg"];

  return (
    <div className="flex flex-col">
      {/* Hero Bölümü */}
      <HeroBanner
        height="full"
        bgImage="/banner1.png"
        eyebrow={t("home.eyebrow")}
        title={t("home.title")}
        subtitle={t("home.subtitle")}
        ctaButtons={[
          { label: t("home.ctaPrimary"), href: "/products/residential", variant: "primary" },
          { label: t("home.ctaSecondary"), href: "/about", variant: "outline" },
        ]}
      />

      {/* İstatistikler */}
      <StatBar
        stats={[
          { value: "24", label: "Yıllık Tecrübe" },
          { value: "1000+", label: "Tamamlanan Proje" },
          { value: "50+", label: "Ürün Çeşidi" },
          { value: "100%", label: "Müşteri Memnuniyeti" },
        ]}
        variant="red"
      />

      {/* Ürünler Bölümü */}
      <section className="py-16 px-4 bg-darkgray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-[var(--gaf-near-black)]">{t("nav.residentialSeries")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {residentialSeries?.links.slice(0, 3).map((link, index) => (
              <div key={link.label} className="bg-white shadow-sm border border-darkgray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <img
                  src={seriesImages[index] || "/placeholder.jpg"}
                  alt={link.labelTr}
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{link.labelTr}</h3>
                  <Link to={link.href} className="text-[var(--gaf-red)] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    İncele →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kaynaklar ve Garanti Bölümü */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Kaynaklar ve Eğitim</h2>
            <p className="text-darkgray-600 mb-6">Çatı projeleriniz için teknik detaylar, montaj videoları ve garanti koşulları hakkında her şey.</p>
            <Link to="/resources" className="inline-block bg-[var(--gaf-red)] text-white px-8 py-3 font-bold hover:bg-black transition-colors">Tüm Kaynakları Keşfet</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/WhatAreMetalRoofTiles" className="p-8 border border-darkgray-200 hover:border-[var(--gaf-red)] transition-all text-center font-semibold">Metal Kiremit Nedir?</Link>
            <Link to="/videos" className="p-8 border border-darkgray-200 hover:border-[var(--gaf-red)] transition-all text-center font-semibold">Eğitim Videoları</Link>
            <Link to="/about/warranty" className="p-8 border border-darkgray-200 hover:border-[var(--gaf-red)] transition-all text-center font-semibold col-span-2">Garanti Koşullarını İncele</Link>
          </div>
        </div>
      </section>

      {/* Neden Bizi Seçmelisiniz?  */}
      <section className="py-20 px-4 bg-white border-t border-darkgray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-[var(--gaf-red)] font-bold uppercase tracking-widest text-sm mb-3">NEDEN BİZİ SEÇMELİSİNİZ?</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--gaf-near-black)] mb-6">24 Yıllık Sektör Standardı</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="p-8 border border-darkgray-100 hover:border-[var(--gaf-red)] transition-all">
              <Shield className="w-10 h-10 text-[var(--gaf-red)] mb-6" />
              <h4 className="text-xl font-bold mb-3">Uzman Uygulayıcılar</h4>
              <p className="text-darkdarkgray-500 text-sm">Sektörün en iyi ustalarıyla çatılarınızı emin ellere emanet ediyoruz.</p>
            </div>
            
            <div className="p-8 border border-darkgray-100 hover:border-[var(--gaf-red)] transition-all">
              <Wind className="w-10 h-10 text-[var(--gaf-red)] mb-6" />
              <h4 className="text-xl font-bold mb-3">Taş Kaplı Çelik Çekirdek</h4>
              <p className="text-darkgray-500 text-sm">Doğal taş granüllü yapımızla korozyona karşı üstün koruma.</p>
            </div>
            <div className="p-8 border border-darkgray-100 hover:border-[var(--gaf-red)] transition-all">
              <Wind className="w-10 h-10 text-[var(--gaf-red)] mb-6" />
              <h4 className="text-xl font-bold mb-3">Yüksek Rüzgar Direnci</h4>
              <p className="text-darkgray-500 text-sm">En zorlu hava koşullarına karşı tam dayanıklılık.</p>
            </div>
            <div className="p-8 border border-darkgray-100 hover:border-[var(--gaf-red)] transition-all">
              <Shield className="w-10 h-10 text-[var(--gaf-red)] mb-6" />
              <h4 className="text-xl font-bold mb-3">Garanti Koşulları</h4>
              <p className="text-darkgray-500 text-sm mb-4">Uzun süreli ve devredilebilir garanti kapsamımızla yanınızdayız.</p>
              <Link to="/about/warranty" className="text-[var(--gaf-red)] font-bold text-sm">Detaylar →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        headline="Projeniz İçin Teklif Alın"
        subtext="Uzman ekibimizle iletişime geçin, çatı çözümünüzü birlikte planlayalım."
        ctaLabel="İletişime Geç"
        ctaHref="/contact"
        variant="dark"
      />
    </div>
  );
}