function id(ID){return document.getElementById(ID)}
var icon = '<i class="fa fa-exclamation-triangle"></i>'

id("btnSub").onlick =() => {
    console.log("quanday")
    // ================== kiểm tra tên ==========================>
    var isValue = kiemTraRong("name", "nameError") &&
    kiemTraSo("name", "nameError") &&
    kiemTraDoDai("name", "nameError", 3, 10)

    // ================== kiểm tra họ ===========================>
    isValue &= kiemTraRong("lastName","lastNameError") && kiemTraSo("lastName", "lastNameError") &&
    kiemTraDoDai("lastName", "lastNameError", 3, 10)

    // ================== kiểm tra địa chỉ ========================>
    isValue &= kiemTraRong("address","txtDiaChi") && kiemTraDoDai("address","txtDiaChi", 5, 50)

    // ================== kiểm tra ngày sinh ======================>
    isValue &= kiemTraRong("birthDay","txtBirthDay")

    // ================== kiểm tra email =========================>
    isValue &= kiemTraRong("email","txtEmail") && kiemTraEmail("email","txtEmail")

    // ================== kiểm tra pass ===========================>
    isValue &= kiemTraRong("pass","txtPass")

    // ================== kiểm tra nhập lại pass =====================>
    isValue &= kiemTraRong("passAgain","txtPassAgain")

    // ================== kiểm tra đăng nhập =======================>
    if(isValue){
        dangNhapThanhCong()
    }
};

dangNhapThanhCong =()=>{
    id("daThem").innerHTML =
         `<div class="da-them" id="da-them">
            <div class="iconDaThem">
                <i class="fa fa-check-circle"></i>
                <p style = "left: 0px">Đã đăng kí thàng công</p>
            </div>
        </div>`;
    setTimeout(()=>{
        id("daThem").innerHTML = ``;
        id("form").reset()
    }, 2000);
}

kiemTraRong = (id_input, id_txt)=>{
    if(id(id_input).value.trim() === ""){
        id(id_input).style = "border: 1px solid red"
        id(id_txt).innerHTML = `không được để trống ${icon} `
        return false
    }else{
        id(id_txt).innerHTML = ""
        id(id_input).style = "border: 1px solid #ced4da"
        return true
    }
}

kiemTraSo = (id_input, id_txt) =>{
    if(id(id_input).value.match(/^[0-9]+$/)){
        id(id_input).style = "border: 1px solid red"
        id(id_txt).innerHTML = `Tên không được ghi số ${icon}`
        return false
    }else{
        id(id_txt).innerHTML = "";
        id(id_input).style = "border: 1px solid #ced4da"
        return true
    }
}

kiemTraEmail = (id_input, id_txt) =>{
    if(id(id_input).value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
        id(id_txt).innerHTML = "";
        id(id_input).style = "border: 1px solid #ced4da"
        return true
    }else{
        id(id_input).style = "border: 1px solid red"
        id(id_txt).innerHTML = `Email không hợp lệ ${icon}`
        return false
    }
}

kiemTraDoDai = (id_input, id_txt, min, max) =>{
    if(id(id_input).value.length < min && id(id_input).value.length < max){
        id(id_input).style = "border: 1px solid red"
        id(id_txt).innerHTML = `Yêu cầu phải có từ ${min} - ${max} kí tự ${icon} `
        return false
    }else{
        id(id_txt).innerHTML = "";
        id(id_input).style = "border: 1px solid #ced4da"
    return true
    }
}












