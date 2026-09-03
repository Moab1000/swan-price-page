export type Treatment = {
  name: string;
  desc?: string;
  price: string;
  extra?: string;
};

export type Group = {
  title: string;
  note?: string;
  items: Treatment[];
};

export type Category = {
  id: string;
  label: string;
  tagline: string;
  groups: Group[];
  notes?: string[];
};

export const clinic = {
  name: "THE SWAN",
  full: "The Swan Medical Aesthetic Clinic",
  address: "Vejlebrovej 38, 2635 Ishøj",
  phone: "42 83 86 45",
  phoneHref: "+4542838645",
  web: "theswan.dk",
  instagram: "@theswan.dk",
};

export const categories: Category[] = [
  {
    id: "pmu",
    label: "PMU — Permanent Makeup",
    tagline: "Naturligt · Smukt · Personligt",
    groups: [
      {
        title: "Behandlinger",
        items: [
          { name: "Powder Brows", desc: "Bløde og pudrede bryn med et naturligt look", price: "2.995 kr." },
          { name: "Hairstrokes / Nano Brows", desc: "Hår-strå for hår for et naturligt og fyldigt resultat", price: "3.295 kr." },
          { name: "Hybrid Brows", desc: "Kombination af hårlignende strøg og shading for et perfekt resultat", price: "3.495 kr." },
          { name: "Lip Blush", desc: "Naturlig farve og definition til dine læber", price: "3.295 kr." },
          { name: "Vippefortætning", desc: "Diskret fortætning langs vippekanten for et mere intenst blik", price: "2.495 kr." },
          { name: "Klassisk Eyeliner", desc: "Definerer øjnene smukt og elegant", price: "2.995 kr." },
          { name: "Eyeliner med Wing", desc: "Elegant eyeliner med vinge for et markant look", price: "3.495 kr." },
        ],
      },
      {
        title: "Touch-up & vedligeholdelse",
        items: [
          { name: "2. behandling / touch-up (4–8 uger)", desc: "Indenfor 8 uger efter første behandling", price: "995 kr." },
          { name: "Color Boost inden 12 mdr.", desc: "Refresh af farve og form", price: "1.695 kr." },
          { name: "Color Boost 12–24 mdr.", desc: "Refresh af farve og form", price: "2.195 kr." },
          { name: "Konsultation", desc: "Gratis og uforpligtende", price: "GRATIS" },
        ],
      },
    ],
    notes: [
      "Det får du hos os: sikkerhed i topklasse · høj hygiejne og sterilt udstyr · personlig rådgivning og individuelt design · naturlige resultater · kvalitetsprodukter.",
      "Vigtigt: undgå solbadning, sauna, træning og makeup på området de første 7 dage.",
    ],
  },
  {
    id: "prp",
    label: "PRP / PRF",
    tagline: "Naturlig og sikker behandling med dit eget blod — fornyelse, glow og stærkere hår.",
    groups: [
      {
        title: "Behandlinger",
        items: [
          { name: "Forundersøgelse", price: "GRATIS" },
          { name: "PRP/PRF mod hårtab", price: "1.800 kr." },
          { name: "PRP/PRF i ansigt", desc: "Vampyr behandling", price: "1.800 kr." },
          { name: "4 PRP/PRF behandlinger", desc: "Pakke — spar 1.200 kr. (fra 7.200 kr.)", price: "6.000 kr.", extra: "Pakke" },
          { name: "Exomine PRP behandling", desc: "Introduktionstilbud", price: "2.000 kr.", extra: "Tilbud" },
        ],
      },
    ],
  },
  {
    id: "botox",
    label: "Botox",
    tagline: "Forundersøgelse: GRATIS · Kontrol efter 14 dage: GRATIS",
    groups: [
      {
        title: "Botox til kvinder",
        items: [
          { name: "1 område", desc: "Pande, bekymringsrynke (mellem bryn), kragetær (smilerynker) eller underansigtsløft", price: "900 kr." },
          { name: "1 område + øjenbrynsløft", price: "1.200 kr." },
          { name: "2 områder", desc: "Vælg mellem pande, bekymringsrynke, kragetær eller underansigtsløft", price: "1.500 kr." },
          { name: "2 områder + øjenbrynsløft", price: "1.800 kr." },
          { name: "3 områder", desc: "Vælg mellem pande, bekymringsrynke, kragetær eller underansigtsløft", price: "2.000 kr." },
          { name: "3 områder + øjenbrynsløft", price: "2.300 kr." },
          { name: "4 områder", desc: "Vælg mellem pande, bekymringsrynke, kragetær eller underansigtsløft", price: "2.400 kr." },
          { name: "Reduktion af tyggemuskel (masseter)", price: "1.500 kr." },
          { name: "Brynløft", price: "500 kr." },
          { name: "Lip flip (læbeflip)", price: "500 kr." },
          { name: "Løft af nedadvendte mundvige", price: "500 kr." },
          { name: "Næsens sider (bunny lines)", price: "500 kr." },
          { name: "Botox halsbånd (platysma)", price: "1.600 kr." },
        ],
      },
      {
        title: "Botox til mænd",
        items: [
          { name: "1 område", desc: "Pande, bekymringsrynke (mellem bryn), kragetær (smilerynker) eller underansigtsløft", price: "1.100 kr." },
          { name: "1 område + øjenbrynsløft", price: "1.400 kr." },
          { name: "2 områder", desc: "Vælg mellem pande, bekymringsrynke, kragetær eller underansigtsløft", price: "1.700 kr." },
          { name: "2 områder + øjenbrynsløft", price: "2.000 kr." },
          { name: "3 områder", desc: "Vælg mellem pande, bekymringsrynke, kragetær eller underansigtsløft", price: "2.200 kr." },
          { name: "3 områder + øjenbrynsløft", price: "2.400 kr." },
          { name: "4 områder", desc: "Vælg mellem pande, bekymringsrynke, kragetær eller underansigtsløft", price: "2.600 kr." },
          { name: "Reduktion af tyggemuskel (masseter)", price: "1.500 kr." },
        ],
      },
    ],
  },
  {
    id: "ansigt",
    label: "Ansigtsbehandlinger",
    tagline: "Professionelle behandlinger med fokus på sund, strålende og smuk hud.",
    groups: [
      {
        title: "Behandlinger",
        items: [
          { name: "Microneedling", desc: "Stimulerer kollagenproduktionen og forbedrer hudens struktur", price: "850 kr." },
          { name: "Green Peel Fresh Up", desc: "Frisk og fugtgivende behandling med naturlige aktivstoffer", price: "600 kr." },
          { name: "Green Peel Energy", desc: "Dybderens og fornyelse for en klarere og mere strålende hud", price: "800 kr." },
          { name: "Green Peel Classic", desc: "Intensiv behandling inkl. produkter til hjemmebrug", price: "1.800 kr." },
          { name: "Aqua Peel", desc: "Inkl. dybderens — effektiv eksfoliering for en ren, fugtet og glødende hud", price: "500 kr." },
          { name: "Acnelan", desc: "Målrettet behandling til uren og akneudsat hud", price: "750 kr." },
        ],
      },
    ],
  },
  {
    id: "skinbooster",
    label: "Skinbooster",
    tagline: "Gratis konsultation. Alle behandlinger udføres af erfarne og certificerede behandlere.",
    groups: [
      {
        title: "Behandlinger",
        note: "Pakkepris gælder 3 behandlinger.",
        items: [
          { name: "Ejal 40 Skinbooster", desc: "Opstrammende effekt", price: "1.300 kr.", extra: "Pakke (3 stk.): 3.500 kr." },
          { name: "Profhilo Skinbooster", desc: "Opstrammende effekt", price: "1.600 kr.", extra: "Pakke (3 stk.): 4.500 kr." },
          { name: "Profhilo Structura", price: "2.000 kr.", extra: "Pakke (3 stk.): 5.000 kr." },
          { name: "Jalupro Skinbooster", desc: "Fugt, elasticitet, glød", price: "1.300 kr.", extra: "Pakke (3 stk.): 3.500 kr." },
          { name: "Kamilane Skinbooster", desc: "Fugtgivende, opstrammende", price: "1.300 kr.", extra: "Pakke (3 stk.): 3.500 kr." },
          { name: "Seventy Hyal Skinbooster", desc: "Dyb fugt", price: "1.300 kr.", extra: "Pakke (3 stk.): 3.500 kr." },
          { name: "Vitaran Skinbooster til ansigtet", price: "1.300 kr.", extra: "Pakke (3 stk.): 3.500 kr." },
          { name: "Vitaran under øjne", desc: "Mod mørke rande / trætte øjne", price: "1.300 kr.", extra: "Pakke (3 stk.): 3.500 kr." },
          { name: "Sunekos Skinbooster", desc: "Mod mørke rande under øjnene", price: "1.000 kr." },
        ],
      },
    ],
  },
  {
    id: "filler",
    label: "Filler",
    tagline: "Diskret volumen og harmoniske konturer med kvalitetsprodukter.",
    groups: [
      {
        title: "Behandlinger",
        items: [
          { name: "Forundersøgelse", price: "GRATIS" },
          { name: "Fjernelse af filler med hyalase", desc: "2 seancer er inkluderet", price: "1.000 kr." },
          { name: "Filler, Revolax eller NextFill 1 mL", price: "1.300 kr." },
          { name: "Filler, Revolax eller NextFill 2 mL", price: "2.200 kr." },
          { name: "Filler, Revolax eller NextFill 3 mL", price: "3.200 kr." },
          { name: "Filler, Revolax eller NextFill 4 mL", price: "4.000 kr." },
          { name: "Filler, Juvederm 0,55 mL", price: "1.000 kr." },
          { name: "Filler, Restylane eller Juvederm 1 mL", price: "1.700 kr." },
          { name: "Filler, Restylane eller Juvederm 2 mL", price: "3.200 kr." },
          { name: "Filler, Restylane eller Juvederm 3 mL", price: "4.600 kr." },
          { name: "Filler, Restylane eller Juvederm 4 mL", price: "6.000 kr." },
        ],
      },
    ],
  },
  {
    id: "laser",
    label: "Permanent hårfjerning — Laser",
    tagline: "Effektiv og skånsom laserbehandling til hele kroppen.",
    groups: [
      {
        title: "Kvinder",
        items: [
          { name: "Heleben", price: "1.800 kr." },
          { name: "Underben", price: "1.500 kr." },
          { name: "Lår", price: "1.500 kr." },
          { name: "Brasil", price: "600 kr." },
          { name: "Bikini", price: "500 kr." },
          { name: "Tanga", price: "500 kr." },
          { name: "Navle nedefter", price: "500 kr." },
          { name: "Mave", price: "900 kr." },
          { name: "Mave & bryst", price: "1.000 kr." },
          { name: "Skuldre", price: "900 kr." },
          { name: "Lænd", price: "900 kr." },
          { name: "K. arme (komplet arme)", price: "1.200 kr." },
          { name: "Halve arme", price: "900 kr." },
          { name: "Overarme", price: "900 kr." },
          { name: "Armhuler", price: "500 kr." },
          { name: "Hænder & fødder", price: "450 kr." },
          { name: "K. ansigt", price: "550 kr." },
          { name: "Kinder", price: "450 kr." },
          { name: "Bakkenbarter", price: "450 kr." },
          { name: "Overlæbe", price: "350 kr." },
          { name: "Hage", price: "350 kr." },
          { name: "Hals", price: "450 kr." },
        ],
      },
      {
        title: "Pakketilbud, kvinder",
        items: [
          { name: "Lille pakke", desc: "Halveben, halve arme, armhuler, brasiliansk", price: "2.300 kr." },
          { name: "Mellem pakke", desc: "Heleben, helearme, brasil, axil, navle nedefter, baller, ansigt, hænder & fødder", price: "2.800 kr." },
          { name: "Stor pakke", desc: "Fuld body", price: "3.500 kr." },
        ],
      },
      {
        title: "Mænd",
        items: [
          { name: "Hele ben", price: "2.500 kr." },
          { name: "Lår", price: "1.500 kr." },
          { name: "Halve ben", price: "1.500 kr." },
          { name: "Fødder", price: "450 kr." },
          { name: "Hele arme", price: "2.000 kr." },
          { name: "Overarme", price: "1.200 kr." },
          { name: "Underarme", price: "1.200 kr." },
          { name: "Armhuler", price: "600 kr." },
          { name: "Hænder", price: "450 kr." },
          { name: "Mave", price: "1.500 kr." },
          { name: "Navle og ned", price: "750 kr." },
          { name: "Mellem bryst", price: "700 kr." },
          { name: "Omkring brystvorter", price: "500 kr." },
          { name: "Øverste ryg", price: "1.500 kr." },
          { name: "Lænd", price: "750 kr." },
          { name: "Skuldre", price: "900 kr." },
          { name: "Bryn + mellem bryn", price: "450 kr." },
          { name: "Kinder", price: "450 kr." },
          { name: "Hals", price: "450 kr." },
          { name: "Nakke", price: "450 kr." },
          { name: "På næse", price: "450 kr." },
          { name: "Ører", price: "350 kr." },
          { name: "Fuld kropsbehandling", price: "4.500 kr." },
        ],
      },
      {
        title: "Pakketilbud, mænd",
        items: [
          { name: "1. Kinder + hals + nakke", price: "900 kr." },
          { name: "2. Komplet ryg-pakke", desc: "Komplet ryg + nakke + hals + kinder + armhuler + overarme", price: "2.300 kr." },
          { name: "3. Komplet mave-pakke", desc: "Komplet mave + nakke + hals + kinder + armhuler + overarme", price: "2.300 kr." },
          { name: "4. Komplet overkrop", desc: "Ryg + bryst + mave + skuldre + arme", price: "2.800 kr." },
        ],
      },
    ],
  },
  {
    id: "shr",
    label: "Permanent hårfjerning — SHR",
    tagline: "Blid, næsten smertefri hårfjerning — velegnet til større områder.",
    groups: [
      {
        title: "Kvinder",
        items: [
          { name: "Hele ben", price: "1.000 kr." },
          { name: "Halveben", price: "500 kr." },
          { name: "Lår", price: "700 kr." },
          { name: "K. arme (komplet arme)", price: "700 kr." },
          { name: "Overarme", price: "500 kr." },
          { name: "Halve arme", price: "500 kr." },
          { name: "Armhuler", price: "350 kr." },
          { name: "Brasiliansk", price: "350 kr." },
          { name: "Bikini", price: "350 kr." },
          { name: "Tanga", price: "350 kr." },
          { name: "K. mave (komplet mave)", price: "600 kr." },
          { name: "Mave", price: "450 kr." },
          { name: "Ryg (øvre)", price: "400 kr." },
          { name: "K. ryg (komplet ryg)", price: "700 kr." },
          { name: "Lænd", price: "350 kr." },
          { name: "Navle nedefter", price: "250 kr." },
          { name: "Baller", price: "350 kr." },
          { name: "Ansigt", price: "250 kr." },
          { name: "Hænder & fødder", price: "250 kr." },
          { name: "Bakkenbarter", price: "250 kr." },
          { name: "Overlæbe", price: "150 kr." },
          { name: "Hage", price: "250 kr." },
          { name: "Hals", price: "300 kr." },
        ],
      },
      {
        title: "Pakketilbud, kvinder",
        items: [
          { name: "Lille pakke", desc: "Halveben, halve arme, brasil, armhuler", price: "1.200 kr." },
          { name: "Mellem pakke", desc: "Helben, hele arme, brasiliansk, armhuler, lænd, navle nedefter, baller, ansigt", price: "1.500 kr." },
          { name: "Fuld body", desc: "Hele kroppen", price: "2.000 kr." },
        ],
      },
      {
        title: "Mænd",
        items: [
          { name: "Hele ben", price: "1.200 kr." },
          { name: "Lår", price: "700 kr." },
          { name: "Underben", price: "700 kr." },
          { name: "Hele arme", price: "700 kr." },
          { name: "Halve arme", price: "500 kr." },
          { name: "Armhuler", price: "350 kr." },
          { name: "Komplet ryg", price: "1.000 kr." },
          { name: "Øvre ryg", price: "700 kr." },
          { name: "Lænd", price: "500 kr." },
          { name: "Komplet mave", price: "1.000 kr." },
          { name: "Mave", price: "650 kr." },
          { name: "Navle nedefter", price: "500 kr." },
          { name: "Bryst", price: "650 kr." },
          { name: "Skuldre", price: "450 kr." },
          { name: "Hals", price: "350 kr." },
          { name: "Nakke", price: "350 kr." },
          { name: "Hænder & fødder", price: "350 kr." },
          { name: "Ansigt", price: "450 kr." },
          { name: "Kinder", price: "350 kr." },
        ],
      },
      {
        title: "Pakketilbud SHR, mænd",
        items: [
          { name: "1. Kinder + hals + nakke", price: "500 kr." },
          { name: "2. Komplet ryg-pakke", desc: "Komplet ryg + nakke + hals + kinder + armhuler + overarme", price: "1.200 kr." },
          { name: "3. Komplet mave-pakke", desc: "Komplet mave + nakke + hals + kinder + armhuler + overarme", price: "1.200 kr." },
          { name: "4. Komplet overkrop", desc: "Ryg + bryst + mave + skuldre + arme", price: "1.500 kr." },
        ],
      },
    ],
  },
  {
    id: "voks",
    label: "Voksbehandlinger",
    tagline: "Glat hud med skånsom voks — hurtigt og effektivt.",
    groups: [
      {
        title: "Behandlinger",
        items: [
          { name: "Voks hele ben inkl. bikini", price: "600 kr." },
          { name: "Voks under ben", price: "400 kr." },
          { name: "Voks lår", price: "450 kr." },
          { name: "Voks k. arme", price: "450 kr." },
          { name: "Voks halve arme", price: "350 kr." },
          { name: "Voks armhuler", price: "250 kr." },
          { name: "Voks ansigt", price: "250 kr." },
          { name: "Baller", price: "300 kr." },
          { name: "Voks Hollywood", price: "400 kr." },
          { name: "Voks Brasil", price: "450 kr." },
          { name: "Voks Tanga", price: "400 kr." },
          { name: "Voks Lænd", price: "350 kr." },
          { name: "Voks K. mave", price: "500 kr." },
          { name: "Voks K. Ryg", price: "500 kr." },
          { name: "Voks Næse", price: "150 kr." },
          { name: "Voks Overlæbe", price: "150 kr." },
        ],
      },
    ],
  },
  {
    id: "piercing",
    label: "Piercing",
    tagline: "Vi anvender kun sterile engangsnåle og materialer af høj kvalitet.",
    groups: [
      {
        title: "Ørepiercinger",
        items: [
          { name: "Helix", price: "400 kr." },
          { name: "Double Helix (2 stk.)", price: "650 kr." },
          { name: "Forward Helix", price: "400 kr." },
          { name: "Flat", price: "450 kr." },
          { name: "Conch (indre)", price: "450 kr." },
          { name: "Anti Conch", price: "450 kr." },
          { name: "Rook", price: "450 kr." },
          { name: "Daith", price: "500 kr." },
          { name: "Tragus", price: "450 kr." },
          { name: "Anti Tragus", price: "450 kr." },
          { name: "Snug", price: "450 kr." },
          { name: "Orbital (inkl. 2 huller)", price: "600 kr." },
          { name: "Industrial", price: "600 kr." },
        ],
      },
      {
        title: "Ansigt",
        items: [
          { name: "Øjenbryn", price: "400 kr." },
          { name: "Næse (næsebor)", price: "400 kr." },
          { name: "Septum", price: "500 kr." },
          { name: "Læbe (labret)", price: "450 kr." },
          { name: "Medusa", price: "450 kr." },
          { name: "Monroe / Madonna", price: "450 kr." },
          { name: "Kind (dimple)", price: "Pris på forespørgsel" },
          { name: "Angel Bites", price: "Pris på forespørgsel" },
        ],
      },
      {
        title: "Læber",
        items: [
          { name: "Overlæbe (center)", price: "450 kr." },
          { name: "Underlæbe (center)", price: "450 kr." },
          { name: "Snake Bites (2 huller)", price: "800 kr." },
          { name: "Spider Bites (2 huller)", price: "800 kr." },
        ],
      },
      {
        title: "Krop",
        items: [
          { name: "Brystvorte (én side)", price: "500 kr." },
          { name: "Brystvorte (begge sider)", price: "800 kr." },
          { name: "Navle", price: "500 kr." },
          { name: "Christina", price: "600 kr." },
          { name: "Vertical Hood", price: "600 kr." },
          { name: "Intim øvrige (fra)", price: "600 kr." },
        ],
      },
    ],
    notes: [
      "Piercingsmykker fra 150 kr. · Skift af egen ørering & rens: 75 kr.",
    ],
  },
];
