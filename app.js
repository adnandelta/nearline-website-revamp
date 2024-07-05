// Navigation Menu Height
const navigationHeight = document.querySelector('header.sticky-navbar').clientHeight;
console.log(navigationHeight)
document.documentElement.style.setProperty('--nav-height', navigationHeight + "px");

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

// ---------------- Carousel Effect ----------------//

// const carousel = document.getElementById('carousel');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');
// const indicators = document.querySelectorAll('.indicator');
// let index = 0;
// const slides = document.querySelectorAll('.carousel-slide');
// const totalSlides = slides.length;

// const updateIndicators = () => {
//     indicators.forEach((indicator, i) => {
//         indicator.classList.toggle('active', i === index);
//     });
// };

// const moveToSlide = (slideIndex) => {
//     carousel.style.transform = `translateX(${-100 * slideIndex}%)`;
//     index = slideIndex;
//     updateIndicators();
// };

// const moveToNextSlide = () => {
//     if (index < totalSlides - 1) {
//         moveToSlide(index + 1);
//     } else {
//         moveToSlide(0);
//     }
// };

// const moveToPrevSlide = () => {
//     if (index > 0) {
//         moveToSlide(index - 1);
//     } else {
//         moveToSlide(totalSlides - 1);
//     }
// };

// nextBtn.addEventListener('click', moveToNextSlide);
// prevBtn.addEventListener('click', moveToPrevSlide);

// indicators.forEach((indicator, i) => {
//     indicator.addEventListener('click', () => {
//         moveToSlide(i);
//     });
// });

// setInterval(moveToNextSlide, 3000);
