function addToCart(product) {
    console.log(product + " added to cart!");
    alert(product + " has been added to your cart!");
}

function buyNow(product) {
    console.log("Proceeding to checkout for " + product);
    alert("Redirecting to checkout for " + product);
}

function searchProduct() {
    let searchQuery = document.getElementById("search-bar").value;
    console.log("Searching for: " + searchQuery);
    alert("Searching for: " + searchQuery);
}
