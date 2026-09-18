"use client";

import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            {t("title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 border border-green-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              🏛️
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-4">
              {t("identity.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {t("identity.text")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 border border-blue-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              🎯
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-4">
              {t("mission.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {t("mission.text")}
            </p>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-white rounded-3xl p-8 border border-yellow-100 hover:shadow-xl transition-all">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-lg">
              🤝
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-4">
              {t("actions.title")}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm">
              {t("actions.text")}
            </p>
          </div>

        </div>

        <div className="mt-16 bg-gradient-to-r from-green-700 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            {t("partnership.title")}
          </h3>
          <p className="max-w-3xl mx-auto text-lg opacity-95 leading-relaxed">
            {t("partnership.text")}
          </p>
        </div>

      </div>
    </section>
  );
}