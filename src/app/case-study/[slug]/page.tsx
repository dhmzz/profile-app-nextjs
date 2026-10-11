import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyPage from "@/components/CaseStudyPage";
import { caseStudies, caseStudyPath, getCaseStudy } from "@/data/case-studies";
import { FULL_NAME, SITE_URL } from "../../seo";

type Props = { params: Promise<{ slug: string }> };

// Only the studies in src/data/case-studies exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};

  const title = `${study.title}: Case Study | ${FULL_NAME}`;
  const path = caseStudyPath(study.slug);

  return {
    title,
    description: study.summary,
    alternates: { canonical: path },
    openGraph: { type: "article", url: path, title, description: study.summary, authors: [FULL_NAME] },
    twitter: { card: "summary_large_image", title, description: study.summary },
  };
}

export default async function Page({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${study.title}: Case Study`,
    description: study.summary,
    url: `${SITE_URL}${caseStudyPath(study.slug)}`,
    image: study.cover ? `${SITE_URL}${study.cover.src}` : undefined,
    author: { "@id": `${SITE_URL}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
      <CaseStudyPage study={study} />
    </>
  );
}
