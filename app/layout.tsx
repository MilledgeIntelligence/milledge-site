export const metadata = {
  title: "Milledge Intelligence",
  description: "For steel buyers who want to outmaneuver markets, not out muscle them.",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
