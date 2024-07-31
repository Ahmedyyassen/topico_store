
let bar = document.getElementById('bar')
let xmark = document.getElementById('xmark')
let list = document.getElementById('list')
let blur_screen = document.getElementById('blur_screen')



bar.addEventListener('click', ()=> {
    list.classList.add('active')
})

xmark.addEventListener("click", ()=> {
    list.classList.remove('active')
})
blur_screen.addEventListener("click", ()=> {
    list.classList.remove('active')
})