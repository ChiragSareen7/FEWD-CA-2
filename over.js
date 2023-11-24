let scoree = localStorage.getItem("scoreCard")
let show = document.getElementById("score-board");
// console.log(show)
show.innerText= scoree;
// console.log(scoree)

const button = document.getElementById("button");

button.onclick = () => {
  location.href = "./index.html";
};