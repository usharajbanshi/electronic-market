document.addEventListener("DOMContentLoaded", () => {
  // === AOS Animations ===
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });

  // === Swiper Banner ===
  const bannerSwiper = new Swiper("#home .swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // === Dark / Light Mode Toggle ===
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const bannerSlides = document.querySelectorAll(".banner-slide");

  // ✅ Image paths (update to your actual file names)
  const bannerImages = {
    light: ["banner1.png", "banner1.png"],
    dark: ["banner1.png", "banner1.png"],
  };

  // ✅ Function to update banner backgrounds
  function updateBannerImages(theme) {
    bannerSlides.forEach((slide, index) => {
      const img =
        theme === "dark"
          ? bannerImages.dark[index % bannerImages.dark.length]
          : bannerImages.light[index % bannerImages.light.length];
      // create temporary image to preload
       const tempImg = new Image();
       tempImg.src = img;
       tempImg.onload = () => {
       // fade out, change image, fade in
        slide.style.opacity = 0;
        setTimeout(() => {
           slide.style.backgroundImage = `url(${img})`;
           slide.style.opacity = 1;
         }, 200);
      };  
    });
  }

  // ✅ Load saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
    toggle.checked = true;
    updateBannerImages("dark");
  } else {
    updateBannerImages("light");
  }

  // ✅ Toggle listener
  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
      updateBannerImages("dark");
    } else {
      body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
      updateBannerImages("light");
    }
  });

  // === Product Swiper ===
  const productSwiper = new Swiper(".product-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  // === Lightbox ===
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 300,
    imageFadeDuration: 300,
  });

  // === Contact Form ===
  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("thankyouMessage").style.display = "block";
      this.reset();
    });
  }

  // === Smooth Scroll ===
  document.querySelectorAll("header nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSelector = this.getAttribute("href");
      if (targetSelector && targetSelector.startsWith("#")) {
        const target = document.querySelector(targetSelector);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

