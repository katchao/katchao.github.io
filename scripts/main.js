/* ------- Change header background when scrolled past -------- */
const addBgToHeaderOnScroll = () => {
    const header = document.getElementById("header");
    if (this.window.scrollY >= 50) {
        // show header
        header.classList.add("header-bg");
        header.classList.remove("invisible");
    } else {
        // remove header
        header.classList.remove("header-bg");
        header.classList.add("invisible");
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

/* ------- Parallax scroll -------- */
let parallax = new Rellax(".parallax");

/* ------- Gsap slow reveal -------- */
gsap.from("#landscape1__first-slope", 1.2, { opacity: 0, y: -200, delay: 0.4 });
gsap.from("#landscape1__clouds", 1.2, { opacity: 0, y: -200, delay: 0.8 });
gsap.from("#landscape1__sun", 1.2, { opacity: 0, x: 150, delay: 0.7 });
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
