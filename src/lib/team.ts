export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  initials: string;
  photo: string;
  credential: string;
  detail: string;
  education: string[];
};

export const team: TeamMember[] = [
  {
    slug: "andrea-artero", name: "Andrea Artero", role: "CEO i fundadora", initials: "AA",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/6f994339-9730-4587-b316-a4408e96e6ec/4.png?format=1000w",
    credential: "Fundadora de Fiasmed",
    detail: "Fiasmed neix de la meva passió per la salut, l'esport i, sobretot, per ajudar les persones a sentir-se millor. Sempre he cregut que darrere de cada lesió, cada dolor i cada objectiu hi ha una persona amb una història diferent. Per això, Fiasmed és un espai on les persones se senten escoltades, acompanyades i en bones mans. El projecte uneix fisioteràpia, moviment, entrenament i benestar amb un objectiu clar: ajudar cada persona a recuperar-se, cuidar-se, sentir-se més forta i gaudir d'una millor qualitat de vida.",
    education: ["Proximitat, tracte humà, professionalitat i confiança són els pilars de Fiasmed.", "Mou-te. Cuida't. Viu millor."],
  },
  {
    slug: "aleix-cirera", name: "Aleix Cirera", role: "Fisioterapeuta", initials: "AC",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/23dfb06f-19c7-4953-bff0-07cb26974c8f/6.png?format=1000w", credential: "Col. 15083",
    detail: "Fisioterapeuta especialitzat en fisioteràpia invasiva, ecografia musculoesquelètica, neuromodulació, electroneuroacupuntura, punció seca, columna, pelvis i readaptació esportiva.",
    education: ["Grau en Fisioteràpia per la Universitat de Vic.", "Grau en Ciències de l'Activitat Física i l'Esport per la Universitat de Vic.", "Postgrau en Fisioteràpia Invasiva impartit per Fisiocross Academy.", "Curs bàsic d'ecografia musculoesquelètica impartit per Fisiofocus.", "Neuromodulació ecoguiada impartida per Gerard Berenguer.", "Curs d'electroneuroacupuntura impartit per Juan Miñano.", "Curs de punció seca impartit per Fisioformación (nº2585).", "Curs de teràpia manual de columna i pelvis impartit per Fisiofocus.", "Curs de tendinopaties de membre inferior impartit per Qeres Formación.", "Curs d'Estabilització Dinàmica Global I-II (DNS) impartit per l'Escola de Praga.", "Curs de biomecànica avançada del peu i la marxa impartit per Reevolution Athletics.", "Curs de sistemes energètics impartit per Reevolution Athletics.", "Curs d'entrenament de la velocitat absoluta impartit per EXOS."],
  },
  {
    slug: "joan-riera", name: "Joan Riera", role: "Fisioterapeuta", initials: "JR",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/d97a5aae-7151-4906-8ead-471e4f837bf0/fi2.png?format=1000w", credential: "Col. 14469",
    detail: "Fisioterapeuta i readaptador esportiu amb experiència hospitalària i esportiva d'alt rendiment.",
    education: ["Grau en Fisioteràpia.", "Formació en punció seca i tractament miofascial.", "Màster en readaptació esportiva.", "Fisioterapeuta a l'Hospital Universitari Vall d'Hebron fins al 2021, en àrees osteoarticular, cremats i neurologia.", "Fisioterapeuta i readaptador esportiu al RCD Espanyol de Barcelona, en categories base i primers equips masculí i femení.", "Fisioteràpia invasiva: tècnica EPI®.", "Neuromodulació percutània ecoguiada.", "Ecografia."],
  },
  {
    slug: "laia-munoz", name: "Laia Muñoz", role: "Fisioterapeuta i osteòpata", initials: "LM",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/6828863a-5e07-4f79-ad09-c703f81a67c6/4+%281%29+%281%29.png?format=1000w", credential: "Col. 6522",
    detail: "Fisioterapeuta i osteòpata amb una mirada clínica àmplia, especialment vinculada al raquis, l'ATM, la ginecologia i l'ecografia.",
    education: ["Diplomatura de Fisioteràpia a la Universitat Ramon Llull.", "Introducció al mètode Feldenkrais.", "Reequilibració neuromotriu del raquis.", "Osteòpata C.O. per l'Escola d'Osteopatia de Barcelona (E.O.B.).", "Abordatge clínic i terapèutic del pacient vertiginós i inestable.", "Endocrinologia en ginecologia a l'Escola E.C.O. Barcelona.", "Enfocament osteopàtic dels trastorns de l'ATM a l'E.O.B. Barcelona.", "Formació continuada en obstetrícia a ECO Barcelona.", "Fisioteràpia i osteopatia uroginecològica.", "Ecografia."],
  },
  {
    slug: "edu-sogues", name: "Edu Sogues", role: "Fisioterapeuta", initials: "ES",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/d482e320-7514-4145-997a-21c8d643fd4a/5+%281%29.png?format=1000w", credential: "Col. 9191",
    detail: "Fisioterapeuta especialitzat en exercici terapèutic, dolor, articulació temporomandibular i tractament del síndrome de dolor miofascial.",
    education: ["Exercici terapèutic i dolor.", "Tècniques manipulatives i miotensives.", "Valoració i tractament de l'ATM.", "Fisioteràpia conservadora i invasiva del síndrome de dolor miofascial.", "Acupuntura zonal.", "Mètode POLD.", "Neurodinàmica i mobilitzacions del sistema nerviós perifèric.", "Quiromassatge."],
  },
  {
    slug: "laia-vernet", name: "Laia Vernet", role: "Fisioterapeuta de sòl pelvià", initials: "LV",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/cdc23d62-9d70-423a-bc2d-878ebdc83afc/6+%281%29.png?format=1000w", credential: "Col. 8389",
    detail: "Fisioterapeuta especialitzada en sòl pelvià, ginecologia, obstetrícia, salut de la dona, embaràs, postpart i lactància.",
    education: ["Màster en Entrenament, Nutrició i Salut de la Dona (ENFAF).", "Diplomatura en Fisioteràpia per la Universitat Ramon Llull - Blanquerna.", "Postgrau de Fisioteràpia en Ginecologia i Obstetrícia per la Universitat Europea de Madrid.", "Curs de Peripart a l'Escola Universitària Gimbernat.", "Curs d'abdominals, respiració i postura segons el concepte Mézières.", "Experta en somatitzacions pel mètode FISOMÁTICA.", "Fisioteràpia en pelviperineologia (SEFIP).", "Teràpia manual i tractament del dolor pèlvic crònic.", "Fisioteràpia en l'embaràs i el postpart, lactància i nutrició del nadó.", "Tractament de punts gallet i punció seca."],
  },
  {
    slug: "lucia-bernuz", name: "Lucía Bernuz", role: "Fisioterapeuta, osteòpata i osteòpata pediàtrica", initials: "LB",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/18fc3e15-ca6b-41b2-9dc4-5a727223872e/1.png?format=1000w", credential: "Col. 9556",
    detail: "Fisioterapeuta i osteòpata especialitzada en dolor crònic, teràpia fascial, cicatrius, postoperatoris, ATM, sistema digestiu i atenció pediàtrica.",
    education: ["Diplomada en Fisioteràpia per la Universitat Rey Juan Carlos I de Madrid.", "CO i màster en Osteopatia Estructural per l'Escola d'Osteopatia de Madrid (EOM).", "Tècnica Superior en Animació d'Activitats Físic Esportives (TAFAD).", "Curs SNA Integratiu i Dolor Crònic.", "Tècniques de mobilització fascial i punció seca.", "Pilates sòl.", "Experta en el mètode Fisiomàtica i somatitzacions.", "Teràpia fascial, dolor crònic i osteopatia especialitzada en dolor somàtic.", "Especialitzada en cicatrius, postoperatori, ATM i disfuncions del sistema digestiu.", "Osteopatia pediàtrica: son, còlics del lactant, succió, plagiocefàlies i torticoli."],
  },
  {
    slug: "eva-trillo", name: "Eva Trillo", role: "Podòloga", initials: "ET",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/32ee71d8-fdff-4790-8e0f-d796435da3e6/7.jpg?format=1000w", credential: "Col. 838081109",
    detail: "Podòloga amb formació quirúrgica i ortopèdica, i formació continuada en l'àmbit de la podologia.",
    education: ["Diplomada en Podologia per la F.U.B. (UAB).", "Postgrau en cures i principis quirúrgics per la Universitat de Barcelona.", "Postgrau en ortopèdia per la UIC.", "Cursos i formació continuada presencial i online del Col·legi Oficial de Podòlegs de Catalunya."],
  },
  {
    slug: "nuria-mompo", name: "Nuria Mompo", role: "Nutricionista - PNI", initials: "NM",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/04a3b5a8-1a7c-495c-aea6-bce2b8398f2a/WhatsApp+Image+2025-05-21+at+16.31.39.jpeg?format=1000w", credential: "Formació sanitària i PNI",
    detail: "Nutricionista amb una mirada integrativa basada en la psiconeuroimmunologia i la salut digestiva.",
    education: ["Llicenciatura en Odontologia per la Universitat de Barcelona.", "Màster en formació del professorat en cicles formatius de sanitat per la Universitat de Barcelona.", "Postgrau en Periodòncia a la SCOE.", "Màster en Psiconeuroimmunologia a Kenzen Formació i l'Institut Xavi Verdaguer.", "Grau Superior de tècnic superior en dietètica i nutrició a Linkia FP."],
  },
  {
    slug: "luisa-leizeriuc", name: "Luisa Leizeriuc", role: "Psicòloga", initials: "LL",
    photo: "https://images.squarespace-cdn.com/content/v1/6669be4bac1525229465036e/3a29af55-3c5e-4193-b1fa-5e1984e6e17b/_26A6055EQ.jpg?format=1000w", credential: "COPC 33106",
    detail: "Psicòloga general sanitària especialitzada en benestar emocional, autoestima, ansietat, relacions i processos migratoris.",
    education: ["Grau en Psicologia per la Universitat Oberta de Catalunya.", "Màster en Psicologia General Sanitària per la Universitat Internacional de València.", "Formació en Psicologia de la Migració.", "Especialista en depressió, autoestima, ansietat, problemes de parella i migració.", "Atén en català, castellà, anglès i romanès."],
  },
];
