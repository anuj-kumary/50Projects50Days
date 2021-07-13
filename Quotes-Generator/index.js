let btn = document.getElementById('btn')
let quote = document.getElementById('quotes')
let author = document.getElementById('author')


btn.addEventListener('click',function(){
  getQuotes()
})

function getQuotes(){

fetch('https://type.fit/api/quotes')
.then((data)=>{
  return data.json()
}).then((quotes)=>{
  let numbers = Math.floor(Math.random()*100)
  quote.innerText =` "${quotes[numbers].text}" `;
  author.innerText =`-${quotes[numbers].author}`;
  
})

}
