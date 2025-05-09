const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

var elemC = document.querySelector("#elem-container");
var fixImg = document.querySelector("#fixed-img");
elemC.addEventListener("mouseenter", function () {
  fixImg.style.display = "block";
});
elemC.addEventListener("mouseleave", function () {
  fixImg.style.display = "none";
});

var elems = document.querySelectorAll(".elem");
elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    
    var img = e.getAttribute("data-img");
    fixImg.style.backgroundImage = `url(${img})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

menuAnimation()

var loader = document.querySelector("#loader");
setTimeout(() => {
  loader.style.top = "-100%"
}, 4200);