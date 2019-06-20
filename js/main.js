function displaynav() {
    var menu = document.querySelector("nav");
    if (menu.style.height == "0px") {
        menu.style.height = "18.31em";
    } else {
        menu.style.height = "0px";
    }
}
function animateBars() {
    let widths = [80, 80, 70, 50];
    var skills = document.getElementsByClassName("skill");
    for (let i = 0; i < skills.length; i++) {
        skills[i].style.width = widths[i] + "%";
    }
}