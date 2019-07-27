'use strict';

$(document).ready(function() {
  let $towerPiece = null;
  
  $('.tower').click(function() {
    if ($towerPiece) {
      $(this).append($($towerPiece)[0]);
      //console.log('block', $towerPiece[0], 'jqblock', $($($towerPiece)[0]).width());
      $towerPiece = null;
    } else {
      console.log('remove', $(this).children().last().width());
      $towerPiece = $(this).children().last().detach();
    }
  })
})

// Prevent Move Logic:
// check to see if you have a block
// then check to see if your new target is empty.
// if it is, then place the block. if not, check to see if its last child width is greater than what you're placing.
// if it is, then place the block.