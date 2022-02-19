let burgerBtn = document.querySelector(".navbar__main-burger");
let menu = document.querySelector("nav.navbar__links");


burgerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.toggle("active");
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            menu.classList.remove("active");
        })
    })
});


let dropDownBtn = document.querySelectorAll("button.dropDown");

dropDownBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        btn.classList.toggle("active");
        links.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.remove("active");
            })
        })
    });
})

let links = document.querySelectorAll("nav.navbar__links a");