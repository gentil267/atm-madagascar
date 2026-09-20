export default function JsonLd() {
  const baseUrl = "https://atm-madagascar.vercel.app";

  // 🏛️ ORGANISATION ATM MADAGASCAR
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Association de Travail et de Mutualité",
    alternateName: "ATM Madagascar",
    url: baseUrl,
    logo: `${baseUrl}/images/logo/logo-atm.png`,
    image: `${baseUrl}/images/hero/hero-main.png`,
    description:
      "L'Association de Travail et de Mutualité (ATM) est une association malgache engagée dans la promotion de l'entraide, de la solidarité et du développement communautaire. Elle œuvre principalement en faveur des enfants et familles vulnérables, des femmes en situation de vulnérabilité et des personnes âgées sans soutien à Ranotsara Nord, Madagascar.",
    foundingDate: "2026-06-10",
    foundingLocation: {
      "@type": "Place",
      name: "Ranotsara Nord, District d'Iakora, Région Ihorombe, Madagascar",
    },
    founder: {
      "@type": "Person",
      name: "TSIAVELA Etienne",
      jobTitle: "Président Fondateur",
      image: `${baseUrl}/images/members/membre-01.png`,
      description: "Fondateur de la vision ATM depuis 2012",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ranotsara Nord",
      addressLocality: "Iakora",
      addressRegion: "Ihorombe",
      addressCountry: "MG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+261332339843",
        contactType: "customer service",
        availableLanguage: ["French", "Malagasy", "English"],
        areaServed: "MG",
      },
      {
        "@type": "ContactPoint",
        telephone: "+261343996860",
        contactType: "customer service",
        availableLanguage: ["French", "Malagasy", "English"],
      },
    ],
    email: "atm.association26@gmail.com",
    sameAs: [
      "https://www.facebook.com/atmmadagascar",
      "https://www.instagram.com/atmmadagascar",
      "https://www.linkedin.com/company/atm-madagascar",
    ],
    knowsAbout: [
      "Éducation",
      "Solidarité",
      "Développement communautaire",
      "Aide aux enfants vulnérables",
      "Soutien aux personnes âgées",
      "Autonomisation des femmes",
      "Protection de l'environnement",
      "Cantines scolaires",
      "Distribution de kits scolaires",
    ],
    nonprofitStatus: "NonprofitANBI",
    slogan: "Entraide • Solidarité • Développement",
  };

  // 🌐 SITE WEB
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ATM Madagascar — Entraide • Solidarité • Développement",
    alternateName: "ATM Madagascar",
    url: baseUrl,
    inLanguage: ["fr", "mg", "en"],
    publisher: {
      "@type": "NGO",
      name: "Association de Travail et de Mutualité",
    },
  };

  // 👤 PROFIL DU FONDATEUR
  const founderData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "TSIAVELA Etienne",
    jobTitle: "Président Fondateur — ATM Madagascar",
    image: `${baseUrl}/images/members/membre-01.png`,
    description:
      "Fondateur de la vision ATM depuis 2012. Engagé pour le développement de Ranotsara Nord et des populations vulnérables de Madagascar.",
    worksFor: {
      "@type": "NGO",
      name: "Association de Travail et de Mutualité",
      alternateName: "ATM Madagascar",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ranotsara Nord",
      addressRegion: "Ihorombe",
      addressCountry: "MG",
    },
    email: "eti6vela@gmail.com",
    telephone: "+261332339843",
  };

  // 👨‍💻 PROFIL DU PARTENAIRE TECHNIQUE DIGITAL (GENTIL)
  const techPartnerData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ntwali Murhandikire Gentil Nicolas",
    alternateName: "Gentil Ntwali",
    jobTitle: "IT & AI Engineer | Full-Stack Developer | AI Automation Specialist",
    image: `${baseUrl}/images/members/gentil.png`,
    description:
      "Informaticien diplômé et ingénieur en automatisation IA avec plus de 3 ans d'expérience dans le développement logiciel, l'intégration d'intelligence artificielle et les solutions digitales évolutives. Fondateur de OmniExec AI et KoneXAAfrica. Développeur de la plateforme officielle ATM Madagascar. Disponible pour des collaborations à distance dans le monde entier.",
    url: "https://ntwal.carrd.co",
    email: "ntwalimurhandikire@gmail.com",
    telephone: "+243977374844",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bukavu",
      addressCountry: "CD",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Full-Stack Development",
      "Python",
      "JavaScript",
      "Node.js",
      "React",
      "Flask",
      "OpenAI API Integration",
      "NLP",
      "AI Automation",
      "PostgreSQL",
      "MongoDB",
      "Cloud Deployment",
      "REST APIs",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "St. Lawrence University",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
    },
    worksFor: {
      "@type": "Organization",
      name: "WEB-INFONET Company",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kampala",
        addressCountry: "UG",
      },
    },
    sameAs: [
      "https://github.com/gentil267",
      "https://linkedin.com/in/ntwali-murhandikire",
      "https://ntwal.carrd.co",
    ],
    nationality: {
      "@type": "Country",
      name: "Democratic Republic of Congo",
    },
  };

  // 🧭 BREADCRUMB
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${baseUrl}/fr` },
      { "@type": "ListItem", position: 2, name: "À propos", item: `${baseUrl}/fr/about` },
      { "@type": "ListItem", position: 3, name: "Nos actions", item: `${baseUrl}/fr/actions` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${baseUrl}/fr/contact` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(founderData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(techPartnerData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}