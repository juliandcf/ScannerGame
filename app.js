/**
 * SÚPER PIP! - CAJA REGISTRADORA DE JUGUETE
 * Lógica completa: Web Audio Synthesizer, Lector QR/Códigos de barra,
 * Simulación táctil, Carrito interactivo, Ticket y Configuración.
 */

// ==========================================
// 1. CATÁLOGOS TEMÁTICOS Y COMERCIOS DE JUGUETE
// ==========================================
const PRODUCTS_CATALOG = [
  { name: "Chocolate con Leche", emoji: "🍫", minPrice: 150, maxPrice: 350, code: "CHOC" },
  { name: "Bananas Dulces", emoji: "🍌", minPrice: 100, maxPrice: 220, code: "FRUT" },
  { name: "Jugo de Naranja", emoji: "🧃", minPrice: 180, maxPrice: 380, code: "BEB" },
  { name: "Galletitas Rellenas", emoji: "🍪", minPrice: 200, maxPrice: 450, code: "GAL" },
  { name: "Helado de Frutilla", emoji: "🍦", minPrice: 250, maxPrice: 600, code: "HEL" },
  { name: "Manzanas Rojas", emoji: "🍎", minPrice: 90, maxPrice: 190, code: "FRUT" },
  { name: "Leche Fresquita", emoji: "🥛", minPrice: 190, maxPrice: 380, code: "LAC" },
  { name: "Mini Pizza Casera", emoji: "🍕", minPrice: 400, maxPrice: 850, code: "PIZ" },
  { name: "Queso Amarillo", emoji: "🧀", minPrice: 280, maxPrice: 520, code: "LAC" },
  { name: "Donut Glaseada", emoji: "🍩", minPrice: 160, maxPrice: 300, code: "PAN" },
  { name: "Cereal de Colores", emoji: "🥣", minPrice: 280, maxPrice: 540, code: "DES" },
  { name: "Huevos de Granja", emoji: "🥚", minPrice: 240, maxPrice: 460, code: "HUE" }
];

const COMMERCE_THEMES = {
  supermarket: {
    id: "supermarket",
    name: "Supermercado",
    icon: "storefront",
    emoji: "🛒",
    defaultStore: "Súper Sofi",
    subtitle: "Supermercado de Juguete",
    receiptTitle: "TICKET DE SUPERMERCADO",
    genericItemPrefix: "Producto",
    defaultPalette: "palette-sky",
    defaultNames: ["✨ Súper Sofi", "⚡ Hiper Chispita", "🛒 Don Pip"],
    catalog: PRODUCTS_CATALOG
  },
  maquillaje: {
    id: "maquillaje",
    name: "Maquillajes",
    icon: "brush",
    emoji: "💄",
    defaultStore: "Glow & Chic",
    subtitle: "Maquillajes y Belleza",
    receiptTitle: "TICKET DE TIENDA DE MAQUILLAJE",
    genericItemPrefix: "Cosmético",
    defaultPalette: "palette-pink",
    defaultNames: ["💄 Glow & Chic", "✨ Pink Beauty", "🌸 Maquillajes Sofi", "💋 Dulce Glamour"],
    catalog: [
      { name: "Labial Mágico Brillante", emoji: "💄", minPrice: 220, maxPrice: 480, code: "LAB" },
      { name: "Paleta de Sombras Arcoíris", emoji: "🎨", minPrice: 380, maxPrice: 850, code: "SOM" },
      { name: "Esmalte con Glitter", emoji: "💅", minPrice: 180, maxPrice: 390, code: "ESM" },
      { name: "Rubor Rosa Suave", emoji: "🌸", minPrice: 250, maxPrice: 520, code: "RUB" },
      { name: "Máscara de Pestañas Estrella", emoji: "✨", minPrice: 280, maxPrice: 590, code: "PES" },
      { name: "Brillo Labial Frutal", emoji: "🍓", minPrice: 190, maxPrice: 420, code: "BRI" },
      { name: "Brocha Suave para Polvos", emoji: "🖌️", minPrice: 200, maxPrice: 450, code: "BRO" },
      { name: "Espejito con Luces Led", emoji: "🪞", minPrice: 450, maxPrice: 920, code: "ESP" },
      { name: "Perfumito Dulce de Flores", emoji: "🧴", minPrice: 320, maxPrice: 700, code: "PER" },
      { name: "Stickers Faciales con Diamantes", emoji: "💎", minPrice: 150, maxPrice: 350, code: "STI" }
    ]
  },
  verduleria: {
    id: "verduleria",
    name: "Verdulería",
    icon: "nutrition",
    emoji: "🍎",
    roleTitle: "Verdulera Oficial:",
    defaultStore: "La Huertita Mágica",
    subtitle: "Frutas y Verduras Frescas",
    receiptTitle: "TICKET DE VERDULERÍA",
    genericItemPrefix: "Fruta/Verdura",
    defaultNames: ["🍎 La Huertita", "🥦 Verduras Sofi", "🍓 Frutería Arcoíris"],
    catalog: [
      { name: "Manzanas Rojas", emoji: "🍎", minPrice: 90, maxPrice: 180, code: "MAN" },
      { name: "Bananas Dulces", emoji: "🍌", minPrice: 100, maxPrice: 220, code: "BAN" },
      { name: "Frutillas Jugosas", emoji: "🍓", minPrice: 200, maxPrice: 450, code: "FRU" },
      { name: "Sandía Refrescante", emoji: "🍉", minPrice: 300, maxPrice: 700, code: "SAN" },
      { name: "Zanahorias Baby", emoji: "🥕", minPrice: 80, maxPrice: 180, code: "ZAN" },
      { name: "Tomates Redondos", emoji: "🍅", minPrice: 120, maxPrice: 250, code: "TOM" },
      { name: "Uvas Dulces", emoji: "🍇", minPrice: 190, maxPrice: 390, code: "UVA" },
      { name: "Naranjas de Jugo", emoji: "🍊", minPrice: 110, maxPrice: 240, code: "NAR" },
      { name: "Choclo Amarillo", emoji: "🌽", minPrice: 130, maxPrice: 260, code: "CHO" },
      { name: "Palta / Aguacate", emoji: "🥑", minPrice: 250, maxPrice: 550, code: "PAL" }
    ]
  },
  jugueteria: {
    id: "jugueteria",
    name: "Juguetería",
    icon: "toys",
    emoji: "🧸",
    roleTitle: "Experta en Juguetes:",
    defaultStore: "Mundo Mágico",
    subtitle: "Juegos, Muñecos y Aventuras",
    receiptTitle: "TICKET DE JUGUETERÍA",
    genericItemPrefix: "Juguete",
    defaultNames: ["🧸 Mundo Mágico", "🚀 Planeta Juguete", "✨ Rincón Infantil"],
    catalog: [
      { name: "Osito de Peluche", emoji: "🧸", minPrice: 450, maxPrice: 950, code: "PEL" },
      { name: "Autito de Carreras", emoji: "🏎️", minPrice: 350, maxPrice: 750, code: "AUT" },
      { name: "Dinosaurio Feroz", emoji: "🦖", minPrice: 400, maxPrice: 850, code: "DIN" },
      { name: "Muñeca Linda", emoji: "🪆", minPrice: 450, maxPrice: 900, code: "MUÑ" },
      { name: "Cohete Espacial", emoji: "🚀", minPrice: 500, maxPrice: 980, code: "COH" },
      { name: "Pelota Saltarina", emoji: "⚽", minPrice: 250, maxPrice: 500, code: "PEL" },
      { name: "Bloques de Construcción", emoji: "🧱", minPrice: 380, maxPrice: 800, code: "BLO" },
      { name: "Robot Parlante", emoji: "🤖", minPrice: 600, maxPrice: 990, code: "ROB" },
      { name: "Varita Mágica", emoji: "🪄", minPrice: 200, maxPrice: 420, code: "VAR" }
    ]
  },
  libreria: {
    id: "libreria",
    name: "Librería",
    icon: "menu_book",
    emoji: "📚",
    roleTitle: "Librera Oficial:",
    defaultStore: "Rincón del Cuento",
    subtitle: "Cuentos, Fábulas y Lectura",
    receiptTitle: "BOLETA DE LIBRERÍA",
    genericItemPrefix: "Libro/Cuento",
    defaultNames: ["📚 El Rincón Sabio", "📖 Cuentos Sofi", "✨ Letras Mágicas"],
    catalog: [
      { name: "Cuento de Princesas", emoji: "👑", minPrice: 350, maxPrice: 750, code: "CUE" },
      { name: "Libro de Dinosaurios", emoji: "🦖", minPrice: 400, maxPrice: 850, code: "LIB" },
      { name: "Atlas del Mundo", emoji: "🗺️", minPrice: 450, maxPrice: 900, code: "ATL" },
      { name: "Libro de Aventuras", emoji: "🏴‍☠️", minPrice: 380, maxPrice: 780, code: "AVE" },
      { name: "Fábulas de Animales", emoji: "🦊", minPrice: 320, maxPrice: 680, code: "FAB" },
      { name: "Libro para Colorear", emoji: "🎨", minPrice: 200, maxPrice: 450, code: "COL" },
      { name: "Cómics y Superhéroes", emoji: "🦸", minPrice: 280, maxPrice: 580, code: "COM" }
    ]
  },
  papeleria: {
    id: "papeleria",
    name: "Papelería",
    icon: "edit_note",
    emoji: "✂️",
    roleTitle: "Jefa de Útiles:",
    defaultStore: "Papelería Chispita",
    subtitle: "Útiles, Colores y Arte",
    receiptTitle: "TICKET DE PAPELERÍA",
    genericItemPrefix: "Útil Escolar",
    defaultNames: ["✂️ Papelería Chispita", "🎨 Colores Sofi", "✏️ Trazo Alegre"],
    catalog: [
      { name: "Marcadores de Colores", emoji: "🖍️", minPrice: 250, maxPrice: 550, code: "MAR" },
      { name: "Cuaderno Espiral", emoji: "📓", minPrice: 220, maxPrice: 480, code: "CUA" },
      { name: "Tijeras Punta Redonda", emoji: "✂️", minPrice: 180, maxPrice: 360, code: "TIJ" },
      { name: "Plastilinas Mágicas", emoji: "🌈", minPrice: 260, maxPrice: 520, code: "PLA" },
      { name: "Regla y Escuadra", emoji: "📐", minPrice: 120, maxPrice: 240, code: "REG" },
      { name: "Goma y Sacapuntas", emoji: "✏️", minPrice: 90, maxPrice: 190, code: "GOM" },
      { name: "Acuarelas Brillantes", emoji: "🎨", minPrice: 340, maxPrice: 700, code: "ACU" },
      { name: "Stickers Brillosos", emoji: "⭐", minPrice: 150, maxPrice: 320, code: "STI" }
    ]
  },
  farmacia: {
    id: "farmacia",
    name: "Farmacia",
    icon: "local_pharmacy",
    emoji: "💊",
    roleTitle: "Farmacéutica:",
    defaultStore: "Farmacia Sanita",
    subtitle: "Remedios y Primeros Auxilios",
    receiptTitle: "TICKET DE FARMACIA",
    genericItemPrefix: "Medicamento",
    defaultNames: ["💊 Farmacia Sanita", "🩹 Farmacia Sofi", "✨ Remedio Dulce"],
    catalog: [
      { name: "Curitas con Dibujitos", emoji: "🩹", minPrice: 120, maxPrice: 250, code: "CUR" },
      { name: "Jarabe Dulce de Frutilla", emoji: "🍯", minPrice: 280, maxPrice: 580, code: "JAR" },
      { name: "Vitaminas Estrella", emoji: "⭐", minPrice: 320, maxPrice: 650, code: "VIT" },
      { name: "Termómetro Digital", emoji: "🌡️", minPrice: 450, maxPrice: 890, code: "TER" },
      { name: "Algodón Suavecito", emoji: "☁️", minPrice: 110, maxPrice: 220, code: "ALG" },
      { name: "Alcohol en Gel Frutal", emoji: "🧴", minPrice: 160, maxPrice: 340, code: "ALC" },
      { name: "Pomada para Raspaduras", emoji: "🧪", minPrice: 220, maxPrice: 460, code: "POM" }
    ]
  },
  doctor: {
    id: "doctor",
    name: "Doctor / Clínica",
    icon: "health_and_safety",
    emoji: "🩺",
    roleTitle: "Doctora Oficial:",
    defaultStore: "Consultorio Curatodo",
    subtitle: "Atención Médica y Chequeos",
    receiptTitle: "RECETA Y RECIBO MÉDICO",
    genericItemPrefix: "Chequeo/Servicio",
    defaultNames: ["🩺 Consultorio Sofi", "🏥 Hospital Cariño", "💉 Clínica Sonrisa"],
    catalog: [
      { name: "Chequeo de Latidos", emoji: "💓", minPrice: 300, maxPrice: 600, code: "LAT" },
      { name: "Venda para Abrazos", emoji: "🩹", minPrice: 150, maxPrice: 320, code: "VEN" },
      { name: "Vacuna sin Dolor", emoji: "💉", minPrice: 280, maxPrice: 550, code: "VAC" },
      { name: "Control de Crecimiento", emoji: "📏", minPrice: 200, maxPrice: 400, code: "EST" },
      { name: "Gotitas para los Oídos", emoji: "👂", minPrice: 240, maxPrice: 480, code: "GOT" },
      { name: "Receta de Descanso y Mimos", emoji: "📋", minPrice: 100, maxPrice: 200, code: "REC" }
    ]
  },
  carniceria: {
    id: "carniceria",
    name: "Carnicería",
    icon: "restaurant",
    emoji: "🥩",
    roleTitle: "Carnicera Estrella:",
    defaultStore: "Carnicería Don Pip",
    subtitle: "Carnes, Asado y Milanesas",
    receiptTitle: "TICKET DE CARNICERÍA",
    genericItemPrefix: "Corte de Carne",
    defaultNames: ["🥩 Don Pip Carnes", "🍗 Carnicería Sofi", "🥓 El Buen Corte"],
    catalog: [
      { name: "Milanesas Caseras", emoji: "🥩", minPrice: 450, maxPrice: 850, code: "MIL" },
      { name: "Hamburguesas Ricas", emoji: "🍔", minPrice: 320, maxPrice: 650, code: "HAM" },
      { name: "Patitas de Pollo", emoji: "🍗", minPrice: 280, maxPrice: 580, code: "PAT" },
      { name: "Salchichas Especiales", emoji: "🌭", minPrice: 220, maxPrice: 440, code: "SAL" },
      { name: "Tiritas de Asado", emoji: "🥓", minPrice: 500, maxPrice: 950, code: "ASA" },
      { name: "Albóndigas Sabrosas", emoji: "🧆", minPrice: 340, maxPrice: 680, code: "ALB" }
    ]
  },
  perfumeria: {
    id: "perfumeria",
    name: "Perfumería",
    icon: "spa",
    emoji: "🧴",
    roleTitle: "Consultora de Belleza:",
    defaultStore: "Aroma y Brillo",
    subtitle: "Perfumes, Cremas y Belleza",
    receiptTitle: "TICKET DE PERFUMERÍA",
    genericItemPrefix: "Cosmético/Aroma",
    defaultNames: ["🧴 Aroma y Brillo", "✨ Perfumería Sofi", "🌸 Pétalos Mágicos"],
    catalog: [
      { name: "Perfume de Rosas", emoji: "🌹", minPrice: 450, maxPrice: 950, code: "PER" },
      { name: "Jaboncito de Flores", emoji: "🧼", minPrice: 180, maxPrice: 360, code: "JAB" },
      { name: "Crema de Vainilla", emoji: "🧴", minPrice: 320, maxPrice: 640, code: "CRE" },
      { name: "Brillo Labial de Fresa", emoji: "💄", minPrice: 220, maxPrice: 460, code: "LAB" },
      { name: "Esmalte con Glitter", emoji: "💅", minPrice: 200, maxPrice: 420, code: "ESM" },
      { name: "Espejito de Mano", emoji: "🪞", minPrice: 280, maxPrice: 550, code: "ESP" },
      { name: "Peine Desenredante", emoji: "🪮", minPrice: 190, maxPrice: 380, code: "PEI" }
    ]
  },
  bazar: {
    id: "bazar",
    name: "Bazar y Hogar",
    icon: "countertops",
    emoji: "🏺",
    roleTitle: "Atención al Cliente:",
    defaultStore: "Bazar Mil Cosas",
    subtitle: "Cosas Lindas para la Casa",
    receiptTitle: "TICKET DE BAZAR",
    genericItemPrefix: "Artículo del Hogar",
    defaultNames: ["🏺 Bazar Mil Cosas", "🏡 Bazar Sofi", "✨ Rincón del Hogar"],
    catalog: [
      { name: "Tacita de Té con Flores", emoji: "☕", minPrice: 250, maxPrice: 520, code: "TAC" },
      { name: "Platito de Porcelana", emoji: "🍽️", minPrice: 220, maxPrice: 480, code: "PLA" },
      { name: "Velita Aromática", emoji: "🕯️", minPrice: 190, maxPrice: 390, code: "VEL" },
      { name: "Florero Pequeño", emoji: "🏺", minPrice: 320, maxPrice: 680, code: "FLO" },
      { name: "Cuchara de Madera", emoji: "🥄", minPrice: 120, maxPrice: 240, code: "CUC" },
      { name: "Molde para Galletas", emoji: "🍪", minPrice: 180, maxPrice: 360, code: "MOL" },
      { name: "Plantita en Maceta", emoji: "🪴", minPrice: 350, maxPrice: 720, code: "PLA" }
    ]
  },
  panaderia: {
    id: "panaderia",
    name: "Panadería",
    icon: "bakery_dining",
    emoji: "🥐",
    roleTitle: "Maestra Panadera:",
    defaultStore: "La Espiga Dorada",
    subtitle: "Medialunas, Pan y Tortas",
    receiptTitle: "TICKET DE PANADERÍA",
    genericItemPrefix: "Panificado",
    defaultNames: ["🥐 La Espiga Dorada", "🥖 Panadería Sofi", "🧁 Dulce Masa"],
    catalog: [
      { name: "Medialunas Calentitas", emoji: "🥐", minPrice: 160, maxPrice: 320, code: "MED" },
      { name: "Flautita de Pan", emoji: "🥖", minPrice: 120, maxPrice: 240, code: "PAN" },
      { name: "Torta de Chocolate", emoji: "🎂", minPrice: 500, maxPrice: 980, code: "TOR" },
      { name: "Cupcake con Confites", emoji: "🧁", minPrice: 190, maxPrice: 380, code: "CUP" },
      { name: "Donut con Granita", emoji: "🍩", minPrice: 170, maxPrice: 340, code: "DON" },
      { name: "Tarta de Frutillas", emoji: "🥧", minPrice: 420, maxPrice: 840, code: "TAR" }
    ]
  },
  veterinaria: {
    id: "veterinaria",
    name: "Veterinaria",
    icon: "pets",
    emoji: "🐶",
    roleTitle: "Veterinaria Oficial:",
    defaultStore: "Amigos Peludos",
    subtitle: "Atención y Mimos para Mascotas",
    receiptTitle: "TICKET VETERINARIO",
    genericItemPrefix: "Cuidado Mascota",
    defaultNames: ["🐶 Amigos Peludos", "🐱 Huellitas Sofi", "🐾 Patitas Felices"],
    catalog: [
      { name: "Chequeo al Perrito", emoji: "🐕", minPrice: 320, maxPrice: 650, code: "PER" },
      { name: "Huesito Mordedor", emoji: "🦴", minPrice: 180, maxPrice: 380, code: "HUE" },
      { name: "Pelota de Goma", emoji: "🎾", minPrice: 150, maxPrice: 300, code: "PEL" },
      { name: "Collar con Cascabel", emoji: "🔔", minPrice: 220, maxPrice: 450, code: "COL" },
      { name: "Cepillo Suave", emoji: "🪮", minPrice: 200, maxPrice: 400, code: "CEP" },
      { name: "Galletitas para Mascotas", emoji: "🍪", minPrice: 160, maxPrice: 340, code: "GAL" }
    ]
  },
  heladeria: {
    id: "heladeria",
    name: "Heladería",
    icon: "icecream",
    emoji: "🍦",
    roleTitle: "Maestra Heladera:",
    defaultStore: "Helados Polar",
    subtitle: "Cucuruchos y Sabores",
    receiptTitle: "TICKET DE HELADERÍA",
    genericItemPrefix: "Helado/Sabor",
    defaultNames: ["🍦 Helados Polar", "🍧 Heladería Sofi", "🍨 Copas Mágicas"],
    catalog: [
      { name: "Cucurucho Doble Bocha", emoji: "🍦", minPrice: 250, maxPrice: 500, code: "CUE" },
      { name: "Palito de Agua Frutal", emoji: "🍭", minPrice: 120, maxPrice: 240, code: "PAL" },
      { name: "Copa Helada Gigante", emoji: "🍨", minPrice: 400, maxPrice: 850, code: "COP" },
      { name: "Pote de Dulce de Leche", emoji: "🍯", minPrice: 350, maxPrice: 750, code: "POT" },
      { name: "Sundae con Salsa", emoji: "🍧", minPrice: 300, maxPrice: 600, code: "SUN" },
      { name: "Palito Bombón", emoji: "🍫", minPrice: 180, maxPrice: 360, code: "BOM" }
    ]
  }
};

// Paletas de Colores Disponibles para Personalizar el Local (Diseñadas para niños y niñas)
const COLOR_PALETTES = [
  {
    id: "palette-pink",
    name: "Rosa Glam",
    subtitle: "Chic & Dulce",
    emoji: "💖",
    primary: "#db2777",
    primaryContainer: "#f472b6",
    primaryDark: "#9d174d",
    accent: "#fce7f3",
    border: "#f472b6",
    bgTint: "#fdf2f8",
    bgGradient: "linear-gradient(135deg, #fff0f6 0%, #fce7f3 50%, #fbcfe8 100%)",
    glow: "rgba(219, 39, 119, 0.25)"
  },
  {
    id: "palette-sky",
    name: "Celeste Súper",
    subtitle: "Aéreo & Fresco",
    emoji: "🌊",
    primary: "#0284c7",
    primaryContainer: "#38bdf8",
    primaryDark: "#0369a1",
    accent: "#e0f2fe",
    border: "#38bdf8",
    bgTint: "#f0f9ff",
    bgGradient: "linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #bae6fd 100%)",
    glow: "rgba(2, 132, 199, 0.25)"
  },
  {
    id: "palette-mint",
    name: "Verde Menta",
    subtitle: "Aventura Selva",
    emoji: "🌿",
    primary: "#059669",
    primaryContainer: "#10b981",
    primaryDark: "#047857",
    accent: "#d1fae5",
    border: "#34d399",
    bgTint: "#f0fdf4",
    bgGradient: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 50%, #bbf7d0 100%)",
    glow: "rgba(5, 150, 105, 0.25)"
  },
  {
    id: "palette-purple",
    name: "Violeta Galáctico",
    subtitle: "Magia Espacial",
    emoji: "🍇",
    primary: "#7c3aed",
    primaryContainer: "#a855f7",
    primaryDark: "#5b21b6",
    accent: "#ede9fe",
    border: "#c084fc",
    bgTint: "#faf5ff",
    bgGradient: "linear-gradient(135deg, #faf5ff 0%, #f3e8ff 50%, #e9d5ff 100%)",
    glow: "rgba(124, 58, 237, 0.25)"
  },
  {
    id: "palette-orange",
    name: "Naranja Neón",
    subtitle: "Fuego Relámpago",
    emoji: "🍊",
    primary: "#ea580c",
    primaryContainer: "#fb923c",
    primaryDark: "#c2410c",
    accent: "#ffedd5",
    border: "#fb923c",
    bgTint: "#fff7ed",
    bgGradient: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 50%, #fed7aa 100%)",
    glow: "rgba(234, 88, 12, 0.25)"
  },
  {
    id: "palette-yellow",
    name: "Amarillo Chispa",
    subtitle: "Alegría Dorada",
    emoji: "☀️",
    primary: "#d97706",
    primaryContainer: "#f59e0b",
    primaryDark: "#b45309",
    accent: "#fef3c7",
    border: "#fbbf24",
    bgTint: "#fffbeb",
    bgGradient: "linear-gradient(135deg, #fffdf5 0%, #fef3c7 50%, #fde68a 100%)",
    glow: "rgba(217, 119, 6, 0.25)"
  },
  {
    id: "palette-red",
    name: "Rojo Fresa",
    subtitle: "Poder Cereza",
    emoji: "🍒",
    primary: "#e11d48",
    primaryContainer: "#fb7185",
    primaryDark: "#be123c",
    accent: "#ffe4e6",
    border: "#f43f5e",
    bgTint: "#fff1f2",
    bgGradient: "linear-gradient(135deg, #fff1f2 0%, #ffe4e6 50%, #fecdd3 100%)",
    glow: "rgba(225, 29, 72, 0.25)"
  },
  {
    id: "palette-cyan",
    name: "Aqua Neón",
    subtitle: "Arcoíris Brillante",
    emoji: "🌈",
    primary: "#0891b2",
    primaryContainer: "#06b6d4",
    primaryDark: "#0e7490",
    accent: "#cffafe",
    border: "#22d3ee",
    bgTint: "#ecfeff",
    bgGradient: "linear-gradient(135deg, #ecfeff 0%, #cffafe 50%, #a5f3fc 100%)",
    glow: "rgba(8, 145, 178, 0.25)"
  }
];

// ==========================================
// 2. ESTADO DE LA APLICACIÓN
// ==========================================
const AppState = {
  cart: [],
  audioEnabled: true,
  cameraActive: false,
  html5QrScanner: null,
  torchActive: false,
  isScanningCoolDown: false,
  storeConfig: {
    storeName: "Súper Sofi",
    colorPalette: "palette-sky", // Paleta de colores activa
    productMode: "generic", // "generic" = Escáner de casa (números). "fantasy" = Nombres divertidos
    pipSound: "retail", // "retail" (MP3 Real), "classic", "laser", "double", "bell", "pop", "random"
    commerceType: "supermarket" // Tipo de comercio activo
  }
};

// Cargar configuración guardada si existe
function loadStoredConfig() {
  try {
    const saved = localStorage.getItem("superpip_config");
    if (saved) {
      AppState.storeConfig = { ...AppState.storeConfig, ...JSON.parse(saved) };
    }
  } catch (e) {
    console.warn("No se pudo cargar localStorage:", e);
  }
}

function saveStoredConfig() {
  try {
    localStorage.setItem("superpip_config", JSON.stringify(AppState.storeConfig));
  } catch (e) {
    console.warn("No se pudo guardar en localStorage:", e);
  }
}

// ==========================================
// 3. SINTETIZADOR DE AUDIO (Web Audio API & MP3)
// ==========================================
let audioCtx = null;

// Objetos Audio pre-cargados desde la subcarpeta sounds/
const retailAudio = new Audio('sounds/retail-checkout-beep-sound.mp3');
retailAudio.preload = 'auto';
let retailAudioBuffer = null;

const registerAudio = new Audio('sounds/register_sound.mp3');
registerAudio.preload = 'auto';
let registerAudioBuffer = null;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Carga el audio MP3 de escaner en memoria de Web Audio API
function loadRetailAudioBuffer() {
  try {
    const ctx = getAudioContext();
    if (!ctx || retailAudioBuffer) return;
    fetch('sounds/retail-checkout-beep-sound.mp3')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar archivo');
        return res.arrayBuffer();
      })
      .then(arr => ctx.decodeAudioData(arr))
      .then(decoded => {
        retailAudioBuffer = decoded;
      })
      .catch(() => {});
  } catch (e) {}
}

// Carga el audio MP3 de caja registradora (Finalizar compra)
function loadRegisterAudioBuffer() {
  try {
    const ctx = getAudioContext();
    if (!ctx || registerAudioBuffer) return;
    fetch('sounds/register_sound.mp3')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar archivo');
        return res.arrayBuffer();
      })
      .then(arr => ctx.decodeAudioData(arr))
      .then(decoded => {
        registerAudioBuffer = decoded;
      })
      .catch(() => {});
  } catch (e) {}
}

/**
 * Reproduce el sonido de caja de supermercado real del archivo MP3
 */
function playRetailBeep() {
  if (!AppState.audioEnabled) return;

  try {
    const ctx = getAudioContext();
    if (ctx && retailAudioBuffer) {
      const source = ctx.createBufferSource();
      source.buffer = retailAudioBuffer;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.85, ctx.currentTime);
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
      return;
    }
  } catch (e) {}

  try {
    const soundClone = retailAudio.cloneNode();
    soundClone.volume = 0.85;
    const promise = soundClone.play();
    if (promise !== undefined) {
      promise.catch(() => {
        retailAudio.currentTime = 0;
        retailAudio.play().catch(() => {});
      });
    }
  } catch (err) {
    console.warn("No se pudo reproducir retail audio:", err);
  }
}

/**
 * Reproduce el sonido MP3 de caja registradora al finalizar compra
 */
function playRegisterSound() {
  if (!AppState.audioEnabled) return;

  try {
    const ctx = getAudioContext();
    if (ctx && registerAudioBuffer) {
      const source = ctx.createBufferSource();
      source.buffer = registerAudioBuffer;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.9, ctx.currentTime);
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
      return;
    }
  } catch (e) {}

  try {
    const soundClone = registerAudio.cloneNode();
    soundClone.volume = 0.9;
    const promise = soundClone.play();
    if (promise !== undefined) {
      promise.catch(() => {
        registerAudio.currentTime = 0;
        registerAudio.play().catch(() => {});
      });
    }
  } catch (err) {
    console.warn("No se pudo reproducir register sound:", err);
  }
}

/**
 * Reproduce el sonido de Pip según la configuración o un tipo específico
 * @param {string|null} specificType Tipo forzado (para probar en configuración)
 */
function playScannerBeep(specificType = null) {
  if (!AppState.audioEnabled) return;
  try {
    let soundType = specificType || AppState.storeConfig.pipSound || 'retail';

    if (soundType === 'random') {
      const pool = ['retail', 'classic', 'laser', 'double', 'bell', 'pop'];
      soundType = pool[Math.floor(Math.random() * pool.length)];
    }

    // Si es el nuevo sonido real en MP3
    if (soundType === 'retail' || soundType === 'real') {
      playRetailBeep();
      return;
    }

    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    switch (soundType) {
      case 'laser': {
        // Láser espacial: barrido descendente 2800Hz -> 700Hz
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(2800, now);
        osc.frequency.exponentialRampToValueAtTime(700, now + 0.08);

        gain.gain.setValueAtTime(0.22, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.085);
        break;
      }

      case 'double': {
        // Bip-Bip doble rápido (dos tonos consecutivos de supermercado moderno)
        const osc1 = ctx.createOscillator();
        const gain1 = ctx.createGain();
        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(1950, now);
        gain1.gain.setValueAtTime(0.3, now);
        gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);
        osc1.connect(gain1);
        gain1.connect(ctx.destination);
        osc1.start(now);
        osc1.stop(now + 0.045);

        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.type = 'sine';
        osc2.frequency.setValueAtTime(2450, now + 0.055);
        gain2.gain.setValueAtTime(0.32, now + 0.055);
        gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.start(now + 0.055);
        osc2.stop(now + 0.105);
        break;
      }

      case 'bell': {
        // Campanita ding suave (1480Hz con decaimiento musical)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1480, now);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.23);
        break;
      }

      case 'pop': {
        // Burbuja de agua / Pop juguetón (500Hz subiendo a 1500Hz)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(500, now);
        osc.frequency.exponentialRampToValueAtTime(1500, now + 0.06);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.07);
        break;
      }

      case 'classic':
      default: {
        // Clásico tono puro de supermercado: 2250Hz sine con decaimiento rápido
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(2250, now);
        gain.gain.setValueAtTime(0.35, now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.085);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now);
        osc.stop(now + 0.09);
        break;
      }
    }
  } catch (e) {
    console.warn("Error reproduciendo pip:", e);
  }
}

// Sonido "Cha-Ching" de caja registradora clásica al pagar
function playChaChingSound() {
  if (!AppState.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;

    // Campanilla 1 (B5 - 987Hz)
    const osc1 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    osc1.type = 'triangle';
    osc1.frequency.setValueAtTime(987.77, now);
    gain1.gain.setValueAtTime(0.3, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    osc1.connect(gain1);
    gain1.connect(ctx.destination);
    osc1.start(now);
    osc1.stop(now + 0.35);

    // Campanilla 2 (E6 - 1318Hz, resonante)
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(1318.51, now + 0.08);
    gain2.gain.setValueAtTime(0.35, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.7);
  } catch (e) {
    console.warn("Error de sonido cha-ching:", e);
  }
}

// Pop suave para botones
function playPopSound() {
  if (!AppState.audioEnabled) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(540, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {}
}

// ==========================================
// 4. RETROALIMENTACIÓN HÁPTICA Y VISUAL
// ==========================================
function triggerHaptic() {
  if (navigator.vibrate) {
    try {
      navigator.vibrate(70);
    } catch (e) {}
  }
}

function triggerFlashEffect() {
  const flash = document.getElementById('flashOverlay');
  if (!flash) return;
  flash.classList.remove('opacity-0');
  flash.classList.add('opacity-35');
  setTimeout(() => {
    flash.classList.remove('opacity-35');
    flash.classList.add('opacity-0');
  }, 120);
}

// ==========================================
// 5. MOTOR DE ESCANEO Y GENERACIÓN DE PRECIOS
// ==========================================
/**
 * Agrega un nuevo producto escaneado al carrito
 * @param {string|null} detectedBarcode Código real si fue leído por la cámara
 */
function scanProduct(detectedBarcode = null) {
  // Evitar sobre-escaneo en ráfaga (cooldown de 800ms)
  if (AppState.isScanningCoolDown) return;
  AppState.isScanningCoolDown = true;
  setTimeout(() => {
    AppState.isScanningCoolDown = false;
  }, 800);

  // Efectos sensoriales inmediatos: ¡Pip!, vibración y destello
  playScannerBeep();
  triggerHaptic();
  triggerFlashEffect();

  // Animación del contenedor del visor para dar sensación física
  const visor = document.getElementById('viewfinderArea');
  if (visor) {
    visor.classList.add('scale-[0.98]');
    setTimeout(() => visor.classList.remove('scale-[0.98]'), 100);
  }

  let productName;
  let productEmoji;
  let productCode;
  let randomPrice;

  const currentTheme = COMMERCE_THEMES[AppState.storeConfig.commerceType] || COMMERCE_THEMES.supermarket;
  const isGeneric = AppState.storeConfig.productMode === "generic";

  if (isGeneric) {
    // MODO GENÉRICO: ¡No dice qué producto es!
    // Para que puedan jugar con cualquier objeto real de la casa
    const itemNumber = AppState.cart.length + 1;
    productName = `${currentTheme.genericItemPrefix} #${itemNumber}`;
    productEmoji = currentTheme.emoji;
    if (detectedBarcode) {
      productCode = detectedBarcode.length > 14 ? detectedBarcode.substring(0, 12) + '..' : detectedBarcode;
    } else {
      productCode = `CÓD-${Math.floor(1000 + Math.random() * 9000)}`;
    }
    // Precio aleatorio de juguete (entre $80 y $950, redondeado a decenas)
    const basePrice = Math.floor(Math.random() * (950 - 80 + 1)) + 80;
    randomPrice = Math.round(basePrice / 10) * 10;
  } else {
    // MODO FANTASÍA: Usa el catálogo temático del comercio seleccionado
    const catalog = (currentTheme.catalog && currentTheme.catalog.length > 0) ? currentTheme.catalog : PRODUCTS_CATALOG;
    let template;
    if (detectedBarcode) {
      let hash = 0;
      for (let i = 0; i < detectedBarcode.length; i++) {
        hash = (hash << 5) - hash + detectedBarcode.charCodeAt(i);
        hash |= 0;
      }
      const idx = Math.abs(hash) % catalog.length;
      template = catalog[idx];
      productCode = detectedBarcode.length > 12 ? detectedBarcode.substring(0, 10) + '..' : detectedBarcode;
    } else {
      const randomIndex = Math.floor(Math.random() * catalog.length);
      template = catalog[randomIndex];
      productCode = `${template.code}-${Math.floor(100 + Math.random() * 900)}`;
    }
    productName = template.name;
    productEmoji = template.emoji;
    const basePrice = Math.floor(Math.random() * (template.maxPrice - template.minPrice + 1)) + template.minPrice;
    randomPrice = Math.round(basePrice / 10) * 10;
  }

  const newItem = {
    id: Date.now() + '-' + Math.random().toString(36).substr(2, 4),
    name: productName,
    emoji: productEmoji,
    price: randomPrice,
    code: productCode,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  };

  AppState.cart.unshift(newItem);
  updateUI();
}

// Eliminar un producto del carrito
function removeCartItem(itemId) {
  playPopSound();
  AppState.cart = AppState.cart.filter(item => item.id !== itemId);
  updateUI();
}

// Vaciar carrito
function clearCart() {
  if (AppState.cart.length === 0) return;
  playPopSound();
  AppState.cart = [];
  updateUI();
}

// Calcular total
function calculateTotal() {
  return AppState.cart.reduce((sum, item) => sum + item.price, 0);
}

// Formatear precio (Siempre en Pesos $)
function formatCurrency(amount) {
  return `$${amount.toLocaleString('es-AR')}`;
}

// ==========================================
// 6. ACTUALIZACIÓN DE LA INTERFAZ (UI)
// ==========================================
function updateUI() {
  const itemsContainer = document.getElementById('cartItemsList');
  const emptyView = document.getElementById('emptyCartView');
  const headerItemCount = document.getElementById('headerItemCount');
  const cartCountBadge = document.getElementById('cartCountBadge');
  const runningTotalDisplay = document.getElementById('runningTotalDisplay');

  const totalCount = AppState.cart.length;
  const totalAmount = calculateTotal();

  if (headerItemCount) headerItemCount.textContent = totalCount;
  if (cartCountBadge) cartCountBadge.textContent = totalCount;
  if (runningTotalDisplay) runningTotalDisplay.textContent = formatCurrency(totalAmount);

  if (!itemsContainer) return;

  if (totalCount === 0) {
    itemsContainer.innerHTML = '';
    if (emptyView) {
      itemsContainer.appendChild(emptyView);
      emptyView.classList.remove('hidden');
    }
    return;
  }

  if (emptyView) emptyView.classList.add('hidden');
  itemsContainer.innerHTML = '';

  AppState.cart.forEach((item, index) => {
    const itemEl = document.createElement('div');
    itemEl.className = 'bg-white rounded-2xl p-3.5 border-2 border-[var(--theme-border)] shadow-[0_4px_0_0_var(--theme-accent)] flex items-center justify-between gap-3 animate-card-enter';
    itemEl.innerHTML = `
      <div class="flex items-center gap-3 min-w-0">
        <div class="w-12 h-12 rounded-xl bg-[var(--theme-accent)] flex items-center justify-center text-2xl shadow-inner shrink-0 border border-[var(--theme-border)]/40">
          ${item.emoji}
        </div>
        <div class="truncate">
          <h3 class="text-sm font-headline font-black text-on-surface leading-snug truncate">${item.name}</h3>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-[11px] font-mono font-bold bg-[var(--theme-accent)] text-primary px-2 py-0.5 rounded border border-[var(--theme-border)]/30">${item.code}</span>
            <span class="text-xs text-slate-400 font-bold">${item.time}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <div class="bg-amber-100 text-amber-950 font-price-display text-sm sm:text-base px-2.5 py-1 rounded-xl font-black -rotate-2 shadow-xs border border-amber-300">
          ${formatCurrency(item.price)}
        </div>
        <button onclick="removeCartItem('${item.id}')" class="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center hover:bg-rose-200 active:scale-90 transition-all border border-rose-200" title="Quitar">
          <span class="material-symbols-outlined text-base" data-icon="delete">delete</span>
        </button>
      </div>
    `;
    itemsContainer.appendChild(itemEl);
  });
}

function applyStoreConfig() {
  const currentTheme = COMMERCE_THEMES[AppState.storeConfig.commerceType] || COMMERCE_THEMES.supermarket;
  const paletteId = AppState.storeConfig.colorPalette || currentTheme.defaultPalette || 'palette-sky';
  const pal = COLOR_PALETTES.find(p => p.id === paletteId) || COLOR_PALETTES[1];

  // 1. INYECCIÓN DIRECTA DE VARIABLES CSS EN :ROOT (MÁXIMA ESPECIFICIDAD)
  const root = document.documentElement;
  root.style.setProperty('--theme-primary', pal.primary);
  root.style.setProperty('--theme-primary-container', pal.primaryContainer);
  root.style.setProperty('--theme-primary-dark', pal.primaryDark);
  root.style.setProperty('--theme-accent', pal.accent);
  root.style.setProperty('--theme-border', pal.border);
  root.style.setProperty('--theme-bg-tint', pal.bgTint);
  root.style.setProperty('--theme-bg-gradient', pal.bgGradient);
  root.style.setProperty('--theme-glow', pal.glow);

  // 2. FONDO COMPLETO DE LA WEB (VIBRANTE Y LLAMATIVO PARA NIÑOS Y NIÑAS)
  document.body.style.background = pal.bgGradient;
  document.body.style.minHeight = '100dvh';
  document.body.className = `bg-surface font-body text-on-surface antialiased select-none pb-28 theme-${currentTheme.id} ${pal.id}`;

  // 3. COLOR DE BARRA DE NAVEGACIÓN MÓVIL
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) metaTheme.setAttribute('content', pal.primary);

  // 4. Encabezado principal: Nombre del negocio en grande y visible
  const storeMainTitle = document.getElementById('storeMainTitle');
  if (storeMainTitle) storeMainTitle.textContent = AppState.storeConfig.storeName || currentTheme.defaultStore;

  const storeSubtitle = document.getElementById('storeCategorySubtitle');
  if (storeSubtitle) storeSubtitle.textContent = currentTheme.subtitle || "Súper Pip! • Caja Mágica";

  const storeIcon = document.getElementById('storeIcon');
  if (storeIcon) storeIcon.textContent = currentTheme.icon;

  const wizardHeaderIcon = document.getElementById('wizardHeaderIcon');
  if (wizardHeaderIcon) wizardHeaderIcon.textContent = currentTheme.emoji || "🏬";

  const storeNameEls = document.querySelectorAll('.dynamic-store-name');
  storeNameEls.forEach(el => el.textContent = AppState.storeConfig.storeName || currentTheme.defaultStore);

  // 5. Ticket de compra
  const receiptStoreCategory = document.getElementById('receiptStoreCategory');
  if (receiptStoreCategory) receiptStoreCategory.textContent = currentTheme.receiptTitle;

  // 6. Render de componentes del Wizard
  renderCommerceTypeButtons();
  updateSuggestionChips();
  renderPaletteButtons();

  // 7. Botones de modo de producto en el Paso 4
  const btnGen = document.getElementById('btnModeGeneric');
  const btnFan = document.getElementById('btnModeFantasy');
  if (btnGen && btnFan) {
    if (AppState.storeConfig.productMode === "fantasy") {
      btnFan.className = 'product-mode-btn p-3.5 rounded-2xl border-2 border-primary bg-[var(--theme-accent)] text-primary font-headline text-xs font-bold flex items-center gap-3 transition-all shadow-xs text-left ring-2 ring-primary/40';
      btnGen.className = 'product-mode-btn p-3.5 rounded-2xl border-2 border-outline-variant bg-white text-on-surface-variant font-headline text-xs font-bold flex items-center gap-3 transition-all shadow-xs text-left';
    } else {
      btnGen.className = 'product-mode-btn p-3.5 rounded-2xl border-2 border-primary bg-[var(--theme-accent)] text-primary font-headline text-xs font-bold flex items-center gap-3 transition-all shadow-xs text-left ring-2 ring-primary/40';
      btnFan.className = 'product-mode-btn p-3.5 rounded-2xl border-2 border-outline-variant bg-white text-on-surface-variant font-headline text-xs font-bold flex items-center gap-3 transition-all shadow-xs text-left';
    }
  }

  // 8. Botones de sonido del Pip en el Paso 3
  const currentSound = AppState.storeConfig.pipSound || 'retail';
  document.querySelectorAll('.pip-sound-btn').forEach(btn => {
    if (btn.dataset.sound === currentSound) {
      btn.classList.add('border-primary', 'bg-[var(--theme-accent)]', 'text-primary', 'ring-2', 'ring-primary/40');
      btn.classList.remove('border-outline-variant', 'bg-white', 'text-on-surface-variant');
    } else {
      btn.classList.remove('border-primary', 'bg-[var(--theme-accent)]', 'text-primary', 'ring-2', 'ring-primary/40');
      btn.classList.add('border-outline-variant', 'bg-white', 'text-on-surface-variant');
    }
  });

  updateUI();
}

// Selector de tipo de negocio (Paso 1)
function renderCommerceTypeButtons() {
  const container = document.getElementById('commerceTypesContainer');
  if (!container) return;

  const currentTypeId = AppState.storeConfig.commerceType || 'supermarket';
  container.innerHTML = '';

  Object.values(COMMERCE_THEMES).forEach(theme => {
    const isSelected = theme.id === currentTypeId;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `p-2.5 rounded-2xl border-2 flex flex-col items-center justify-center transition-all active:scale-95 ${
      isSelected
        ? 'border-primary bg-[var(--theme-accent)] text-primary font-extrabold shadow-sm ring-2 ring-primary/40 scale-[1.02]'
        : 'border-outline-variant bg-white text-on-surface-variant hover:border-primary/50'
    }`;
    btn.innerHTML = `
      <span class="text-2xl">${theme.emoji}</span>
      <span class="text-[11px] font-headline mt-1 leading-tight text-center font-bold">${theme.name}</span>
    `;
    btn.addEventListener('click', () => {
      playPopSound();
      AppState.storeConfig.commerceType = theme.id;
      if (theme.defaultPalette) {
        AppState.storeConfig.colorPalette = theme.defaultPalette;
      }
      const storeInput = document.getElementById('configStoreName');
      if (storeInput) {
        storeInput.value = theme.defaultStore;
        AppState.storeConfig.storeName = theme.defaultStore;
      }
      applyStoreConfig();
      saveStoredConfig();
    });
    container.appendChild(btn);
  });
}

// Chips sugeridos de nombres para el local (Paso 2)
function updateSuggestionChips() {
  const container = document.getElementById('suggestionChipsContainer');
  if (!container) return;
  const currentTheme = COMMERCE_THEMES[AppState.storeConfig.commerceType] || COMMERCE_THEMES.supermarket;
  container.innerHTML = '';

  (currentTheme.defaultNames || []).forEach(name => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip-suggest-btn text-[11px] font-headline font-bold px-2.5 py-1 rounded-full bg-[var(--theme-accent)] text-primary hover:bg-primary hover:text-white transition-all active:scale-95 border border-[var(--theme-border)]/40';
    chip.textContent = name;
    chip.addEventListener('click', () => {
      const storeInput = document.getElementById('configStoreName');
      if (storeInput) {
        storeInput.value = name;
        AppState.storeConfig.storeName = name;
        playPopSound();
      }
    });
    container.appendChild(chip);
  });
}

// Selector de Paletas de Colores (Paso 2 - Transformación en tiempo real para niños)
function renderPaletteButtons() {
  const container = document.getElementById('paletteOptionsContainer');
  if (!container) return;

  const currentPalette = AppState.storeConfig.colorPalette || 'palette-sky';
  container.innerHTML = '';

  COLOR_PALETTES.forEach(pal => {
    const isSelected = pal.id === currentPalette;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `p-2.5 rounded-2xl border-2 flex items-center gap-2.5 transition-all active:scale-95 cursor-pointer ${
      isSelected
        ? 'font-black scale-[1.02] shadow-sm'
        : 'bg-white hover:border-slate-300 shadow-xs'
    }`;
    btn.style.borderColor = isSelected ? pal.primary : '#e2e8f0';
    btn.style.backgroundColor = isSelected ? pal.accent : '#ffffff';
    if (isSelected) {
      btn.style.boxShadow = `0 4px 14px ${pal.glow}`;
    }

    btn.innerHTML = `
      <div class="w-8 h-8 rounded-full shrink-0 shadow-xs flex items-center justify-center text-sm text-white font-black transition-transform" style="background: ${pal.bgGradient}; border: 2.5px solid ${pal.primary}">
        ${isSelected ? '<span class="drop-shadow-sm">✓</span>' : pal.emoji}
      </div>
      <div class="text-left leading-tight">
        <span class="text-xs font-headline font-black block" style="color: ${isSelected ? pal.primaryDark : '#1e293b'}">${pal.name}</span>
        <span class="text-[10px] font-body font-semibold block opacity-75" style="color: ${isSelected ? pal.primaryDark : '#64748b'}">${pal.subtitle || ''}</span>
      </div>
    `;

    btn.addEventListener('click', () => {
      playPopSound();
      AppState.storeConfig.colorPalette = pal.id;
      // Inmediata transformación de toda la web en tiempo real
      applyStoreConfig();
      renderPaletteButtons();
      saveStoredConfig();
    });

    container.appendChild(btn);
  });
}

// ==========================================
// 7. CÁMARA Y LINTERNA (HARDWARE TORCH)
// ==========================================
async function toggleCameraScanner() {
  playPopSound();
  const cameraBtnText = document.getElementById('cameraBtnText');
  const cameraStatusPill = document.getElementById('cameraStatusPill');
  const qrReaderDiv = document.getElementById('qrReaderContainer');

  if (!AppState.cameraActive) {
    try {
      if (!AppState.html5QrScanner) {
        const formatsToSupport = window.Html5QrcodeSupportedFormats
          ? [
              Html5QrcodeSupportedFormats.QR_CODE,
              Html5QrcodeSupportedFormats.EAN_13,
              Html5QrcodeSupportedFormats.EAN_8,
              Html5QrcodeSupportedFormats.CODE_128,
              Html5QrcodeSupportedFormats.CODE_39,
              Html5QrcodeSupportedFormats.UPC_A,
              Html5QrcodeSupportedFormats.UPC_E,
              Html5QrcodeSupportedFormats.ITF
            ]
          : undefined;

        AppState.html5QrScanner = new Html5Qrcode("qrReaderContainer", formatsToSupport ? { formatsToSupport, verbose: false } : undefined);
      }

      qrReaderDiv.classList.remove('hidden');

      const config = {
        fps: 15,
        qrbox: (viewfinderWidth, viewfinderHeight) => {
          const width = Math.min(Math.floor(viewfinderWidth * 0.9), 320);
          const height = Math.min(Math.floor(viewfinderHeight * 0.65), 180);
          return { width, height };
        },
        aspectRatio: 1.0,
        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true
        }
      };

      await AppState.html5QrScanner.start(
        { facingMode: "environment" },
        config,
        (decodedText) => {
          scanProduct(decodedText);
        },
        () => {}
      );

      AppState.cameraActive = true;
      if (cameraBtnText) cameraBtnText.textContent = "Apagar Cámara";
      if (cameraStatusPill) {
        cameraStatusPill.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span class="text-emerald-700 font-bold">Cámara Leyendo</span>
        `;
      }
    } catch (err) {
      console.warn("No se pudo iniciar la cámara:", err);
      qrReaderDiv.classList.add('hidden');
      alert("No se pudo acceder a la cámara. Asegúrate de dar permiso o pulsa el botón rojo '¡HACER PIP!' para jugar sin cámara.");
    }
  } else {
    try {
      if (AppState.html5QrScanner) {
        await AppState.html5QrScanner.stop();
      }
    } catch (e) {
      console.warn("Error al detener cámara:", e);
    }
    qrReaderDiv.classList.add('hidden');
    AppState.cameraActive = false;
    if (cameraBtnText) cameraBtnText.textContent = "Cámara Real";
    if (cameraStatusPill) {
      cameraStatusPill.innerHTML = `
        <span class="material-symbols-outlined text-xs" data-icon="qr_code_scanner">qr_code_scanner</span>
        <span>Listo para pip</span>
      `;
    }
  }
}

// Linterna: Control de Hardware Torch con fallback a halo visual de pantalla
async function toggleTorch() {
  AppState.torchActive = !AppState.torchActive;
  const torchHalo = document.getElementById('flashlightHalo');
  const toggleTorchBtn = document.getElementById('toggleTorchBtn');
  const torchIcon = document.getElementById('torchIcon');
  const torchText = document.getElementById('torchText');

  // Si se enciende la linterna y la cámara está apagada, encender cámara para habilitar el hardware torch
  if (AppState.torchActive && !AppState.cameraActive) {
    try {
      await toggleCameraScanner();
    } catch (e) {
      console.warn("No se pudo iniciar cámara para linterna:", e);
    }
  }

  // 1. Intentar aplicar el flash real al MediaStreamTrack de la cámara si está encendida
  try {
    const videoEl = document.querySelector('#qrReaderContainer video');
    if (videoEl && videoEl.srcObject) {
      const stream = videoEl.srcObject;
      const tracks = stream.getVideoTracks();
      if (tracks && tracks.length > 0) {
        const track = tracks[0];
        const capabilities = track.getCapabilities ? track.getCapabilities() : {};
        if (capabilities.torch) {
          await track.applyConstraints({
            advanced: [{ torch: AppState.torchActive }]
          });
        }
      }
    }
  } catch (err) {
    console.warn("No se pudo aplicar torch al hardware:", err);
  }

  // 2. Feedback visual en interfaz
  if (AppState.torchActive) {
    if (torchHalo) {
      torchHalo.classList.remove('opacity-0');
      torchHalo.classList.add('opacity-100');
    }
    if (toggleTorchBtn) {
      toggleTorchBtn.classList.add('bg-amber-100', 'text-amber-900', 'border-amber-400');
      toggleTorchBtn.classList.remove('bg-surface-container', 'text-on-surface-variant');
    }
    if (torchIcon) {
      torchIcon.textContent = 'flashlight_on';
      torchIcon.classList.add('text-amber-600');
    }
    if (torchText) {
      torchText.textContent = 'Linterna ON';
    }
    playPopSound();
  } else {
    if (torchHalo) {
      torchHalo.classList.remove('opacity-100');
      torchHalo.classList.add('opacity-0');
    }
    if (toggleTorchBtn) {
      toggleTorchBtn.classList.remove('bg-amber-100', 'text-amber-900', 'border-amber-400');
      toggleTorchBtn.classList.add('bg-surface-container', 'text-on-surface-variant');
    }
    if (torchIcon) {
      torchIcon.textContent = 'flashlight_off';
      torchIcon.classList.remove('text-amber-600');
    }
    if (torchText) {
      torchText.textContent = 'Linterna';
    }
    playPopSound();
  }
}

// ==========================================
// 8. TICKET / RECIBO DE COMPRA (FINALIZAR COMPRA)
// ==========================================
function openReceiptModal() {
  if (AppState.cart.length === 0) {
    playPopSound();
    alert("¡Tu carrito está vacío! Escanea productos primero con el botón ¡HACER PIP! 🛒✨");
    return;
  }

  playChaChingSound();
  triggerHaptic();

  const modal = document.getElementById('receiptModal');
  const itemsContainer = document.getElementById('receiptItemsList');
  const totalCountSpan = document.getElementById('receiptItemTotalCount');
  const subtotalSpan = document.getElementById('receiptSubtotal');
  const finalTotalSpan = document.getElementById('receiptFinalTotal');
  const dateTimeSpan = document.getElementById('receiptDateTime');

  const now = new Date();
  if (dateTimeSpan) {
    dateTimeSpan.textContent = `Fecha: ${now.toLocaleDateString()} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  if (itemsContainer) {
    itemsContainer.innerHTML = '';
    AppState.cart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'flex justify-between items-center text-xs py-0.5';
      row.innerHTML = `
        <div class="flex items-center gap-1.5 truncate max-w-[210px]">
          <span>${item.emoji}</span>
          <span class="truncate font-body font-semibold">${item.name}</span>
        </div>
        <span class="font-mono font-bold shrink-0">${formatCurrency(item.price)}</span>
      `;
      itemsContainer.appendChild(row);
    });
  }

  const total = calculateTotal();
  if (totalCountSpan) totalCountSpan.textContent = AppState.cart.length;
  if (subtotalSpan) subtotalSpan.textContent = formatCurrency(total);
  if (finalTotalSpan) finalTotalSpan.textContent = formatCurrency(total);

  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
  }
}

function closeReceiptModal() {
  playPopSound();
  const modal = document.getElementById('receiptModal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

function startNewShopping() {
  closeReceiptModal();
  AppState.cart = [];
  updateUI();
  playPopSound();
}

// ==========================================
// 9. ASISTENTE DE CONFIGURACIÓN POR PASOS (WIZARD)
// ==========================================
let currentConfigStep = 1;
const TOTAL_CONFIG_STEPS = 4;

function setConfigStep(step) {
  currentConfigStep = Math.max(1, Math.min(TOTAL_CONFIG_STEPS, step));

  // Ocultar/Mostrar pantallas de paso
  for (let i = 1; i <= TOTAL_CONFIG_STEPS; i++) {
    const stepEl = document.getElementById(`configStep${i}`);
    if (stepEl) {
      stepEl.classList.toggle('hidden', i !== currentConfigStep);
    }
  }

  // Título e indicador de paso
  const stepLabel = document.getElementById('configStepLabel');
  const stepTitles = [
    "Paso 1: ¿Qué negocio abrimos hoy?",
    "Paso 2: Nombre y Colores",
    "Paso 3: Sonido del Escáner (Pip)",
    "Paso 4: Modo de Productos"
  ];
  if (stepLabel) {
    stepLabel.textContent = stepTitles[currentConfigStep - 1] || `Paso ${currentConfigStep} de ${TOTAL_CONFIG_STEPS}`;
  }

  // Dots de progreso
  for (let i = 1; i <= TOTAL_CONFIG_STEPS; i++) {
    const dot = document.getElementById(`stepDot${i}`);
    if (dot) {
      if (i === currentConfigStep) {
        dot.className = "w-6 h-2 rounded-full bg-primary transition-all";
      } else if (i < currentConfigStep) {
        dot.className = "w-2 h-2 rounded-full bg-primary/60 transition-all";
      } else {
        dot.className = "w-2 h-2 rounded-full bg-slate-200 transition-all";
      }
    }
  }

  // Botones de navegación
  const prevBtn = document.getElementById('configPrevBtn');
  const nextBtn = document.getElementById('configNextBtn');
  const saveBtn = document.getElementById('configSaveBtn');

  if (prevBtn) {
    prevBtn.classList.toggle('hidden', currentConfigStep === 1);
  }

  if (currentConfigStep === TOTAL_CONFIG_STEPS) {
    if (nextBtn) nextBtn.classList.add('hidden');
    if (saveBtn) saveBtn.classList.remove('hidden');
  } else {
    if (nextBtn) nextBtn.classList.remove('hidden');
    if (saveBtn) saveBtn.classList.add('hidden');
  }
}

function nextConfigStep() {
  playPopSound();
  if (currentConfigStep < TOTAL_CONFIG_STEPS) {
    setConfigStep(currentConfigStep + 1);
  }
}

function prevConfigStep() {
  playPopSound();
  if (currentConfigStep > 1) {
    setConfigStep(currentConfigStep - 1);
  }
}

function openConfigModal() {
  playPopSound();
  const modal = document.getElementById('configModal');
  const storeInput = document.getElementById('configStoreName');

  if (storeInput) storeInput.value = AppState.storeConfig.storeName;

  setConfigStep(1);
  applyStoreConfig();

  if (modal) {
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.remove('opacity-0'), 10);
  }
}

function closeConfigModal() {
  playPopSound();
  const modal = document.getElementById('configModal');
  if (!modal) return;
  modal.classList.add('opacity-0');
  setTimeout(() => modal.classList.add('hidden'), 200);
}

function saveConfigFromModal() {
  const storeInput = document.getElementById('configStoreName');
  if (storeInput && storeInput.value.trim()) {
    AppState.storeConfig.storeName = storeInput.value.trim();
  }

  saveStoredConfig();
  applyStoreConfig();
  closeConfigModal();
}

// ==========================================
// 10. INICIALIZACIÓN DE EVENTOS AL CARGAR
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  loadStoredConfig();

  // 1. Botón Manual Grande "¡HACER PIP!"
  const mainPipBtn = document.getElementById('mainPipButton');
  if (mainPipBtn) {
    mainPipBtn.addEventListener('click', () => scanProduct(null));
  }

  // 2. Tap directo en el visor de cámara para escanear
  const viewfinderArea = document.getElementById('viewfinderArea');
  if (viewfinderArea) {
    viewfinderArea.addEventListener('click', (e) => {
      // Si el click no fue en un botón interno
      if (!e.target.closest('button')) {
        scanProduct(null);
      }
    });
  }

  // 3. Botón de Sonido (Mute / Unmute)
  const soundToggle = document.getElementById('soundToggle');
  const soundIcon = document.getElementById('soundIcon');
  if (soundToggle) {
    soundToggle.addEventListener('click', () => {
      AppState.audioEnabled = !AppState.audioEnabled;
      if (soundIcon) {
        soundIcon.textContent = AppState.audioEnabled ? 'volume_up' : 'volume_off';
      }
      soundToggle.classList.toggle('bg-red-100', !AppState.audioEnabled);
      soundToggle.classList.toggle('text-red-600', !AppState.audioEnabled);
      if (AppState.audioEnabled) playScannerBeep();
    });
  }

  // 4. Controles de Carrito
  const clearCartBtn = document.getElementById('clearCartBtn');
  if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

  // 5. Cobro / Checkout
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', openReceiptModal);

  const closeReceiptBtn = document.getElementById('closeReceiptBtn');
  if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', closeReceiptModal);

  const newShoppingBtn = document.getElementById('newShoppingBtn');
  if (newShoppingBtn) newShoppingBtn.addEventListener('click', startNewShopping);

  // 6. Cámara y Linterna
  const toggleCameraBtn = document.getElementById('toggleCameraBtn');
  if (toggleCameraBtn) toggleCameraBtn.addEventListener('click', toggleCameraScanner);

  const toggleTorchBtn = document.getElementById('toggleTorchBtn');
  if (toggleTorchBtn) toggleTorchBtn.addEventListener('click', toggleTorch);

  // 7. Modal de Configuración y Navegación por Pasos
  const openConfigBtn = document.getElementById('openConfigBtn');
  if (openConfigBtn) openConfigBtn.addEventListener('click', openConfigModal);

  const closeConfigBtn = document.getElementById('closeConfigBtn');
  if (closeConfigBtn) closeConfigBtn.addEventListener('click', closeConfigModal);

  const configPrevBtn = document.getElementById('configPrevBtn');
  if (configPrevBtn) configPrevBtn.addEventListener('click', prevConfigStep);

  const configNextBtn = document.getElementById('configNextBtn');
  if (configNextBtn) configNextBtn.addEventListener('click', nextConfigStep);

  const configSaveBtn = document.getElementById('configSaveBtn');
  if (configSaveBtn) configSaveBtn.addEventListener('click', saveConfigFromModal);

  // Botón legacy si existiera
  const saveConfigBtn = document.getElementById('saveConfigBtn');
  if (saveConfigBtn) saveConfigBtn.addEventListener('click', saveConfigFromModal);

  // Opciones de modo de producto (Genérico vs Fantasía)
  document.querySelectorAll('.product-mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playPopSound();
      AppState.storeConfig.productMode = btn.dataset.mode;
      applyStoreConfig();
      saveStoredConfig();
    });
  });

  // Opciones de sonido de Pip (con prueba de sonido inmediata al tocar)
  document.querySelectorAll('.pip-sound-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const soundType = btn.dataset.sound;
      AppState.storeConfig.pipSound = soundType;

      btn.classList.add('animate-sound-pop');
      setTimeout(() => btn.classList.remove('animate-sound-pop'), 250);

      playScannerBeep(soundType);
      applyStoreConfig();
      saveStoredConfig();
    });
  });

  // Cerrar modal tocando el fondo oscuro
  const configModal = document.getElementById('configModal');
  if (configModal) {
    configModal.addEventListener('click', (e) => {
      if (e.target === configModal) {
        closeConfigModal();
      }
    });
  }

  // Desbloqueo inicial del AudioContext por políticas de navegadores y carga de MP3
  const unlockAudio = () => {
    getAudioContext();
    loadRetailAudioBuffer();
    retailAudio.load();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('click', unlockAudio, { once: true });
  window.addEventListener('touchstart', unlockAudio, { once: true });

  // Aplicar configuración y render inicial
  applyStoreConfig();
  updateUI();
});
