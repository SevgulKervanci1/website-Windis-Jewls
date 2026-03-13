//* This code is from Chat GPT*//
let cart = JSON.parse(localStorage.getItem("cart")) || [];


//* showes how many items*//
let count = document.getElementById("cart-count");

if(count){
    count.innerText = cart.length;}

//* Adds to cart*//
let button = document.getElementById("add-to-cart");

if(button){
    button.onclick = function(){

        let product = {
            name: "HEDDA PUFFY HEART BRACELET",
            image: "https://safira.imgix.net/2292_7510a6006e-1200284-12-original.jpg",
            price: 699

        };

//*This code is from Chat GPT*//
cart.push(product);
localStorage.setItem("cart", JSON.stringify(cart));

if(count){
count.innerText = cart.length;
}

};

}



//* Shows in the cart *//
let cartProducts = document.getElementById("cart-products");


//* This 3 lines of code is from Chat GPT*//
if(cartProducts){
cart.forEach(function(product, i){
cartProducts.innerHTML += ` 


<div class = "cart-item">
<img src="${product.image}" class="cart-image">
<div class="cart-info">
<p>${product.name}</p>
<p>${product.price} SEK</p>
<button onclick="removeItem(${i})">Remove</button>
</div>
</div>
`;

});

}

//*Total sum of money*//
let cartTotal = document.getElementById ("cart-total");
if(cartTotal){

    //* This code is from Chat GPT*//
    let total = cart.reduce((sum,product) => sum + product.price, 0);
    cartTotal.innerText = total;
}




//*Removes products*//
function removeItem(i){
cart.splice(i,1);

//* This code is from Chat GPT*//
localStorage.setItem("cart", JSON.stringify(cart));
location.reload();
}