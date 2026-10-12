"use client";

import { useTranslations } from "next-intl";
import { impactStats, impactGoals } from "@/data/impact";

export default function Impact() {
  const t = useTranslations("impact");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
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

        {/* CHIFFRES CLÉS AVEC BADGE RÉALISATION/OBJECTIF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {impactStats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-green-700 mb-3">
                {stat.label}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {stat.description}
              </p>
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                stat.status === "réalisation"
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
              }`}>
                {stat.status === "réalisation" ? "✅ Réalisation" : "🎯 Objectif"}
              </div>
            </div>
          ))}
        </div>

        {/* OBJECTIFS PAR ANNÉE */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-black text-gray-900">
              {t("goalsTitle")}
            </h3>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              {t("goalsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactGoals.map((goal) => (
              <div
                key={goal.year}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-t-4 border-green-600"
              >
                <div className="text-center mb-4">
                  <span className="inline-block bg-gradient-to-r from-green-600 to-blue-700 text-white px-4 py-2 rounded-full text-lg font-black">
                    {goal.year}
                  </span>
                </div>
                <ul className="space-y-3">
                  {goal.goals.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-green-600 font-bold mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}