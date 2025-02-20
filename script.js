document.addEventListener("DOMContentLoaded", () => {
    // Gestion du menu hamburger
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");
  
    if (hamburger && menu) {
      // Toggle du menu et gestion de l'attribut aria-expanded
      hamburger.addEventListener("click", (event) => {
        menu.classList.toggle("active");
        hamburger.setAttribute("aria-expanded", menu.classList.contains("active"));
        event.stopPropagation(); // Pour éviter que le clic ne ferme immédiatement le menu
      });
  
      // Fermer le menu lorsqu'on clique en dehors
      document.addEventListener("click", (event) => {
        if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
          menu.classList.remove("active");
        }
      });
  
      // Fermer le menu lorsqu'on clique sur un lien
      menu.querySelectorAll("a").forEach(item => {
        item.addEventListener("click", () => {
          menu.classList.remove("active");
        });
      });
    }
  
    // Gestion du carousel (si les éléments existent)
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const carousel = document.querySelector('.carousel-container');
    let index = 0;
  
    if (carousel && prevButton && nextButton) {
      function updateCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
      }
  
      nextButton.addEventListener('click', () => {
        index = (index + 1) % 4;
        updateCarousel();
      });
  
      prevButton.addEventListener('click', () => {
        index = (index - 1 + 4) % 4;
        updateCarousel();
      });
  
      // Carrousel automatique
      setInterval(() => {
        index = (index + 1) % 4;
        updateCarousel();
      }, 3000);
    }
  });
  