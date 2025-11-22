const spotlightContainer = document.querySelector("#spotlights-container");

async function loadSpotlights() {
    try{
        const response = await fetch("data/members.json");
        const data= await response.json();

        const filteredMembers = data.members.filter(member =>
            member.membershipLevel === 2 || member.membershipLevel === 3
        );

        const shuffled = filteredMembers.sort(() => 0.5 - Math.random());

        const spotlightCount = Math.random()<0.5 ? 2 : 3;
        const selected = shuffled.slice(0, spotlightCount);

        displaySpotLights(selected);
    } catch (error) {
        console.error("Error loading spotlights:", error);
    }
    
}
 function displaySpotLights(members) {
    spotlightContainer.innerHTML ="";
    members.forEach(member => {
        const card = document.createElement("div");
        card.classList.add("spotlight-card");

        card.innerHTML = `
        <img src= "${member.image}" alt="${member.name}">
        `;
        
    });
 }