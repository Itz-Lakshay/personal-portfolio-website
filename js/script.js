 
// ================= MOBILE MENU =================

const nav = document.querySelector("nav ul");
const logo = document.querySelector(".logo");

let menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.style.fontSize = "30px";
menuBtn.style.cursor = "pointer";
menuBtn.style.color = "#f7b731";

document.querySelector(".nav").appendChild(menuBtn);

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
});


// ================= TYPING ANIMATION =================

const heroText = document.querySelector(".hero h3");

if(heroText){
    let text = heroText.innerText;
    heroText.innerText = "";

    let i = 0;

    function type(){
        if(i < text.length){
            heroText.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }

    type();
}


// ================= SCROLL REVEAL =================

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hero, .about, .skills, .project-card, .blog-card, .card")
.forEach(el => {
    el.classList.add("fade");
    observer.observe(el);
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.15});

document.querySelectorAll(".hero, .about, .skills, .project-card, .blog-card, .card")
.forEach(el=>{
    el.classList.add("reveal");
    observer.observe(el);
});

const menuBtn = document.createElement("div");
menuBtn.innerHTML = "☰";
menuBtn.style.fontSize = "28px";
menuBtn.style.color = "#f7b731";
menuBtn.style.cursor = "pointer";

document.querySelector(".nav").appendChild(menuBtn);

const navMenu = document.querySelector("nav ul");

menuBtn.addEventListener("click", ()=>{
    navMenu.classList.toggle("show");
});

// ================= SCROLL REVEAL SYSTEM =================

const revealElements = document.querySelectorAll(".hero, .about, .skills, .project-card, .blog-card, .card, .service-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
},{threshold:0.12});

revealElements.forEach(el=>{
    el.classList.add("reveal");
    observer.observe(el);
});


// ================= TYPING EFFECT (HERO) =================

const heroTitle = document.querySelector(".hero h1");

if(heroTitle){
    const text = heroTitle.innerHTML;
    heroTitle.innerHTML = "";

    let i = 0;

    function type(){
        if(i < text.length){
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    }

    type();
}


// ================= ACTIVE NAV HIGHLIGHT =================

const links = document.querySelectorAll("nav ul li a");

links.forEach(link=>{
    if(link.href === window.location.href){
        link.classList.add("active");
    }
});


// ================= MOBILE MENU =================

const nav = document.querySelector("nav ul");

const btn = document.createElement("div");
btn.innerHTML = "☰";
btn.style.fontSize = "28px";
btn.style.cursor = "pointer";
btn.style.color = "#f7b731";

document.querySelector(".nav").appendChild(btn);

btn.addEventListener("click", ()=>{
    nav.classList.toggle("show");
});