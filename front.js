const button = document.getElementById("button");

button.onclick = () => {
  location.href = "./index.html";
};
const button2 = document.getElementById("click")
button2.onclick = () => {
  location.href = "./inst.html";
};
// var sound = new Audio("/music.mp3");
// sound.play();
// sound.loop=true;

var audio = document.createElement("AUDIO")
document.body.appendChild(audio);
audio.src = "./music.mp3"

document.body.addEventListener("mousemove", function () {
    audio.play()
})