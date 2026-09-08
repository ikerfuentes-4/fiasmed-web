import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fisio Fiasmed | Centre de fisioteràpia a Vilassar de Mar",
  description:
    "Fisioteràpia especialitzada, esportiva, sòl pelvià, podologia, readaptació i entrenament personal a Vilassar de Mar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ca" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
