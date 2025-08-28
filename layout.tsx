export const metadata = {
  title: "Milledge Intelligence",
  description: "Deal‑closing intelligence for flat‑rolled steel buyers",
};

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
