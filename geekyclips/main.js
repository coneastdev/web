const product_id =  new URLSearchParams(window.location.search).get('product');
console.log(product_id);
if (product_id != null) {
    console.log(product_id)
    setTimeout(() => {
        document.getElementById("shop").style.display = ""
        document.getElementById("main").style.filter = "blur(3px)"
        document.getElementById("main").style.filter = "-webkit-filter: blur(3px)"
        document.getElementById("productname").innerText = product_id
        document.getElementById("close-btn").style.visibility = "visible"
    }, 100);
}

