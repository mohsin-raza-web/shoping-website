let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image){
    let exist = cart.find(p => p.name === name);
    if(exist){
        exist.qty++;
    }else{
        cart.push({name, price, image, qty:1});
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart");
}

function loadCart(){
    let container = document.getElementById("cart-items");
    let total = 0;
    container.innerHTML = "";

    cart.forEach(item=>{
        total += item.price * item.qty;
        container.innerHTML += `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>Rs ${item.price} x ${item.qty}</p>
            </div>
            <div>
                <button onclick="removeItem('${item.name}')">Remove</button>
            </div>
        </div>`;
    });

    document.getElementById("total").innerText = "Total: Rs " + total;
}

function removeItem(name){
    cart = cart.filter(p => p.name !== name);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}