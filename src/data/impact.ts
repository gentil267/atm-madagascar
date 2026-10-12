export interface ImpactStat {
  id: number;
  icon: string;
  value: string;
  label: string;
  description: string;
  color: string;
  status: "réalisation" | "objectif";
}

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    icon: "👶",
    value: "50+",
    label: "Enfants à la cantine",
    description: "Enfants bénéficiant de repas réguliers et équilibrés dans le cadre du programme pilote de cantine scolaire.",
    color: "from-green-500 to-green-700",
    status: "réalisation",
  },
  {
    id: 2,
    icon: "📚",
    value: "500+",
    label: "Kits scolaires / an",
    description: "Objectif annuel de kits scolaires à distribuer aux enfants vulnérables pour favoriser leur scolarisation.",
    color: "from-blue-500 to-blue-700",
    status: "objectif",
  },
  {
    id: 3,
    icon: "👨‍👩‍👧",
    value: "200+",
    label: "Familles soutenues",
    description: "Familles vulnérables ayant bénéficié d'une assistance alimentaire et d'un accompagnement social depuis 2025.",
    color: "from-yellow-500 to-orange-500",
    status: "réalisation",
  },
  {
    id: 4,
    icon: "👵",
    value: "100+",
    label: "Personnes âgées",
    description: "Personnes âgées bénéficiant d'un accompagnement régulier, de visites à domicile et d'une aide alimentaire.",
    color: "from-purple-500 to-pink-500",
    status: "réalisation",
  },
  {
    id: 5,
    icon: "👩",
    value: "50+",
    label: "Femmes formées",
    description: "Objectif : femmes vulnérables à former aux activités génératrices de revenus pour leur autonomie.",
    color: "from-pink-500 to-rose-500",
    status: "objectif",
  },
  {
    id: 6,
    icon: "🌳",
    value: "1 000+",
    label: "Arbres plantés",
    description: "Objectif : arbres à planter dans le cadre des campagnes de reboisement pour protéger l'environnement.",
    color: "from-emerald-500 to-teal-600",
    status: "objectif",
  },
];

export const impactGoals = [
  {
    year: "2027",
    goals: [
      "500 enfants à la cantine scolaire",
      "1 000 kits scolaires distribués",
      "500 familles soutenues",
      "200 personnes âgées accompagnées",
    ],
  },
  {
    year: "2028",
    goals: [
      "Ouverture de l'École de l'Avenir Radieux (maternelle)",
      "1 000 enfants scolarisés",
      "300 femmes formées",
      "5 000 arbres plantés",
    ],
  },
  {
    year: "2029",
    goals: [
      "Extension primaire de l'École de l'Avenir Radieux",
      "2 000 enfants bénéficiaires",
      "Partenariats avec 5 ONG internationales",
      "2 villages supplémentaires couverts",
    ],
  },
  {
    year: "2030",
    goals: [
      "Développement du collège",
      "5 000 enfants bénéficiaires",
      "Présence dans 3 régions de Madagascar",
      "Reconnaissance internationale",
    ],
  },
];