const dasboard = document.getElementById("dasboard");
let movemetNow = "❌";
let boardState = Array(9).fill(null);

function createDasboard() {
  for (let i = 0; i < 9; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.id = `box${i}`;
    dasboard.appendChild(box);
  }
}

function handleClick(event) {
  console.log({ event: event });
  const idBox = event.target.id;

  if (idBox === "dasboard") {
    return;
  }
  if (event.target.textContent) {
    return;
  }
  setTypeInbox(idBox.split("box")[1]);
}

function validationWinToGameOrEqual() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      // alert(`${boardState[a]} es el ganador!`);
      // resetGame();
      return;
    }
  }

  if (!boardState.includes(null)) {
    alert("Es un empate!");
    resetGame();
  }
}

function setTypeInbox(position) {
  boardState[position] = movemetNow;
  dasboard.children[position].textContent = movemetNow;
  changeMovement(movemetNow);
  validationWinToGameOrEqual();
}

function changeMovement(move) {
  movemetNow = move === "❌" ? "⏺️" : "❌";
}

function resetGame() {
  boardState.fill(null);
  for (let i = 0; i < 9; i++) {
    dasboard.children[i].textContent = "";
  }
  movemetNow = "❌";
}

createDasboard();

dasboard.addEventListener("click", handleClick);
