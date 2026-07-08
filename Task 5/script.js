let cart = JSON.parse(localStorage.getItem("cart")) || [];

displayCart();

function addCart(name, price) {
    cart.push({
        name: name,
        price: price
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

    alert(name + " added to cart!");
}

function displayCart() {

    const cartList = document.getElementById("cart");
    const total = document.getElementById("total");

    cartList.innerHTML = "";

    let totalPrice = 0;

    cart.forEach((item, index) => {

        totalPrice += item.price;

        let li = document.createElement("li");

        li.innerHTML = `
        ${item.name} - ₹${item.price}

        <button class="remove-btn"
        onclick="removeItem(${index})">
        Remove
        </button>
        `;

        cartList.appendChild(li);

    });

    total.innerHTML = totalPrice;

}

function removeItem(index) {

    cart.splice(index,1);

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

}

function checkout(){

    if(cart.length==0){

        alert("Your cart is empty!");

        return;
    }

    alert("Thank you for shopping!\nTotal Amount : ₹"+document.getElementById("total").innerHTML);

    cart=[];

    localStorage.removeItem("cart");

    displayCart();

}

function searchProduct(){

    let input=document.getElementById("search").value.toLowerCase();

    let products=document.getElementsByClassName("product");

    for(let i=0;i<products.length;i++){

        let name=products[i]
        .getElementsByTagName("h3")[0]
        .innerHTML
        .toLowerCase();

        if(name.indexOf(input)>-1){

            products[i].style.display="block";

        }

        else{

            products[i].style.display="none";

        }

    }

}
