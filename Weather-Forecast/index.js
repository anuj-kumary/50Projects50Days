let userValue = document.getElementById('btn')
let temperature = document.getElementById('temperature')
let userInput = document.getElementById('user-value')
let cityname = document.getElementById('city-name')
let cloudy = document.getElementById('cloudy')
let icon = document.getElementById('icon')

let apiKey = 'd456a47b83d74660dc1fe4eb311b01c4';
let cityName = "";

userInput.addEventListener('change',function(e){
    cityName = e.target.value
    console.log(cityName)
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d456a47b83d74660dc1fe4eb311b01c4`)
.then( (data) => {
    return data.json()
})
.then( (weather) =>{
    console.log(weather.name)
    console.log(weather)
    temperature.innerHTML =  `${Math.floor(weather.main.temp - 273.15)} &degC`;
    cityname.innerHTML = weather.name;
    cloudy.innerHTML = weather.weather[0].description;
}).catch( (err) =>{
    console.log(err)
})
    
})



