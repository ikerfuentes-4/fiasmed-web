// Fotografia real de Fisio Fiasmed, localitzada al CDN del seu propi lloc
// (fisiofiasmed.com, encara servit des de Squarespace). Cap imatge d'stock.
const CDN = "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e";

export const media = {
  logoBlack: `${CDN}/4c6acc18-bb1c-419f-93dc-91e313f16eb5/FISIO+FIASMED+BLACK+%28Sin+fondo%29.png?format=1500w`,

  // Espai / centre
  spaceExterior: `${CDN}/c3faedb6-3240-4b59-b79d-fdfca2b67f4c/IMG_3676.jpg?format=2500w`,
  spaceInterior: `${CDN}/538d37af-56ed-4418-94bb-0f2eced89060/IMG_3671.jpg?format=2500w`,
  spaceWide: `${CDN}/3bda5b78-ff4b-4979-88b2-c4c83c098fa7/fisioterapia+vilassar.jpg?format=2500w`,
  spaceEntrance: `${CDN}/8dd84bf7-6af8-416f-a96a-a2187f245167/IMG_3382.jpg?format=2500w`,

  // Mans / tractament (hero + humanitat + "Entendre")
  handsTreatment1: `${CDN}/2a63b55c-e020-4312-bec9-feeea9f9b86f/WhatsApp+Image+2025-05-15+at+11.26.17.jpeg?format=2500w`,
  handsTreatment2: `${CDN}/bf6c0f71-ab32-47d2-bce9-3ec7c8dbebd2/WhatsApp+Image+2025-05-15+at+11.23.50.jpeg?format=2500w`,
  massage: `${CDN}/68911824-a637-4323-b880-1b49f214b601/WhatsApp+Image+2025-05-19+at+12.14.09.jpeg?format=2500w`,
  dryNeedling: `${CDN}/5fb5cf2c-ece8-4ca2-a979-68a793c74a0c/puncio+seca.jpg?format=2000w`,
  neuromodulation: `${CDN}/6f62562e-60be-4eab-b427-974ae6eb441d/WhatsApp+Image+2025-05-19+at+12.12.08.jpeg?format=2000w`,
  electropuncture: `${CDN}/56018519-c3e3-45c8-acba-ac44e83c8066/electropuncio.jpg?format=2000w`,
  neurodynamics: `${CDN}/3800702f-06af-4f47-aa27-cc7b6369924e/neurodinamia.jpg?format=2000w`,
  osteopathicManipulation: `${CDN}/adac6201-7f9e-4ef0-a378-0d35389767df/WhatsApp+Image+2025-05-19+at+12.14.29.jpeg?format=2000w`,
  therapeuticExercise: `${CDN}/84efa07f-3fd1-4440-864f-3f26090b1fda/WhatsApp+Image+2025-05-19+at+12.13.07.jpeg?format=2000w`,

  // Equip / tecnologia ("Recuperar")
  cryotherapy: `${CDN}/9e8ce401-1668-4d14-b7d1-6c1ad3b6c6de/cryopush+insta.jpg?format=2000w`,
  diathermy: `${CDN}/126eb809-31f2-4e64-896e-452928402495/diatermia+indiba.jpg?format=2000w`,
  ultrasoundTherapy: `${CDN}/7d57eb08-d8e9-491f-bba9-ebf0edc5fd98/WhatsApp+Image+2025-05-15+at+13.08.52.jpeg?format=2000w`,
  shockwaveTherapy: `${CDN}/1eaa6083-681d-4f08-a0ce-d4c2fa50a8bb/WhatsApp+Image+2025-05-15+at+13.08.28.jpeg?format=2000w`,
  pressotherapy: `${CDN}/f2a98a0b-d6d2-4434-a538-cca722a6bae1/IMG_0458.jpeg?format=2000w`,

  // Serveis / moviment ("Tornar")
  sportsPhysio: `${CDN}/bbd2ace7-4a7f-4fe1-b922-5219334c7cf1/FISIOTERAPIA+ESPORTIVA.jpg?format=2500w`,
  pregnancy: `${CDN}/aafc6833-0f72-4eb1-941e-00a16aec1b8f/fisio+embaras.jpg?format=2500w`,
  podiatrySport: `${CDN}/93b37ba1-f0ec-4d22-8bfc-7aad0d6f5dc9/podologia+esportiva.jpeg?format=2500w`,
  homeVisit: `${CDN}/b6f8a6c0-0fb2-4f9f-a840-484422f66615/servei+fisio+a+domicili.jpg?format=2000w`,
  bruxism: `${CDN}/795e0945-01d1-4dd8-a69d-ccce6cd01cd5/fisio+bruxisme.jpg?format=2000w`,

  // Confiança
  collegiBadge: `${CDN}/dc6da00a-8fc9-4c3d-8b45-86e76c876e4a/collegi+fisio+catalunya.jpg?format=500w`,
} as const;

// Franja "Darrere de cada recuperació hi ha persones" — mescla d'espai, mans i moviment.
export const humanStrip = [
  { src: media.handsTreatment2, alt: "Sessió de fisioteràpia a la sala de tractament" },
  { src: media.therapeuticExercise, alt: "Pacient fent exercici terapèutic guiat" },
  { src: media.spaceInterior, alt: "Espai del centre Fisio Fiasmed" },
  { src: media.dryNeedling, alt: "Tècnica de punció seca" },
  { src: media.sportsPhysio, alt: "Fisioteràpia esportiva en moviment" },
  { src: media.spaceExterior, alt: "Entrada del centre a Vilassar de Mar" },
];
