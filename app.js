//to calculate scrollY value based on Y-coordinates and assign it to parallax elements in the header tag
window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

window.onload = function () {
  var element = document.getElementById("message");
  setTimeout(function () {
    element.classList.add("fade-out");
  }, 5000); // Start fade-out after 5 seconds
};
