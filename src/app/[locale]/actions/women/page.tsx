import { Link } from "@/i18n/navigation";

export default function WomenPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">👩</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Femmes vulnérables
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Soutenir et autonomiser les femmes en situation de précarité.
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
                Autonomie et dignité
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                L'ATM accompagne les femmes en situation de vulnérabilité à
                travers des formations, un accompagnement social et économique.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-gray-700"><span className="text-lg">🎓</span> Formations professionnelles</li>
                <li className="flex items-center gap-3 text-gray-700"><span className="text-lg">💼</span> Appui à la création d'activités</li>
                <li className="flex items-center gap-3 text-gray-700"><span className="text-lg">🤝</span> Accompagnement social</li>
                <li className="flex items-center gap-3 text-gray-700"><span className="text-lg">💰</span> Aide à l'autonomisation financière</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-12 text-center shadow-xl">
              <div className="text-8xl mb-4">👩</div>
              <div className="text-4xl font-black text-pink-700 mb-2">Autonomie</div>
              <p className="text-gray-700 font-bold">Objectif : autonomiser les femmes</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/donate" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
              💚 Soutenir les femmes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}