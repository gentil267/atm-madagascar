"use client";

import { useTranslations } from "next-intl";
import { partnershipReasons, partnershipTypes } from "@/data/partnership";
import { Link } from "@/i18n/navigation";

export default function Partnership() {
  const t = useTranslations("partnership");

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITRE */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            {t("title")}
          </h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            {t("description")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* POURQUOI NOUS CHOISIR */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
            {t("whyTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnershipReasons.map((reason) => (
              <div
                key={reason.id}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${reason.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  {reason.icon}
                </div>
                <h4 className="text-lg font-black text-gray-900 mb-2">
                  {reason.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* TYPES DE PARTENARIAT */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
            {t("typesTitle")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnershipTypes.map((type, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-700 to-blue-700 rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{type.icon}</div>
                <h4 className="text-xl font-black mb-3">
                  {type.title}
                </h4>
                <p className="text-sm opacity-95 leading-relaxed mb-4">
                  {type.description}
                </p>
                <ul className="space-y-1">
                  {type.actions.map((action, i) => (
                    <li key={i} className="text-xs flex items-center gap-2 opacity-90">
                      <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🤝</div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            {t("ctaTitle")}
          </h3>
          <p className="max-w-3xl mx-auto text-lg opacity-95 mb-8">
            {t("ctaText")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              📧 {t("ctaContact")}
            </Link>
            <Link
              href="/donate"
              className="bg-white/10 backdrop-blur-md border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all"
            >
              💚 {t("ctaDonate")}
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}