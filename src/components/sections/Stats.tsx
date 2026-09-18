"use client";

import { useTranslations } from "next-intl";
import { stats } from "@/data/stats";

export default function Stats() {
  const t = useTranslations("stats");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
            {t("label")}
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
            {t("title")}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center border border-gray-100"
            >
              <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                {stat.icon}
              </div>

              <div className="text-3xl md:text-4xl font-black text-gray-900 mb-2">
                {stat.value}
              </div>

              <div className="text-sm md:text-base text-gray-600 font-medium mb-2">
                {stat.label}
              </div>

              {stat.note && (
                <div className={`text-xs font-bold px-3 py-1 rounded-full inline-block ${
                  stat.type === "objectif"
                    ? "bg-blue-100 text-blue-700"
                    : stat.type === "cumulé"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {stat.type === "objectif" ? "🎯 " : stat.type === "cumulé" ? "📊 " : "✅ "}
                  {stat.note}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}