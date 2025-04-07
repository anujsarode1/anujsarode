const spaceship = document.getElementById("spaceship");
const gameContainer = document.querySelector(".game-container");
const monstersContainer = document.getElementById("monsters");
const bulletsContainer = document.getElementById("bullets");

let spaceshipPosX = gameContainer.offsetWidth / 2 - 25;
let spaceshipPosY = gameContainer.offsetHeight - 60;
let spaceshipSpeed = 5;

let bullets = [];
let monsters = [];
let gameOver = false;

// Handle spaceship movement
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && spaceshipPosX > 0) {
    spaceshipPosX -= spaceshipSpeed;
  }
  if (e.key === "ArrowRight" && spaceshipPosX < gameContainer.offsetWidth - 50) {
    spaceshipPosX += spaceshipSpeed;
  }
  if (e.key === " " && !gameOver) {
    createBullet();
  }
  spaceship.style.left = spaceshipPosX + "px";
});

// Create bullet
function createBullet() {
  const bullet = document.createElement("div");
  bullet.classList.add("bullet");
  bullet.style.left = spaceshipPosX + 22 + "px";  // Center bullet on spaceship
  bullet.style.bottom = spaceshipPosY + 15 + "px"; // Place it above the spaceship
  bulletsContainer.appendChild(bullet);
  bullets.push(bullet);
}

// Create monster
function createMonster() {
  const monster = document.createElement("div");
  monster.classList.add("monster");
  const posX = Math.random() * (gameContainer.offsetWidth - 50);
  const posY = Math.random() * -200;  // Start off-screen
  monster.style.left = posX + "px";
  monster.style.top = posY + "px";
  monstersContainer.appendChild(monster);
  monsters.push(monster);
}

// Move bullets
function moveBullets() {
  bullets.forEach((bullet, index) => {
    const bulletPosY = parseInt(bullet.style.bottom.replace("px", ""));
    if (bulletPosY > gameContainer.offsetHeight) {
      bullet.remove();
      bullets.splice(index, 1);
    } else {
      bullet.style.bottom = bulletPosY + 10 + "px"; // Move up
    }
  });
}

// Move monsters
function moveMonsters() {
  monsters.forEach((monster, index) => {
    const monsterPosY = parseInt(monster.style.top.replace("px", ""));
    if (monsterPosY > gameContainer.offsetHeight) {
      monster.remove();
      monsters.splice(index, 1);
    } else {
      monster.style.top = monsterPosY + 2 + "px"; // Move down
    }
  });
}

// Check collisions
function checkCollisions() {
  bullets.forEach((bullet, bulletIndex) => {
    monsters.forEach((monster, monsterIndex) => {
      const bulletRect = bullet.getBoundingClientRect();
      const monsterRect = monster.getBoundingClientRect();
      if (bulletRect.left < monsterRect.right &&
          bulletRect.right > monsterRect.left &&
          bulletRect.top < monsterRect.bottom &&
          bulletRect.bottom > monsterRect.top) {
        // Collision detected
        bullet.remove();
        monster.remove();
        bullets.splice(bulletIndex, 1);
        monsters.splice(monsterIndex, 1);
      }
    });
  });
}

// Game loop
function gameLoop() {
  if (gameOver) return;

  moveBullets();
  moveMonsters();
  checkCollisions();

  // Check if any monster reaches the spaceship
  monsters.forEach((monster) => {
    const monsterRect = monster.getBoundingClientRect();
    const spaceshipRect = spaceship.getBoundingClientRect();
    if (monsterRect.top + 40 >= spaceshipRect.top &&
        monsterRect.left < spaceshipRect.right &&
        monsterRect.right > spaceshipRect.left) {
      gameOver = true;
      alert("Game Over!");
    }
  });

  // Add new monsters
  if (Math.random() < 0.02) {
    createMonster();
  }

  requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
