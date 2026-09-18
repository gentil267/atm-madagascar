"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState } from "react";

const languages = [
  { code: "mg", label: "Malgache", flag: "🇲🇬" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export default function LanguageSwitcher({ variant = "header" }: { variant?: "header" | "footer" }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = languages.find((l) => l.code === locale) || languages[1];

  const changeLanguage = (code: string) => {
    router.replace(pathname, { locale: code });
    setOpen(false);
  };

  if (variant === "footer") {
    return (
      <div className="flex items-center gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
              locale === lang.code
                ? "bg-yellow-400 text-gray-900"
                : "bg-white/10 text-white hover:bg-yellow-400 hover:text-gray-900"
            }`}
          >
            {lang.flag} {lang.code.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="px-3 py-2 rounded-full text-sm font-bold bg-white/20 text-white hover:bg-white/30 transition-all flex items-center gap-1"
        aria-label="Changer de langue"
      >
        <span>{current.flag}</span>
        <span>{current.code.toUpperCase()}</span>
        <span className="text-xs">▾</span>
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-2xl overflow-hidden z-50 min-w-[160px]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm font-medium hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                locale === lang.code ? "bg-green-50 text-green-700 font-bold" : "text-gray-700"
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.label}</span>
              {locale === lang.code && <span className="ml-auto text-green-600">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}