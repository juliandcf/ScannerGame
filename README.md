# Súper Pip! - Juego de Caja Registradora de Juguete 🛒✨

[![GitHub Pages](https://img.shields.io/badge/Demo_en_Vivo-GitHub_Pages-brightgreen?style=for-the-badge&logo=github)](https://juliandcf.github.io/ScannerGame/)

> **¡El juego web interactivo definitivo para jugar a la tienda y al supermercado!**  
> Diseñado especialmente para celulares, tablets y computadoras, pensado para niños y niñas de 7 a 10 años.

🎮 **[👉 ¡TOCA AQUÍ PARA JUGAR EL DEMO EN VIVO! 🚀](https://juliandcf.github.io/ScannerGame/)**

---

## 🎈 ¿De qué se trata el juego?

**Súper Pip!** convierte cualquier teléfono móvil o tablet en una **caja registradora de juguete profesional**. Permite a los más chicos simular que atienden su propio negocio jugando con amigos, hermanitos o la familia.

Los niños pueden:
- **Escanear objetos reales de la casa** usándolos como productos utilizando la cámara del celular (detecta códigos de barras y QR reales).
- **Usar el botón gigante "¡HACER PIP!"** si prefieren jugar sin cámara o con objetos de juguete.
- **Elegir entre 12 tipos de comercios** distintos: *Supermercado*, *Tienda de Maquillajes 💄*, *Juguetería*, *Verdulería*, *Heladería*, *Panadería*, *Librería*, *Farmacia*, *Veterinaria*, *Consultorio Médico*, *Carnicería* y *Bazar*.
- **Personalizar el nombre y colores del negocio** con 5 paletas súper llamativas (*Caramelo & Fresa*, *Súper Héroes*, *Bosque Mágico*, *Galaxia Mágica*, *Día de Sol*) que transforman visualmente toda la aplicación en tiempo real.
- **Escuchar sonidos realistas de supermercado**:
  - Sonido "Pip!" al registrar cada producto, impresion de ticket y cierre de caja registradora

---

## 🌟 Características Destacadas

1. **📸 Lector de Códigos y QR con Cámara Real + Linterna**:
   - Escanea códigos EAN-13, EAN-8, QR y más con la cámara trasera.
   - Incluye botón de linterna para encender el flash físico del teléfono en entornos oscuros.
2. **🔊 Efectos de Audio Realistas e Hiper-Responsiros**:
   - Motor de audio dual de baja latencia (**Web Audio API** + **HTML5 Audio**).
   - 7 opciones de sonido del lector Pip! (Súper Real MP3, Clásico, Láser, Bip-Bip, Campanita, Burbuja y Sorpresa).
3. **🎨 Asistente de Configuración por Pasos (Sin Scroll en Móviles)**:
   - Configuración en 4 pasos (*Rubro*, *Nombre y Colores*, *Sonido*, *Modo de Productos*) sin problemas de desplazamiento en celulares.
4. **🛍️ Modos de Juego Flexibles**:
   - **Escáner de Casa (Solo Códigos)**: Para asignar precios e inventario a cualquier empaque real de la casa.
   - **Nombres Divertidos**: Muestra productos temáticos según el comercio (ej. *Labial Mágico*, *Medialunas*, *Paleta de Sombras*, *Osito de Peluche*).
5. **🧾 Ticket de Compra Imprimible de Juguete**:
   - Desglose con fecha, hora, total a pagar en Pesos (`$`), código de barras y felicitaciones.
6. **📱 App Web Instalable (PWA)**:
   - Se puede agregar a la pantalla de inicio del celular y jugar en pantalla completa como una app nativa.

---

## 🔗 Enlace al Demo en Vivo

Puedes acceder a la versión web desplegada y lista para jugar en GitHub Pages:

👉 **[https://juliandcf.github.io/ScannerGame/](https://juliandcf.github.io/ScannerGame/)**

---

## 📱 Cómo instalarlo en tu Celular (Pantalla Completa)

Gracias a su soporte PWA, puedes agregarlo a la pantalla de inicio de tu teléfono sin necesidad de descargar nada de la tienda de aplicaciones:

- **En Android (Chrome):**
  1. Entra a [https://juliandcf.github.io/ScannerGame/](https://juliandcf.github.io/ScannerGame/) en Chrome.
  2. Toca los tres puntos arriba a la derecha.
  3. Selecciona **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.

- **En iPhone / iPad (Safari):**
  1. Entra al enlace en Safari.
  2. Toca el botón de **Compartir** (el icono de cuadrado con flecha hacia arriba).
  3. Selecciona **"Agregar al inicio"**.

---

## 💻 Desarrollo y Ejecución Local

Si deseas probar el proyecto localmente o realizar modificaciones:

1. Clona el repositorio:
   ```bash
   git clone git@github.com:juliandcf/ScannerGame.git
   ```
2. Inicia un servidor HTTP local (necesario para el acceso a la cámara y los archivos audio `.mp3`):
   ```bash
   npx serve .
   # O con Python:
   python -m http.server 8000
   ```
3. Abre `http://localhost:8000` en tu navegador.
