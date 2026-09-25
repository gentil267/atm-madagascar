"use client";

import { useTranslations } from "next-intl";
import { organization } from "@/data/organization";

export default function Administrative() {
  const t = useTranslations("administrative");

  const getDocKey = (type: string): string => {
    if (type === "Récépissé") return "receipt";
    if (type === "Carte statistique INSTAT") return "statCard";
    if (type === "NIF") return "nif";
    if (type === "Carte fiscale") return "fiscalCard";
    if (type === "Statuts") return "statutes";
    if (type === "Certificat d'existence") return "existenceCert";
    return "receipt";
  };

  const getDocDescKey = (type: string): string => {
    if (type === "Récépissé") return "receiptDesc";
    if (type === "Carte statistique INSTAT") return "statCardDesc";
    if (type === "NIF") return "nifDesc";
    if (type === "Carte fiscale") return "fiscalCardDesc";
    if (type === "Statuts") return "statutesDesc";
    if (type === "Certificat d'existence") return "existenceCertDesc";
    return "receiptDesc";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🎯 TITRE */}
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

        {/* 📋 DOCUMENTS OFFICIELS (6) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {organization.documents.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all border-l-4 border-green-600"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-blue-700 rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg flex-shrink-0">
                  📄
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-black text-gray-900 mb-2">
                    {t(`documents.${getDocKey(doc.type)}`)}
                  </h3>
                  <p className="text-sm font-bold text-green-700 mb-3 break-words">
                    {doc.numero}
                  </p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{doc.date}</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{doc.lieu}</span>
                    </p>
                  </div>
                  <p className="mt-3 text-xs text-gray-500 italic">
                    {t(`documents.${getDocDescKey(doc.type)}`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 💰 INFORMATIONS FISCALES */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-green-700 to-blue-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl">
                💰
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-black">
                  {t("fiscal.title")}
                </h3>
                <p className="text-sm opacity-90 mt-1">
                  Informations fiscales officielles
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-xs uppercase tracking-wider opacity-80 mb-2">
                  {t("fiscal.nif")}
                </p>
                <p className="text-2xl font-black text-yellow-400 break-words">
                  {organization.fiscal.nif}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-xs uppercase tracking-wider opacity-80 mb-2">
                  {t("fiscal.statNumber")}
                </p>
                <p className="text-lg font-black text-yellow-400 break-words">
                  {organization.fiscal.numeroStatistique}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-xs uppercase tracking-wider opacity-80 mb-2">
                  {t("fiscal.fiscalCenter")}
                </p>
                <p className="text-lg font-black text-yellow-400">
                  {organization.fiscal.centreFiscal}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-xs uppercase tracking-wider opacity-80 mb-2">
                  {t("fiscal.fiscalCard")}
                </p>
                <p className="text-2xl font-black text-yellow-400">
                  {organization.fiscal.carteFiscale}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-xs uppercase tracking-wider opacity-80 mb-2">
                  {t("fiscal.validity")}
                </p>
                <p className="text-2xl font-black text-yellow-400">
                  {organization.fiscal.validite}
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/20 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl mb-1">✅</p>
                  <p className="text-xs uppercase tracking-wider opacity-80">
                    Conforme
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🏛️ IDENTITÉ + CONTACT */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
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