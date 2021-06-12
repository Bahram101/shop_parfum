const products = document.querySelectorAll('.product');

products.forEach(function(product){
    product.addEventListener('mouseover',function(){
        const images = this.querySelector('.images');
        const cart = this.querySelector('.cart');
        const zoom = this.querySelector('.zoom');
        const heart = this.querySelector('.heart');
        images.style.visibility = "unset";
        cart.style.visibility = "unset";
        zoom.style.visibility = "unset";
        heart.style.visibility = "unset";
        product.style.backgroundColor = "white";
    });
    product.addEventListener('mouseout',function(){
        const images = this.querySelector('.images');
        const cart = this.querySelector('.cart');
        const zoom = this.querySelector('.zoom');
        const heart = this.querySelector('.heart');
        images.style.visibility = "hidden";
        cart.style.visibility = "hidden";
        zoom.style.visibility = "hidden";
        heart.style.visibility = "hidden";
        product.style.backgroundColor = "transparent";
    })
})

/*
const products = document.querySelectorAll('.product');

products.forEach(function(product){
    const header = product.querySelector('.product-header');

    header.addEventListener('mouseover',function(){

        const footer = product.querySelector('.product-footer');
        footer.style.visibility = "unset";
        product.style.backgroundColor = "white";
    });
    product.addEventListener('mouseout',function(){
        const images = this.querySelector('.images');
        images.style.visibility = "hidden";
        product.style.backgroundColor = "transparent";
    })
})
*/
