const navButton = document.getElementById("nav-button");
const navMenu = document.getElementById("navMenu");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navMenu.classList.toggle("show");
});

document.querySelector("#currentYear").textContent= new Date ().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;