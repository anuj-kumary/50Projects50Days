let userValue = document.getElementById('btn')


let apiKey = 'd456a47b83d74660dc1fe4eb311b01c4';
let cityName = 'mumbai';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
.then( (data) => {
    return data.json()
})
.then( (weather) =>{
    console.log(weather)
}).catch( (err) =>{
    console.log(err)
})