const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const myKey = "42cc4eb93d25a4b8ef82ad8e354cde1f";
const myLat = "34.6037";
const myLong = "-58.3816";
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(myURL);

        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error (await response.text());
        }
    } catch (error){
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;C`

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);

    captionDesc.textContent = `${desc}`;
}
apiFetch();

const forecastContainer = document.querySelector("#forecast");

const  forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=metric`;

async function fetchForecast() {
    try{
        const response = await fetch(forecastURL);

        if (response.ok) {
            const data = await response.json();
            console.log("Forecast:", data);

            const middayData = data.list.filter(item => item.dt_txt.includes("12:00:00"));

            displayForecast(middayData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    forecastContainer.innerHTML= "";

    const threeDays = data.slice(0, 3);

    threeDays.forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString("en-US", {
            weekday: "long"
        });

        const temp = day.main.temp.toFixed(1);
        const desc = day.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`;

        const card = document.createElement("div");
        card.classList.add("forecast-day");

        card.innerHTML= `
            <h4>${date}</h4>
            <img src="${icon}" alt="${desc}">
            <p>${desc}</p>
            <p>${temp}°C</p>
        `;
        forecastContainer.appendChild(card);
    });
}

fetchForecast();