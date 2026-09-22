export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: 1,
    icon: "🍲",
    title: "Cantine scolaire",
    description:
      "Offrir un repas chaud et équilibré aux enfants pour favoriser leur apprentissage et leur développement.",
    features: [
      "Repas réguliers et équilibrés",
      "Phase pilote : 50+ enfants",
      "Contribution à l'assiduité scolaire",
      "Lutte contre la malnutrition",
    ],
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    icon: "📚",
    title: "Kits scolaires",
    description:
      "Distribution de fournitures scolaires essentielles pour que chaque enfant puisse étudier dans de bonnes conditions.",
    features: [
      "Cahiers, stylos, crayons",
      "Cartables et uniformes",
      "Objectif : 500+ kits par an",
      "Distribution annuelle gratuite",
    ],
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    icon: "👵",
    title: "Soutien aux personnes âgées",
    description:
      "Accompagnement social et sanitaire des personnes âgées sans soutien familial.",
    features: [
      "Visites à domicile régulières",
      "Aide alimentaire",
      "Accès aux soins de santé",
      "Suivi personnalisé",
    ],
    color: "from-purple-500 to-purple-700",
  },
  {
    id: 4,
    icon: "👩",
    title: "Autonomisation des femmes",
    description:
      "Formation et accompagnement des femmes en situation de vulnérabilité pour favoriser leur autonomie.",
    features: [
      "Formations professionnelles",
      "Appui à la création d'activités",
      "Accompagnement économique",
      "Renforcement des capacités",
    ],
    color: "from-pink-500 to-pink-700",
  },
  {
    id: 5,
    icon: "🌳",
    title: "Protection de l'environnement",
    description:
      "Actions de reboisement et de sensibilisation pour protéger l'environnement de Ranotsara Nord.",
    features: [
      "Campagnes de reboisement",
      "Sensibilisation communautaire",
      "Actions de propreté",
      "Protection de la biodiversité",
    ],
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: 6,
    icon: "🏫",
    title: "École de l'Avenir Radieux",
    description:
      "Projet phare : construction progressive d'une école pour offrir une éducation de qualité aux enfants.",
    features: [
      "Phase 1 : Maternelle + primaire",
      "Phase 2 : Renforcement primaire",
      "Phase 3 : Collège",
      "Phase 4 : Lycée (vision)",
    ],
    color: "from-yellow-500 to-orange-500",
  },
];