import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Missions from "@/components/sections/Missions";
import Impact from "@/components/sections/Impact";
import Services from "@/components/sections/Services";
import History from "@/components/sections/History";
import Partners from "@/components/sections/Partners";
import WhyUs from "@/components/sections/WhyUs";
import Team from "@/components/sections/Team";

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
      <Impact />
      <Services />
      <History />
      <Partners />
      <WhyUs />
      <Team />
    </main>
  );
}