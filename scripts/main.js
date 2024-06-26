/* ------- Change header background when scrolled past -------- */
const addBgToHeaderOnScroll = () => {
    const header = document.getElementById("header");
    if (this.window.scrollY >= 50) {
        // show header
        header.classList.add("header-bg");
        header.classList.remove("hidden");
    } else {
        // remove header
        header.classList.remove("header-bg");
        header.classList.add("hidden");
    }
};
window.addEventListener("scroll", addBgToHeaderOnScroll);

/* ------- Show to top button -------- */
const showHideToTopButton = () => {
    const toTopButton = document.getElementById("totop");
    if (this.scrollY >= 350) {
        toTopButton.classList.add("show-totop");
    } else {
        toTopButton.classList.remove("show-totop");
    }
};
window.addEventListener("scroll", showHideToTopButton);

/* ------- Wavy header -------- */
const wavyHeader = document.getElementById("wavy-header");
wavyHeader.innerHTML = wavyHeader.innerHTML
    .trim()
    .split("")
    .map((char, i) => {
        return `<span style="--i:${i}">${char}</span>`;
    })
    .join("");

/* ------- Light/dark theme toggle -------- */
const themeToggleButton = document.getElementById("theme-toggle");

const activateTheme = (theme) => {
    const catLogoFill = theme === "light" ? "#b7947f" : "#fff";
    document.documentElement.setAttribute("data-theme", theme);
    document
        .querySelector("#logo-img")
        .getSVGDocument()
        .getElementById("Merged_Cutout")
        .setAttribute("fill", catLogoFill);
    if (theme === "light") {
        document.querySelector(".sun").classList.remove("visible");
        document.querySelector(".moon").classList.add("visible");
    } else {
        document.querySelector(".sun").classList.add("visible");
        document.querySelector(".moon").classList.remove("visible");
    }

    currentTheme = theme;
    localStorage.setItem("theme", currentTheme);
};

let storedTheme = localStorage.getItem("theme");
if (storedTheme) {
    document.documentElement.setAttribute("data-theme", storedTheme);
    window.onload = function () {
        activateTheme(storedTheme);
    };
}

themeToggleButton.addEventListener("click", () => {
    let currentTheme = document.documentElement.getAttribute("data-theme");
    if (currentTheme === "light") {
        activateTheme("dark");
    } else {
        activateTheme("light");
    }
});

/* ------- Parallax scroll -------- */
let parallax = new Rellax(".parallax");

/* ------ Delay loading of gsap elements ------- */
setTimeout(() => {
    const landscapeNodes = [
        document.querySelector("#landscape1"),
        document.querySelector("#landscape2"),
    ];
    landscapeNodes.forEach((node) => node.removeAttribute("hidden"));
}, 500);

/* ------- Gsap slow reveal -------- */
gsap.from("#landscape1__first-slope", 1.2, { opacity: 0, y: -200, delay: 0.4 });
gsap.from("#landscape1__clouds", 1.2, { opacity: 0, y: -200, delay: 0.8 });
gsap.from("#landscape1__sun", 1.2, { opacity: 0, x: 150, delay: 1 });
gsap.from("#landscape1__second-slope", 1.2, { opacity: 0, y: 150, delay: 0.8 });
gsap.from("#landscape1__third-slope", 1.2, { opacity: 0, y: -50, delay: 0.4 });

gsap.from("#landscape2__first-grass", 1.2, { opacity: 0, y: 25, delay: 0.1 });
gsap.from("#landscape2__clouds", 1.2, { opacity: 0, y: -200, delay: 0.8 });
gsap.from("#landscape2__moon", 1.2, { opacity: 0, x: 150, delay: 0.7 });
gsap.from("#landscape2__front-bushes", 1.2, {
    opacity: 0,
    y: -150,
    delay: 0.4,
});
gsap.from("#landscape2__second-trees", 1.2, { opacity: 0, y: 150, delay: 0.4 });
gsap.from("#landscape2__third-row", 1.2, { opacity: 0, y: -25, delay: 0.2 });
gsap.from("#landscape2__fourth-mountain", 1.2, {
    opacity: 0,
    y: -25,
    delay: 0.8,
});

gsap.from("#welcome__headers", 1.2, { opacity: 0, y: -60, delay: 1 });

/* ------- Scroll reveal -------- */
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 5,
});

sr.reveal(`#about`, { origin: "left" });
sr.reveal(`.contact__links-icon`, { interval: 10 });
