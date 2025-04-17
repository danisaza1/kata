const entrerNomCity = document.getElementById("cityInput");
const nomCity = document.getElementById("city");
const button =document.getElementById("ok")
const coordonnesCity = document.getElementById("gps");
const temperatureCity = document.getElementById("temperature");
const detailsCity = document.getElementById("details");


button.addEventListener("click", () => {
    const cityName = entrerNomCity.value;
    getCity(cityName);
});


async function getCity(city) {
    const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
    const reponse = await fetch(url); 
    const data = await reponse.json(); 

fetchCoordinates(data)
}

function fetchCoordinates(data) {
    if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;
        coordonnesCity.innerText = `Coordonnées GPS: ${lat}, ${lon}`;
        nomCity.innerText = data[0].name;
        fetchWeather(lat,lon)
      }else {
        nomCity.innerText = `Ville non trouvée`;
        coordonnesCity.innerText = '-';
        detailsCity.innerHTML = `Vérifiez le nom de la ville`
        temperatureCity.innerHTML = '-';
      }
}


async function fetchWeather(lat, lon){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,relative_humidity_2m`;
    const reponse = await fetch(url); 
    const data = await reponse.json(); 
 
    const temperature = data.current.temperature_2m;
    temperatureCity.innerHTML = `${temperature}°C`;
    detailsCity.innerHTML = "Température actuelle";
}











