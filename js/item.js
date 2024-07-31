let big_img = document.getElementById('big_img');
let small_img0 = document.getElementById('small_img0');
let small_img1 = document.getElementById('small_img1');
let small_img2 = document.getElementById('small_img2');
let small_img3 = document.getElementById('small_img3');


small_img0.addEventListener("click", ()=>{
    big_img.src = small_img0.src
})
small_img1.addEventListener("click", ()=>{
    big_img.src = small_img1.src
})
small_img2.addEventListener("click", ()=>{
    big_img.src = small_img2.src
})
small_img3.addEventListener("click", ()=>{
    big_img.src = small_img3.src
})

// ==========================================


