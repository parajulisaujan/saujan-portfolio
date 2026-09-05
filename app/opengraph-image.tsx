import { ImageResponse } from "next/og";
import { site } from "@/data/site";
export const alt =
  "Saujan Parajuli — Computer Science Graduate — AI, Data & Software Engineering";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f4f6fa",
        color: "#182332",
        padding: "70px 80px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 24,
        }}
      >
        <span>sp.</span>
        <span>saujanparajuli.com</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: 82, fontWeight: 700, letterSpacing: -4 }}>
          {site.name}
        </span>
        <span style={{ fontSize: 30, marginTop: 22 }}>
          Computer Science Graduate
        </span>
        <span style={{ fontSize: 30, marginTop: 12 }}>
          AI · Data · Software Engineering
        </span>
      </div>
      <div style={{ width: "100%", height: 3, background: "#294fa0" }} />
    </div>,
    size,
  );
}
