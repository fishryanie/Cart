var tr = document.querySelectorAll(".table tr");
let feature = document.querySelectorAll(".feature div")
setTimeout(() => {document.querySelectorAll(".detail_information h1")[0].style.cssText = "transform: translateX(0%); transition: 1s; animation-timing-function:ease-in-out"}, 0.1 * 1000)
setTimeout(() => {tr[0].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 0.3 * 1000)
setTimeout(() => {tr[1].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 0.5 * 1000)
setTimeout(() => {tr[2].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 0.7 * 1000)
setTimeout(() => {tr[3].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 0.9 * 1000)
setTimeout(() => {tr[4].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 1.1 * 1000)
setTimeout(() => {tr[5].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 1.3 * 1000)
setTimeout(() => {tr[6].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 1.5 * 1000)
setTimeout(() => {tr[6].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 1.7 * 1000)
setTimeout(() => {tr[7].style.cssText = "transform: translateX(120%); transition: 1s; animation-timing-function:ease-in-out"}, 1.9 * 1000)
setTimeout(() => {document.getElementById("price").style.cssText = "transform: translateX(20%); transition: 1s; animation-timing-function:ease-in-out"}, 2.1 * 1000)
setTimeout(() => {document.querySelector(".capacity").style.cssText = "transform: translateX(0%); transition: 1s; animation-timing-function:ease-in-out"}, 2.3 * 1000)
setTimeout(() => {document.getElementById("addToCart").style.cssText = "transform: translate(40%,30%); transition: 1s; animation-timing-function:ease-in-out"},2.5*1000)


setTimeout(() => {feature[0].style.cssText = "transform: translate(10%,100%); transition: 1s; animation-timing-function:ease-in-out"}, 1.4 * 1000)
setTimeout(() => {feature[1].style.cssText = "transform: translate(50%,150%); transition: 1s; animation-timing-function:ease-in-out"},1.1 * 1000)
setTimeout(() => {feature[2].style.cssText = "transform: translate(120%,200%); transition: 1s; animation-timing-function:ease-in-out"}, 0.8 * 1000)
setTimeout(() => {feature[3].style.cssText = "transform: translate(230%,230%); transition: 1s; animation-timing-function:ease-in-out"}, 0.5 * 1000)


// ====================== Chọn dung lượng ================================>
document.getElementById("64gb").onclick =()=> {
    document.querySelectorAll(".capacity div")[0].style.cssText = "background: rgba(0,0,0,0.7);";
    document.querySelectorAll(".capacity div")[1].style.cssText = "background: rgba(0,0,0,0.5);";
    document.querySelectorAll(".capacity div")[2].style.cssText = "background: rgba(0,0,0,0.5);";
    document.getElementById("price").innerHTML = "21.490.000đ"
}

document.getElementById("128gb").onclick =()=> {
    document.querySelectorAll(".capacity div")[1].style.cssText = "background: rgba(0,0,0,0.7);";
    document.querySelectorAll(".capacity div")[0].style.cssText = "background: rgba(0,0,0,0.5);";
    document.querySelectorAll(".capacity div")[2].style.cssText = "background: rgba(0,0,0,0.5);";
    document.getElementById("price").innerHTML = "23.490.000đ"
}
document.getElementById("256gb").onclick =()=> {
    document.querySelectorAll(".capacity div")[2].style.cssText = "background: rgba(0,0,0,0.7);";
    document.querySelectorAll(".capacity div")[0].style.cssText = "background: rgba(0,0,0,0.5);";
    document.querySelectorAll(".capacity div")[1].style.cssText = "background: rgba(0,0,0,0.5);";
    document.getElementById("price").innerHTML = "24.990.000đ"
}

// =============================== Anmimation Col_2 ================================>
let detail_carousel = document.getElementById("detail_carousel")
let detail_img = document.querySelectorAll(".detail_img img");
var dem = 0;
// ====================== Loading ================================>
setTimeout(() => {detail_carousel.style.cssText = "transform: translateX(0px); transition: 1s; animation-timing-function:ease-in-out"}, 0.5 * 1000);
setTimeout(() => {detail_img[0].style.cssText = "transform: translateX(0px); transition: 1s; animation-timing-function:ease-in-out;box-shadow: 0.5px 0.5px 3px 3px rgb(113, 193, 247);"}, 0.5 * 1000);
setTimeout(() => {detail_img[1].style.cssText = "transform: translateX(0px); transition: 1s; animation-timing-function:ease-in-out"}, 1 * 1000);
setTimeout(() => {detail_img[2].style.cssText = "transform: translateX(0px); transition: 1s;animation-timing-function:ease-in-out"}, 1.5 * 1000);
setTimeout(() => {detail_img[3].style.cssText = "transform: translateX(0px); transition: 1s;animation-timing-function:ease-in-out"}, 2 * 1000);
// ====================== Đảo màu ================================>
setInterval(() => {
    dem++
    if (dem == 1) {
        detail_carousel.style.transform = "translateX(-120%)"
        detail_img[0].style.cssText = "transform: translateX(0px)"
        detail_img[1].style.cssText = "box-shadow: 0.5px 0.5px 3px 3px orange; transform: translateX(0px)"
    }
    if (dem == 2) {
        detail_carousel.style.transform = "translateX(-240%)"
        detail_img[1].style.cssText = "transform: translateX(0px); box-shadow: 0.5px 0.5px 3px 3px rgb(221, 221, 221);"
        detail_img[2].style.cssText = "box-shadow: 0.5px 0.5px 3px 3px  black; transform: translateX(0px)"
    }
    if (dem == 3) {
        detail_carousel.style.transform = "translateX(-360%)"
        detail_img[2].style.cssText += "transform: translateX(0px); box-shadow: 0.5px 0.5px 3px 3px rgb(221, 221, 221);"
        detail_img[3].style.cssText = "transform: translateX(0px); box-shadow: 0.5px 0.5px 3px 3px red"
    }
    if (dem > 4) {
        detail_carousel.style.transform = "translateX(0%)";
        detail_img[3].style.cssText += "transform: translateX(0px); box-shadow: 0.5px 0.5px 3px 3px rgb(221, 221, 221);"
        detail_img[0].style.cssText = "transform: translateX(0px); box-shadow: 0.5px 0.5px 3px 3px rgb(113, 193, 247);"
        dem = 0
    }
}, 2000)

