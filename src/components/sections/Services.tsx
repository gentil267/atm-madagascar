"use client";

import { useTranslations } from "next-intl";
import { services } from "@/data/services";

export default function Services() {
  const t = useTranslations("services");

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-600 font-bold mt-0.5">✓</span>
                    <span>{feature}</span>
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