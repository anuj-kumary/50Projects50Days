const bar = document.getElementById('bars')

const menuItem = document.getElementById('list-item')

bar.addEventListener('click',function(){
    menuItem.classList.toggle('show')
})