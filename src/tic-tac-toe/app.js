var turnCount = 1
var whoStarts = Math.floor(Math.random() * 10) % 2
console.log(whoStarts)

function setXO() {
  if ((whoStarts + turnCount) % 2 == 1) {
    return 'X'
  }
  else {
    return 'O'
  }
}

function markXO(element) {
  // console.log('you clicked me', turnCount, element)
  if (element.innerHTML == "") {
    element.innerHTML = setXO()
    turnCount += 1
  }
}

// win condition:
// array to hold values of each box
// test horizontally, vertically, and diagonally for three in a row
// declare winner is X, O, or a draw