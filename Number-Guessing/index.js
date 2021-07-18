const result = document.getElementById('result');
const prevousGuesse = document.getElementById('prevousGuess')
const btn = document.getElementById('btn');
const inputValue = document.getElementById('inputValue');
const showBtn  = document.getElementById('hide')
const counts = document.getElementById('counts')


let userValue = ''
let randomNumber = Math.floor(Math.random()*100);
let previousValue = []
let count = 0;
let decre = 9
console.log(randomNumber)

inputValue.addEventListener('input',function(e){
    userValue = e.target.value;
})

btn.addEventListener('click',function() {
    checkGuess()
    previousValue.push(userValue)
    prevousGuesse.innerHTML = ` Your Guess is : ${ previousValue }`;
    limit()
})

showBtn.addEventListener('click',function(){
    location.reload();
})

function checkGuess(){
   if(isNaN(userValue)){
       alert("Please enter a valid number")
   }
   else if(userValue > randomNumber){
        result.innerHTML = "Please Enter a lesser number"
    }else if(userValue < randomNumber){
        result.innerHTML = "Please Enter a higher number"
    }else if(userValue = ''){
        alert("Enter a value")
    }
    else{
        result.innerHTML = "You Guessed Correctly!"
        showBtn.style.display = 'block'
    }

   }

function limit(){
    count++;
    console.log(count)
    if(count >= 10 ){
        console.log(count)
        counts.innerHTML = "You crossed your limit"
        showBtn.style.display = 'block'
        inputValue.setAttribute('disabled','');
        btn.setAttribute('disabled','');
    }else{
        
        counts.innerHTML = `You have <span>${decre--}</span> attempts to guess the right number`
    }
    
}

