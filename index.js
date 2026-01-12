let navMenu = document.getElementById("nav-menu")
let openSidebar = document.querySelector(".open-sidebar")
let closeSidebar = document.querySelector(".close-sidebar")

openSidebar.addEventListener('click', ()=>{
    navMenu.classList.add('show')
})
closeSidebar.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})