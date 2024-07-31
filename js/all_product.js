fetch('js/items.json')
.then(response => response.json())
.then(data => {

   
   
    let product_item_filter = document.getElementById('product_item_filter')


data.forEach(element => {

    if(element.price){


        product_item_filter.innerHTML += `  
        
        
        
        <div class="product swiper-slide">


            <div class="side-bar">
                <span><i onclick=" addToCart( ${element.id} , this)" class="fa-solid fa-cart-plus"></i></span>
                <span><i class="fa-solid fa-heart"></i></span>
                <span><i class="fa-solid fa-share"></i></span>
            </div>

            <div class="img-product">
                <img src="${element.img}" alt="">
                <img src="${element.img_hover}" alt="" class="hover-img">
            </div>

            <h3><a href="item.html">${element.name}</a>
            </h3>
            <div class="stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
            </div>

            <div class="price">
                <p>$${element.price}</p>
            </div>
            </div>
        
        `
    }
    
});

})

//--------------------------------------------------------
let filter = document.getElementById('filter');

let filter_list = document.getElementById('filter_list');

filter.addEventListener("click", ()=>{
    filter_list.classList.toggle('active')
})


