let userValue = document.getElementById('btn')
let userInput = document.getElementById('user-value')

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
    console.log(weather.main.temp)
    // console.log(weather)
   console.log( `${Math.floor(weather.main.temp - 273.15)}&deg`)
}).catch( (err) =>{
    console.log(err)
})
    
})



