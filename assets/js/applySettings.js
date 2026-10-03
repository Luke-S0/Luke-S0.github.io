document.addEventListener("DOMContentLoaded", (event) => {
    const dyslexicmode = localStorage.getItem("dyslexicmode");
    const largefont = localStorage.getItem("largefont");

    if (dyslexicmode === null) {
        localStorage.setItem("dyslexicmode", "false")
    }

    if (dyslexicmode === "true") {
        // apply dyslexic font to body text
        document.body.classList.add("dyslexic-mode")
        
        try {
            document.querySelector(".project-name").classList.add(".dyslexic-mode")
        }
        catch {
            console.log("Failed to apply dyslexic mode to .project-name")
        }

        console.log("Applied dyslexic mode")
    }

    if (largefont === null) {
        localStorage.setItem("largefont", "false")
    }
    
    if (largefont === "true") {
        try {
            document.querySelector(".main-content").classList.add(".large-font")
            document.querySelector(".project-name").classList.add(".large-font")
            document.querySelector(".project-tagline").classList.add(".large-font")
            console.log("Applied large font")
        }
        catch {
            console.log("Failed to apply large font.")
        }

    }

});