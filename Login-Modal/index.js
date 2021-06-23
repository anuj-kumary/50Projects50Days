const openModal = document.getElementById('btn')
const modalData = document.getElementById('modal-data')
const closeModal = document.getElementById('close')

openModal.addEventListener('click',function(){
    modalData.style.display = "block";
})

closeModal.addEventListener('click',function(){
    modalData.style.display = "none";
})
