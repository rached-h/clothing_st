let total = 0;
let all_added =document.querySelectorAll(".Added .price" );
all_added.forEach(prc => {
    total += parseFloat(prc.innerHTML);
})
document.getElementById("total").innerHTML=total;


function deliveryType(type) {
    document.getElementById('city-commune').classList.add('disactivated');
    document.getElementById('address').classList.add('disactivated');
    document.getElementById(type).classList.remove('disactivated');
}

let popup = document.getElementById("pop-up");
let checkout = document.getElementById("checkout");
let close = document.getElementById("close");
let overlay = document.getElementById("overlay");
checkout.addEventListener('click',() => {popup.classList.add('active');
overlay.style.display="block";
overlay.style.opacity="1";
});
close.addEventListener('click',() => {popup.classList.remove('active');
    overlay.style.display="none";
    overlay.style.opacity="0";
});

