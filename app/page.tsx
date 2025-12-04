"use client";

import React from "react";

export default function Page() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "32px", marginBottom: "8px" }}>
          Milledge Intelligence
        </h1>
        <p style={{ fontSize: "16px", color: "#64748b" }}>
          Temporary test page – removing old Q4 banner and fixing deploy.
        </p>
      </div>
    </div>
  );
}
