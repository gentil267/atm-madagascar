import { setRequestLocale } from "next-intl/server";
import Partners from "@/components/sections/Partners";
import Partnership from "@/components/sections/Partnership";

export default async function PartnersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Nos Partenaires
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Des organisations qui partagent notre vision et soutiennent nos actions.
          </p>
        </div>
      </section>

      <Partners />
      <Partnership />
    </main>
  );
}