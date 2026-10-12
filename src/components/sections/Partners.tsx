"use client";

import { useTranslations } from "next-intl";
import { partners, partnerTypes } from "@/data/partners";

export default function Partners() {
  const t = useTranslations("partners");

  const getStatusColor = (status: string) => {
    if (status === "confirmé") return "bg-green-100 text-green-700 border-green-300";
    if (status === "en cours") return "bg-yellow-100 text-yellow-700 border-yellow-300";
    return "bg-blue-100 text-blue-700 border-blue-300";
  };

  const getStatusLabel = (status: string) => {
    if (status === "confirmé") return "✅ Confirmé";
    if (status === "en cours") return "⏳ En cours";
    return "🎯 Potentiel";
  };

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

        {/* TYPES DE PARTENAIRES */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {partnerTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">{type.icon}</div>
              <h4 className="text-sm font-black text-gray-900 mb-1">
                {type.title}
              </h4>
              <p className="text-xs text-gray-500">
                {type.description}
              </p>
            </div>
          ))}
        </div>

        {/* PARTENAIRES ACTUELS */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-8 text-center">
            {t("currentPartners")}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-blue-700 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg flex-shrink-0">
                    🤝
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(partner.status)}`}>
                    {getStatusLabel(partner.status)}
                  </span>
                </div>
                <h4 className="text-xl font-black text-gray-900 mb-2">
                  {partner.name}
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-medium">
                    {partner.type}
                  </span>
                  <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                    {partner.country}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}