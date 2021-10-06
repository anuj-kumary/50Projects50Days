
const text = document.querySelector("#text");
const copy = document.querySelector("#copy");

  copy.addEventListener("click", ()=>{
    text.focus();
    text.select();
    document.execCommand('copy');
    btn.innerText = 'copied';
  })