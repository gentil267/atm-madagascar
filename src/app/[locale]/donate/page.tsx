import { organization } from "@/data/organization";

export default function DonatePage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-6xl mb-6">💚</div>
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Faire un don
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Votre soutien change des vies à Ranotsara Nord.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
              Soutien
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Comment nous soutenir ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: "💰", title: "Don financier", desc: "Soutenez nos projets par un don ponctuel ou régulier.", color: "from-green-500 to-green-700" },
              { icon: "📦", title: "Don en nature", desc: "Fournitures scolaires, vêtements, nourriture...", color: "from-blue-500 to-blue-700" },
              { icon: "🤝", title: "Bénévolat", desc: "Donnez de votre temps pour nos actions.", color: "from-yellow-500 to-orange-500" },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 text-center">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-700 to-blue-700 rounded-3xl p-10 text-white text-center shadow-2xl mb-16">
            <div className="text-5xl mb-4">💚</div>
            <h3 className="text-2xl md:text-3xl font-black mb-4">
              Paiement en ligne bientôt disponible
            </h3>
            <p className="max-w-3xl mx-auto text-lg opacity-95 mb-8">
              Nous travaillons sur les solutions de paiement en ligne sécurisées.
              En attendant, contactez-nous directement.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href={`tel:${organization.contact.telephone1}`} className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-2xl">
                📞 Nous appeler
              </a>
              <a href={`mailto:${organization.contact.email}`} className="inline-block bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-700 transition-all">
                📧 Nous écrire
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-black text-gray-900 mb-6 text-center">
              📞 Contact direct
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">📞</div>
                <a href={`tel:${organization.contact.telephone1}`} className="font-bold text-green-700 hover:text-green-800 transition-colors">
                  {organization.contact.telephone1}
                </a>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <a href={`mailto:${organization.contact.email}`} className="font-bold text-green-700 hover:text-green-800 transition-colors break-all">
                  {organization.contact.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}