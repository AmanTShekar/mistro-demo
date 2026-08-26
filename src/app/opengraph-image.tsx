import { ImageResponse } from "next/og";

export const alt = "Mistro Munnar — boutique resort and cottages in Munnar, Kerala";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#F4F6F4",
          padding: "72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -140,
            width: 520,
            height: 520,
            borderRadius: 9999,
            backgroundColor: "#E2EBDF",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -220,
            left: -160,
            width: 460,
            height: 460,
            borderRadius: 9999,
            backgroundColor: "#E9EFEB",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 9999,
              backgroundColor: "#55704C",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#F4F6F4">
              <path d="m3 19 6.5-11L13 14l2.5-4L21 19Z" />
            </svg>
          </div>
          <p
            style={{
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.32em",
              color: "#55704C",
              margin: 0,
            }}
          >
            MISTRO · MUNNAR
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <p
            style={{
              fontSize: 84,
              lineHeight: 1.05,
              color: "#23302A",
              maxWidth: 880,
              margin: 0,
            }}
          >
            Wake up above the clouds.
          </p>
          <p style={{ fontSize: 28, color: "#5B6B70", margin: 0 }}>
            Valley-view rooms & private tea-garden cottages in Munnar, Kerala.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #DEE6DE",
            paddingTop: 28,
          }}
        >
          <p style={{ fontSize: 22, color: "#5B6B70", margin: 0 }}>
            Stays from ₹3,499 / night · Enquire on WhatsApp
          </p>
          <p style={{ fontSize: 22, fontWeight: 700, color: "#55704C", margin: 0 }}>
            Rated 4.9 by guests
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
