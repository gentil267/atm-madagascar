export interface Report {
  id: number;
  title: string;
  description: string;
  type: string;
  date: string;
  file: string;
  icon: string;
  color: string;
}

export const reports: Report[] = [
  {
    id: 1,
    title: "Statuts de l'association",
    description:
      "Statuts officiels de l'Association de Travail et de Mutualité, légalisés par le service fiscal.",
    type: "Document officiel",
    date: "2026",
    file: "/documents/statuts-atm.pdf",
    icon: "📄",
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    title: "Récépissé officiel",
    description:
      "Reconnaissance officielle de l'association (N°012/COM/RAN/ASS/26) délivrée le 10 juin 2026.",
    type: "Document officiel",
    date: "2026",
    file: "/documents/recepisse-atm.pdf",
    icon: "📄",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    title: "Carte statistique INSTAT",
    description:
      "Carte statistique officielle N°94111 24 2026 0 00527 délivrée par l'INSTAT Madagascar.",
    type: "Document officiel",
    date: "2026",
    file: "/documents/carte-statistique.pdf",
    icon: "📄",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    title: "NIF — Numéro d'Identification Fiscale",
    description:
      "Numéro d'Identification Fiscale 5020087957 délivré par le Centre Fiscal Ihosy.",
    type: "Document fiscal",
    date: "2026",
    file: "/documents/nif-atm.pdf",
    icon: "💰",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 5,
    title: "Carte fiscale 2026",
    description:
      "Carte fiscale officielle 2026 délivrée par le Centre Fiscal Ihosy.",
    type: "Document fiscal",
    date: "2026",
    file: "/documents/carte-fiscale.pdf",
    icon: "💰",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    title: "Certificat d'existence",
    description:
      "Certificat d'existence officiel de l'association ATM Madagascar.",
    type: "Document officiel",
    date: "2026",
    file: "/documents/certificat-existence.pdf",
    icon: "📄",
    color: "from-cyan-500 to-blue-600",
  },
];