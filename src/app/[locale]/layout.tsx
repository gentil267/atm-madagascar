import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "ATM Madagascar — Entraide • Solidarité • Développement",
    template: "%s | ATM Madagascar",
  },
  description:
    "Association malgache engagée pour les populations vulnérables de Ranotsara Nord. Éducation, solidarité et développement communautaire. Association de Travail et de Mutualité (ATM) — District d'Iakora, Région Ihorombe, Madagascar.",
  keywords: [
    "ATM Madagascar",
    "Association de Travail et de Mutualité",
    "association malgache",
    "association Madagascar",
    "solidarité Madagascar",
    "entraide Madagascar",
    "développement communautaire Madagascar",
    "Ranotsara Nord",
    "Iakora",
    "Ihorombe",
    "cantine scolaire Madagascar",
    "kits scolaires Madagascar",
    "aide enfants vulnérables",
    "soutien personnes âgées",
    "autonomisation femmes Madagascar",
    "TSIAVELA Etienne",
    "Gentil Ntwali",
    "AI engineer DRC",
  ],
  authors: [
    { name: "ATM Madagascar", url: "https://atm-madagascar.vercel.app" },
    { name: "Ntwali Murhandikire Gentil", url: "https://ntwal.carrd.co" },
  ],
  creator: "Ntwali Murhandikire Gentil",
  publisher: "ATM Madagascar",
  metadataBase: new URL("https://atm-madagascar.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "fr": "/fr",
      "mg": "/mg",
      "en": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["mg_MG", "en_US"],
    url: "https://atm-madagascar.vercel.app",
    siteName: "ATM Madagascar",
    title: "ATM Madagascar — Entraide • Solidarité • Développement",
    description:
      "Association malgache engagée pour les populations vulnérables de Ranotsara Nord. Éducation, solidarité et développement communautaire.",
    images: [
      {
        url: "/images/logo/logo-atm.png",
        width: 1200,
        height: 630,
        alt: "ATM Madagascar — Logo officiel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ATM Madagascar — Entraide • Solidarité • Développement",
    description:
      "Association malgache engagée pour les populations vulnérables de Ranotsara Nord.",
    images: ["/images/logo/logo-atm.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/logo/logo-atm.png",
    apple: "/images/logo/logo-atm.png",
  },
  verification: {
    google: "à-remplir-plus-tard",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "fr" | "mg" | "en")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="pt-24 flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}