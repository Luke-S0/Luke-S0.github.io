document.addEventListener("DOMContentLoaded", (event) => {
    const dyslexicmode = localStorage.getItem("dyslexicmode");
    const largefont = localStorage.getItem("largefont");

    if (dyslexicmode === "true") {
        // apply dyslexic font to body text
        document.body.classList.add("dyslexic-mode")

        console.log("Applied dyslexic mode")
    }

});