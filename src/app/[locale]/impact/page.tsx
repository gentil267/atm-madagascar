import { setRequestLocale } from "next-intl/server";
import Impact from "@/components/sections/Impact";
import Missions2027 from "@/components/sections/Missions2027";
import Reports from "@/components/sections/Reports";

export default async function ImpactPage({
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
            Notre Impact
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Des chiffres qui parlent de notre engagement sur le terrain.
          </p>
        </div>
      </section>
      <Impact />
      <Missions2027 />
      <Reports />
    </main>
  );
}