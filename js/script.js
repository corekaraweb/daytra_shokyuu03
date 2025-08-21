document.addEventListener("DOMContentLoaded", function () {
  let slidesToShow = 1.3;
  if (window.innerWidth >= 768) {
    slidesToShow = 3;
  }
  const swiper = new Swiper("#js-casestudy-swiper", {
    direction: "horizontal",
    loop: true,
    spaceBetween: 18,
    slidesPerView: slidesToShow,
    pagination: {
      el: "#js-casestudy-swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: "#js-casestudy-swiper-button-next",
      prevEl: "#js-casestudy-swiper-button-prev",
    },
  });
  window.addEventListener("resize", function () {
    let slidesToShow = 1.3;
    if (window.innerWidth >= 768) {
      slidesToShow = 3;
    }
    swiper.params.slidesPerView = slidesToShow;
    swiper.update();
  });
  document.querySelectorAll(".company__nav-list li").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll(".company__nav-list li").forEach((item) => {
        item.classList.remove("is-active");
        let itemId = item.querySelector("a").getAttribute("href");
        document.querySelector(itemId).style.display = "none";
      });
      item.classList.add("is-active");
      let itemId = item.querySelector("a").getAttribute("href");
      document.querySelector(itemId).style.display = "block";
    });
  });
});
document.querySelectorAll(".q__item").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    item.classList.toggle("is-open");
    let nextElement = item.nextElementSibling;
    nextElement.classList.toggle("is-open");
    nextElement.style.display = item.classList.contains("is-open") ? "block" : "none";
  });
});
document.querySelector(".drawer-icon").addEventListener("click", function () {
  document.querySelector(".drawer-content").classList.toggle("is-open");
  document.querySelector(".drawer-icon").classList.toggle("is-open");
});
