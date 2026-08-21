/* ==========================================================
TEXXTURALIA: DINAMICA SUBTILĂ (script.js)
   ========================================================== */

// --- 1. LOGICA INTEROGĂRII (Hamburger Menu) ---
const initMobileMenu = () => {
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  // if (menuToggle && navLinks) {
  //   menuToggle.addEventListener("click", () => {
  //     navLinks.classList.toggle("active");
  //     menuToggle.style.opacity = navLinks.classList.contains("active")
  //       ? "0.5"
  //       : "1";
  //   });
  // }

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");

      // Folosim operatorul ternar pentru a schimba opacitatea într-un mod elegant. "Dacă e activ, opacitate 0.5, altfel 1”.
      menuToggle.style.opacity = navLinks.classList.contains("active")
        ? "0.5"
        : "1";
    });
  }
};

// --- 2. FENOMENOLOGIA APARIȚIEI (Reveal System) ---
const initReveal = () => {
  console.log("Ochiul gnostic monitorizează elementele..."); // MESAJ DE CONTROL 1

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          console.log("Un element a ieșit din abis."); // MESAJ DE CONTROL 2
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => observer.observe(el));
};

// --- 3. BIBLIOTECA COLECȚIEI (Collection Filter) ---
const initCollectionFilter = () => {
  const buttons = document.querySelectorAll(".filter-btn");
  const grid = document.getElementById("collection-grid");
  if (!buttons.length || !grid) return;

  const applyFilter = (filter) => {
    const items = grid.querySelectorAll(".exhibit-item");
    items.forEach((item) => {
      const cat = item.dataset.category || "all";
      const show = filter === "all" || cat === filter;
      item.style.display = show ? "" : "none";
    });
  };

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });
};

// --- 4. GALERIA DE PRODUS (Thumbnail Swapper + Swipe) ---
const initGallery = () => {
  const galleries = document.querySelectorAll("[data-gallery]");
  galleries.forEach((gallery) => {
    const mainImg = gallery.querySelector("#gallery-main-img");
    const thumbs = gallery.querySelectorAll(".gallery-thumb");
    const strip = gallery.querySelector(".gallery-thumbs");
    if (!mainImg || !thumbs.length) return;

    const setMain = (thumb) => {
      mainImg.src = thumb.dataset.src;
      thumbs.forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
    };

thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => setMain(thumb));
    });

    // Swipe cu mâusa pe desktop (drag-horizontal pe firul de piculi imagini)
    if (strip) {
      let isDragging = false;
      let startX = 0;
      let startScroll = 0;
      strip.addEventListener("pointerdown", (e) => {
        isDragging = true;
        startX = e.clientX;
        startScroll = strip.scrollLeft;
      });
      strip.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        strip.scrollLeft = startScroll + (startX - e.clientX);
      });
      strip.addEventListener("pointerup", () => {
        isDragging = false;
      });
      strip.addEventListener("pointerleave", () => {
        isDragging = false;
      });
    }
  });
};

// --- 5. PORNIREA MECANISMULUI (Initialization) ---
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initReveal();
  initCollectionFilter();
  initGallery();
});
