"use client";

import { useTranslations } from "next-intl";

export default function Missions() {
  const t = useTranslations("missions");

  const missions = [
    { icon: "👶", titleKey: "children.title", descKey: "children.desc", color: "from-green-400 to-green-600" },
    { icon: "👵", titleKey: "elderly.title", descKey: "elderly.desc", color: "from-blue-400 to-blue-600" },
    { icon: "👩", titleKey: "women.title", descKey: "women.desc", color: "from-purple-400 to-purple-600" },
    { icon: "👨‍👩‍👧", titleKey: "families.title", descKey: "families.desc", color: "from-yellow-400 to-orange-500" },
    { icon: "🌳", titleKey: "environment.title", descKey: "environment.desc", color: "from-emerald-400 to-teal-600" },
  ];

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
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {missions.map((mission, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${mission.color} rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {mission.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {t(mission.titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t(mission.descKey)}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}