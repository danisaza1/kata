const entrerNomCity = document.getElementById("cityInput").value;
const nomCity = document.getElementById("city");
const button =document.getElementById("ok")
const coordonnesCity = document.getElementById("gps");
const temperatureCity = document.getElementById("temperature");
const detailsCity = document.getElementById("details");


async function getCity(params = "") {
    const url = `https://www.nominatim.openstreetmap.org/search.html?q=${params}`;
    const reponse = await fetch(url); 
    const data = await reponse.json();
}

      
button.addEventListener ("click", () => {
    const entrerNomCity = document.getElementById("cityInput").value;
    getCity(entrerNomCity)
});



        


	



const fetchWeather = (lat, lng, city) => {
// A toi de jouer pour implémenter le code dans l'exercice en dessous !
}

fetchWeather(50.633333,3.066667 , "lille")
fetchWeather(43.3, 5.4 , "marseille")
// ... 

console.log(json.current.temperature_2m)
  document.getElementById("pluie_lille").innerHTML = "<strong>" + json.current.rain + "</strong>"
  document.getElementById("degres_lille").innerHTML = "<strong>" + json.current.temperature_2m + "</strong>"



