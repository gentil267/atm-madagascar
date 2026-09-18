import Missions from "@/components/sections/Missions";

export default function ActionsPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Nos Actions
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Découvrez les 5 domaines dans lesquels l'ATM intervient pour
            soutenir les populations vulnérables de Ranotsara Nord.
          </p>
        </div>
      </section>
      <Missions />
    </main>
  );
}