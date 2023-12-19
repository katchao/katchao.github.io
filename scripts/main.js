/*=============== PARALLAX ===============*/
let parallax = new Rellax(".parallax");

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
