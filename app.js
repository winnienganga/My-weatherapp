function updateWeatherInfo(response){
    let temperatureValue=document.querySelector("#temperature");
   let  temperature=response.data.temperature.current;
   temperatureValue.innerHTML=Math.round(temperature);
    console.log(response.data.temperature.current);
    let cityInput=document.querySelector("#city-element");
    cityInput.innerHTML = response.data.city;
}


function searchCity(city){
let apiKey="ef3bd40o05t12aa954bc1a4c8574a4fa";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiUrl).then(updateWeatherInfo)
}


function startSearching(event){
event.preventDefault();
let searchBarInput =document.querySelector("#search-bar-input");
l

searchCity(searchBarInput.value);
}


let searchBarElement = document.querySelector("#search-bar")
searchBarElement.addEventListener("submit",startSearching);