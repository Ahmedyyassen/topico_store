
// open cart side 
let side = document.getElementById('side');
let cart = document.getElementById('cart');
let close = document.getElementById('close');

cart.addEventListener('click',()=>{
    side.classList.add('active')
})
close.addEventListener('click',()=>{
    side.classList.remove('active')
})

// add product to cart

var all_product_json;

var content_x = document.getElementById('content');

let product_cart = [];

function addToCart(id , btn){
    product_cart.push(all_product_json[id])
    btn.classList.add("active")
    getCartItem()
    console.log( getCartItem())
}


let counter = document.getElementById('counter')
let total_price = document.getElementById('total_price')
let top_counter = document.getElementById('top_counter')
let low_total_price = document.getElementById('low_total_price')


function getCartItem(){

    let total_pri =0;
    let items_c ="";
    for (let i = 0; i < product_cart.length; i++) {

        items_c += `
        
                    <div class="item">
                <img src=" ${product_cart[i].img} " alt="">
                <div class="info">
                    <h2>${product_cart[i].name}</h2>
                    <p>$${product_cart[i].price}</p>
                </div>
                <button onclick=" removeCartItem( ${i})" ><i  class="fa-solid fa-trash-can"></i></button>
            </div>
        
        `
        
        total_pri += product_cart[i].price

    }
    content_x.innerHTML = items_c;

    total_price.innerHTML = "$"+total_pri
    low_total_price.innerHTML = "$"+total_pri

    counter.innerHTML = product_cart.length
    top_counter.innerHTML = `( ${product_cart.length} item in cart )`

}
function removeCartItem(index){
    product_cart.splice(index, 1)
    getCartItem()

}


// ===========================

let backtotop = document.querySelector('.backtotop')

backtotop.addEventListener("click", function(){
    window.scrollTo({
        top:0
    })
})

// =================resoponsive====================



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