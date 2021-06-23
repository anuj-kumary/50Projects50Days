const openModal = document.getElementById('btn')
const btnHide = document.getElementById('modal-btn')
const modalData = document.getElementById('modal-data')
const closeModal = document.getElementById('close')

openModal.addEventListener('click',function(){
    modalData.style.display = "block"
    btnHide.style.display = "none"
})

closeModal.addEventListener('click',function(){
    modalData.style.display = "none";
    btnHide.style.display = "block"
})

window.addEventListener('click',function(e){
    if(e.target == modalData){
        modalData.style.display = "none";
    }
})
