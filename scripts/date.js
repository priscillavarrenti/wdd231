const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

document.getElementById("lastModified").innerHTML=document.lastModified;
