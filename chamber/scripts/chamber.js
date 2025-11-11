const navButton = document.getElementById("nav-button");
const navMenu = document.getElementById("navMenu");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("show");
    navMenu.classList.toggle("show");
});

document.querySelector("#currentYear").textContent= new Date ().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;



const membersContainer = document.getElementById("members-container");

async function loadMembers() {
    try{
        const response = await fetch("data/members.json");
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error("Error loading members:", error);
    }
}

function displayMembers(members) {
    membersContainer.innerHTML= "";

    members.forEach((member => {
        const card = document.createElement("div");
        card.classList.add("member-card");
        
        card.innerHTML= `
        <img src= "${member.image}" alt="${member.name}">
        <h3>${member.name}</h3>
        <p>${member.description}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        `;

        membersContainer.appendChild(card);
    }));
}

document.getElementById("grid-view").addEventListener("click", () => {
    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");
});

document.getElementById("list-view").addEventListener("click", () => {
    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");
});

loadMembers();