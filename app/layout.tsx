export const metadata = {
  title: "Milledge Intelligence",
  description: "For steel buyers who want to outmaneuver markets, not out muscle them.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Calendly popup CSS (prevents the invisible overlay/freeze) */}
        <link
          id="calendly-widget-css"
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
