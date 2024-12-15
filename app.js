function startSearching(event){
event.preventDefault();
let searchBarInput =document.querySelector("#search-bar-input");
let cityInput=document.querySelector("#city-element");
cityInput.innerHTML = searchBarInput.value;
}


let searchBarElement = document.querySelector("#search-bar")
searchBarElement.addEventListener("submit",startSearching);