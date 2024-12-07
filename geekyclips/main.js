const product_id =  new URLSearchParams(window.location.search).get('product');
console.log(product_id);
if (product_id != null && product_id != "") {
    console.log(product_id)
    setTimeout(() => {
        document.getElementById("shop").style.display = ""
        document.getElementById("main").style.filter = "blur(3px)"
        document.getElementById("main").style.filter = "-webkit-filter: blur(3px)"
        document.getElementById("productname").innerText = product_id
        document.getElementById("close-btn").style.display = "inline"
        document.getElementById("name-nav").style.display = "none"
        document.getElementById("main").style.display = "none"
        document.getElementById(product_id + "-opt").selected = "true"
        document.getElementById("product-img").src = "./media/" + product_id + ".png" 
        document.getElementById("stock").innerText = Math.round(Math.random() * 17) + 5
    }, 100);
} else {
    const toastLiveExample = document.getElementById('liveToast')
}

function selectfunc() {
    window.location.href = "https://coneastdev.github.io/web/geekyclips?product=" + document.getElementById("pro-select")
}



setTimeout(() => {
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
    toastBootstrap.show()
}, Math.round(Math.random(3000) * 10000));
