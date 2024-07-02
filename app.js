const stickyNavbar = document.querySelector("header.sticky-navbar");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        stickyNavbar.classList.add("scrolling");
    }
    else{
        stickyNavbar.classList.remove("scrolling");
    }
})