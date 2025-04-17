const entrerNomCity = document.getElementById("cityInput");
const nomCity = document.getElementById("city");
const button =document.getElementById("ok")
const coordonnesCity = document.getElementById("gps");
const temperatureCity = document.getElementById("temperature");
const detailsCity = document.getElementById("details");
const humidityCity = document.getElementById("precipitation");
const graphiqueDays = document.getElementById('weatherChart')




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
        humidityCity.innerHTML= '-';
        graphiqueDays.style.display= "none";
      }
}


async function fetchWeather(lat, lon){
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,relative_humidity_2m`;
    const reponse = await fetch(url); 
    const data = await reponse.json(); 
 
    const temperature = data.current.temperature_2m;
    temperatureCity.innerHTML = `${temperature}°C`;
    const humidity = data.current.relative_humidity_2m
    humidityCity.innerHTML = `Taux d'humidité: ${humidity} %`; 
    detailsCity.innerHTML = "Température actuelle";
    weatherLastDays(lat, lon)
}


async function weatherLastDays (lat, lon) {
    const url =  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation&past_days=3`;
    const reponse = await fetch(url);
    const data = await reponse.json();

    const times = data.hourly.time;
    const temperatures = data.hourly.temperature_2m;
   
    graphique(times, temperatures, "Température (°C)", "rgba(255, 99, 132, 0.6)");
} 

let graphiqueIndex = null;
function graphique(labels, data, label, color) {

const graphique = graphiqueDays.getContext('2d');
graphique.display= "block";

if (graphiqueIndex) {
    graphiqueIndex.destroy();
} 

graphiqueIndex= new Chart(graphique, {
    type: 'bar',
    data: {
        labels: labels, // tiempo por hora
        datasets: [{
            label: label,
            data: data,
            backgroundColor: color,
            borderColor: color,
            borderWidth: 1,
            pointRadius: 0, // para líneas suaves
            tension: 0.2 // suaviza la curva
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}



  





