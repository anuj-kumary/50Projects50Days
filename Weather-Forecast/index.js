let userValue = document.getElementById('btn')
let getTemperature = document.getElementById('temperature')
let userInput = document.getElementById('user-value')
let getCityname = document.getElementById('city-name')
let getDescription = document.getElementById('cloudy')
let getIcon = document.querySelector('.icon')
let dateTime = document.querySelector('#time-date')


setInterval(()=>{
    let Dates = new Date();
    dateTime.innerHTML = `${Dates.toDateString()}, ${Dates.toLocaleTimeString('en-US')}`
},1000)


let apiKey = 'd456a47b83d74660dc1fe4eb311b01c4';
let cityName = "";

userInput.addEventListener('change',function(e){
    cityName = e.target.value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=d456a47b83d74660dc1fe4eb311b01c4`)
.then( (res) => {
    return res.json()
})
.then( (data) =>{
    getTemperature.innerHTML =  `${Math.floor(data.main.temp - 273.15)} &degC`;
    getCityname.innerHTML = data.name;
    getDescription.innerHTML = data.weather[0].description;
    getIcon.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`
}).catch( (err) =>{
    console.log(err)
})
    
})




