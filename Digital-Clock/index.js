const dates = document.getElementById('date');
const times = document.getElementById('time');


setInterval(function(){
    getDate()
},1000);

function getDate(){
    let dateFunction = new Date();
    let date = dateFunction.getDate();
    let month = dateFunction.getMonth();
    let Years = dateFunction.getFullYear();
    let hours = dateFunction.getHours();
    let minutes = dateFunction.getMinutes();
    let seconds = dateFunction.getSeconds();

    let session = "AM";

    if(hours == 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        session = "PM";
    }
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let timeValue = `${hours}:${minutes}:${seconds} ${session}`
    let dateValue = date +' '+ months[month-1] +', ' + Years;
    dates.innerHTML = dateValue;
    times.innerHTML = timeValue;
}