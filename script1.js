const container = document.getElementById("container");
const zoomed = document.querySelector(".zoomed");
const overlay = document.querySelector(".overlay");
const content = document.querySelector(".content");

zoomed.addEventListener("click", () => {
  zoomed.style.transform = "scale(2)";
  zoomed.style.opacity = "0";
  overlay.style.opacity = "1";
  content.style.opacity = "1";
});
