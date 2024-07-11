// Navigation Menu Height
const navigationHeight = document.querySelector('header.sticky-navbar').clientHeight;
console.log(navigationHeight)
document.documentElement.style.setProperty('--nav-height', navigationHeight + "px");
document.documentElement.style.setProperty('--res-nav-height', navigationHeight - 50 + "px");




//Persistent Navigation Bar
const stickyNavbar = document.querySelector('header.sticky-navbar');

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 30){
        stickyNavbar.classList.add("scrolling");
    }
    else{
        stickyNavbar.classList.remove("scrolling");
    }
})


//Section Fade In

const items = document.querySelectorAll('.appear');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }

// Go-to Top Button
let mybutton = document.getElementById("go-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Hamburger Menu Functionality
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

// Hamburger Menu Close Functionality
const navLink = document.querySelectorAll(".nav-items");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}