let turn = "x";
let gameOver = true;
const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};

const checkWin = () => {
  let boxText = document.getElementsByClassName("box");
  let winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  winner.forEach((e) => {
    if (
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[2]].innerText === boxText[e[1]].innerText &&
      boxText[e[0]].innerText !== ""
    ) {
      $("#staticBackdrop").modal("show");
      gameOver = true;
      document.getElementById("text").innerText =
        boxText[e[0]].innerText + " won 😁😁";
    }
  });
};

//main logic
let boxArea = document.getElementsByClassName("letter");
let moves = 9;
Array.from(boxArea).forEach((e) => {
  let boxText = e.querySelector(".box");
  boxText.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      document.getElementById("move-count").innerText =
        "Moves Left: " + --moves;
      if (moves === 0) {
        $("#staticBackdrop").modal("show");
        gameOver = true;
        document.getElementById("text").innerText = "game over 😢";
      }
      turn = changeTurn();
      document.getElementById("next-player").innerText = "turn for " + turn;

      checkWin();
      if (!gameOver) {
      }
    }
  });
});

//reset
document.querySelector(".reset").addEventListener("click", () => {
  location.reload(true);
});
document.querySelector("#replay").addEventListener("click", () => {
  location.reload(true);
});
document.querySelector("#reset").addEventListener("click", () => {
  location.reload(true);
});
