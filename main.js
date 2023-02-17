function underLine(x){
    x.style.textDecoration = 'underline #6F77F1';
    x.style.fontSize = '200%';
}
function removeUnderline(x) {
    x.style.textDecoration = 'none';
    x.style.fontSize = '100%';
}

function backgroundEnhance(x){
    x.style.boxShadow = "0 0 5px #999999"
    x.style.borderRadius = '0.5rem';
}

function backgroundReduce(x){
    x.style.boxShadow = "none"
}
function maskFunction(x){
    x.style.backgroundColor = "#6F77F1";
    x.style.borderRadius = '1rem'
    x.style.color="#fff"
    document.querySelector(".purple").style.color = "#fff"
    document.querySelector(".purple1").style.color = "#fff"
    document.querySelector(".purple2").style.color = "#fff"
    document.querySelector("#buttonGetStarted1").style.backgroundColor = "#FFFF00"
    document.querySelector("#buttonGetStarted2").style.backgroundColor = "#FFFF00"
    document.querySelector("#buttonGetStarted3").style.backgroundColor = "#FFFF00"

}
function nomaskFunction(x){
    x.style.backgroundColor = "#FFFFFF";
    x.style.color="#828282"
    document.querySelector(".purple").style.color = "purple"
    document.querySelector(".purple1").style.color = "purple"
    document.querySelector(".purple2").style.color = "purple"
    document.querySelector("#buttonGetStarted1").style.backgroundColor = "#FFF"
    document.querySelector("#buttonGetStarted2").style.backgroundColor = "#FFF"
    document.querySelector("#buttonGetStarted3").style.backgroundColor = "#FFF"

}
function changes(x) {
    x.style.boxShadow = "0 0 5px #999999"
    x.style.borderRadius = '0.5rem'
}

function validWebURL() {
    var webURLformat = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;
    if(inputText.value.match(webURLformat))
    {
        document.form.text.focus();
        return true;
    }
    else{
        alert("You have entered an invalid webURL!");
        document.form.text.focus();
        return false;
    }
}

function validEmail(){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
// alert("Valid email address!");
    document.form.text.focus();
    return true;
    }
    else
    {
    alert("You have entered an invalid email address!");
    document.form.text.focus();
    return false;
    }
}

function validName(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter your name.');
        document.getElementById('name').focus();
        return false;
    }else{
        return true;
    }
}
function sizeIncrease(x){
    x.style = "height: 150%"
}
function sizeNormal(x){
    x.style = "height: -150%"
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });