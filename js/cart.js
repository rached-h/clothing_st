let total = 0;
let all_added =document.querySelectorAll(".Added .price" );
all_added.forEach(prc => {
    total += parseFloat(prc.innerHTML);
})
document.getElementById("total").innerHTML=total;