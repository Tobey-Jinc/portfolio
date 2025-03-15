function zoom(src) {
    document.getElementById("zoom-image").src = src;
    document.getElementById("zoom").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
}

function closeZoom() {
    document.getElementById("zoom").style.display = "none";
    document.getElementById("body").style.overflow = "auto";
}