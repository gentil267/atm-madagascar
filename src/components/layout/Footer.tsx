import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COLONNE 1 — IDENTITÉ */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden p-1">
                <img src="/images/logo/logo-atm.png" alt="ATM Madagascar" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-black text-yellow-400 tracking-wider">ATM</h3>
                <p className="text-xs text-gray-400 tracking-widest uppercase">Madagascar</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">{t("description")}</p>
            <p className="text-sm italic text-yellow-400 font-medium">{t("slogan")}</p>
          </div>

          {/* COLONNE 2 — LIENS RAPIDES */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-6 pb-3 border-b border-yellow-400/30">
              {t("quickLinks")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: tNav("home") },
                { href: "/about", label: tNav("about") },
                { href: "/actions", label: tNav("actions") },
                { href: "/impact", label: tNav("impact") },
                { href: "/partners", label: tNav("partners") },
                { href: "/contact", label: tNav("contact") },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 3 — NOS ACTIONS */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-6 pb-3 border-b border-yellow-400/30">
              {t("ourActions")}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/actions/canteen", label: `🍲 ${t("actionsList.canteen")}` },
                { href: "/actions/kits", label: `📚 ${t("actionsList.kits")}` },
                { href: "/actions/elderly", label: `👵 ${t("actionsList.elderly")}` },
                { href: "/actions/women", label: `👩 ${t("actionsList.women")}` },
                { href: "/actions/environment", label: `🌳 ${t("actionsList.environment")}` },
                { href: "/actions/school", label: `🏫 ${t("actionsList.school")}` },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-yellow-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNE 4 — CONTACT */}
          <div>
            <h4 className="text-lg font-bold text-yellow-400 mb-6 pb-3 border-b border-yellow-400/30">
              {t("contact")}
            </h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <span>Ranotsara Nord, District d'Iakora,<br />Région Ihorombe, Madagascar</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href="tel:+261332339843" className="hover:text-yellow-400 transition-colors">+261 33 23 398 43</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📞</span>
                <a href="tel:+261343996860" className="hover:text-yellow-400 transition-colors">+261 34 39 96 860</a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <a href="mailto:atm.association26@gmail.com" className="hover:text-yellow-400 transition-colors break-all">atm.association26@gmail.com</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* RÉSEAUX SOCIAUX + LANGUES */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-400 font-medium">{t("followUs")} :</span>
              {[
                { icon: "📘", href: "https://facebook.com" },
                { icon: "💼", href: "https://linkedin.com" },
                { icon: "💬", href: "https://wa.me/261332339843" },
                { icon: "📧", href: "mailto:atm.association26@gmail.com" },
                { icon: "📷", href: "https://instagram.com" },
                { icon: "▶️", href: "https://youtube.com" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-yellow-400 hover:text-gray-900 rounded-full flex items-center justify-center text-lg transition-all hover:scale-110">
                  {s.icon}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400 font-medium">{t("language")} :</span>
              <LanguageSwitcher variant="footer" />
            </div>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="bg-black/40 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p className="text-center md:text-left">
              © {currentYear} <span className="text-yellow-400 font-bold">ATM Madagascar</span> — {t("rights")}
            </p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">🔒 {t("secured")}</span>
              <span className="hidden md:inline">•</span>
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">{t("privacy")}</Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">{t("terms")}</Link>
              <span>•</span>
              <Link href="/legal" className="hover:text-yellow-400 transition-colors">{t("legal")}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}