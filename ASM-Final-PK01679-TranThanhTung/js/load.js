//load menu
$("a[href*='#']:not([href='#])").click(function () {
    let target = $(this).attr("href");
    $('html,body').stop().animate({
        scrollTop: $(target).offset().top
    }, 1500);
    event.preventDefault();
});

//load box liên hệ
var FormLienhe = document.getElementById('wap_lienhe');
var span_lh = document.getElementsByClassName("close_lh")[0];

function lienhe() {

    FormLienhe.style.display = "block";
}
span_lh.onclick = function () {
    FormLienhe.style.display = "none";
}
//check điều kiện nhập vào liên hệ
var check_emaillh = document.getElementById('check_email_lh');
var check_tenlh = document.getElementById('check_ten_lh');
var check_noidunglh = document.getElementById('check_noidung_lh');

function check_lienhe() {
    if (flienhe.email_lienhe.value == "") {
        check_emaillh.innerHTML = "Vui lòng nhập Email";
        flienhe.email_lienhe.focus();
        return;
    } else {
        var pattern = /^\w{2,20}@\w{2,15}(.[a-zA-Z]{2,3}){1,2}$/;
        if (!pattern.test(flienhe.email_lienhe.value)) {
            check_emaillh.innerHTML = "Email không đúng định dạng!!!";
            flienhe.email_lienhe.focus();
            return;
        } else {
            check_emaillh.innerHTML = "";
        }
    }

    if (flienhe.ten_lienhe.value.trim().length == 0) {

        check_tenlh.innerHTML = "Vui lòng nhập tên";
        return;
        flienhe.ten_lienhe.focus();
    } else {
        check_tenlh.innerHTML = "";
    }
    if (flienhe.noidung_lh.value.trim().length == 0) {

        check_noidunglh.innerHTML = "Vui lòng nhập nội dung!"
        flienhe.noidung_lh.focus();
        return;
    } else {

        check_noidunglh.innerHTML = "";
    }

    alert("Cảm ơn bạn đã liên hệ với chúng tôi!");

    FormLienhe.style.display = "none";

}