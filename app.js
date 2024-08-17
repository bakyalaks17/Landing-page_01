let burger = document.querySelector(".burger");
let links = document.querySelector(".navbar");
burger.addEventListener('click',()=>{
    links.classlist.toggle("nav-show");
})