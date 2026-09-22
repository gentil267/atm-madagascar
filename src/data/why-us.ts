export interface Reason {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const whyUs: Reason[] = [
  {
    id: 1,
    icon: "✅",
    title: "Association officiellement reconnue",
    description:
      "ATM est reconnue officiellement par les autorités malgaches (Récépissé N°012/COM/RAN/ASS/26 du 10 juin 2026 et Carte statistique N°94111242026000527 du 25 août 2026).",
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    icon: "🔍",
    title: "Engagement en faveur de la transparence",
    description:
      "Chaque don et chaque action sont documentés. Les rapports financiers et d'activité sont disponibles pour tous nos partenaires.",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    icon: "🎯",
    title: "Action locale et concrète",
    description:
      "Nous sommes ancrés à Ranotsara Nord. Nos actions répondent directement aux besoins réels des populations locales.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    icon: "📊",
    title: "Suivi des résultats et de l'impact",
    description:
      "Chaque action est suivie et évaluée. Nous mesurons l'impact réel de nos interventions sur la communauté.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    icon: "👥",
    title: "Équipe engagée et expérimentée",
    description:
      "Une équipe de 11 membres engagés, portée par une vision de solidarité née en 2012, avec une connaissance profonde du terrain et des besoins locaux.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    icon: "🤝",
    title: "Partenariats durables",
    description:
      "Nous recherchons des partenariats sérieux, transparents et durables, basés sur la confiance et le respect mutuel.",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 7,
    icon: "🌍",
    title: "Vision internationale",
    description:
      "Notre plateforme multilingue (Malgache, Français, Anglais) facilite la collaboration avec les partenaires internationaux.",
    color: "from-indigo-500 to-purple-600",
  },
  {
    id: 8,
    icon: "💚",
    title: "Impact humain avant tout",
    description:
      "Chaque action vise à améliorer concrètement la vie des enfants, familles et personnes vulnérables de Ranotsara Nord.",
    color: "from-rose-500 to-red-500",
  },
];