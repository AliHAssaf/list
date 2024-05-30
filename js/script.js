var menuItem = document.querySelectorAll("#menu li");
var title = document.querySelector(".text");
var btn = document.querySelector(".zar");
var menu = document.querySelector("#menu");
var input = document.querySelector(".input");
var counter = 0;

// for (let i = 0; i < menuItem.length; i++) {
//     menuItem[i].addEventListener("click",selectItem);
// }
menu.addEventListener("click",selectItem);

function selectItem(n){
    if (n.target.nodeName == "LI") {
        title.innerHTML = n.target.innerHTML;
        for (let i = 0; i < menuItem.length; i++) {
            menuItem[i].classList.remove("selected");
        }
        n.target.classList.add("selected");
    }
}
btn.addEventListener("click",addMenuItem);

function addMenuItem(){
    if (input.value === "") {
        menu.innerHTML += "<li>السطر" + counter + "تمت إضافته الى القائمة المذكورة</li>";
        counter++;
    }
    else{
        menu.innerHTML += "<li>"+input.value +"</li>";
    }
}