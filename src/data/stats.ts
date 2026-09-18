export interface Stat {
  id: number;
  icon: string;
  value: string;
  label: string;
  note?: string;
  type: "réel" | "objectif" | "cumulé";
  color: string;
}

export const stats: Stat[] = [
  {
    id: 1,
    icon: "🍲",
    value: "50+",
    label: "Enfants à la cantine",
    note: "Phase pilote actuelle",
    type: "réel",
    color: "from-green-500 to-green-700",
  },
  {
    id: 2,
    icon: "📚",
    value: "Objectif : 500+",
    label: "Kits scolaires / an",
    note: "Objectif visé",
    type: "objectif",
    color: "from-blue-500 to-blue-700",
  },
  {
    id: 3,
    icon: "👨‍👩‍👧",
    value: "200+",
    label: "Familles soutenues",
    note: "Depuis 2025",
    type: "cumulé",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: 4,
    icon: "👵",
    value: "100+",
    label: "Personnes âgées",
    note: "Accompagnement régulier",
    type: "réel",
    color: "from-purple-500 to-pink-500",
  },
];