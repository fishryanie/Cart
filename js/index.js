
//=================================  Mở trang login ==========================>
document.getElementById("dangnhap").onclick =()=>{
    document.getElementById("login").style.opacity = "1"
    document.getElementById("login").style.visibility = "visible"
    document.getElementById("content__form").style.top = "50%"
    document.getElementById("content__form").style.transition = " all 0.3s linear";
}
document.getElementById("exit").onclick = ()=>{
    document.getElementById("login").style.opacity = "0"
    document.getElementById("login").style.visibility = "hidden"
    document.getElementById("content__form").style.top = "-50%"
    document.getElementById("content__form").style.transition = " all 0.3s linear";
}
dem = 0
document.getElementById("btnSearch").onclick =()=> {
    dem ++
    if(dem ==1){document.getElementById("Search").style.cssText = "visibility: visible; opacity:1; width:400px;"}
    if(dem == 2){document.getElementById("Search").style.cssText = "visibility: hidden; opacity: 0; width:0px"; dem = 0}
}
document.querySelector('.btnMenu').onclick =() => {
    document.querySelector(`#nav`).classList.toggle("action")
}

let soLieu = 0;
let shop = setInterval(() => {soLieu ++
    document.getElementById("document_shop").innerHTML = soLieu
    if(soLieu >= 458) clearInterval(shop)
},3)

let revenue = setInterval(() => { soLieu ++
    document.getElementById("document_revenue").innerHTML = soLieu
     if (soLieu >= 3153) clearInterval(revenue)
},0)

let document_personal = setInterval(() => { soLieu ++
    document.getElementById("document_personal").innerHTML = soLieu
    if (soLieu >= 1156) clearInterval(document_personal)
},1)

let document_partner = setInterval(() => { soLieu ++
    document.getElementById("document_partner").innerHTML = soLieu
    if (soLieu >= 619) clearInterval(document_partner)
},2)

var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: "radar",
    // The data for our dataset
    data: {
        labels: ["","2017","2018", "2019", "2020", "2021"],
        datasets: [{
            label: "Shop",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 100, 205, 373, 489, 460]
        }]
    },
    // Configuration options go here
    options: {}
});



