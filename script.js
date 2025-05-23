// إعادة تحميل الصفحة عند الضغط على اللوغو
const logo = document.getElementById('logo');
logo.addEventListener('click', (e) => {
  e.preventDefault();
  location.reload();
});

// التحكم في عرض/إخفاء القائمة الجانبية على الشاشات الصغيرة
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');
const overlay = document.getElementById('overlay');

menuIcon.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  overlay.style.display = navMenu.classList.contains('active') ? 'block' : 'none';
});

overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  overlay.style.display = 'none';
});

// شاشة التمهيد والعنوان في hero
const introScreen = document.getElementById('intro-screen');
const heroText = document.querySelector('.hero-text');

function hideIntroAndStart() {
  if (introScreen) {
    introScreen.style.display = 'none';
  }

  if (heroText) {
    heroText.style.animation = 'none';
    heroText.offsetHeight;
    heroText.style.animation = null;
    heroText.classList.add('fade-in');
  }
}

setTimeout(hideIntroAndStart, 1800);

// slider - التبديل بين الصور في hero
let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showNextSlide, 5000);

// شاشة التمهيد تختفي بعد 1.5 ثانية
window.addEventListener("load", () => {
  const intro = document.getElementById("intro-screen");
  setTimeout(() => {
    intro.classList.add("fade-out");
  }, 1500);
});

// تفعيل الأنيميشن عند التمرير على قسم About
function animateAboutBlocks() {
  const aboutBlocks = document.querySelectorAll('.about-block');
  const triggerBottom = window.innerHeight * 0.85;

  aboutBlocks.forEach(block => {
    const blockTop = block.getBoundingClientRect().top;
    if (blockTop < triggerBottom) {
      block.classList.add('active');
    }
  });
}

window.addEventListener('scroll', animateAboutBlocks);
window.addEventListener('load', animateAboutBlocks);

// Scroll reveal for product sections
const productSlides = document.querySelectorAll('.product-slide');

function revealProductSlides() {
  productSlides.forEach(slide => {
    const rect = slide.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      slide.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealProductSlides);
window.addEventListener('load', revealProductSlides);

// Scroll reveal for Products Intro
function animateProductsIntro() {
  const intro = document.querySelector(".products-intro-section");
  if (!intro) return;
  const rect = intro.getBoundingClientRect();
  if (rect.top < window.innerHeight - 100) {
    intro.classList.add("visible");
  }
}
window.addEventListener("scroll", animateProductsIntro);
window.addEventListener("load", animateProductsIntro);

window.addEventListener('load', () => {
  const crownImage = document.querySelector('.crown-image');
  if (crownImage) {
    setTimeout(() => {
      crownImage.classList.add('visible');
    }, 1000); // بعد ثانية واحدة من تحميل الصفحة تظهر الصورة تدريجياً
  }
});
