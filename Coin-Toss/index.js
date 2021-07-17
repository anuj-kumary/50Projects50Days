const btn = document.querySelector('#btn');
const result = document.querySelector('#result')
const coin = document.querySelector('#coin')
const featureCoin = document.querySelector('#featureCoin')

const coinToss = () => {
    let x = Math.floor(Math.random()*2);

    if(x === 0){
        coin.innerHTML = '<img class ="head flip" src="https://upload.wikimedia.org/wikipedia/en/5/52/British_fifty_pence_coin_2015_obverse.png"/>';
        setTimeout(()=>{
            result.innerHTML = '<h2>You got heads</h2>'
        },1000)
        
    }else{
        coin.innerHTML = '<img class="tail flip" src="https://upload.wikimedia.org/wikipedia/en/d/d8/British_fifty_pence_coin_2015_reverse.png"/>';
        setTimeout(()=>{
            result.innerHTML = '<h2>You got tails</h2>'
        },1000)
       
    }
}


btn.addEventListener('click', function(){
    coinToss()
    featureCoin.remove();
})