var swiper = new Swiper(".swiper-container", {
  
  pagination: {
    el: ".pagin",
    type: "fraction",
  },
  navigation: {
    nextEl: ".toggle-right",
    prevEl: ".toggle-left",
  },
});

$(".swiper-pagination-current").prepend("0");

var countSlide = $(".swiper-pagination-total").html();
countSlide = parseInt(countSlide);
if (countSlide < 10) {
  $(".swiper-pagination-total").prepend("0");
}
swiper.on("slideChange", function () {
  console.log("slide changed");

  var countSlide = $(".swiper-pagination-total").html();
  countSlide = parseInt(countSlide);
  if (countSlide < 10) {
    $(".swiper-pagination-total").prepend("0");
  }
  if (swiper.activeIndex < 9) {
    $(".swiper-pagination-current").prepend("0");
  }
});

const advans = new Swiper(".advantages_slider-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: ".arow-right",
    prevEl: ".arow-left",
  },
});

