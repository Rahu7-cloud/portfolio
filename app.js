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
      }, (i + 1) * 500);
    });

    window.addEventListener("load", () => {
      setTimeout(() => {
        alias.forEach((span, i) => {
          setTimeout(() => {
            span.classList.remove("active");
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

//hamburger menu animation
const tl = gsap.timeline({ paused: true });
let path = document.querySelector("path");
let spanBefore = CSSRulePlugin.getRule("#hamburger span:before");

gsap.set(spanBefore, { background: "#ffe29a" });
gsap.set(".menu", { visibility: "hidden" });

function revealMenu() {
  revealMenuItems();

  const hamburger = document.getElementById("hamburger");
  const toggleBtn = document.getElementById("toggle-btn");

  toggleBtn.onclick = function (e) {
    hamburger.classList.toggle("active");
    tl.reversed(!tl.reversed());
  };

  revealMenu();

  function revealMenuItems() {
    const start = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
    const end = "M0,1005S175,995,500,995s500,5,500,5V0H0Z";

    const power2 = "power2.inOut";
    const power4 = "power4.inOut";

    tl.to("#hamburger", 1.25, {
      marginTop: "-5px",
      x: -40,
      y: 40,
      ease: power4,
    });

    tl.to(
      "#hamburger span",
      1,
      {
        background: "#862b0d",
        ease: power2,
      },
      "<"
    );

    tl.to(
      ".btn .btn-outline",
      1.25,
      {
        x: -40,
        y: 40,
        width: "140px",
        height: "140px",
        border: "1px solid #862b0d",
        ease: power4,
      },
      "<"
    );

    tl.to(
      path,
      0.8,
      {
        attr: {
          d: start,
        },
        ease: power2.easeIn,
      },
      "<"
    ).to(
      path,
      0.8,
      {
        attr: {
          d: end,
        },
        ease: power2.easeIn,
      },
      "0.5"
    );
  }
}
