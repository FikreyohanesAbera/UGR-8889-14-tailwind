
let burger = document.querySelector("#hamburger");
let menu = document.querySelector("#menu");
let cancel = document.querySelector("#cancel");

burger.addEventListener("click",() => {
    menu.classList.remove("hidden");
    burger.classList.add("hidden");
    cancel.classList.remove("hidden");


})
cancel.addEventListener("click",() => {
    menu.classList.add("hidden");
    burger.classList.remove("hidden");
    cancel.classList.add("hidden");
})
