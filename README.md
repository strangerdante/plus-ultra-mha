# 💥 PLUS ULTRA — Boku no Hero Academia

Fan page interactiva de **Boku no Hero Academia (My Hero Academia)**. Proyecto estático construido con HTML5, CSS3 y JavaScript vanilla (sin dependencias ni build step).

![Estado](https://img.shields.io/badge/estado-listo-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

---

## ✨ Características

- **Hero / portada** con tipografía estilo cómic, líneas de velocidad animadas y contadores que se animan al entrar en pantalla.
- **Galería de personajes** (16 fichas) con filtros por rol: *Héroes*, *Villanos* y *Profesores*.
- **Modal de ficha completa** por personaje: alias, rango, Quirk, descripción y barras de estadísticas animadas.
- **Secciones informativas**: ¿Qué es un Quirk?, La Academia U.A. y CTA final.
- **Diseño responsive** (desktop, tablet y móvil) con menú lateral deslizante.
- **Accesibilidad**: navegación por teclado en tarjetas, `aria-*`, cierre del modal con `Esc` y soporte de `prefers-reduced-motion`.
- **Rendimiento**: imágenes con `loading="lazy"`, observers de intersección y animaciones vía CSS.

## 📁 Estructura del proyecto

```
plus-ultra-mha/
├── index.html      # Estructura y contenido semántico
├── styles.css      # Sistema de diseño, layout y animaciones
├── script.js       # Datos de personajes, filtros, modal e interacciones
└── img/            # Retratos de los personajes (.webp)
```

## 🧩 Requisitos

- Un navegador moderno (Chrome, Firefox, Edge o Safari en versiones recientes).
- Opcional: Python 3 o Node.js si prefieres servir el sitio con un servidor local.

## 🚀 Cómo ejecutarlo

No requiere instalación ni compilación. Basta con abrir `index.html` en el navegador.

Si prefieres servirlo con un servidor local (recomendado para evitar restricciones de `file://`):

```bash
# Opción 1: Python
python -m http.server 8000

# Opción 2: Node (npx)
npx serve .
```

Luego abre `http://localhost:8000`.

## 🎨 Personalización

Los personajes viven en el array `CHARACTERS` de `script.js`. Cada entrada sigue este esquema:

```js
{
  id: "deku",
  name: "Izuku Midoriya",
  alias: "Deku",
  role: "hero",              // "hero" | "villain" | "teacher"
  roleLabel: "Héroe · Clase 1-A",
  rank: "Nº 9 · Portador de One For All",
  quirk: "One For All",
  img: "img/deku.webp",
  desc: "…",
  stats: { Poder: 92, Velocidad: 84, Técnica: 88, Intelecto: 95, Resistencia: 82 }
}
```

Para añadir un personaje, agrega un objeto al array y coloca su imagen en `img/`. Las tarjetas y los filtros se generan automáticamente.

### Variables de diseño (`styles.css` → `:root`)

| Variable      | Uso                          |
| ------------- | ---------------------------- |
| `--red`       | Color de acento principal    |
| `--yellow`    | Acento secundario / Quirks   |
| `--ink`       | Fondo base oscuro            |
| `--font-display` | Tipografía estilo cómic   |
| `--font-body` | Tipografía de lectura        |

## 📜 Créditos

Fan page **no oficial**. *Boku no Hero Academia* © Kohei Horikoshi / Shueisha · Bones.
Las imágenes se usan con fines ilustrativos y pertenecen a sus respectivos autores.

---

**GO BEYOND — PLUS ULTRA!!!**
