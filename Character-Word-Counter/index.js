const inputValue = document.getElementById('input-value');
const btnClick  = document.getElementById('btn-click')
const hideContainer = document.querySelector('.hide-container')


btnClick.addEventListener('click',function(){
    if(inputValue.value){
        hideContainer.style.display = "block";
        calculate();
    }
    else{
        alert("Please Enter Text")
    }
})

function calculate(){
   let input = document.getElementById('input-value').value;
   console.log(input)

   let textRegex = input.replace(/\s/g, "");
   let numberOfCharacter = textRegex.length
   let output1 = document.getElementById('output1').innerHTML = "Total Character = " +numberOfCharacter;

   let wordRegex = input.match(/\w+/g);
   let totalWord = wordRegex.length;
   let output2 = document.getElementById('output2').innerHTML = "Total Word = " +totalWord;

}
