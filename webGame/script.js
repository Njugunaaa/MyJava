// Access HTML elements
let doorImage1 = document.getElementById("door1");
let doorImage2 = document.getElementById("door2");
let doorImage3 = document.getElementById("door3");
let startButton = document.getElementById("start");
let streakCounter = document.getElementById("streak");

let botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;
let currentlyPlaying = true;
let streak = 0; // Streak counter

// Check if door is clicked
function isClicked(door) {
  return door.src !== closedDoorPath;
}

// Check if the door contains the bot
function isBot(door) {
  return door.src === botDoorPath;
}

// Update streak display
function updateStreak() {
  streakCounter.innerHTML = `Streak: ${streak}`;
}

// End game logic
function gameOver(status) {
  if (status === "win") {
    startButton.innerHTML = "You win! Play again?";
    streak++; // Increase streak on win
  } else {
    startButton.innerHTML = "Game over! Play again?";
    streak = 0; // Reset streak on loss
  }
  updateStreak(); // Update the streak display
  currentlyPlaying = false;
}

// Play door logic
function playDoor(door) {
  numClosedDoors--;
  if (numClosedDoors === 0) {
    gameOver("win");
  } else if (isBot(door)) {
    gameOver();
  }
}

// Generate random doors
function randomChoreDoorGenerator() {
  let choreDoor = Math.floor(Math.random() * 3);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor1 = beachDoorPath;
    openDoor2 = botDoorPath;
    openDoor3 = spaceDoorPath;
  } else {
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = botDoorPath;
  }
}

// Start a new round
function startRound() {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  currentlyPlaying = true;
  startButton.innerHTML = "Good luck!";
  randomChoreDoorGenerator();
}

// Door click handlers
doorImage1.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

// Start button click handler
startButton.onclick = () => {
  if (!currentlyPlaying) {
    startRound();
  }
};

// Initialize the game
startRound();
updateStreak(); // Initialize streak display
