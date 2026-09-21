export interface HistoryEvent {
  year: string;
  date: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const history: HistoryEvent[] = [
  {
    year: "2012",
    date: "2012",
    title: "Naissance de la vision",
    description:
      "Monsieur TSIAVELA Etienne porte l'idée d'une structure dédiée à l'aide des personnes vulnérables à Ranotsara Nord. Une vision de solidarité, d'entraide et de développement au profit des populations défavorisées.",
    icon: "💡",
    color: "from-green-500 to-green-700",
  },
  {
    year: "2025",
    date: "Février 2025",
    title: "Création Association Tànana Mifandray",
    description:
      "La vision prend forme avec la création de l'Association Tànana Mifandray (Mains Solidaires). Avec l'appui de proches et de membres de la communauté, les premières actions sociales sont menées auprès des enfants, familles démunies, personnes âgées et femmes vulnérables.",
    icon: "🌱",
    color: "from-blue-500 to-blue-700",
  },
  {
    year: "2026",
    date: "10 Juin 2026",
    title: "Reconnaissance officielle ATM",
    description:
      "Obtention du récépissé officiel N°012/COM/RAN/ASS/26 délivré à Ranotsara Nord. L'association devient officiellement l'Association de Travail et de Mutualité (ATM) et peut désormais structurer, renforcer et étendre ses actions sociales et humanitaires.",
    icon: "🎉",
    color: "from-yellow-500 to-orange-500",
  },
  {
    year: "2026",
    date: "25 Août 2026",
    title: "Carte statistique officielle",
    description:
      "Obtention de la carte statistique N°94111242026000527, confirmant la reconnaissance officielle de l'ATM par les autorités malgaches.",
    icon: "📄",
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2026",
    date: "Septembre 2026",
    title: "Lancement de la plateforme digitale",
    description:
      "Création de la plateforme officielle ATM Madagascar — un site web multilingue (Malgache, Français, Anglais) pour présenter l'association, ses actions, son équipe et permettre les partenariats internationaux.",
    icon: "💻",
    color: "from-emerald-500 to-teal-600",
  },
];

export const vision = {
  title: "Notre Vision",
  text: "Construire une communauté plus solidaire, inclusive et durable où chaque personne peut vivre dans la dignité.",
};

export const values = [
  { icon: "🤝", title: "Solidarité", desc: "Agir ensemble pour les plus vulnérables" },
  { icon: "⚖️", title: "Dignité", desc: "Respect de la dignité humaine" },
  { icon: "🔍", title: "Transparence", desc: "Gestion responsable et honnête" },
  { icon: "🛡️", title: "Responsabilité", desc: "Engagement envers les bénéficiaires" },
  { icon: "💚", title: "Intégrité", desc: "Agir avec honnêteté et éthique" },
  { icon: "🏘️", title: "Engagement communautaire", desc: "Impliquer la communauté" },
];