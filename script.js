const worldDict = {
  0: "blank",
  1: "wall",
  2: "sushi",
  3: "onigiri",
};

let world = [
  [1, 1, 1, 1, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 0, 3, 1],
  [1, 2, 2, 2, 1],
  [1, 1, 3, 1, 1],
  [1, 2, 2, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 2, 3, 1],
  [1, 1, 2, 1, 1],
  [1, 3, 2, 2, 1],
  [1, 2, 3, 2, 1],
  [1, 2, 3, 3, 1],
  [1, 1, 1, 1, 1],
];
console.log(world[1][1]);
// console.log(world[2][2]);

// const blank =
let maxScore = 0;
function scoreCal() {
  for (i = 0; i < world.length; i++) {
    for (j = 0; j < world[i].length; j++) {
      if (world[i][j] == 2) {
        maxScore += 10;
      } else if (world[i][j] == 3) {
        maxScore += 20;
      } else {
        maxScore += 0;
      }
    }
  }
  return maxScore;
}

scoreCal();
console.log(maxScore);

function drawWorld() {
  let output = "";
  for (var row = 0; row < world.length; row++) {
    output += "<div class = 'row'>";
    for (var x = 0; x < world[row].length; x++) {
      output += "<div class = '" + worldDict[world[row][x]] + "'></div>";
    }
    output += "</div>";
  }
  // let randomWorld = horizontal.appendChild(block);
  document.getElementById("ninjamanGame").innerHTML = output;
}

drawWorld();

var character = {
  x: 2,
  y: 2,
};

function drawCharacter() {
  document.getElementById("character").style.left = character.x * 40 + "px";
  document.getElementById("character").style.top = character.y * 40 + "px";
}

drawCharacter();
sushiCounter = 0;
onigiriCounter = 0;

document.onkeydown = function (e) {
  if (e.keyCode == 37 && world[character.y][character.x - 1] !== 1) {
    character.x -= 1;
  }
  if (e.keyCode == 38 && world[character.y - 1][character.x] !== 1) {
    character.y -= 1;
  }
  if (e.keyCode == 39 && world[character.y][character.x + 1] !== 1) {
    character.x += 1;
  }
  if (e.keyCode == 40 && world[character.y + 1][character.x] !== 1) {
    character.y += 1;
  }
  if (world[character.y][character.x] == 2) {
    sushiCounter += 1;
    // return sushiCounter;
  }
  if (world[character.y][character.x] == 3) {
    onigiriCounter += 1;
  }

  world[character.y][character.x] = 0;
  drawWorld();
  drawCharacter();
  document.getElementById("sushiEaten").innerText =
    "Sushi Eaten: " + sushiCounter;
  document.getElementById("onigiriEaten").innerText =
    "Onigiri Eaten: " + onigiriCounter;
  document.getElementById("score").innerHTML =
    sushiCounter * 10 + onigiriCounter * 20;
  let scoreGained = document.getElementById("score").innerHTML;
  document.getElementById("score").innerText = scoreGained;
  console.log("Score Gained: " + scoreGained);
  console.log("Max Score: " + maxScore);
  if (scoreGained == maxScore) {
    document.getElementById("victory").style.visibility = "visible";
  }
};

// keep score of how many sushi has been eaten
// different food for different points

// random world

//create ghosts that chase ninjaman
