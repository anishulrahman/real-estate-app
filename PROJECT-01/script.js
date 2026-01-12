// ===== Scroll-based fade-in animation =====
const fadeInElements = document.querySelectorAll(
  "#div2, #div8, #div13, #div17, #div19, #div21, #div24"
);

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

fadeInElements.forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(50px)";
  el.style.transition = "all 0.8s ease-out";
  observer.observe(el);
});

// ===== Scroll to Top Button =====
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "30px";
scrollBtn.style.right = "30px";
scrollBtn.style.padding = "10px 15px";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.border = "none";
scrollBtn.style.backgroundColor = "#aed581";
scrollBtn.style.color = "#333";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
scrollBtn.style.display = "none";
scrollBtn.style.transition = "all 0.3s ease-in-out";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ===== Card Hover Effect (Pulse) =====
const hoverCards = document.querySelectorAll(".div5, .div6, .div12, .div16, .div18, .div23, .div25");

hoverCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 20px rgba(173, 216, 230, 0.4)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "";
  });
});

// ===== Smooth Scroll Links (if you add <a href="#id"> links later) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// ===== Modal Contact Popup =====
const openModalBtn = document.getElementById("openModalBtn");
const contactModal = document.getElementById("contactModal");
const closeBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", () => {
  contactModal.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === contactModal) {
    contactModal.style.display = "none";
  }
});

// ===== Mobile Nav Toggle (if you add hamburger icon later) =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
