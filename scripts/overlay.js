function toggleOverlay(txt) {
    let overlay = document.getElementById(txt);
    if (overlay.style.display === "none") {
        overlay.style.display = "flex";
    } else {
        overlay.style.display = "none";
    }
}