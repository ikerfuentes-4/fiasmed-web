# Fisio Fiasmed — Web

Web corporativa de **Fisio Fiasmed** (Vilassar de Mar), construïda amb Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 i animacions amb [`motion`](https://motion.dev/).

El projecte està configurat per a **exportació estàtica**: `next build` genera la web sencera com a fitxers HTML/CSS/JS dins la carpeta `out/`, llesta per servir des de qualsevol hosting de fitxers estàtics (Netlify, Vercel static, GitHub Pages, Hostinger, un Nginx, etc.) sense necessitat d'un servidor Node.

## Requisits

- Node.js 18.18 o superior
- npm

## Posada en marxa

```bash
npm install      # instal·la dependències
npm run dev      # servidor de desenvolupament a http://localhost:3000
```

## Scripts

| Script          | Descripció                                                       |
| --------------- | ---------------------------------------------------------------- |
| `npm run dev`   | Servidor de desenvolupament amb recàrrega en calent.             |
| `npm run build` | Build de producció → genera l'export estàtic a `out/`.           |
| `npm run start` | Serveix el build de producció (no s'usa amb l'export estàtic).   |
| `npm run lint`  | Comprovació amb ESLint.                                          |

## Exportació estàtica

La configuració clau viu a [`next.config.mjs`](next.config.mjs):

```js
const nextConfig = {
  output: "export",          // genera la web a out/
  images: { unoptimized: true } // sense optimització d'imatges (requereix servidor)
};
```

En fer `npm run build`, Next.js prerenderitza totes les rutes a HTML estàtic. Les pàgines dinàmiques (`/equip/[slug]`, `/serveis/[slug]`, `/tecniques/[slug]`) es generen a partir de `generateStaticParams()`, que llegeix les dades de `src/lib/`. El resultat són ~46 pàgines HTML més `sitemap.xml`, `robots.txt` i els assets de `_next/`.

### Consideracions de l'export estàtic

- **Imatges**: s'usa `<img>` amb fotografies servides des d'un CDN extern; `images.unoptimized: true` evita l'optimització de `next/image`, que requeriria un servidor.
- **Rutes de metadades**: `src/app/sitemap.ts` i `src/app/robots.ts` porten `export const dynamic = "force-static"` perquè es generin com a fitxers durant el build.
- **Rutes dinàmiques**: totes tenen `generateStaticParams()`; afegir un nou membre de l'equip, servei o tècnica a `src/lib/` i tornar a fer `build` en genera la pàgina automàticament.
- Funcionalitats que necessiten servidor (cookies, redireccions, Server Actions, ISR, route handlers que llegeixen la petició) **no** es poden fer servir mentre es mantingui l'export estàtic.

## Desplegament

1. `npm run build`
2. Puja el contingut de la carpeta `out/` al teu hosting estàtic.

Amb `trailingSlash` desactivat (per defecte), un servidor com Nginx necessita resoldre les rutes cap als fitxers `.html` corresponents. Molts hostings estàtics (Netlify, Vercel, Cloudflare Pages) ho fan automàticament.

## Estructura del projecte

```
src/
  app/                 Rutes (App Router)
    page.tsx           Pàgina d'inici
    serveis/           Llistat i detall de serveis
    tecniques/         Llistat i detall de tècniques
    equip/[slug]/      Fitxa de cada professional
    sitemap.ts         Sitemap (estàtic)
    robots.ts          robots.txt (estàtic)
  components/          Components d'UI i animacions
  lib/                 Dades del lloc (serveis, tècniques, equip, etc.)
```

## Dades del lloc

El domini de producció i les dades de contacte es configuren a [`src/lib/site.ts`](src/lib/site.ts). El catàleg de serveis, tècniques i equip viu a la resta de fitxers de `src/lib/`.
