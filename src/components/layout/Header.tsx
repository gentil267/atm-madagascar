"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-gradient-to-r from-green-700 to-blue-700 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* ⭐ LOGO ATM */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform overflow-hidden">
            <Image
              src="/images/logo/logo-atm.png"
              alt="ATM Madagascar"
              width={56}
              height={56}
              className="w-full h-full object-contain p-1"
              priority
            />
          </div>
          <div className="hidden md:flex flex-col leading-tight">
            <span className="text-xl font-black text-yellow-400 tracking-wider">
              ATM
            </span>
            <span
              className={`text-xs tracking-widest uppercase ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Madagascar
            </span>
          </div>
        </Link>

        {/* 🧭 NAVIGATION MULTILINGUE */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-full md:top-auto left-0 md:left-auto w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center gap-6 py-4 md:py-0 shadow-lg md:shadow-none`}
        >
          <Link href="/" className={`font-semibold transition-colors ${scrolled ? "text-gray-900 hover:text-green-700" : "text-white hover:text-yellow-400"}`}>
            {t("home")}
          </Link>
          <Link href="/about" className={`font-semibold transition-colors ${scrolled ? "text-gray-900 hover:text-green-700" : "text-white hover:text-yellow-400"}`}>
            {t("about")}
          </Link>
          <Link href="/actions" className={`font-semibold transition-colors ${scrolled ? "text-gray-900 hover:text-green-700" : "text-white hover:text-yellow-400"}`}>
            {t("actions")}
          </Link>
          <Link href="/impact" className={`font-semibold transition-colors ${scrolled ? "text-gray-900 hover:text-green-700" : "text-white hover:text-yellow-400"}`}>
            {t("impact")}
          </Link>
          <Link href="/partners" className={`font-semibold transition-colors ${scrolled ? "text-gray-900 hover:text-green-700" : "text-white hover:text-yellow-400"}`}>
            {t("partners")}
          </Link>
          <Link href="/contact" className={`font-semibold transition-colors ${scrolled ? "text-gray-900 hover:text-green-700" : "text-white hover:text-yellow-400"}`}>
            {t("contact")}
          </Link>
        </nav>

        {/* 🎯 ACTIONS */}
        <div className="flex items-center gap-3">
          
          {/* 🌍 SÉLECTEUR DE LANGUE INTELLIGENT */}
          <LanguageSwitcher variant="header" />

          <Link
            href="/donate"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform shadow-md"
          >
            💚 {t("donate")}
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className={`w-7 h-0.5 rounded transition-all ${scrolled ? "bg-gray-900" : "bg-white"}`}></span>
            <span className={`w-7 h-0.5 rounded transition-all ${scrolled ? "bg-gray-900" : "bg-white"}`}></span>
            <span className={`w-7 h-0.5 rounded transition-all ${scrolled ? "bg-gray-900" : "bg-white"}`}></span>
          </button>
        </div>
      </div>
    </header>
  );
}