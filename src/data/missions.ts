export interface Mission {
  id: number;
  period: string;
  title: string;
  description: string;
  objectives: string[];
  icon: string;
  color: string;
}

export const missions2027: Mission[] = [
  {
    id: 1,
    period: "2027",
    title: "Consolidation & Expansion",
    description:
      "Consolider les acquis et étendre les actions à de nouvelles communautés.",
    objectives: [
      "Renforcer la cantine scolaire (500 enfants)",
      "Doubler la distribution de kits scolaires (1 000 kits)",
      "Augmenter les familles soutenues (500 familles)",
      "Étendre l'accompagnement des personnes âgées (200)",
    ],
    icon: "🚀",
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    period: "2028",
    title: "École de l'Avenir Radieux",
    description:
      "Lancement de la première phase du projet phare : l'École de l'Avenir Radieux.",
    objectives: [
      "Ouverture de la maternelle",
      "Début du primaire",
      "1 000 enfants scolarisés",
      "Construction des premières salles de classe",
    ],
    icon: "🏫",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    period: "2029",
    title: "Partenariats Internationaux",
    description:
      "Développer des partenariats solides avec des ONG et bailleurs internationaux.",
    objectives: [
      "Signer 5 partenariats internationaux",
      "Accéder aux financements internationaux",
      "Renforcer les capacités de l'équipe",
      "Étendre l'impact à 2 régions",
    ],
    icon: "🌍",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    period: "2030",
    title: "Vision Panafricaine",
    description:
      "Faire d'ATM Madagascar une référence en matière de solidarité et de développement communautaire.",
    objectives: [
      "Présence dans 3 régions de Madagascar",
      "5 000 enfants bénéficiaires",
      "Développement du collège",
      "Reconnaissance internationale",
    ],
    icon: "🌟",
    color: "from-purple-500 to-pink-500",
  },
];