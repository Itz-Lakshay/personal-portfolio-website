// ================= MOBILE MENU =================

const nav = document.querySelector("nav ul");

const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.style.fontSize = "28px";
menuBtn.style.cursor = "pointer";
menuBtn.style.color = "#f7b731";

document.querySelector(".nav").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// ================= TYPING EFFECT (HERO) =================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = "";

    let i = 0;

    function type() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    type();
}


// ================= SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".hero, .about, .skills, .project-card, .blog-card, .card, .service-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { threshold: 0.12 });

revealElements.forEach(el => {
    el.classList.add("reveal");
    observer.observe(el);
});


// ================= ACTIVE NAV HIGHLIGHT =================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});