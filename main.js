/* ------- Change header background when scrolled past -------- */
const addBgToHeaderOnScroll = () => {
    const header = document.getElementById("header");
    if (this.window.scrollY >= 50) {
        header.classList.add("header-bg");
    } else {
        header.classList.remove("header-bg");
    }
};
window.addEventListener("scroll", addBgToHeaderOnScroll);

/* ------- Open/close menu -------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("nav-toggle");
if (navToggle) {
    navToggle.addEventListener("click", () => {
        nav.classList.add("show-nav");
    });
}

const navClose = document.getElementById("nav-close");
if (navClose) {
    navClose.addEventListener("click", () => {
        nav.classList.remove("show-nav");
    });
}
