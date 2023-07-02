//to calculate scrollY value based on Y-coordinates and assign it to parallax elements in the header tag
window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

window.onload = function () {
  //fading in and out for the message after landing on the page logic
  var element = document.getElementById("message");
  setTimeout(function () {
    element.classList.add("fade-out");
  }, 5000); // Start fade-out after 5 seconds
};

//preloader animation
let preloader = document.querySelector(".preloader");
let logo = document.querySelector(".logo-header");
let alias = document.querySelectorAll(".alias");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    alias.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("active");
      }, (i + 1) * 400);
    });

    setTimeout(() => {
      alias.forEach((span, i) => {
        setTimeout(() => {
          span.classList.remove("active");
          span.classList.add("fade");
        }, (i + 1) * 50);
      });
    }, 2000);

    setTimeout(() => {
      preloader.style.top = "-100vh";
    }, 2300);
  });
});
