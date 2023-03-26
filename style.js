 const toggleBtn = document.querySelector(".toggle-btn");
 const toggleBtnIcon = document.querySelector(".toggle-btn i");
 const dropdpwnMenu = document.querySelector(".dropdown-menu");

toggleBtn.addEventListener("click", ()=>{
    dropdpwnMenu.classList.toggle("open");
    const isOpen = dropdpwnMenu.classList.contains("open");

    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
})  
