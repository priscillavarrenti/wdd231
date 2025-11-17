// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// required variebles for url
const myKey = "42cc4eb93d25a4b8ef82ad8e354cde1f"
const myLat = "49.75006"
const myLong = "6.63723"

// constructed a full path using templete literals
const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

//try to grab the current weather data
async function apiFetch() {
  try {
    const response = await fetch(myURL);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

//display the json data onto my web page
function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;

  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  
  let desc = data.weather[0].description;

  weatherIcon.setAttribute ('src', iconsrc);
  weatherIcon.setAttribute ('alt', desc);

  captionDesc.textContent = `${desc}`;
    
}
//start the process
apiFetch();