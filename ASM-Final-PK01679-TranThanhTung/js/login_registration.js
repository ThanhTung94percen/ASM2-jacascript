var btnlogin = document.getElementById('btn-login');
var FormLogin = document.getElementById('wap_login');
var FornRegsi_moi = document.getElementById('wap_registration');
var btnhuy_dn = document.getElementById('btn-huy_dn');
var btnhuy_dk = document.getElementById('btn-huy_dk');
var btndangkymoi1 = document.getElementById('btn-dangkymoi1');
var btndangkymoi = document.getElementById('btn-dangkymoi');
var btndangnhaplai = document.getElementById('btn-dangnhaplai');
var span_dn = document.getElementsByClassName("close_login")[0];
var span_dk = document.getElementsByClassName("close_registration")[0];
var icon_user = document.getElementById("icon_user");
var user = document.getElementById('user');
var cart = document.getElementById('displayBlock');
icon_user.onclick = function () {
    user.classList.toggle('active');
    console.log(cart.classList.toggle('active'));
    if (!cart.classList.toggle('active')) {

    } else {
        cart.classList.toggle('active');
    }  
}
function login() {
    FormLogin.style.display = "block";
    FornRegsi_moi.style.display = "none";

    user.classList.toggle('active');
}
//hủy dăng nhập
btnhuy_dn.onclick = function () {
    FormLogin.style.display = "none";

}
span_dn.onclick = function () {
    FormLogin.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == FormLogin) {
        FormLogin.style.display = "none";
    }
    if (event.target == FornRegsi_moi) {
        FornRegsi_moi.style.display = "none";
    }
}
//hủy đăng ký
btnhuy_dk.onclick = function () {
    FornRegsi_moi.style.display = "none";
}
span_dk.onclick = function () {
    FornRegsi_moi.style.display = "none";
}
//btn đăng ký mới
btndangkymoi1.onclick = function () {

    FormLogin.style.display = "none";
    FornRegsi_moi.style.display = "block";
}
btndangkymoi.onclick = function () {

    FormLogin.style.display = "none";
    FornRegsi_moi.style.display = "block";
    user.classList.toggle('active');
}
//btn đăng nhập lại
btndangnhaplai.onclick = function () {

    FornRegsi_moi.style.display = "none";
    FormLogin.style.display = "block";
}
//kiểm tra điều kiện nhập vào
var uname = fLogin.uname;
var psw = fLogin.psw;
var uname_new = fRegistration.uname_new;
var pws_new = fRegistration.pws_new;
var fullname = fRegistration.fullname;
var sdt = fRegistration.sdt;
var email = fRegistration.email;
var sex = fRegistration.sex;
var check_user = document.getElementById('check');
var check_psw = document.getElementById('check1');
var check_user_new = document.getElementById('check2');
var check_psw_new = document.getElementById('check3');
var check_fullname = document.getElementById('check4');
var check_sdt = document.getElementById('check5');
var check_email = document.getElementById('check6');
var check_sex = document.getElementById('check7');
function check_login() {
    if (uname.value.trim().length == 0) {
        check_user.innerHTML = "Vui lòng nhập tài khoản";
        uname.focus();
        return;
    } else {
        check_user.innerHTML = "";
    }
    if (psw.value.trim().length == 0) {
        check_psw.innerHTML = "Vui lòng nhập mật khẩu";
        psw.focus();
        return;
    } else {
        check_psw.innerHTML = "";
    }
    alert("Chào mừng: " + uname.value + " đã quay trở lại!")
    FormLogin.style.display = "none";
}
function check_regstration() {
    var err_check = false;
    if (uname_new.value.trim().length == 0) {
        check_user_new.innerHTML = "Vui lòng nhập tài khoản";
        uname_new.focus();
        return;
    } else {
        check_user_new.innerHTML = "";
    }
    if (pws_new.value.trim().length == 0) {
        check_psw_new.innerHTML = "Vui lòng nhập mật khẩu";
        pws_new.focus();
        return;
    } else {
        check_psw_new.innerHTML = "";
    }
    if (fullname.value.trim().length == 0) {
        check_fullname.innerHTML = "Vui lòng nhập Họ và Tên";
        fullname.focus();
        return;
    } else {
        check_fullname.innerHTML = "";
    }
    if (sdt.value.trim().length == 0) {
        check_sdt.innerHTML = "Vui lòng nhập SĐT";
        sdt.focus();
        return;
    } else {
        if (!isNaN(sdt.value)) {
            if (sdt.value.trim().length == 10) {
                check_sdt.innerHTML = "";
            } else {
                check_sdt.innerHTML = "Số điện thoại phải có 10 số!";
                sdt.focus();
                return;
            }
        } else {
            check_sdt.innerHTML = "Không đúng định dạng số!";
            sdt.focus();
            return;
        }
    }
    var pattern = /^\w{2,20}@\w{2,15}(.[a-zA-Z]{2,3}){1,2}$/;
    if (email.value.trim().length == 0) {

        check_email.innerHTML = "Vui lòng nhập Email";
        email.focus();
        return;
    } else {
        if (!pattern.test(email.value)) {

            check_email.innerHTML = "Email không đúng định dạng!!!";
            email.focus();
            return;
        } else {
            check_email.innerHTML = "";
        }
    }
    if (sex.value == 0) {
        check_sex.innerHTML = "Vui lòng chọn giới tính!";
        sex.focus();
        return;
    } else {
        check_sex.innerHTML = "";
    }
    alert("Chào mừng " + uname_new.value + " đến với PS09103 TEA");
    FornRegsi_moi.style.display = "none";
}