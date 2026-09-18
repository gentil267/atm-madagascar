"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { members } from "@/data/members";
import { useState } from "react";

export default function Team() {
  const t = useTranslations("team");
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const selected = members.find((m) => m.id === selectedMember);

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedMember(member.id)}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative aspect-square bg-white overflow-hidden">
                <Image
                  src={member.photo}
                  alt={`${member.nom} ${member.prenoms}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg z-10">
                  {member.fonction}
                </div>

                <div className="absolute inset-0 bg-green-600/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold text-sm bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white">
                    👁️ {t("viewProfile")}
                  </span>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-black text-gray-900 mb-1">
                  {member.prenoms}
                </h3>
                <p className="text-sm font-bold text-green-700 mb-2">
                  {member.nom}
                </p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {member.fonction}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="relative aspect-[4/3] bg-white overflow-hidden rounded-t-3xl">
              <Image
                src={selected.photo}
                alt={`${selected.nom} ${selected.prenoms}`}
                fill
                className="object-cover"
                priority
              />

              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center text-gray-900 font-bold text-xl shadow-xl z-10 transition-transform hover:scale-110"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="p-8 bg-white">
              <div className="mb-4">
                <span className="inline-block bg-yellow-400 text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {selected.fonction}
                </span>
              </div>

              <h3 className="text-3xl font-black text-gray-900 mb-6">
                {selected.prenoms} {selected.nom}
              </h3>

              {selected.bio && (
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-green-700 uppercase tracking-wider mb-2">
                    📖 {t("profile.bio")}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    {selected.bio}
                  </p>
                </div>
              )}

              <div className="space-y-3 pt-6 border-t border-gray-200">
                {selected.contact && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-xl w-8">📞</span>
                    <a href={`tel:${selected.contact}`} className="hover:text-green-700 transition-colors font-medium">
                      {selected.contact}
                    </a>
                  </div>
                )}
                {selected.email && (
                  <div className="flex items-center gap-3 text-gray-700">
                    <span className="text-xl w-8">📧</span>
                    <a href={`mailto:${selected.email}`} className="hover:text-green-700 transition-colors font-medium break-all">
                      {selected.email}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-3 text-gray-700">
                  <span className="text-xl w-8">📍</span>
                  <span className="font-medium">{t("profile.location")}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}