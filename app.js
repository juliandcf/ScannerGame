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
    roleTitle: "Cajera Oficial:",
    defaultStore: "Súper Sofi",
    subtitle: "Supermercado de Juguete",
    receiptTitle: "TICKET DE SUPERMERCADO",
    genericItemPrefix: "Producto",
    defaultNames: ["✨ Súper Sofi", "⚡ Hiper Chispita", "🛒 Don Pip"],
    catalog: PRODUCTS_CATALOG
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
      { name: "Cucurucho Doble Bocha", emoji: "🍦", minPrice: 250, maxPrice: 500, code: "CUC" },
      { name: "Palito de Agua Frutal", emoji: "🍭", minPrice: 120, maxPrice: 240, code: "PAL" },
      { name: "Copa Helada Gigante", emoji: "🍨", minPrice: 400, maxPrice: 850, code: "COP" },
      { name: "Pote de Dulce de Leche", emoji: "🍯", minPrice: 350, maxPrice: 750, code: "POT" },
      { name: "Sundae con Salsa", emoji: "🍧", minPrice: 300, maxPrice: 600, code: "SUN" },
      { name: "Palito Bombón", emoji: "🍫", minPrice: 180, maxPrice: 360, code: "BOM" }
    ]
  }
};

// ==========================================
// 2. ESTADO DE LA APLICACIÓN
// ==========================================
const AppState = {
  cart: [],
  points: 0,
  audioEnabled: true,
  cameraActive: false,
  html5QrScanner: null,
  torchActive: false,
  isScanningCoolDown: false,
  storeConfig: {
    storeName: "Súper Sofi",
    cashierName: "Sofi Estrella",
    currency: "⭐ Pips",
    currencyPrefix: "$",
    productMode: "generic", // "generic" = No dice qué producto es (Producto #1, #2). "fantasy" = Chocolate, Banana...
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

// Objeto Audio pre-cargado para el sonido MP3 de caja de supermercado
const retailAudio = new Audio('retail-checkout-beep-sound.mp3');
retailAudio.preload = 'auto';

// Búfer opcional en Web Audio API para latencia cero (0ms)
let retailAudioBuffer = null;

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

// Carga el audio MP3 en memoria de Web Audio API si está disponible
function loadRetailAudioBuffer() {
  try {
    const ctx = getAudioContext();
    if (!ctx || retailAudioBuffer) return;
    fetch('retail-checkout-beep-sound.mp3')
      .then(res => {
        if (!res.ok) throw new Error('Error al cargar archivo');
        return res.arrayBuffer();
      })
      .then(arr => ctx.decodeAudioData(arr))
      .then(decoded => {
        retailAudioBuffer = decoded;
      })
      .catch(() => {
        // En caso de CORS o protocolo file://, el reproductor de Audio estándar funcionará perfectamente
      });
  } catch (e) {
    // Silencioso
  }
}

/**
 * Reproduce el sonido de caja de supermercado real del archivo MP3
 */
function playRetailBeep() {
  if (!AppState.audioEnabled) return;

  // 1. Intentar reproducción con búfer Web Audio API (0ms de latencia)
  try {
    const ctx = getAudioContext();
    if (ctx && retailAudioBuffer) {
      const source = ctx.createBufferSource();
      source.buffer = retailAudioBuffer;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.75, ctx.currentTime);
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(0);
      return;
    }
  } catch (e) {
    // Si falla, pasamos al fallback
  }

  // 2. Fallback con elemento Audio HTML5 (clonado para permitir escaneos rápidos seguidos)
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
  AppState.points += 10;

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

// Formatear precio según moneda seleccionada
function formatCurrency(amount) {
  const symbol = AppState.storeConfig.currencyPrefix || "$";
  return `${symbol}${amount.toLocaleString('es-AR')}`;
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
  const streakPoints = document.getElementById('streakPoints');

  const totalCount = AppState.cart.length;
  const totalAmount = calculateTotal();

  if (headerItemCount) headerItemCount.textContent = totalCount;
  if (cartCountBadge) cartCountBadge.textContent = totalCount;
  if (streakPoints) streakPoints.textContent = `${AppState.points} pts`;
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
    itemEl.className = 'bg-surface-container-lowest rounded-2xl p-3.5 border-2 border-outline-variant toy-card flex items-center justify-between gap-3 animate-card-enter';
    itemEl.innerHTML = `
      <div class="flex items-center gap-3 min-w-0">
        <div class="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-2xl shadow-inner shrink-0">
          ${item.emoji}
        </div>
        <div class="truncate">
          <h3 class="text-headline-sm font-headline-sm text-on-surface leading-snug truncate">${item.name}</h3>
          <div class="flex items-center gap-2 mt-0.5">
            <span class="text-label-sm font-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded font-mono">${item.code}</span>
            <span class="text-body-sm font-body-sm text-outline text-xs">${item.time}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 shrink-0">
        <div class="bg-amber-100 text-amber-900 font-price-display text-headline-sm px-2.5 py-1 rounded-xl font-bold -rotate-2 shadow-sm border border-amber-300">
          ${formatCurrency(item.price)}
        </div>
        <button onclick="removeCartItem('${item.id}')" class="w-9 h-9 rounded-xl bg-red-100 text-red-700 flex items-center justify-center hover:bg-red-200 active:scale-90 transition-all" title="Quitar">
          <span class="material-symbols-outlined text-base" data-icon="delete">delete</span>
        </button>
      </div>
    `;
    itemsContainer.appendChild(itemEl);
  });
}

// Aplicar configuración de la tienda a los textos y al tema visual de la app
function applyStoreConfig() {
  const currentTheme = COMMERCE_THEMES[AppState.storeConfig.commerceType] || COMMERCE_THEMES.supermarket;

  // 1. Aplicar clase de tema a <body>
  document.body.className = `bg-surface font-body text-on-surface antialiased select-none pb-28 theme-${currentTheme.id}`;

  // 2. Actualizar icono y subtítulo del encabezado
  const storeIcon = document.getElementById('storeIcon');
  if (storeIcon) storeIcon.textContent = currentTheme.icon;

  const storeSubtitle = document.getElementById('storeCategorySubtitle');
  if (storeSubtitle) storeSubtitle.textContent = AppState.storeConfig.storeName || currentTheme.defaultStore;

  const storeNameEls = document.querySelectorAll('.dynamic-store-name');
  storeNameEls.forEach(el => el.textContent = AppState.storeConfig.storeName || currentTheme.defaultStore);

  const cashierEls = document.querySelectorAll('.dynamic-cashier-name');
  cashierEls.forEach(el => el.textContent = AppState.storeConfig.cashierName);

  // 3. Rol y emoji de la cajera/profesional
  const cashierBadgeEmoji = document.getElementById('cashierBadgeEmoji');
  if (cashierBadgeEmoji) cashierBadgeEmoji.textContent = currentTheme.emoji;

  const cashierRoleTitle = document.getElementById('cashierRoleTitle');
  if (cashierRoleTitle) cashierRoleTitle.textContent = currentTheme.roleTitle;

  // 4. Ticket de compra
  const receiptStoreCategory = document.getElementById('receiptStoreCategory');
  if (receiptStoreCategory) receiptStoreCategory.textContent = currentTheme.receiptTitle;

  // 5. Moneda
  const currencyBadge = document.getElementById('currencyBadge');
  if (currencyBadge) currencyBadge.textContent = AppState.storeConfig.currency;

  // 6. Selector de comercios y chips de sugerencias
  renderCommerceTypeButtons();
  updateSuggestionChips();

  // 7. Actualizar botones de modo de producto en el modal
  const btnGen = document.getElementById('btnModeGeneric');
  const btnFan = document.getElementById('btnModeFantasy');
  if (btnGen && btnFan) {
    if (AppState.storeConfig.productMode === "fantasy") {
      btnFan.classList.add('border-primary', 'bg-sky-100', 'text-primary');
      btnFan.classList.remove('border-outline-variant', 'bg-white', 'bg-surface-container-low', 'text-on-surface-variant');
      btnGen.classList.remove('border-primary', 'bg-sky-100', 'text-primary');
      btnGen.classList.add('border-outline-variant', 'bg-white', 'text-on-surface-variant');
    } else {
      btnGen.classList.add('border-primary', 'bg-sky-100', 'text-primary');
      btnGen.classList.remove('border-outline-variant', 'bg-white', 'bg-surface-container-low', 'text-on-surface-variant');
      btnFan.classList.remove('border-primary', 'bg-sky-100', 'text-primary');
      btnFan.classList.add('border-outline-variant', 'bg-white', 'text-on-surface-variant');
    }
  }

  // 8. Actualizar botones de sonido del Pip en el modal
  const currentSound = AppState.storeConfig.pipSound || 'retail';
  document.querySelectorAll('.pip-sound-btn').forEach(btn => {
    if (btn.dataset.sound === currentSound) {
      btn.classList.add('border-primary', 'bg-sky-100', 'text-primary', 'ring-2', 'ring-primary/40');
      btn.classList.remove('border-outline-variant', 'bg-white', 'bg-surface-container-low', 'text-on-surface-variant');
    } else {
      btn.classList.remove('border-primary', 'bg-sky-100', 'text-primary', 'ring-2', 'ring-primary/40');
      btn.classList.add('border-outline-variant', 'bg-white', 'text-on-surface-variant');
    }
  });

  // 9. Actualizar botones de moneda
  const currentCurr = AppState.storeConfig.currency || "⭐ Pips";
  document.querySelectorAll('.currency-opt-btn').forEach(btn => {
    if (btn.dataset.currency === currentCurr) {
      btn.classList.add('border-primary', 'bg-sky-100', 'text-primary', 'ring-2', 'ring-primary/40');
      btn.classList.remove('border-outline-variant', 'bg-white', 'bg-surface-container-low', 'text-on-surface-variant');
    } else {
      btn.classList.remove('border-primary', 'bg-sky-100', 'text-primary', 'ring-2', 'ring-primary/40');
      btn.classList.add('border-outline-variant', 'bg-white', 'text-on-surface-variant');
    }
  });

  // 10. Actualizar selección de chips de cajero/a
  const currentCashier = AppState.storeConfig.cashierName;
  document.querySelectorAll('.cashier-quick-btn').forEach(btn => {
    if (btn.dataset.name === currentCashier) {
      btn.classList.add('bg-primary', 'text-white', 'border-primary');
      btn.classList.remove('bg-white', 'text-on-surface', 'border-outline-variant');
    } else {
      btn.classList.remove('bg-primary', 'text-white', 'border-primary');
      btn.classList.add('bg-white', 'text-on-surface', 'border-outline-variant');
    }
  });

  updateUI();
}

function renderCommerceTypeButtons() {
  const container = document.getElementById('commerceTypesContainer');
  if (!container) return;

  const currentTypeId = AppState.storeConfig.commerceType || 'supermarket';
  container.innerHTML = '';

  Object.values(COMMERCE_THEMES).forEach(theme => {
    const isSelected = theme.id === currentTypeId;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `p-2 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${
      isSelected
        ? 'border-primary bg-sky-100 text-primary font-bold shadow-sm'
        : 'border-outline-variant bg-white text-on-surface-variant hover:border-primary/50'
    }`;
    btn.innerHTML = `
      <span class="text-xl">${theme.emoji}</span>
      <span class="text-[11px] font-headline mt-0.5 leading-tight text-center">${theme.name}</span>
    `;
    btn.addEventListener('click', () => {
      playPopSound();
      AppState.storeConfig.commerceType = theme.id;
      // Proponer nombre del local de ese comercio
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

function updateSuggestionChips() {
  const container = document.getElementById('suggestionChipsContainer');
  if (!container) return;
  const currentTheme = COMMERCE_THEMES[AppState.storeConfig.commerceType] || COMMERCE_THEMES.supermarket;
  container.innerHTML = '';

  (currentTheme.defaultNames || []).forEach(name => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'chip-suggest-btn text-[11px] font-headline font-bold px-2.5 py-1 rounded-full bg-surface-container text-primary hover:bg-primary hover:text-white transition-all';
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

// ==========================================
// 7. CÁMARA Y LECTOR QR / CÓDIGOS DE BARRA
// ==========================================
async function toggleCameraScanner() {
  const cameraBtnText = document.getElementById('cameraBtnText');
  const cameraStatusPill = document.getElementById('cameraStatusPill');
  const qrReaderDiv = document.getElementById('qrReaderContainer');

  if (!AppState.cameraActive) {
    // Iniciar cámara con Html5Qrcode
    try {
      if (typeof Html5Qrcode === "undefined") {
        alert("El módulo de cámara no está disponible offline. Puedes escanear tocando el visor o el botón rojo.");
        return;
      }

      if (!AppState.html5QrScanner) {
        // Soporte completo para códigos de barra de supermercado (EAN-13, UPC, Code 128, etc.) y QR
        const formatsToSupport = (typeof Html5QrcodeSupportedFormats !== "undefined")
          ? [
              Html5QrcodeSupportedFormats.QR_CODE,
              Html5QrcodeSupportedFormats.EAN_13,
              Html5QrcodeSupportedFormats.EAN_8,
              Html5QrcodeSupportedFormats.CODE_128,
              Html5QrcodeSupportedFormats.CODE_39,
              Html5QrcodeSupportedFormats.UPC_A,
              Html5QrcodeSupportedFormats.UPC_E,
              Html5QrcodeSupportedFormats.CODABAR,
              Html5QrcodeSupportedFormats.ITF
            ]
          : undefined;

        AppState.html5QrScanner = new Html5Qrcode("qrReaderContainer", formatsToSupport ? { formatsToSupport, verbose: false } : undefined);
      }

      qrReaderDiv.classList.remove('hidden');

      const config = {
        fps: 15,
        qrbox: (viewfinderWidth, viewfinderHeight) => {
          // Visor panorámico para captar rápido códigos de barra horizontales
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
        (decodedText, decodedResult) => {
          // Código detectado exitosamente (sea QR o código de barras de cualquier producto)
          scanProduct(decodedText);
        },
        (errorMessage) => {
          // Parseo continuo de frames
        }
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
      alert("No se pudo acceder a la cámara trasera. Asegúrate de dar permiso o pulsa el botón '¡HACER PIP!' para jugar sin cámara.");
    }
  } else {
    // Detener cámara
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
        <span class="material-symbols-outlined text-label-sm" data-icon="qr_code_scanner">qr_code_scanner</span>
        <span>Listo para pip</span>
      `;
    }
  }
}

// Linterna simulada / real
function toggleTorch() {
  AppState.torchActive = !AppState.torchActive;
  const torchHalo = document.getElementById('flashlightHalo');
  const toggleTorchBtn = document.getElementById('toggleTorchBtn');

  if (AppState.torchActive) {
    if (torchHalo) {
      torchHalo.classList.remove('opacity-0');
      torchHalo.classList.add('opacity-100');
    }
    if (toggleTorchBtn) {
      toggleTorchBtn.classList.add('bg-amber-100', 'text-amber-900');
    }
  } else {
    if (torchHalo) {
      torchHalo.classList.remove('opacity-100');
      torchHalo.classList.add('opacity-0');
    }
    if (toggleTorchBtn) {
      toggleTorchBtn.classList.remove('bg-amber-100', 'text-amber-900');
    }
  }
}

// ==========================================
// 8. TICKET / RECIBO DE COMPRA (FINALIZAR COMPRA)
// ==========================================
function openReceiptModal() {
  if (AppState.cart.length === 0) {
    // Alerta divertida
    playPopSound();
    alert("¡Tu carrito está vacío! Escanea productos primero con el botón ¡HACER PIP! 🛒✨");
    return;
  }

  // Sonido auténtico de registradora
  playChaChingSound();
  triggerHaptic();

  // ¡Lluvia de confeti festivo para los niños!
  if (typeof confetti === "function") {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 }
    });
  }

  const modal = document.getElementById('receiptModal');
  const dateTimeSpan = document.getElementById('receiptDateTime');
  const itemsList = document.getElementById('receiptItemsList');
  const totalCountSpan = document.getElementById('receiptItemTotalCount');
  const subtotalSpan = document.getElementById('receiptSubtotal');
  const finalTotalSpan = document.getElementById('receiptFinalTotal');

  const now = new Date();
  if (dateTimeSpan) {
    dateTimeSpan.textContent = `Fecha: ${now.toLocaleDateString('es-AR')} ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  }

  if (itemsList) {
    itemsList.innerHTML = '';
    AppState.cart.forEach(item => {
      const row = document.createElement('div');
      row.className = 'flex justify-between items-center text-xs py-0.5';
      row.innerHTML = `
        <div class="flex items-center gap-1.5 truncate pr-2">
          <span>${item.emoji}</span>
          <span class="truncate">${item.name}</span>
        </div>
        <span class="font-bold shrink-0">${formatCurrency(item.price)}</span>
      `;
      itemsList.appendChild(row);
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
// 9. MODAL DE CONFIGURACIÓN DEL LOCAL
// ==========================================
function openConfigModal() {
  playPopSound();
  const modal = document.getElementById('configModal');
  const storeInput = document.getElementById('configStoreName');
  const cashierInput = document.getElementById('configCashierName');

  if (storeInput) storeInput.value = AppState.storeConfig.storeName;
  if (cashierInput) cashierInput.value = AppState.storeConfig.cashierName;

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
  const cashierInput = document.getElementById('configCashierName');

  if (storeInput && storeInput.value.trim()) {
    AppState.storeConfig.storeName = storeInput.value.trim();
  }
  if (cashierInput && cashierInput.value.trim()) {
    AppState.storeConfig.cashierName = cashierInput.value.trim();
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

  // 7. Modal de Configuración
  const openConfigBtn = document.getElementById('openConfigBtn');
  if (openConfigBtn) openConfigBtn.addEventListener('click', openConfigModal);

  const closeConfigBtn = document.getElementById('closeConfigBtn');
  if (closeConfigBtn) closeConfigBtn.addEventListener('click', closeConfigModal);

  const saveConfigBtn = document.getElementById('saveConfigBtn');
  if (saveConfigBtn) saveConfigBtn.addEventListener('click', saveConfigFromModal);

  // Opciones de moneda en configuración
  document.querySelectorAll('.currency-opt-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      playPopSound();
      document.querySelectorAll('.currency-opt-btn').forEach(b => {
        b.classList.remove('border-primary', 'bg-sky-100', 'ring-2', 'ring-primary/40');
        b.classList.add('border-outline-variant', 'bg-white');
      });
      btn.classList.remove('border-outline-variant', 'bg-white');
      btn.classList.add('border-primary', 'bg-sky-100', 'ring-2', 'ring-primary/40');

      AppState.storeConfig.currency = btn.dataset.currency;
      AppState.storeConfig.currencyPrefix = btn.dataset.prefix || "$";
    });
  });

  // Opciones de modo de producto (Genérico vs Fantasía)
  document.querySelectorAll('.product-mode-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      playPopSound();
      AppState.storeConfig.productMode = btn.dataset.mode;
      applyStoreConfig();
      saveStoredConfig();
    });
  });

  // Opciones de sonido de Pip (con prueba de sonido inmediata al tocar)
  document.querySelectorAll('.pip-sound-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const soundType = btn.dataset.sound;
      AppState.storeConfig.pipSound = soundType;

      // Animación pop visual al tocar
      btn.classList.add('animate-sound-pop');
      setTimeout(() => btn.classList.remove('animate-sound-pop'), 250);

      // Reproducir sonido para que escuchen la prueba inmediatamente
      playScannerBeep(soundType);
      applyStoreConfig();
      saveStoredConfig();
    });
  });

  // Chips rápidos de cajero/a para niños
  document.querySelectorAll('.cashier-quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      playPopSound();
      const cashierInput = document.getElementById('configCashierName');
      if (cashierInput && btn.dataset.name) {
        cashierInput.value = btn.dataset.name;
        AppState.storeConfig.cashierName = btn.dataset.name;
      }
      document.querySelectorAll('.cashier-quick-btn').forEach(b => {
        b.classList.remove('bg-primary', 'text-white', 'border-primary');
        b.classList.add('bg-white', 'text-on-surface', 'border-outline-variant');
      });
      btn.classList.remove('bg-white', 'text-on-surface', 'border-outline-variant');
      btn.classList.add('bg-primary', 'text-white', 'border-primary');
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
