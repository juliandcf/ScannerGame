# Súper Pip! - Caja Registradora de Juguete 🛒✨

Una aplicación web interactiva diseñada especialmente para celulares, inspirada en los juguetes de supermercado para jugar con niños y niñas.

Simula un lector de códigos de barra y QR con el sonido **"pip"** clásico de los supermercados, asignación de precios aleatorios, acumulación de totales en vivo, ticket de compra con sonido *"cha-ching"* y confeti, y un botón táctil grande si no se utiliza la cámara.

---

## 🌟 Características

1. **Lector de Códigos y QR con Cámara Real:**
   - Detecta códigos de barras y códigos QR reales de productos de la casa o juguetes usando la cámara trasera.
   - Cuenta con un rayo láser animado y esquinas de enfoque estilo escáner comercial.
2. **Sonido "Pip" Hiperrealista (Web Audio API):**
   - Sintetizador de audio nativo (tono sinusoidal de 2250Hz) que no requiere descargar archivos de audio ni internet.
   - Retroalimentación háptica (vibración en celulares) y destello verde en pantalla al registrar cada producto.
3. **Botón Manual Gigante "¡HACER PIP!":**
   - Si no quieres activar la cámara, o los juguetes no tienen código, puedes presionar el botón rojo 3D o tocar el visor para escanear productos inmediatamente.
4. **Catálogo Infantil y Precios Aleatorios:**
   - Más de 25 productos divertidos con emojis (chocolates, frutas, peluches, pizzas, cereales, etc.).
   - Precios aleatorios calculados en cada escaneo para hacer la experiencia divertida y cambiante.
5. **Finalizar Compra y Ticket de Supermercado:**
   - Muestra la suma total en tiempo real.
   - El botón **"Finalizar Compra"** reproduce la campanilla de caja registradora (*"cha-ching"*), lanza confeti y despliega el ticket detallado con fecha, hora, productos y código de barras.
   - Botón **"¡Nueva Compra!"** para reiniciar el carrito y seguir jugando.
6. **Personalización del Negocio:**
   - Botón de tienda para personalizar el nombre del supermercado (ej: *Súper Sofi*, *Minimarket Mágico*) y el nombre del cajero/a estrella (el nombre de tu sobrina).

---

## 🚀 Cómo probarlo localmente

Puedes hacer doble clic en `index.html` para abrirlo directamente en cualquier navegador (Chrome, Edge, Safari, Firefox).

Para probar la cámara en tu celular en la misma red Wi-Fi:
1. Abre una terminal en esta carpeta.
2. Inicia un servidor web local sencillo:
   ```bash
   python -m http.server 8000
   ```
3. En tu celular, entra a `http://TU_IP_LOCAL:8000`.

---

## 🌐 Cómo publicarlo gratis (GitHub Pages / Google)

Para que tu sobrina y tú puedan entrar desde cualquier celular simplemente tocando un enlace (y para que el navegador permita el uso de la cámara, que requiere HTTPS):

### Opción 1: GitHub Pages (Recomendado, 2 minutos)
1. Entra a [github.com](https://github.com) y crea un nuevo repositorio (por ejemplo `caja-registradora`).
2. Sube estos archivos (`index.html`, `style.css`, `app.js`, `manifest.json`).
3. Ve a **Settings** > **Pages** en tu repositorio.
4. En **Branch**, selecciona `main` (o `master`) y guarda.
5. ¡Listo! Te dará un enlace como `https://tu-usuario.github.io/caja-registradora/`.

### Opción 2: Google Sites / Firebase Hosting
- En **Google Sites**, puedes insertar la aplicación mediante el bloque **"Insertar" -> "Código embebido"** o vincularla a un subdominio.
- También puedes subir esta carpeta a servicios de hosting estático gratuitos de 1 clic como **Vercel**, **Netlify** o **Firebase Hosting**.

---

## 📱 Cómo instalarlo como app en el celular

Gracias al archivo `manifest.json`, puedes instalarlo en la pantalla de inicio del teléfono:

- **En Android (Chrome):** Toca los tres puntos arriba a la derecha > **"Agregar a la pantalla principal"** o **"Instalar aplicación"**.
- **En iPhone (Safari):** Toca el botón de Compartir (el cuadrito con la flecha hacia arriba) > **"Agregar al inicio"**.

¡Se abrirá en pantalla completa sin barras de navegación, luciendo exactamente como una app de juguete real!
