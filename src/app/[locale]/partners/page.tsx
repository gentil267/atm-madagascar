export default function PartnersPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Nos Partenaires
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Nous travaillons avec des partenaires sérieux, transparents et
            durables pour renforcer nos actions.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
              Partenariats
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Construisons ensemble
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              L'ATM poursuit son développement en recherchant des partenariats
              sérieux, transparents et durables.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "💰",
                title: "Partenariat financier",
                desc: "Soutenez nos projets par des dons ou des financements ciblés.",
                color: "from-green-500 to-green-700",
              },
              {
                icon: "🤝",
                title: "Partenariat technique",
                desc: "Apportez votre expertise pour renforcer nos capacités.",
                color: "from-blue-500 to-blue-700",
              },
              {
                icon: "👥",
                title: "Partenariat humain",
                desc: "Devenez bénévole ou volontaire pour nos actions.",
                color: "from-yellow-500 to-orange-500",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center"
              >
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Devenir partenaire de l'ATM
            </h3>
            <p className="max-w-3xl mx-auto text-lg opacity-95 leading-relaxed mb-6">
              Vous souhaitez collaborer avec nous ? Contactez-nous pour discuter
              des possibilités de partenariat.
            </p>
            <a
              href="mailto:atm.association26@gmail.com"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl"
            >
              📧 Nous contacter
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}