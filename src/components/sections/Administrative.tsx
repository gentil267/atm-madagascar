"use client";

import { useTranslations } from "next-intl";
import { organization } from "@/data/organization";

export default function Administrative() {
  const t = useTranslations("administrative");

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {organization.documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-l-4 border-green-600"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-blue-700 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg flex-shrink-0">
                  📄
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-black text-gray-900 mb-2">
                    {doc.type === "Récépissé" ? t("documents.receipt") : t("documents.statCard")}
                  </h3>
                  <p className="text-base font-bold text-green-700 mb-3">
                    {doc.numero}
                  </p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{t("documents.delivered")} <strong>{doc.date}</strong></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{doc.lieu}</span>
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 italic">
                    {doc.type === "Récépissé" ? t("documents.receiptDesc") : t("documents.statCardDesc")}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-3">
              <span className="text-2xl">🏛️</span>
              {t("identity.title")}
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="text-gray-500 block mb-1">{t("identity.fullName")}</span>
                <span className="font-bold text-gray-900">{organization.nom}</span>
              </li>
              <li>
                <span className="text-gray-500 block mb-1">{t("identity.acronym")}</span>
                <span className="font-bold text-gray-900">{organization.sigle}</span>
              </li>
              <li>
                <span className="text-gray-500 block mb-1">{t("identity.president")}</span>
                <span className="font-bold text-gray-900">{organization.president}</span>
              </li>
              <li>
                <span className="text-gray-500 block mb-1">{t("identity.headquarters")}</span>
                <span className="font-bold text-gray-900">{organization.siege}</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-700 to-blue-700 rounded-3xl p-8 shadow-xl text-white">
            <h3 className="text-lg font-black mb-6 flex items-center gap-3">
              <span className="text-2xl">📞</span>
              {t("contact.title")}
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <a href={`tel:${organization.contact.telephone1}`} className="hover:text-yellow-400 transition-colors block font-bold">
                    {organization.contact.telephone1}
                  </a>
                  <a href={`tel:${organization.contact.telephone2}`} className="hover:text-yellow-400 transition-colors block font-bold">
                    {organization.contact.telephone2}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">📧</span>
                <a href={`mailto:${organization.contact.email}`} className="hover:text-yellow-400 transition-colors font-bold break-all">
                  {organization.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-xl">💬</span>
                <a href={`https://wa.me/${organization.contact.whatsapp.replace(/\s|\+/g, "")}`} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors font-bold">
                  {t("contact.whatsapp")}
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
}