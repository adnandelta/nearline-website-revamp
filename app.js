//Persistent Navigation Bar
const stickyNavbar = document.querySelector("header.sticky-navbar");

document.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        stickyNavbar.classList.add("scrolling");
    }
    else{
        stickyNavbar.classList.remove("scrolling");
    }
})


// Navigation Menu Scroll Padding
const navigationHeight = document.querySelector('.primary-navigation').clientHeight;
console.log(navigationHeight)
document.documentElement.style.setProperty('--scroll-padding', navigationHeight + 10 + "px");

//OnScroll Active Navigation Links
// const sections = document.querySelectorAll('section');
// const navLinks = document.querySelectorAll('.nav-items');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//             });
//             document.querySelector('.nav-items').classList.add('active');
//         }
//     })
// }