const courses =[
    { subject: "CSE", number: 110, title: "Intro to Programming", credits: 2, compled: true},
    { subject: "WDD", number: 131, title: "Dynamic Web Fundamentals", credits: 3, completed: false },
    { subject: "WDD", number: 231, title: "Web Fronted Development I", credits: 3, completed: false }
];

function displayCourses(list) {
    const container = document.getElementById('courseCards');
    container.innerHTML = "";

    list.forEach(course => {
        const card = document.createElement('div');
        card.classList.add("course-card");
        if (course.completed) card.classList.add('completed');
        card.innerHTML = ` 
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} credits</p>
        `; 
        container.appendChild(card);
    });

    const total = list.reduce((sum, c) => sum + c.credits, 0);
    document.getElementById('totalCredits').textContent = total;
}

document.getElementById("all").addEventListener("click", () => displayCourses(courses));
document.getElementById("wdd").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "WDD" )));
document.getElementById("cse").addEventListener("click", () => displayCourses(courses.filter(c => c.subject === "CSE" )));

displayCourses(courses);