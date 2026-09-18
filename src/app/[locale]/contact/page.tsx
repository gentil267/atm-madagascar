import { organization } from "@/data/organization";

export default function ContactPage() {
  return (
    <main>
      <section className="py-20 bg-gradient-to-b from-green-700 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">
            Nous Contacter
          </h1>
          <p className="text-lg md:text-xl opacity-95 max-w-3xl mx-auto">
            Une question ? Un projet ? Écrivez-nous ou appelez-nous.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <span className="text-green-700 font-bold text-sm tracking-widest uppercase">
              Contact
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-3">
              Restons en contact
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            
            {/* 📋 FORMULAIRE */}
            <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-8 shadow-lg border border-green-100">
              <h3 className="text-2xl font-black text-gray-900 mb-6">
                📝 Envoyez-nous un message
              </h3>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-700 text-white px-6 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform shadow-lg"
                >
                  🚀 Envoyer le message
                </button>
              </form>
            </div>

            {/* 📞 INFORMATIONS */}
            <div className="space-y-6">
              
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  Coordonnées
                </h3>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-lg">📍</span>
                    <span>{organization.siege}<br />Madagascar</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <a href={`tel:${organization.contact.telephone1}`} className="hover:text-green-700 transition-colors font-bold">
                      {organization.contact.telephone1}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">📞</span>
                    <a href={`tel:${organization.contact.telephone2}`} className="hover:text-green-700 transition-colors font-bold">
                      {organization.contact.telephone2}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-lg">📧</span>
                    <a href={`mailto:${organization.contact.email}`} className="hover:text-green-700 transition-colors font-bold break-all">
                      {organization.contact.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-green-600 to-blue-700 rounded-3xl p-8 text-white shadow-xl">
                <h3 className="text-xl font-black mb-4 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  WhatsApp direct
                </h3>
                <p className="text-sm opacity-95 mb-6">
                  Discutez directement avec nous sur WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${organization.contact.whatsapp.replace(/\s|\+/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-green-700 px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  💬 Ouvrir WhatsApp
                </a>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-black text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-2xl">🕐</span>
                  Horaires
                </h3>
                <p className="text-sm text-gray-600">
                  Lundi – Samedi : 8h00 – 17h00<br />
                  Dimanche : Fermé
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </main>
  );
}