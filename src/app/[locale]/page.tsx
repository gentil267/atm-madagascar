import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Missions from "@/components/sections/Missions";
import Administrative from "@/components/sections/Administrative";
import Team from "@/components/sections/Team";
import History from "@/components/sections/History";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Missions />
      <History />
      <Services />
      <Administrative />
      <WhyUs />
      <Team />
    </main>
  );
}