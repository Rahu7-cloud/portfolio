// script.js

document.addEventListener("DOMContentLoaded", function () {
  const textElement = document.querySelector(".text");

  // Add a class to start the animation
  textElement.classList.add("animate-text");
});

function getName() {
  const name = document.getElementById("name_input").value.split(" ")[0];
  console.log(name);
}

//animation for the lander page with rotating like a newspaper
const tl2 = gsap.timeline({ paused: true });

tl2.to(".lander", {
  y: "100vh",
  scale: 0.6,
  duration: 0,
  zIndex: 4,
});

tl2.to(".lander", {
  y: "30vh",
  duration: 1,
  delay: 1,
  zIndex: 4,
});

tl2.to(".lander", {
  y: "0vh",
  rotate: 360,
  scale: 1,
  duration: 0.8,
  zIndex: 4,
});

const startButton = document.getElementById("momlogo");
startButton.addEventListener("click", () => {
  tl2.play();
  tl2.to(".preloader", {
    display: "none",
  });
});
