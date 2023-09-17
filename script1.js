function startBurnDissolveEffect() {
  const burningElement = document.getElementById("burningElement");
  burningElement.style.animation = "burn-dissolve 1.5s ease-out forwards";

  // Reset the animation after it completes
  setTimeout(() => {
    burningElement.style.animation = "";
  }, 1500);
}
