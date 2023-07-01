// Get the fog element
var fogElement = document.querySelector(".layers_mist1");

// Set initial position
var position = 0;

// Set animation speed and direction
var speed = 0.2; // Adjust as needed, lower values for slower movement
var direction = 1; // 1 for moving to the right, -1 for moving to the left

// Function to update the fog position
function moveFog() {
  position += speed * direction;
  fogElement.style.backgroundPositionX = position + "px";

  // Uncomment the following line if you want vertical movement as well
  // fogElement.style.backgroundPositionY = position + 'px';

  requestAnimationFrame(moveFog);
}

// Start the animation
moveFog();
