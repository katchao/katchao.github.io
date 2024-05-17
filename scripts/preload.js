/* ------ Delay loading of gsap elements ------- */
setTimeout(() => {
    const landscapeNodes = [
        document.querySelector("#landscape1"),
        document.querySelector("#landscape2"),
    ];
    landscapeNodes.forEach((node) => node.removeAttribute("hidden"));
    console.log(landscapeNodes);
}, 500);
