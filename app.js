const url= "https://api.openweathermap.org/data/2.5/"
const key= "b7ecff74e505ca8d1a01b9726904cf6c"

const setQuery = (e) => {
    if(e.key == 'Enter')
        getResult(searchBar.value)
}

const getResult = (cityName) => {
    let query= `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(response => {
            if (!response.ok) {
                throw new Error('Not found city!');
            }
            return response.json(); 
        })
        .then(displayResult)
        .catch(err => console.error(err));
}

const displayResult = (result) => {
    let city= document.querySelector(".city")
     city.innerText = `${result.name},${result.sys.country}`;
    
     let temp= document.querySelector(".temp")
     temp.innerText = `${Math.round(result.main.temp)}°C`;

     let desc= document.querySelector(".desc")
     desc.innerText = result.weather[0].description;

     let minmax= document.querySelector(".minmax")
     minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`;

}




const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('keypress', setQuery);