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
        span.classList.add("rise");
      }, (i + 1) * 500);
    });

    window.addEventListener("load", () => {
      setTimeout(() => {
        alias.forEach((span, i) => {
          setTimeout(() => {
            span.classList.remove("rise");
            span.classList.add("fade");
          }, (i + 1) * 50);
        });
      }, 3000);

      setTimeout(() => {
        preloader.style.top = "-100vh";
      }, 3300);
    });
  });
});

//scroll animation
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});
sr.reveal(`.home__prefil`, { origin: "right" });
sr.reveal(`.home__name, .home__info`, { origin: "left" });
