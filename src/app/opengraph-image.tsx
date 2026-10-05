import { ImageResponse } from "next/og";
import { FULL_NAME, JOB_TITLE } from "./seo";

export const alt = `${FULL_NAME} — ${JOB_TITLE}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Link preview card (WhatsApp, LinkedIn, Slack, X): same black/white look as the site.
export default function OpengraphImage() {
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
          <span style={{ color: "#808080" }}>PORTFOLIO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 150, fontWeight: 800, lineHeight: 0.9, letterSpacing: -6 }}>DHIMAZ</div>
          <div style={{ fontSize: 44, marginTop: 32 }}>{FULL_NAME}</div>
          <div style={{ fontSize: 34, marginTop: 8, color: "#808080" }}>{JOB_TITLE}</div>
        </div>
      </div>
    ),
    size,
  );
}
