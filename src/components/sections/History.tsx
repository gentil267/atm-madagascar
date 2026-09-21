"use client";

import { useTranslations } from "next-intl";
import { history, vision, values } from "@/data/history";

export default function History() {
  const t = useTranslations("history");

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

        {/* 📖 CHRONOLOGIE */}
        <div className="relative max-w-4xl mx-auto mb-20">
          
          <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-blue-500 to-yellow-500 rounded-full"></div>

          <div className="space-y-12">
            {history.map((event, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all ml-20 md:ml-0">
                    <span className={`inline-block bg-gradient-to-r ${event.color} text-white px-4 py-1 rounded-full text-xs font-bold mb-3`}>
                      {event.date}
                    </span>
                    <h3 className="text-xl font-black text-gray-900 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${event.color} rounded-full flex items-center justify-center text-2xl shadow-xl border-4 border-white`}>
                    {event.icon}
                  </div>
                </div>

                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* 🌟 VISION */}
        <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl mb-16">
          <div className="text-5xl mb-4">🌟</div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            {vision.title}
          </h3>
          <p className="max-w-3xl mx-auto text-lg opacity-95 leading-relaxed italic">
            « {vision.text} »
          </p>
        </div>

        {/* 💎 VALEURS */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-3xl mb-2">{value.icon}</div>
              <h4 className="text-sm font-black text-gray-900 mb-1">
                {value.title}
              </h4>
              <p className="text-xs text-gray-500">
                {value.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}