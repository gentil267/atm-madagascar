"use client";

import { useTranslations } from "next-intl";
import { missions2027 } from "@/data/missions";

export default function Missions2027() {
  const t = useTranslations("missions2027");

  return (
    <section className="py-20 bg-white">
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

        {/* TIMELINE DES MISSIONS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {missions2027.map((mission) => (
            <div
              key={mission.id}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${mission.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {mission.icon}
                </div>
                <div>
                  <span className={`inline-block bg-gradient-to-r ${mission.color} text-white px-4 py-1 rounded-full text-sm font-black`}>
                    {mission.period}
                  </span>
                  <h3 className="text-2xl font-black text-gray-900 mt-2">
                    {mission.title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {mission.description}
              </p>

              <ul className="space-y-3">
                {mission.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-700">
                    <span className="text-green-600 font-bold mt-0.5">🎯</span>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}