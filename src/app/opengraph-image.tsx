import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Tanmay Bhosale | Graphic Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#0a0a0a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold accent line top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#F5C400",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          {/* TB Monogram */}
          <div
            style={{
              fontSize: "120px",
              fontWeight: "900",
              letterSpacing: "-4px",
              display: "flex",
            }}
          >
            <span style={{ color: "#F5C400" }}>T</span>
            <span style={{ color: "#ffffff" }}>B</span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "48px",
              fontWeight: "700",
              color: "#ffffff",
              letterSpacing: "8px",
              textTransform: "uppercase",
            }}
          >
            TANMAY BHOSALE
          </div>

          {/* Gold divider */}
          <div
            style={{
              width: "80px",
              height: "2px",
              background: "#F5C400",
            }}
          />

          {/* Title */}
          <div
            style={{
              fontSize: "24px",
              color: "#999999",
              letterSpacing: "6px",
              textTransform: "uppercase",
            }}
          >
            GRAPHIC DESIGNER
          </div>
        </div>

        {/* Gold accent line bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "#F5C400",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
