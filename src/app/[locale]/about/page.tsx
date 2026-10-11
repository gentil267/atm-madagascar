import { setRequestLocale } from "next-intl/server";
import About from "@/components/sections/About";
import History from "@/components/sections/History";
import Services from "@/components/sections/Services";
import Administrative from "@/components/sections/Administrative";
import Missions2027 from "@/components/sections/Missions2027";
import Partners from "@/components/sections/Partners";
import Reports from "@/components/sections/Reports";
import Team from "@/components/sections/Team";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <About />
      <History />
      <Services />
      <Administrative />
      <Missions2027 />
      <Partners />
      <Reports />
      <Team />
    </main>
  );
}