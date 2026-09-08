// Proposta inicial de contingut per a "Què et passa?" — construïda a partir
// dels serveis i especialitats ja existents a src/lib/team.ts. Pensada perquè
// Fiasmed la revisi i l'ajusti; no és contingut mèdic definitiu.
export type BodyZoneId =
  | "cap-coll"
  | "espatlla-brac"
  | "esquena"
  | "pelvis"
  | "maluc-cuixa"
  | "genoll"
  | "turmell-peu"
  | "benestar";

export type BodyZone = {
  id: BodyZoneId;
  label: string;
  situations: string[];
  help: string;
  professionals: string[];
  service: string;
};

export const bodyZones: BodyZone[] = [
  {
    id: "cap-coll",
    label: "Coll i cap",
    situations: ["Dolor cervical i tensió", "Mal de cap tensional", "Bruxisme i dolor a la mandíbula"],
    help: "Teràpia manual, punció seca i tractament específic de l'ATM per alliberar tensió i recuperar mobilitat.",
    professionals: ["Edu Sogues"],
    service: "Fisioteràpia especialitzada",
  },
  {
    id: "espatlla-brac",
    label: "Espatlla i braç",
    situations: ["Dolor en moviment", "Lesió esportiva de colze o braç", "Pèrdua de mobilitat"],
    help: "Exercici terapèutic, ecografia musculoesquelètica i teràpia manual per recuperar força i recorregut.",
    professionals: ["Aleix Cirera", "Joan Riera"],
    service: "Fisioteràpia esportiva",
  },
  {
    id: "esquena",
    label: "Esquena i columna",
    situations: ["Dolor lumbar", "Ciàtica o dolor irradiat", "Tensió crònica i postura"],
    help: "Manipulació osteopàtica, neurodinàmia i punció seca per treballar l'origen del dolor, no només el símptoma.",
    professionals: ["Laia Muñoz", "Lucía Bernuz"],
    service: "Fisioteràpia especialitzada",
  },
  {
    id: "pelvis",
    label: "Pelvis i sòl pelvià",
    situations: ["Embaràs i postpart", "Dolor pèlvic", "Sòl pelvià i incontinència"],
    help: "Fisioteràpia uroginecològica amb un abordatge proper, pensada per a cada etapa: embaràs, part i postpart.",
    professionals: ["Laia Vernet"],
    service: "Sòl pelvià",
  },
  {
    id: "maluc-cuixa",
    label: "Maluc i cuixa",
    situations: ["Lesió muscular esportiva", "Readaptació després d'una lesió", "Dolor a l'entrenar"],
    help: "Readaptació esportiva i entrenament guiat per tornar a competir o entrenar amb seguretat.",
    professionals: ["Joan Riera"],
    service: "Readaptació esportiva",
  },
  {
    id: "genoll",
    label: "Genoll",
    situations: ["Lesió de lligament o menisc", "Dolor en córrer", "Recuperació postoperatòria"],
    help: "Readaptació progressiva, exercici terapèutic i ones de xoc per recuperar estabilitat i confiança.",
    professionals: ["Joan Riera", "Aleix Cirera"],
    service: "Fisioteràpia esportiva",
  },
  {
    id: "turmell-peu",
    label: "Turmell i peu",
    situations: ["Esquinç de turmell", "Fascitis plantar", "Dolor en caminar o córrer"],
    help: "Estudi biomecànic de la trepitjada i podologia esportiva per trobar l'origen del dolor a la base.",
    professionals: ["Eva Trillo"],
    service: "Podologia",
  },
  {
    id: "benestar",
    label: "Cos i benestar",
    situations: ["Estrès i benestar emocional", "Alimentació i inflamació", "Vull tornar a moure'm i no sé per on començar"],
    help: "T'acompanyem de manera integral: psicologia, nutrició i el criteri de tot l'equip per fer el primer pas.",
    professionals: ["Luisa Leizeriuc", "Nuria Mompo", "Andrea Artero"],
    service: "Acompanyament integral",
  },
];
