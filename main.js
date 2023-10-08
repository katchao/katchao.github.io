/* ------- Change header background when scrolled past -------- */
const addBgToHeaderOnScroll = () => {
    const header = document.getElementById("header");
    if (this.window.scrollY >= 50) {
        header.classList.add("header-bg").remove("header-transparent");
    } else {
        header.classList.remove("header-bg").add("header-transparent");
    }
};
window.addEventListener("scroll", addBgToHeaderOnScroll);
