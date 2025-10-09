document.addEventListener("DOMContentLoaded", () => {
  // === AOS Animations ===
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-in-out",
  });
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Hamburger toggle
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Smooth scroll for header links
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    navMenu.classList.remove('show'); // Close menu on mobile
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

 const sections = document.querySelectorAll('section');
 const navLinks = document.querySelectorAll('header nav a');

  window.addEventListener('scroll', () => {
    let current = '';
  
      sections.forEach(section => {
       sectionTop = section.offsetTop - 100;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});
  

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

  
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;
  const bannerSlides = document.querySelectorAll(".banner-slide");

  // Image paths (update to your actual file names)
  const bannerImages = {
    light: ["banner1.png", "banner1.png"],
    dark: ["banner1.png", "banner1.png"],
  };

  // Function to update banner backgrounds
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

  //  Load saved theme
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

  
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fadeDuration: 300,
    imageFadeDuration: 300,
  });


  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (e) {
      e.preventDefault();
      document.getElementById("thankyouMessage").style.display = "block";
      this.reset();
    });
  }


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




