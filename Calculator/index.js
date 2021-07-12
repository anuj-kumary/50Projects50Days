const screen = document.getElementById('screen');

let button = document.querySelectorAll('button');
let screenValue = "";

for(item of button){
    item.addEventListener('click',function(e){
        buttonValue = e.target.innerText
       if(buttonValue == '='){
           screen.value = eval(screenValue);
       }
       else if(buttonValue === 'CE'){
        //    buttonValue = "";
        //    screen.value = buttonValue
        document.getElementById('screen').value = "";
       }
       else{
           screenValue += buttonValue
           screen.value = screenValue
       }
    })
}