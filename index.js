function diversityHoverEffect() {
    document.getElementById("diversityImage").classList.add("show");
}

function removeDiversityHoverEffect() {
    document.getElementById("diversityImage").classList.remove("show");
}

document.getElementById("diversityPopup").onmouseover = diversityHoverEffect;
document.getElementById("diversityPopup").onmouseleave = removeDiversityHoverEffect;


function architectureHoverEffect() {
    document.getElementById("architectureimage").classList.add("show");

}

function removearchitectureHoverEffect() {
    document.getElementById("architectureimage").classList.remove("show");
}

document.getElementById("architecturepopup").onmouseover = architectureHoverEffect;
document.getElementById("architecturepopup").onmouseleave = removearchitectureHoverEffect;
