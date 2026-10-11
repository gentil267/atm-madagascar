export interface Partner {
  id: number;
  name: string;
  type: string;
  country: string;
  description: string;
  logo: string;
  status: "actif" | "en cours" | "potentiel";
}

export const partners: Partner[] = [
  {
    id: 1,
    name: "La Guilde Européenne du Raid",
    type: "ONG Internationale",
    country: "France 🇫🇷",
    description:
      "Organisation française accompagnant les associations dans l'accueil de volontaires en Service Civique.",
    logo: "/images/partners/la-guilde.png",
    status: "en cours",
  },
  {
    id: 2,
    name: "CODIC",
    type: "Réseau d'ONG",
    country: "RDC 🇨🇩",
    description:
      "Communauté de Développement Intégral du Congo — Réseau d'organisations congolaises.",
    logo: "/images/partners/codic.png",
    status: "en cours",
  },
  {
    id: 3,
    name: "France Volontaires",
    type: "Organisme Public",
    country: "France 🇫🇷",
    description:
      "Plateforme française du volontariat international d'échange et de solidarité.",
    logo: "/images/partners/france-volontaires.png",
    status: "potentiel",
  },
  {
    id: 4,
    name: "France Volontaires Madagascar",
    type: "Organisme Public",
    country: "Madagascar 🇲🇬",
    description:
      "Antenne malgache de France Volontaires — espace volontariats à Madagascar.",
    logo: "/images/partners/france-volontaires-mg.png",
    status: "potentiel",
  },
];

export const partnerTypes = [
  {
    icon: "💰",
    title: "Partenaires financiers",
    description: "Organisations soutenant financièrement nos projets.",
  },
  {
    icon: "🤝",
    title: "Partenaires techniques",
    description: "Organisations apportant leur expertise technique.",
  },
  {
    icon: "🌍",
    title: "ONG internationales",
    description: "Organisations internationales de solidarité.",
  },
  {
    icon: "🏛️",
    title: "Institutions publiques",
    description: "Institutions gouvernementales et publiques.",
  },
  {
    icon: "🏢",
    title: "Entreprises RSE",
    description: "Entreprises engagées dans la responsabilité sociale.",
  },
  {
    icon: "🎓",
    title: "Établissements scolaires",
    description: "Écoles et universités partenaires.",
  },
];