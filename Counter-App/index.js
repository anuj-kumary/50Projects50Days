const increment = document.getElementById('inc');
const decrement = document.getElementById('dec');
const inputValue = document.getElementById('inputvalue')
const reset = document.getElementById('reset')

let counter = 0;
increment.addEventListener('click',function(){
   counter++;
   console.log(counter)
   inputValue.innerHTML = counter

})
decrement.addEventListener('click',function(){
    if(counter > 0){
        counter--;
        console.log(counter)
        inputValue.innerHTML = counter
    }
    else{
        alert("Sorry , This is the minimum value")
    }
})
reset.addEventListener('click',function(){
    inputValue.innerHTML = 0;
})