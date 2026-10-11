export interface PartnershipReason {
  id: number;
  icon: string;
  title: string;
  description: string;
  color: string;
}

export const partnershipReasons: PartnershipReason[] = [
  {
    id: 1,
    icon: "🏆",
    title: "Organisation officiellement reconnue",
    description:
      "ATM Madagascar est officiellement reconnue par les autorités malgaches (Récépissé, NIF, Carte fiscale 2026).",
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    icon: "📊",
    title: "Résultats mesurables",
    description:
      "Nous mesurons et évaluons l'impact de chaque action pour garantir la transparence et l'efficacité.",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    icon: "🌍",
    title: "Vision internationale",
    description:
      "Notre plateforme multilingue (Malgache, Français, Anglais) facilite les partenariats internationaux.",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    icon: "🤝",
    title: "Partenariats durables",
    description:
      "Nous recherchons des partenariats sérieux, transparents et à long terme basés sur la confiance.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    icon: "🎯",
    title: "Impact local concret",
    description:
      "Nos actions répondent directement aux besoins réels des populations vulnérables de Ranotsara Nord.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    icon: "👥",
    title: "Équipe engagée",
    description:
      "Une équipe de 11 membres engagés, portée par une vision de solidarité née en 2012.",
    color: "from-cyan-500 to-blue-600",
  },
];

export const partnershipTypes = [
  {
    icon: "💰",
    title: "Partenariat financier",
    description:
      "Soutenez nos projets par des dons, des financements ciblés ou des subventions.",
    actions: ["Dons ponctuels", "Financements de projets", "Mécénat"],
  },
  {
    icon: "🤝",
    title: "Partenariat technique",
    description:
      "Apportez votre expertise pour renforcer nos capacités et nos actions.",
    actions: ["Formation", "Conseil", "Expertise technique"],
  },
  {
    icon: "🌍",
    title: "Partenariat institutionnel",
    description:
      "Collaborons sur des projets communs pour un impact plus large.",
    actions: ["Projets conjoints", "Échanges", "Représentation mutuelle"],
  },
  {
    icon: "👥",
    title: "Partenariat humain",
    description:
      "Devenez bénévole, volontaire ou ambassadeur de notre mission.",
    actions: ["Bénévolat", "Service Civique", "Ambassadeurs"],
  },
];