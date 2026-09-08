import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fisio Fiasmed | Centre de fisioteràpia a Vilassar de Mar",
  description:
    "Fisioteràpia especialitzada, esportiva, sòl pelvià, podologia, readaptació i entrenament personal a Vilassar de Mar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca">
      <body>{children}</body>
    </html>
  );
}
