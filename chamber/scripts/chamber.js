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
       const img=document.createElement("img");
       img.src=member.image;
       img.alt=member.name;
       img.width=300;
       img.height=200;

       const name=document.createElement("h3");
       name.textContent=member.name;

       const description=document.createElement("p")
       description.textContent=member.description;

       const address=document.createElement("p");
       address.innerHTML=`<strong>Address:</strong> ${member.address}`;

       const phone=document.createElement("p");
       phone.innerHTML=`<strong>Phone:</strong> ${member.phone}`;

       const website=document.createElement("p");
       website.innerHTML=`<strong>Phone:</strong> ${member.website}`;

       card.appendChild (img);
       card.appendChild (name);
       card.appendChild (description);
       card.appendChild (address);
       card.appendChild (phone);
       card.appendChild (website);

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