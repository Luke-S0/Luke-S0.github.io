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
            document.querySelector("project-name").add(".dyslexic-mode")
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
            document.querySelector("main-content").add(".large-font")
            document.querySelector("project-name").add(".large-font")
            document.querySelector("project-tagline").add(".large-font")
        }
        catch {
            console.log("Failed to apply large font.")
        }

        console.log("Applied large font")
    }

});