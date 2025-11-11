const navButton = document.querySelector("#nav-button");
const navMenu = document.querySelector("#navMenu");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navButton.classList.toggle("show");
});

document.querySelector("#currentYear").textContent= new Date ().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;