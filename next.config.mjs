/** @type {import('next').NextConfig} */
const nextConfig = {
  // Exportació estàtica: `next build` genera la web sencera a la carpeta `out`,
  // llesta per servir des de qualsevol hosting de fitxers estàtics.
  output: "export",
  reactStrictMode: true,
  images: {
    // L'optimització d'imatges de Next requereix un servidor, incompatible amb
    // l'export estàtic. La web ja fa servir <img> amb imatges del CDN extern,
    // així que desactivem l'optimització per a un export net.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.squarespace-cdn.com",
      },
    ],
  },
};

export default nextConfig;
