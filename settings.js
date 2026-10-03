document.addEventListener("DOMContentLoaded", (event) => {
    const dyslexicmode = localStorage.getItem("dyslexicmode");
    const largefont = localStorage.getItem("largefont");

    if (dyslexicmode === null) {
        localStorage.setItem("dyslexicmode", "false")
    }
    if (dyslexicmode === "true") {
        // apply dyslexic font to body text
        document.body.classList.add("dyslexic-mode")

        console.log("Applied dyslexic mode")
    }

});

function toggleDyslexicMode() { 
    const status = localStorage.getItem("dyslexicmode")

    if (status === "true" || status === "false") {
        if (status === "true") {
            localStorage.setItem("dyslexicmode", "false")
        }
        else if (status === null) {
            localStorage.setItem("dyslexicmode", "true")
        }
        else {
            localStorage.setItem("dyslexicmode", "true")
        }
        location.reload()
    } else {
        console.log("Failed to toggle dyslexic mode. Value in local storage was unexpected. Try clearing the site data.");
    }
}