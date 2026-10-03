document.addEventListener("DOMContentLoaded", (event) => {
    const dyslexicmode = localStorage.getItem("dyslexicmodes");
    const largefont = localStorage.getItem("largefont");

    if (dyslexicmode === "True") {
        // apply dyslexic font to body text
        document.body.classList.add("dyslexic-mode")

        // apply dyslexic font to page title
        document.querySelector("project-name").classList.add("dyslexic-mode")

        console.log("Applied dyslexic mode")
    }
    
});