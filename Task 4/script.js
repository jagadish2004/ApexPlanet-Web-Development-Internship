// ===========================
// Dark Mode Toggle
// ===========================

const modeBtn = document.getElementById("modeBtn");

modeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        modeBtn.innerHTML = "☀️";
    } else {
        modeBtn.innerHTML = "🌙";
    }

});

// ===========================
// Contact Form
// ===========================

const form = document.getElementById("contactForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    message.innerHTML = "✅ Thank you! Your message has been sent successfully.";

    message.style.color = "green";

    form.reset();

});

// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});

// ===========================
// Typing Effect
// ===========================

const roles = [
    "Web Developer",
    "Java Programmer",
    "Frontend Developer",
    "B.Tech Student"
];

let roleIndex = 0;
let charIndex = 0;

const roleElement = document.querySelector(".hero-text h3");

function typeRole() {

    if (charIndex < roles[roleIndex].length) {

        roleElement.innerHTML += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 100);

    } else {

        setTimeout(eraseRole, 1500);

    }

}

function eraseRole() {

    if (charIndex > 0) {

        roleElement.innerHTML = roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeRole, 300);

    }

}

roleElement.innerHTML = "";

typeRole();
