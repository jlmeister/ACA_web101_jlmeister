// in html
// create 3x3 grid

// in JS
// on click, insert 'O' or 'X' depending on previous click
// var player1, var player2, var previousClick 
// 

var turnCount = 1
const whoStarts = Math.floor(Math.random() * 10) % 2
console.log(whoStarts)
// if (whoStarts == 0) {
//   turnCount = 1
// }
// console.log(turnCount)
function setXO() {
  if ((whoStarts + turnCount) % 2 == 1) {
    return 'X'
  }
  else {
    return 'O'
  }
}

function markXO(element) {
  console.log('you clicked me', turnCount, element)
  element.innerText = setXO()
  
  turnCount += 1
}

// function setXO(event) {
//   console.log('you clicked me', event)
//   event.target.innerText = 'O'
// }