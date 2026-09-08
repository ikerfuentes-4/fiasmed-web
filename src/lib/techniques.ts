export type Technique = {
  slug: string;
  name: string;
  whatIsIt: string;
  whatFor: string[];
  summary: string;
};

export const techniques: Technique[] = [
  {
    slug: "massatge-terapeutic",
    name: "Massatge terapèutic",
    whatIsIt: "Una tècnica de manipulació manual que es fa servir per alleujar el dolor, reduir la tensió muscular, millorar la circulació i promoure la relaxació general del cos.",
    whatFor: [
      "Redueix la tensió i els nusos musculars, alleujant el dolor i millorant la mobilitat.",
      "Estimula la circulació sanguínia i l'oxigenació dels teixits.",
      "Redueix l'estrès i l'ansietat amb una relaxació profunda.",
      "Accelera la recuperació de lesions esportives i problemes musculoesquelètics.",
    ],
    summary: "A diferència d'un massatge de relaxació, el massatge terapèutic treballa problemes concrets: contractures, lesions esportives, dolor crònic i problemes posturals.",
  },
  {
    slug: "puncio-seca",
    name: "Punció seca",
    whatIsIt: "La introducció d'una agulla fina en punts concrets del múscul per alliberar la tensió i reduir el dolor, especialment eficaç en contractures profundes i punts gallet.",
    whatFor: [
      "Redueix el dolor muscular de forma immediata.",
      "Allibera tensió i millora la mobilitat.",
      "Afavoreix la regeneració del teixit muscular.",
      "Millora la circulació sanguínia de la zona.",
    ],
    summary: "Pot produir una petita punxada i una contracció involuntària del múscul: és normal i indica l'alliberament del punt gallet. S'aplica de manera segura i personalitzada.",
  },
  {
    slug: "manipulacio-osteopatica",
    name: "Manipulació osteopàtica",
    whatIsIt: "Una teràpia manual global —estructural, visceral i craniana— que busca restablir l'equilibri i la mobilitat del cos.",
    whatFor: [
      "Alleuja el dolor muscular i articular.",
      "Millora la postura.",
      "Redueix l'estrès i equilibra el sistema nerviós.",
      "Ajuda amb problemes digestius i mal de cap.",
    ],
    summary: "Combina tècniques estructurals per a lesions musculoesquelètiques, viscerals per a la funció dels òrgans i cranials per a l'equilibri general, sempre amb un tractament personalitzat.",
  },
  {
    slug: "exercici-terapeutic",
    name: "Exercici terapèutic",
    whatIsIt: "L'ús de moviments i exercicis específics, guiats i progressius, per tractar, prevenir i rehabilitar diverses afeccions físiques.",
    whatFor: [
      "Recupera força, control i estabilitat.",
      "Redueix el risc de noves lesions.",
      "Millora la funció i l'autonomia en el dia a dia.",
    ],
    summary: "El pla d'exercicis es dissenya de manera progressiva, adaptat al teu cas i al teu moment de recuperació.",
  },
  {
    slug: "neuromodulacio",
    name: "Neuromodulació",
    whatIsIt: "L'aplicació d'estímuls elèctrics de baixa intensitat sobre nervis perifèrics o músculs, de forma percutània o no percutània.",
    whatFor: [
      "Redueix el dolor crònic i neuropàtic.",
      "Recupera el control motor.",
      "Millora la connexió neuromuscular.",
      "Trenca patrons de dolor persistent.",
    ],
    summary: "La forma no percutània aplica elèctrodes sobre la pell, ideal per a dolor generalitzat; la percutània fa servir agulles per a una estimulació nerviosa directa i més localitzada.",
  },
  {
    slug: "electropuncio",
    name: "Electropunció",
    whatIsIt: "Combina l'acupuntura tradicional amb l'estimulació elèctrica de baixa intensitat per potenciar l'efecte analgèsic, antiinflamatori i neuromuscular.",
    whatFor: [
      "Redueix el dolor i la inflamació.",
      "Millora el reg sanguini.",
      "Estimula la relaxació muscular profunda.",
      "Millora la funció motora i el control neuromuscular.",
    ],
    summary: "Pot generar una sensació de contracció lleu i controlada, però no és una tècnica dolorosa; molts pacients noten alleujament immediat després de la sessió.",
  },
  {
    slug: "neurodinamia-snp",
    name: "Neurodinàmia SNP",
    whatIsIt: "L'estudi de com es mouen els nervis dins dels teixits i com les restriccions d'aquest moviment poden causar dolor i disfunció.",
    whatFor: [
      "Allibera tensió del sistema nerviós perifèric.",
      "Millora el moviment i redueix el dolor irradiat.",
      "Complementa altres tècniques manuals i d'exercici.",
    ],
    summary: "Especialment útil quan el dolor no ve només del múscul o l'articulació, sinó de restriccions en el recorregut del propi nervi.",
  },
  {
    slug: "ecografia",
    name: "Ecografia",
    whatIsIt: "Una tècnica d'imatge no invasiva que utilitza ones d'ultrasò per visualitzar en temps real músculs i teixits tous.",
    whatFor: [
      "Precisa el diagnòstic.",
      "Guia amb exactitud altres tècniques (punció seca, electropunció...).",
      "Permet fer seguiment de l'evolució d'una lesió.",
    ],
    summary: "No emet radiació i no és dolorosa: és una eina de suport clínic, no només un tractament en si mateix.",
  },
  {
    slug: "crioterapia",
    name: "Crioteràpia",
    whatIsIt: "L'exposició d'una part del cos a temperatures extremadament baixes, de forma local o general, amb finalitats terapèutiques.",
    whatFor: [
      "Disminueix el dolor i la sensibilitat nerviosa.",
      "Redueix la inflamació i l'edema.",
      "Millora la mobilitat articular.",
      "Reactiva la circulació un cop retirat el fred.",
    ],
    summary: "Útil en lesions agudes, postoperatoris i recuperació esportiva; a Fiasmed s'aplica amb equipament professional com el Cryopush.",
  },
  {
    slug: "diatermia",
    name: "Diatèrmia",
    whatIsIt: "Una tècnica que utilitza corrents d'alta freqüència per generar calor de manera controlada als teixits profunds.",
    whatFor: [
      "Redueix el dolor i la inflamació.",
      "Accelera la curació dels teixits.",
      "Millora la mobilitat i la flexibilitat.",
      "Ajuda a reabsorbir edemes i hematomes.",
    ],
    summary: "És una tècnica no invasiva, indolora i molt segura, també indicada en recuperació postpart i postoperatoris.",
  },
  {
    slug: "ones-de-xoc",
    name: "Ones de xoc",
    whatIsIt: "Ones acústiques d'alta intensitat que s'apliquen sobre una zona lesionada o dolorosa.",
    whatFor: [
      "Redueix el dolor de forma progressiva.",
      "Estimula la regeneració natural dels teixits.",
      "Millora la mobilitat de la zona afectada.",
      "Trenca calcificacions i adherències.",
    ],
    summary: "Una tècnica segura i avalada científicament, amb resultats visibles en poques sessions: tendinitis, fascitis plantar o punts gallet en són alguns dels casos habituals.",
  },
  {
    slug: "pressoterapia",
    name: "Pressoteràpia",
    whatIsIt: "Un tractament que utilitza pressió d'aire controlada per millorar la circulació sanguínia i limfàtica.",
    whatFor: [
      "Redueix la inflor i la sensació de pesadesa.",
      "Millora el retorn venós.",
      "Afavoreix la recuperació muscular.",
    ],
    summary: "Molt utilitzada com a complement d'altres tècniques, especialment en recuperació postpart i esportiva.",
  },
  {
    slug: "parafina",
    name: "Parafina",
    whatIsIt: "Un hidrocarbur que es fon i s'aplica sobre la pell per generar calor superficial.",
    whatFor: [
      "Hidrata profundament la pell.",
      "Relaxa articulacions i teixits tous.",
      "Millora la flexibilitat abans d'altres tècniques.",
    ],
    summary: "Especialment agradable en mans i peus, on el fred i la rigidesa articular es noten més.",
  },
  {
    slug: "ultraso",
    name: "Ultrasò",
    whatIsIt: "Ones sonores d'alta freqüència, no perceptibles per l'oïda, que es transmeten mitjançant un capçal amb gel conductor.",
    whatFor: [
      "Alleuja el dolor muscular i articular.",
      "Redueix la inflamació.",
      "Accelera els processos de recuperació.",
    ],
    summary: "Genera un efecte tèrmic (augmenta la temperatura local i l'elasticitat dels teixits) i un efecte mecànic (afavoreix la regeneració cel·lular). El pacient només nota una lleugera calor o pressió suau.",
  },
  {
    slug: "magnetoterapia",
    name: "Magnetoteràpia",
    whatIsIt: "L'ús de camps magnètics estàtics o polsants per influir sobre els teixits i les cèl·lules del cos.",
    whatFor: [
      "Estimula la regeneració dels teixits.",
      "Redueix la inflamació.",
      "Complementa la recuperació de lesions cròniques.",
    ],
    summary: "Una tècnica indolora que s'utilitza sovint com a suport a altres tractaments actius.",
  },
  {
    slug: "electroterapia",
    name: "Electroteràpia",
    whatIsIt: "L'ús de corrents elèctrics, com TENS i EMS, per influir sobre el sistema nerviós i muscular.",
    whatFor: [
      "Redueix el dolor (TENS).",
      "Estimula i enforteix la musculatura (EMS).",
      "Complementa l'exercici terapèutic.",
    ],
    summary: "Una eina versàtil que s'adapta tant al control del dolor com al reforç muscular, segons l'objectiu del tractament.",
  },
];

export function getTechniqueBySlug(slug: string): Technique | undefined {
  return techniques.find((technique) => technique.slug === slug);
}
