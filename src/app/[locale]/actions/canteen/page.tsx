import { Link } from "@/i18n/navigation";

export default function CanteenPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">🍲</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Cantine scolaire
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Offrir un repas chaud et équilibré aux enfants pour favoriser leur apprentissage.
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
                Une cantine pour apprendre
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La cantine scolaire de l'ATM permet aux enfants issus de familles
                vulnérables de recevoir un repas équilibré chaque jour d'école.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                La malnutrition est un frein majeur à la scolarisation. En offrant
                un repas chaud, nous améliorons la concentration, l'assiduité et
                la réussite scolaire.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                <p className="text-sm text-gray-700 font-medium">
                  ✅ <strong>Phase pilote actuelle :</strong> environ 50 enfants bénéficient de la cantine scolaire.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-12 text-center shadow-xl">
              <div className="text-8xl mb-4">🍲</div>
              <div className="text-5xl font-black text-green-700 mb-2">50+</div>
              <p className="text-gray-700 font-bold">Enfants bénéficiaires</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/donate" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              💚 Soutenir la cantine
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}