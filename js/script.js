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
    const finalHTML = heroTitle.innerHTML;       // save the real markup: "I'm <span>Lakshay</span><br><span>Arora</span>"
    const plainText = heroTitle.textContent;      // save just the visible text: "I'm LakshayArora"
    heroTitle.innerHTML = "";

    let i = 0;

    function type() {
        if (i < plainText.length) {
            heroTitle.textContent += plainText.charAt(i);  // textContent = safe, never parses tags
            i++;
            setTimeout(type, 40);
        } else {
            heroTitle.innerHTML = finalHTML;  // once typing is done, swap in the real styled version
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