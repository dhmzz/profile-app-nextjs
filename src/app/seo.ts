// Single source for everything search engines and link previews read about the site.
export const SITE_URL = "https://dhimaz.today";
export const SITE_NAME = "Dhimaz";
export const FULL_NAME = "Dhimaz Nur Ramadhan";
export const JOB_TITLE = "Full-Stack Developer";

export const TITLE = `${FULL_NAME} | ${JOB_TITLE}`;
export const DESCRIPTION = `${FULL_NAME} (Dhimaz) is a Full-Stack Developer based in Malang, Indonesia. Portfolio of enterprise web applications built with .NET, NestJS, Vue.js, and SQL Server.`;

export const SOCIALS = [
  "https://www.linkedin.com/in/dhimaznurramadhan/",
  "https://www.instagram.com/dhimaznurramadhann/",
];

// schema.org Person: what Google uses for the name search "knowledge" result.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: FULL_NAME,
  alternateName: ["Dhimaz", "Dhimaz Nur Ramadhan"],
  url: SITE_URL,
  image: `${SITE_URL}/images/PHOTO.jpg`,
  jobTitle: JOB_TITLE,
  description: DESCRIPTION,
  homeLocation: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Malang", addressCountry: "ID" },
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Binus University" },
  knowsAbout: [
    "Full-stack web development",
    ".NET",
    "NestJS",
    "Vue.js",
    "React",
    "Next.js",
    "TypeScript",
    "SQL Server",
    "PostgreSQL",
  ],
  sameAs: SOCIALS,
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${FULL_NAME} — Portfolio`,
  alternateName: SITE_NAME,
  inLanguage: "en",
  publisher: { "@id": `${SITE_URL}/#person` },
};
