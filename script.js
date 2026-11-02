/* ============================================================
   PLUS ULTRA — Boku no Hero Academia
   Lógica de interfaz: datos, galería, filtros y modal
   ============================================================ */

const CHARACTERS = [
  {
    id: "deku",
    name: "Izuku Midoriya",
    alias: "Deku",
    role: "hero",
    roleLabel: "Héroe · Clase 1-A",
    rank: "Nº 9 · Portador de One For All",
    quirk: "One For All",
    img: "img/deku.webp",
    desc: "Nacido sin Quirk en un mundo de superpoderes, Izuku heredó el One For All de All Might. Su verdadero poder no es la fuerza bruta, sino su capacidad de análisis, su empatía y una voluntad que no se rinde jamás.",
    stats: { Poder: 92, Velocidad: 84, Técnica: 88, Intelecto: 95, Resistencia: 82 }
  },
  {
    id: "bakugo",
    name: "Katsuki Bakugo",
    alias: "Dynamight",
    role: "hero",
    roleLabel: "Héroe · Clase 1-A",
    rank: "Nº 2 · Aspirante al primer puesto",
    quirk: "Explosión",
    img: "img/bakugo.webp",
    desc: "Su sudor es nitroglicerina. Agresivo, brillante y obsesionado con la victoria, Bakugo ve en Izuku al único rival digno de su esfuerzo. Un genio del combate con un orgullo inquebrantable.",
    stats: { Poder: 95, Velocidad: 90, Técnica: 86, Intelecto: 88, Resistencia: 84 }
  },
  {
    id: "todoroki",
    name: "Shoto Todoroki",
    alias: "Shoto",
    role: "hero",
    roleLabel: "Héroe · Clase 1-A",
    rank: "Hijo del Nº 1",
    quirk: "Mitad Frío, Mitad Caliente",
    img: "img/todoroki.webp",
    desc: "Hijo de Endeavor, rechazó durante años el fuego de su padre por el dolor que le causó a su familia. Al aceptar ambas mitades de su Quirk, se convirtió en uno de los talentos más completos de su generación.",
    stats: { Poder: 94, Velocidad: 82, Técnica: 90, Intelecto: 87, Resistencia: 80 }
  },
  {
    id: "uraraka",
    name: "Ochaco Uraraka",
    alias: "Uravity",
    role: "hero",
    roleLabel: "Heroína · Clase 1-A",
    rank: "Especialista en rescate",
    quirk: "Gravedad Cero",
    img: "img/uraraka.webp",
    desc: "Puede anular la gravedad de todo lo que toca. Alegre y decidida, entrena para convertirse en una heroína de rescate profesional y poder sostener económicamente a sus padres.",
    stats: { Poder: 62, Velocidad: 70, Técnica: 84, Intelecto: 80, Resistencia: 74 }
  },
  {
    id: "ida",
    name: "Tenya Ida",
    alias: "Ingenium",
    role: "hero",
    roleLabel: "Héroe · Clase 1-A",
    rank: "Delegado de clase",
    quirk: "Motor",
    img: "img/ida.webp",
    desc: "Motores en las pantorrillas que le permiten alcanzar velocidades extremas. Rígido, disciplinado y honorable: encarna el ideal del héroe que respeta las reglas para proteger a los demás.",
    stats: { Poder: 74, Velocidad: 96, Técnica: 88, Intelecto: 85, Resistencia: 78 }
  },
  {
    id: "allmight",
    name: "Toshinori Yagi",
    alias: "All Might",
    role: "teacher",
    roleLabel: "Símbolo de la Paz · Profesor",
    rank: "Nº 1 histórico",
    quirk: "One For All",
    img: "img/allmight.webp",
    desc: "El héroe que inspiró a toda una generación. Durante décadas fue el Símbolo de la Paz, el pilar que mantenía unida a la sociedad japonesa. Ahora transmite su legado a Izuku.",
    stats: { Poder: 100, Velocidad: 98, Técnica: 92, Intelecto: 88, Resistencia: 90 }
  },
  {
    id: "tsuyu",
    name: "Tsuyu Asui",
    alias: "Froppy",
    role: "hero",
    roleLabel: "Heroína · Clase 1-A",
    rank: "Especialista acuática",
    quirk: "Rana",
    img: "img/tsuyu.webp",
    desc: "Tiene las capacidades de una rana: saltos enormes, lengua prensil, camuflaje y natación perfecta. Directa y serena, es la voz de la razón del grupo y una aliada leal.",
    stats: { Poder: 68, Velocidad: 78, Técnica: 82, Intelecto: 84, Resistencia: 76 }
  },
  {
    id: "momo",
    name: "Momo Yaoyorozu",
    alias: "Creati",
    role: "hero",
    roleLabel: "Heroína · Clase 1-A",
    rank: "Estratega de élite",
    quirk: "Creación",
    img: "img/momo.webp",
    desc: "Puede crear cualquier objeto no vivo a partir de sus lípidos, siempre que conozca su composición molecular. Una mente brillante con formación académica excepcional.",
    stats: { Poder: 70, Velocidad: 66, Técnica: 92, Intelecto: 97, Resistencia: 72 }
  },
  {
    id: "kaminari",
    name: "Denki Kaminari",
    alias: "Chargebolt",
    role: "hero",
    roleLabel: "Héroe · Clase 1-A",
    rank: "Soporte eléctrico",
    quirk: "Electrificación",
    img: "img/kaminari.webp",
    desc: "Genera y descarga electricidad a voluntad. Puede paralizar a múltiples enemigos a la vez, aunque superar su límite lo deja en un estado... poco brillante.",
    stats: { Poder: 78, Velocidad: 72, Técnica: 66, Intelecto: 62, Resistencia: 70 }
  },
  {
    id: "kirishima",
    name: "Eijiro Kirishima",
    alias: "Red Riot",
    role: "hero",
    roleLabel: "Héroe · Clase 1-A",
    rank: "Tanque defensivo",
    quirk: "Endurecimiento",
    img: "img/kirishima.webp",
    desc: "Endurece su piel hasta volverse una armadura viviente. Admirador de Crimson Riot, su mayor sueño es ser un héroe que nunca dude ni retroceda ante el peligro.",
    stats: { Poder: 86, Velocidad: 68, Técnica: 78, Intelecto: 70, Resistencia: 96 }
  },
  {
    id: "shigaraki",
    name: "Tomura Shigaraki",
    alias: "Tomura Shigaraki",
    role: "villain",
    roleLabel: "Villano · Líder del Frente",
    rank: "Sucesor de All For One",
    quirk: "Desintegración",
    img: "img/shigaraki.webp",
    desc: "Todo lo que toca con los cinco dedos se desintegra. Criado en el odio, Shigaraki busca destruir la sociedad heroica desde sus cimientos y heredar el legado de All For One.",
    stats: { Poder: 96, Velocidad: 82, Técnica: 84, Intelecto: 90, Resistencia: 86 }
  },
  {
    id: "toga",
    name: "Himiko Toga",
    alias: "Toga",
    role: "villain",
    roleLabel: "Villana · Liga de Villanos",
    rank: "Infiltración y sigilo",
    quirk: "Transformación",
    img: "img/toga.webp",
    desc: "Al beber la sangre de alguien puede adoptar su apariencia por un tiempo limitado. Su obsesión por la sangre y el amor la convierte en una de las villanas más impredecibles.",
    stats: { Poder: 70, Velocidad: 88, Técnica: 86, Intelecto: 78, Resistencia: 74 }
  },
  {
    id: "dabi",
    name: "Dabi",
    alias: "Dabi",
    role: "villain",
    roleLabel: "Villano · Liga de Villanos",
    rank: "Fuego azul",
    quirk: "Llama Azul",
    img: "img/dabi.webp",
    desc: "Sus llamas superan los 2000 °C, pero queman su propio cuerpo. Detrás de su fachada fría se esconde Toya Todoroki, el hijo mayor que Endeavor creyó haber perdido.",
    stats: { Poder: 92, Velocidad: 78, Técnica: 80, Intelecto: 85, Resistencia: 66 }
  },
  {
    id: "hawks",
    name: "Keigo Takami",
    alias: "Hawks",
    role: "hero",
    roleLabel: "Héroe · Nº 2",
    rank: "Nº 2 del ranking",
    quirk: "Plumas Rígidas",
    img: "img/hawks.webp",
    desc: "Cada una de sus plumas es un arma controlable a distancia. El héroe más rápido del país, atrapado entre su deber público y una misión encubierta dentro de la Liga de Villanos.",
    stats: { Poder: 84, Velocidad: 97, Técnica: 90, Intelecto: 86, Resistencia: 76 }
  },
  {
    id: "endeavor",
    name: "Enji Todoroki",
    alias: "Endeavor",
    role: "hero",
    roleLabel: "Héroe · Nº 1",
    rank: "Nº 1 actual",
    quirk: "Hellflame",
    img: "img/endeavor.webp",
    desc: "Obsesionado durante años con superar a All Might, construyó una familia entera como herramienta para lograrlo. Hoy carga con las consecuencias y busca redimirse como el nuevo Símbolo de la Paz.",
    stats: { Poder: 97, Velocidad: 82, Técnica: 90, Intelecto: 84, Resistencia: 88 }
  },
  {
    id: "aizawa",
    name: "Shota Aizawa",
    alias: "Eraser Head",
    role: "teacher",
    roleLabel: "Profesor · Clase 1-A",
    rank: "Tutor de la 1-A",
    quirk: "Borrado",
    img: "img/aizawa.webp",
    desc: "Al mirar a alguien puede anular su Quirk. Frío, pragmático y absolutamente implacable con sus alumnos, esconde un compromiso feroz por mantenerlos con vida.",
    stats: { Poder: 76, Velocidad: 84, Técnica: 94, Intelecto: 92, Resistencia: 80 }
  },
  {
    id: "mirio",
    name: "Mirio Togata",
    alias: "Lemillion",
    role: "hero",
    roleLabel: "Héroe · Big Three",
    rank: "Big Three · Aspirante al Nº 1",
    quirk: "Permeabilidad",
    img: "img/mirio.webp",
    desc: "Atraviesa la materia a voluntad, volviéndose intangible. Su Quirk es engañosamente simple: dominarlo exige un dominio absoluto del propio cuerpo. Sonriente, humilde y con un heroísmo que no depende de tener poderes, es el orgullo de la Academia U.A.",
    stats: { Poder: 88, Velocidad: 86, Técnica: 96, Intelecto: 90, Resistencia: 84 }
  },
  {
    id: "nejire",
    name: "Nejire Hado",
    alias: "Nejire Chan",
    role: "hero",
    roleLabel: "Heroína · Big Three",
    rank: "Big Three · Fuerza de choque",
    quirk: "Onda de Choque",
    img: "img/nejire.webp",
    desc: "Convierte su propia energía vital en ondas espirales capaces de perforar el suelo o derribar a un enemigo a distancia. Curiosa hasta el extremo y con una energía inagotable, es la integrante más imprevisible de los Big Three.",
    stats: { Poder: 90, Velocidad: 80, Técnica: 84, Intelecto: 82, Resistencia: 78 }
  }
];

/* ---------- Referencias DOM ---------- */
const grid = document.getElementById("cardGrid");
const chips = document.querySelectorAll(".chip");
const modal = document.getElementById("modal");
const navbar = document.getElementById("navbar");
const navToggle = document.getElementById("navToggle");
const navLinks = document.querySelector(".nav-links");

/* ---------- Render de tarjetas ---------- */
function roleClass(role) {
  return role === "villain" ? "villain" : role === "teacher" ? "teacher" : "hero";
}

function createCard(char, index) {
  const card = document.createElement("article");
  card.className = "card";
  card.dataset.role = char.role;
  card.dataset.id = char.id;
  card.tabIndex = 0;
  card.setAttribute("role", "button");
  card.setAttribute("aria-label", `Ver ficha de ${char.name}`);

  card.innerHTML = `
    <div class="card-media">
      <span class="card-rank ${roleClass(char.role)}">${char.rank}</span>
      <img src="${char.img}" alt="${char.name} — ${char.alias}" loading="lazy" />
    </div>
    <div class="card-info">
      <p class="card-alias">${char.alias}</p>
      <h3 class="card-name">${char.name}</h3>
      <span class="card-quirk">${char.quirk}</span>
      <p class="card-cta">VER FICHA →</p>
    </div>
  `;

  card.addEventListener("click", () => openModal(char));
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openModal(char);
    }
  });

  // Animación de entrada escalonada (con red de seguridad: nunca queda invisible)
  const delay = 60 * index;
  setTimeout(() => card.classList.add("visible"), delay);
  setTimeout(() => card.classList.add("visible"), delay + 900);
  return card;
}

CHARACTERS.forEach((char, i) => grid.appendChild(createCard(char, i)));

/* ---------- Filtros ---------- */
chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    chips.forEach((c) => {
      c.classList.remove("active");
      c.setAttribute("aria-selected", "false");
    });
    chip.classList.add("active");
    chip.setAttribute("aria-selected", "true");

    const filter = chip.dataset.filter;
    document.querySelectorAll(".card").forEach((card) => {
      const show = filter === "all" || card.dataset.role === filter;
      card.classList.toggle("hidden", !show);
      // Al mostrarse de nuevo, garantizamos opacidad total (sin velo ni parpadeos)
      if (show) {
        card.classList.add("visible");
        card.style.opacity = "1";
      }
    });
  });
});

/* ---------- Modal ---------- */
let lastFocused = null;

function openModal(char) {
  lastFocused = document.activeElement;

  document.getElementById("modalImg").src = char.img;
  document.getElementById("modalImg").alt = `${char.name} — ${char.alias}`;
  document.getElementById("modalRank").textContent = char.rank;
  document.getElementById("modalAlias").textContent = char.alias;
  document.getElementById("modalName").textContent = char.name;
  document.getElementById("modalRole").textContent = char.roleLabel;
  document.getElementById("modalQuirk").textContent = `Quirk: ${char.quirk}`;
  document.getElementById("modalDesc").textContent = char.desc;

  const bars = document.getElementById("powerBars");
  bars.innerHTML = "";
  Object.entries(char.stats).forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "power-row";
    row.innerHTML = `
      <div class="power-label"><span>${label}</span><span>${value}</span></div>
      <div class="power-track"><div class="power-fill" data-value="${value}"></div></div>
    `;
    bars.appendChild(row);
  });

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  requestAnimationFrame(() => {
    setTimeout(() => {
      bars.querySelectorAll(".power-fill").forEach((fill) => {
        fill.style.width = fill.dataset.value + "%";
      });
    }, 120);
  });

  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocused) lastFocused.focus();
}

modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
});

/* ---------- Navbar scroll ---------- */
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 40);
}, { passive: true });

/* ---------- Menú móvil ---------- */
navToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  navToggle.classList.toggle("open", open);
  navToggle.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

/* ---------- Contadores animados ---------- */
const counters = document.querySelectorAll("[data-count]");
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(target * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.6 });

counters.forEach((c) => counterObserver.observe(c));

/* ---------- Aparición de secciones al hacer scroll ---------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".quirk-card, .academy-card, .section-head").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(24px)";
  el.style.transition = "opacity 0.7s ease, transform 0.7s cubic-bezier(0.2,0.8,0.3,1)";
  revealObserver.observe(el);

  // Red de seguridad: si el observer no dispara, el bloque se muestra igualmente
  setTimeout(() => {
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 2000);
});
