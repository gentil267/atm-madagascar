export interface Member {
  id: number;
  nom: string;
  prenoms: string;
  fonction: string;
  photo: string;
  bio?: string;
  contact?: string;
  email?: string;
}

export const members: Member[] = [
  {
    id: 1,
    nom: "TSIAVELA",
    prenoms: "Etienne",
    fonction: "Président Fondateur",
    photo: "/images/members/membre-01.png",
    bio: "Fondateur de la vision ATM depuis 2012. Engagé pour le développement de Ranotsara Nord et des populations vulnérables.",
    contact: "+261 33 23 398 43",
    email: "eti6vela@gmail.com",
  },
  {
    id: 2,
    nom: "BALALAHY",
    prenoms: "Marcial",
    fonction: "Vice-président",
    photo: "/images/members/membre-02.png",
    bio: "Soutient le Président dans la coordination des activités de l'association et le développement des projets.",
  },
  {
    id: 3,
    nom: "HANTA",
    prenoms: "Clotilde",
    fonction: "Secrétaire 1",
    photo: "/images/members/membre-03.png",
    bio: "Responsable de la rédaction des comptes rendus et du suivi administratif de l'association.",
  },
  {
    id: 4,
    nom: "ANDRIANARIVELO",
    prenoms: "Hajarivonjy",
    fonction: "Secrétaire 2",
    photo: "/images/members/membre-04.png",
    bio: "Assiste la Secrétaire 1 dans la gestion documentaire et la communication interne.",
  },
  {
    id: 5,
    nom: "ORDINE",
    prenoms: "Colette",
    fonction: "Trésorière",
    photo: "/images/members/membre-05.png",
    bio: "Gère les finances de l'association avec rigueur et transparence.",
  },
  {
    id: 6,
    nom: "VALIHASINA",
    prenoms: "Elysabeth",
    fonction: "Commissaire au Compte",
    photo: "/images/members/membre-06.png",
    bio: "Vérifie les comptes et assure la conformité financière de l'association.",
  },
  {
    id: 7,
    nom: "RAVALIHEHY",
    prenoms: "Farahery David",
    fonction: "Comptable",
    photo: "/images/members/membre-07.png",
    bio: "Tient la comptabilité et prépare les rapports financiers de l'ATM.",
  },
  {
    id: 8,
    nom: "DENISE",
    prenoms: "Miandrisoa",
    fonction: "Conseillère",
    photo: "/images/members/membre-08.png",
    bio: "Apporte son conseil et son expérience pour guider les décisions de l'association.",
  },
  {
    id: 9,
    nom: "HAMILY RAVAOHITA",
    prenoms: "Margueritte",
    fonction: "Conseillère",
    photo: "/images/members/membre-09.png",
    bio: "Contribue à l'orientation stratégique et au développement communautaire.",
  },
  {
    id: 10,
    nom: "MAHATOHAMBOLA",
    prenoms: "David",
    fonction: "Conseiller",
    photo: "/images/members/membre-10.png",
    bio: "Partage son expérience pour soutenir les projets de l'association.",
  },
  {
    id: 11,
    nom: "NTWALI MURHANDIKIRE",
    prenoms: "Gentil",
    fonction: "Partenaire Technique Digital",
    photo: "/images/members/gentil.png",
    bio: "AI Solutions Specialist • Digital Innovation for Development. Basé à Bukavu (RDC), disponible pour collaboration à distance mondiale. Développeur de la plateforme ATM Madagascar.",
    contact: "+243 977 374 844",
    email: "ntwalimurhandikire@gmail.com",
  },
];