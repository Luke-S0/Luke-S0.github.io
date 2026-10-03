document.addEventListener("DOMContentLoaded", (event) => {
    const dyslexicmode = localStorage.getItem("dyslexicmode");
    const largefont = localStorage.getItem("largefont");

    if (dyslexicmode === null) {
        localStorage.setItem("dyslexicmode", "false")
    }

    if (dyslexicmode === "true") {
        try {
            // apply dyslexic font to body text
            document.body.classList.add("dyslexic-mode")
            
            console.log("Applied dyslexic mode")
        }
        catch {
            console.log("Failed to apply large font.")
        }
    }

    if (largefont === null) {
        localStorage.setItem("largefont", "false")
    }
    
    if (largefont === "true") {
        try {
            document.body.classList.add("dyslexic-mode")
            console.log("Applied large font")
        }
        catch {
            console.log("Failed to apply large font.")
        }

    }

});