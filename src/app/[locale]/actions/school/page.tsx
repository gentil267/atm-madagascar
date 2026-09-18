import { Link } from "@/i18n/navigation";

export default function SchoolPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🏫</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            École de l'Avenir Radieux
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Notre projet phare : une école pour l'avenir des enfants de Ranotsara Nord.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
              Notre projet
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Un projet éducatif à long terme
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              { phase: "Phase 1", title: "Maternelle + début primaire", icon: "🌱", color: "from-green-500 to-green-700", status: "En cours" },
              { phase: "Phase 2", title: "Renforcement du primaire", icon: "📚", color: "from-blue-500 to-blue-700", status: "Prévu" },
              { phase: "Phase 3", title: "Développement du collège", icon: "🎓", color: "from-yellow-500 to-orange-500", status: "Prévu" },
              { phase: "Phase 4", title: "Perspective d'un lycée", icon: "🏛️", color: "from-purple-500 to-pink-500", status: "Vision" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-green-700 uppercase tracking-wider">{item.phase}</span>
                    <h3 className="text-xl font-black text-gray-900 mt-1">{item.title}</h3>
                    <span className={`inline-block mt-2 text-xs font-bold px-3 py-1 rounded-full ${
                      item.status === "En cours" ? "bg-green-100 text-green-700" :
                      item.status === "Prévu" ? "bg-blue-100 text-blue-700" :
                      "bg-purple-100 text-purple-700"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/donate" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              💚 Soutenir l'école
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}