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