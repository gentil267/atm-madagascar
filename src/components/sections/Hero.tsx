import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* 🖼️ PHOTO PRINCIPALE — LOG2 */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/hero-main.png"
          alt="ATM Madagascar — Enfants et communauté"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* ⭐ CONTENU CENTRAL */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        
        <div className="inline-block bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm mb-8">
          {t("badge")}
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight drop-shadow-2xl">
          {t("title")}
          <span className="block text-3xl md:text-5xl lg:text-6xl text-yellow-400 mt-2">
            {t("subtitle")}
          </span>
        </h1>

        <p className="text-xl md:text-3xl italic text-yellow-300 mb-8 font-light">
          {t("slogan")}
        </p>

        <p className="text-base md:text-lg max-w-3xl mx-auto mb-12 leading-relaxed opacity-95">
          {t("description")}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/donate"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
          >
            💚 {t("donateBtn")}
          </Link>
          <Link
            href="/actions"
            className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all"
          >
            🎯 {t("discoverBtn")}
          </Link>
        </div>

      </div>
    </section>
  );
}