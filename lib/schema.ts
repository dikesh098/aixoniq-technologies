export const SITE_URL = "https://aixoniqtechnologies.com";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Aixoniq Technologies",
    alternateName: "Aixoniq",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Aixoniq Technologies is an AI development company and software development company providing custom software, ERP, cybersecurity, cloud computing, and SEO related services.",
    knowsAbout: [
      "SEO services",
      "SEO related services",
      "Search Engine Optimization",
      "AI development",
      "Software development",
      "Cybersecurity",
      "Cloud computing",
      "ERP development",
    ],
    email: "aixoniqtechnologies@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gondia",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/company/aixoniq-technologies",
    ],
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: "Aixoniq Technologies",
    image: `${SITE_URL}/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gondia",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "Country", name: "India" },
    ],
    telephone: "",
    email: "aixoniqtechnologies@gmail.com",
    url: SITE_URL,
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Aixoniq Technologies",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function serviceSchema(service: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    description: service.description,
    url: `${SITE_URL}${service.path}`,
  };
}
