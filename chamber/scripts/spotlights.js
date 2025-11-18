const spotlightsContainer = document.querySelector("#spotlights-container");
const membersURL = "data/members.json";

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();

        const members = data.members.map(member => ({
            ...member,
            membership:
                member.membershipLevel === 3
                    ? "Gold"
        }))
    }
    
}
