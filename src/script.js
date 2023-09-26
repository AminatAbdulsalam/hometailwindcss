const list = document.querySelector('ion-icon');
const menu = document.querySelector("main");

list.addEventListener("click", () => {
    menu.classList.toggle("hidden");
})