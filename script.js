/* TEXXTURALIA: THE SUBTLE DYNAMICS (script.js)
   Handles the quiet interactions: hamburger menu, scroll reveal,
   collection filtering, and the product gallery thumbnail swapper.
   ========================================================================== */

// --- 1. HAMBURGER MENU LOGIC ---
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

      // Use the ternary operator for a clean opacity change: "If active, opacity 0.5, otherwise 1".
      menuToggle.style.opacity = navLinks.classList.contains("active")
        ? "0.5"
        : "1";
    });
  }
};

// --- 2. THE REVEAL SYSTEM (scroll-triggered appearance) ---
const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
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

// --- 3. COLLECTION LIBRARY (Collection Filter) ---
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

// --- 4. PRODUCT GALLERY (Thumbnail Swapper + Slider) ---
const initGallery = () => {
  const galleries = document.querySelectorAll("[data-gallery]");
  galleries.forEach((gallery) => {
    const mainImg = gallery.querySelector("#gallery-main-img");
    const thumbs = gallery.querySelectorAll(".gallery-thumb");
    const viewport = gallery.querySelector(".gallery-thumbs");
    if (!mainImg || !thumbs.length) return;

    const setMain = (thumb) => {
      mainImg.src = thumb.dataset.src;
      thumbs.forEach((t) => t.classList.remove("is-active"));
      thumb.classList.add("is-active");
    };

    // Slider: mouse drag on the native scroll container.
    if (viewport) {
      let isDragging = false;
      let startX = 0;
      let startScroll = 0;
      let moved = 0;

      viewport.addEventListener("pointerdown", (e) => {
        isDragging = true;
        moved = 0;
        startX = e.clientX;
        startScroll = viewport.scrollLeft;
      });
      viewport.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const dx = startX - e.clientX;
        moved += Math.abs(dx);
        viewport.scrollLeft = startScroll + dx;
      });
      const endDrag = () => {
        isDragging = false;
      };
      viewport.addEventListener("pointerup", endDrag);
      viewport.addEventListener("pointerleave", endDrag);

      // Click on a thumbnail — select it, but not after a real drag.
      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", () => {
          if (moved > 10) return; // it was a drag, not a click
          setMain(thumb);
        });
      });
    }
  });
};

// --- 5. TURNING ON THE MECHANISM (Initialization) ---
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initReveal();
  initCollectionFilter();
  initGallery();
});
