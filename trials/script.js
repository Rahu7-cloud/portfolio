const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {
  timeline.play(); // Start the timeline when the button is clicked
});

// Define your animations
const animation1 = gsap.to("#animatedElement", {
  duration: 2,
  x: 200,
  opacity: 0,
});
const animation2 = gsap.to("#animatedElement", {
  duration: 2,
  y: 100,
  scaleX: 2,
});

// Create a timeline and add animations to it
const timeline = gsap.timeline({ paused: true }); // Initialize the timeline in paused state
timeline.add(animation1).add(animation2); // Add animations to the timeline
