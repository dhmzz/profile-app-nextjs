import { ImageResponse } from "next/og";
import { caseStudies, getCaseStudy } from "@/data/case-studies";
import { FULL_NAME } from "../../seo";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

// Link preview card for a case study, in the same black/white look as the site's own card.
export default async function OpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000",
          color: "#fff",
          padding: 64,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, letterSpacing: 2 }}>
          <span>DHIMAZ.TODAY</span>
          <span style={{ color: "#808080" }}>{study ? `CASE STUDY · ${study.year}` : "CASE STUDY"}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, lineHeight: 0.95, letterSpacing: -4 }}>
            {(study?.title ?? "Case study").toUpperCase()}
          </div>
          <div style={{ fontSize: 34, marginTop: 32, color: "#808080" }}>
            {study ? `${FULL_NAME} · ${study.kind}` : FULL_NAME}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
