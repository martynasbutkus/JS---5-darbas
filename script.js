var p1 = 0;
var p2 = 0;

function buttonClickOne() {
  document.getElementById("playerOne").innerText = p1++;
  limit();
}

function buttonClickTwo() {
  document.getElementById("playerTwo").innerText = p2++;
  limit();
}

function limit() {
  var limit = 20;

  if (p1 >= limit || p2 >= limit) {
    if (p1 == limit) {
      document.getElementById("playerOne").style.color = "red";
    }
    if (p2 == limit) {
      document.getElementById("playerTwo").style.color = "red";
    }
  }
}

function resetGame() {
  p1 = 0;
  p2 = 0;

  document.getElementById("playerOne").innerText = p1;
  document.getElementById("playerTwo").innerText = p2;
  document.getElementById("playerOne").style.color = "black";
  document.getElementById("playerTwo").style.color = "black";
}