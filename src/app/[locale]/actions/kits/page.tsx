import { Link } from "@/i18n/navigation";

export default function KitsPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">📚</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Kits scolaires
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Fournir les outils essentiels pour que chaque enfant puisse étudier dans de bonnes conditions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
                Notre action
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6">
                Distribution de kits
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Chaque année, l'ATM distribue des kits scolaires aux enfants
                issus de familles vulnérables pour leur permettre de commencer
                ou de poursuivre leur scolarité dans de bonnes conditions.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Le kit contient : cahiers, stylos, crayons, gomme, règle, cartable,
                uniforme (selon les moyens disponibles).
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl">
                <p className="text-sm text-gray-700 font-medium">
                  🎯 <strong>Objectif annuel :</strong> plus de 500 kits scolaires par an.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-3xl p-12 text-center shadow-xl">
              <div className="text-8xl mb-4">📚</div>
              <div className="text-4xl font-black text-blue-700 mb-2">Objectif : 500+</div>
              <p className="text-gray-700 font-bold">Kits par an</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/donate" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              💚 Parrainer un kit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}