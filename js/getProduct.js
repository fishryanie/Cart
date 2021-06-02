let arrProduct = [];
let arrAccessories = [];
let arrCart = [];
console.log(arrCart)
let getDataAccessories = async function () {
    try {
        let result = await axios({
            url: "../data/dataAccessories.json",
            method: 'GET',
            responseType: 'json',
        });
        arrAccessories = result.data;
        renderAccessories(arrAccessories);
    } catch (err) {
        console.log(err);
    }
}
const renderAccessories = (arrResult) => {
    const contentAccessories = arrResult.reduce((content, item) => {
        return content += `
            <div class="accessories_item">
                <div>${item.icon}</div>
                <p>${item.name}<h1>
            </div>`
    }, "")
    document.querySelector(".row_accessories").innerHTML = contentAccessories
}
getDataAccessories();


let getDataProduct = async function () {
    try {
        let result = await axios({
            url: "../data/dataProduct.json",
            method: 'GET',
            responseType: 'json',
        });
        arrProduct = result.data;
        renderProduct(arrProduct)
    } catch (err) {
        console.log(err);
    }
}
const renderProduct = (arrResult) => {
    let iphone = arrResult.filter((watch) => watch.type === "phone");
    const contentPhone = iphone.reduce((content, item) => {
        return content += `
            <div class="phone_item">
                <div class="phone_item_row1 text-center">
                    <img src= '${item.img}' width="100%"  alt="">
                    <div class="promotion">
                    <span>Trả góp 0%</span>
                    <p>Giảm giá 3.000.000đ</p>
                    </div>
                </div>
                <div class="phone_item_row2">
                    <div>
                        <h6>${item.name}</h6>
                        <span>${item.price.toLocaleString()} đ </span>
                    </div>
                    <div>
                        <i class='bx bxs-shopping-bag bx-tada' onclick="addToCart('${item.id}')"></i>
                    </div>
                </div>
                <div class="phone_item_row3">
                    <span class ="text-warning ml-2">✭✭✭✭✭</span>
                    <span>5 đanh giá</span>
                </div>
            </div>`
    }, "")
    document.querySelector('.phone_row').innerHTML = contentPhone;

    let appleWatch = arrResult.filter((iphone) => iphone.Brand === "watch");
    const contentAppleWatch = appleWatch.reduce((content, item) => {
        return content += `
            <div class="watch_item">
                <div class="watch_item_row1 text-center">
                    <img src= '${item.img}' width="70%"  alt="">
                    <div class="promotion">
                    <span>Trả góp 0%</span>
                    <p>Giảm giá 3.000.000đ</p>
                    </div>
                </div>
                <div class="watch_item_row2">
                    <div>
                        <h6>${item.name}</h6>
                        <span>${item.price.toLocaleString()} đ</span>
                    </div>
                    <div>
                        <i class='bx bxs-shopping-bag bx-tada' onclick="addToCart('${item.id}')"></i>
                    </div>
                </div>
                <div class="watch_item_row3">
                    <span class ="text-warning ml-2">✭✭✭✭✭</span>
                    <span>5 đanh giá</span>
                </div>
            </div>`
    }, "");
    document.querySelector('.watch_row').innerHTML = contentAppleWatch;
}
getDataProduct();

let getLocal = () => {
    if (localStorage.getItem("cart")) {
        arrCart = JSON.parse(localStorage.getItem("cart"))
        console.log(arrCart)
    }
}
getLocal()

window.addToCart = (id) => {
    let index = arrProduct.findIndex(item => item.id === id);
    let indexCart = arrCart.findIndex(item => item.id === id);
    if (index !== -1) {
        if(indexCart !== -1 && arrProduct[index].id === arrCart[indexCart].id){
            arrCart[indexCart].amount += 1
        }else{
            arrCart.push(arrProduct[index]);
        }
        alert("Đã Thêm " + arrProduct[index].name +" vào giỏ hàng");
        saveLocal();
    }
}
let saveLocal = () => { localStorage.setItem("cart", JSON.stringify(arrCart))}
// arrCart.reduce((item, index) =>item.price = item.price * item.amount)
const renderCart = (arrResult) => {
    const contentCart = arrResult.reduce((content, item) => {
        return content +=`
        <tr>
            <td class="imgCart"><img src= '${item.img}' width="40%"  alt=""></td>
            <td class="nameCart">${item.name}</td>
            <td class="qualityCart">
                <div>
                    <button onclick = "giamSoLuong ('${item.id}')" style="padding:0px 5px"> - </button>
                    <span>${item.amount}</span>
                    <button onclick = "tangSoLuong ('${item.id}')" style="padding:0px 5px"> + </button>
                </div>
            </td>
            <td>${(item.price * item.amount).toLocaleString()} đ</td>
            <td><i class="fas fa-trash-alt" onclick=xoaItemCart('${item.id}')></i><a href="../Pages/Detail.html"><i class="fas fa-info-circle"></i></a></td>
        </tr>`
    }, "");
    document.querySelector("#tableDanhSach").innerHTML = contentCart;
}
renderCart(arrCart);

window.tangSoLuong = (id) => {
    let index = arrCart.findIndex((item)=>item.id === id)
    arrCart[index].amount ++;
    renderSumPrice(arrCart)
    renderCart(arrCart)
    saveLocal()
}
window.giamSoLuong = (id) => {
    let index = arrCart.findIndex((item)=>item.id === id)
    arrCart[index].amount --;
    renderSumPrice(arrCart)
    renderCart(arrCart)
    saveLocal()
}

window.xoaItemCart = (id) => {
    let index = arrCart.findIndex(item => item.id === id);
    alert("Đã xóa " + arrCart[index].name);
    arrCart.splice(index,1);
    renderSumPrice(arrCart)
    renderCart(arrCart);
    saveLocal()
}

//====================== Tính tiền hàng ==========================>
const renderSumPrice = (params) => {
    let sumPrice = params.reduce((sum, item, index) =>  sum += item.price * item.amount,1)
    let ship = 111000;
    let sumPay = ship + sumPrice
    document.querySelector("#sumProduct").innerHTML = `${sumPrice.toLocaleString() } đ`
    document.querySelector("#ship").innerHTML = ship.toLocaleString() + " đ";
    document.querySelector("#sumPay").innerHTML = sumPay.toLocaleString() + " đ"
}
renderSumPrice(arrCart)



document.getElementById("searchCart").addEventListener("keyup", function (event) {
    let keyWord = event.target.value
    let cartSearch = arrCart.filter((value) => value.name.includes(keyWord));
    renderCart(cartSearch);
    console.log(keyWord)
});

console.log(arrCart)