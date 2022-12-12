
const user = document.getElementById("name");
const phone = document.getElementById("phone");
const email_id = document.getElementById("mail_id");
const newpassword = document.getElementById("newp");
const reenterp = document.getElementById("reenter");
const spans = document.getElementsByTagName("span");

for (x in spans) {
    x.innerHTML = 'Dab gaya';
}

user.onkeydown = function(){
    const name_regex = /^[A-Za-z]*$/;
    spans[0].innerHTML = 'Dab gaya';
    if (!(name_regex.test(user.value))){
        spans[0].innerText = "No numbers and spaces allowed";
        spans[0].style.color = "red";
    }
}
phone.onkeydown = function(){
    const name_regex = /^[0-9]{9}*$/;
    if (name_regex.test(phone.value)){
        spans[1].innerText = "No numbers and spaces allowed";
        spans[1].style.color = "red";
    }
}
