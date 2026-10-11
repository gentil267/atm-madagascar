"use client";

import { useTranslations } from "next-intl";
import { reports } from "@/data/reports";

export default function Reports() {
  const t = useTranslations("reports");

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

        {/* DOCUMENTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => (
            <div
              key={report.id}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${report.color} rounded-2xl flex items-center justify-center text-2xl shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {report.icon}
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {report.type}
                  </span>
                  <h3 className="text-lg font-black text-gray-900 mt-1">
                    {report.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {report.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-xs text-gray-500 font-medium">
                  📅 {report.date}
                </span>
                <a
                  href={report.file}
                  download
                  className="inline-flex items-center gap-2 text-sm font-bold text-green-700 hover:text-green-800 transition-colors"
                >
                  📥 Télécharger
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* MESSAGE TRANSPARENCE */}
        <div className="mt-16 bg-gradient-to-r from-green-700 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-2xl md:text-3xl font-black mb-4">
            {t("transparencyTitle")}
          </h3>
          <p className="max-w-3xl mx-auto text-lg opacity-95 leading-relaxed">
            {t("transparencyText")}
          </p>
        </div>

      </div>
    </section>
  );
}