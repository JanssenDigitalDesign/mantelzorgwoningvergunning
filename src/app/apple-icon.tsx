import { ImageResponse } from "next/og";

// Generated from this site's own BrandIcon (see components/BrandMark.tsx)
// so the favicon matches the header mark and brand palette exactly,
// instead of every site sharing one generic icon.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0e1513",
          color: "#3e8e82",
          borderRadius: 36,
        }}
      >
        <svg width="124" height="124" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 20V11l8-6 8 6v9" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 20h16" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 17.5c-2.4-1.5-3.6-2.8-3.6-4.3a2 2 0 0 1 3.6-1.2 2 2 0 0 1 3.6 1.2c0 1.5-1.2 2.8-3.6 4.3z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </div>
    ),
    size
  );
}
