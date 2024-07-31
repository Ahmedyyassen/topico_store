    fetch('js/items.json')
        .then(response => response.json())
        .then(data => {

            all_product_json = data;
           

            let products_items = document.getElementById('projects_json')
            let projects_json_nosale = document.getElementById('projects_json_nosale')
            let projects_json_nosale2 = document.getElementById('projects_json_nosale2')

            let items_products = document.getElementById('items_products')


        data.forEach(element => {

            if(element.old_price){

                const parcent_disc = Math.floor((element.old_price - element.price) / element.old_price*100);

                products_items.innerHTML += `  
                
                
                
                <div class="product swiper-slide">

                    <span class="sale-parsent">% ${parcent_disc} </span>

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
                        <div class="before">$${element.old_price}</div>
                    </div>
                    </div>
                
                `
            }
            
        });

        data.forEach(element => {

            if(element.old_price){


                projects_json_nosale.innerHTML += `  
                
                
                
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

                    <h3><a href="">${element.name}</a>
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

        data.forEach(element => {

            if(element.phone){


                projects_json_nosale2.innerHTML += `  
                
                
                
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

                    <h3><a href="">${element.name}</a>
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

        data.forEach(element => {

            if(element.ahmed){


                items_products.innerHTML += `  

                <div class="image">
                <div class="big_img">
                    <img src="img/item/samsung s22 ultra/item0.webp" id="big_img">
                </div>
                <div class="samall_image">
                    <span><img src="img/item/samsung s22 ultra/item0.webp" id="small_img0"></span>
                    <span><img src="img/item/samsung s22 ultra/item1.webp" id="small_img1"></span>
                    <span><img src="img/item/samsung s22 ultra/item2.webp" id="small_img2"></span>
                    <span><img src="img/item/samsung s22 ultra/item3.webp" id="small_img3"></span>
                   
                </div>
            </div>


            <div class="details">
                <h1>Samsung Galaxy S24 Ultra 5G AI 256GB 512GB 1TB Unlocked New Sealed</h1>
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="price">
                    <h4>$1,849</h4>
                    <h5>$1,999</h5>
                </div>
                <h4>availability: <span>in stock</span></h4>
                <h4>SKU: <span>Dynamic LTPO AMOLED 2X, 120Hz, HDR10+, 2600 nits (peak)</span></h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, error consequatur. Nemo quisquam deleniti repudiandae sint. Aperiam cumque minima, harum est vel adipisci reiciendis architecto voluptatem fuga consequuntur nihil ducimus assumenda sapiente laborum exercitationem libero. Ducimus quidem, distinctio ipsum sint illum delectus facere et quos? Tempore eius magni, optio impedit nisi dolore animi perspiciatis explicabo unde quo aut! Temporibus, nesciunt.</p>
                <h2>Hurrry Up! Only 98 products left in stock</h2>
                <button id="button_cart" onclick=" addToCart(0,this )">add to cart <i class="fa-solid fa-cart-plus"></i></button>
                <div class="low_bar">
                    <span><i class="fa-solid fa-heart"></i></span>
                    <span><i class="fa-solid fa-sliders"></i></span>
                    <span><i class="fa-solid fa-print"></i></span>
                    <span><i class="fa-solid fa-share-nodes"></i></span>
                </div>
            </div>
                
               
                
                `
            }
            
        });
        // ====================================================


        
    })