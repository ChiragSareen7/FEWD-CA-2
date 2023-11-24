import Ball from "./ball.js"
import Paddle from "./paddle.js"

const ball = new Ball(document.getElementById("comet"))
const playerwall = new Paddle(document.getElementById("playerwall"))
const computerwall = new Paddle(document.getElementById("computerwall"))
const playerScoreElem = document.getElementById("playerpoints")
const computerScoreElem = document.getElementById("computerpoints")

let lastTime
function start(time) {
  if (lastTime != null) {
    const change = time - lastTime
    ball.update(change, [playerwall.rect(), computerwall.rect()])
    computerwall.update(change, ball.y)


    if (lost()) Lose()
  }

  lastTime = time
  window.requestAnimationFrame(start)
}

function lost() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

let score=0

function Lose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    playerScoreElem.textContent = parseInt(playerScoreElem.textContent) + 1
    localStorage.setItem("scoreCard",parseInt(playerScoreElem.textContent) )

  } else {
    computerScoreElem.textContent = parseInt(computerScoreElem.textContent) + 1
  }
  ball.reset()
  computerwall.reset()
}
function handleGameEnd() {
    console.log("Game Over");
  
    // Check which player won
    if (parseInt(playerScoreElem.textContent) === 10) {
      console.log("Player won!");
    } else {
      console.log("Computer won!");
    }
  
    // Redirect to the next page after a short delay (e.g., 3 seconds)
    setTimeout(() => {
      window.location.href = "gameover.html"; // Change "nextPage.html" to the desired URL
    }, 60000); // Adjust the delay as needed
  }
  handleGameEnd()

document.addEventListener("mousemove", t => {
  playerwall.position = (t.y / window.innerHeight) * 100
})

window.requestAnimationFrame(start)
var timer = document.getElementById("timer")
var time = 60

var timerId;
function showtimer() {
    time = 60
    timer.innerText = time
    timerId = setInterval(() => {
        time--
        if (time == 0) window.location.href = './gameover.html'
        timer.innerText = time

    }, 1000)
}

showtimer()
var sound = new Audio("/music.mp3");
sound.loop=true;
sound.play();