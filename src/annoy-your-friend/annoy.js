var angerCounter = 0;
var facialExpression = '&#x1F600';
var reaction = "";

function updateDisplay() {
  $('#face').html(facialExpression);
  $('#anger').text(angerCounter);
  $('#instructions').text(reaction);
}

function determineMood() {
  switch (angerCounter) {
    case -150:
      facialExpression = '&#x1F60D';
      reaction = "You're my best friend!";
      break;
    case -50:
      facialExpression = '&#x1F60E';
      reaction = "Aww, thanks buddy!";
      break;
    case 0:
      facialExpression = '&#x1F600';
      reaction = "We should hang out more often.";
      break;
    case 1:
      facialExpression = '&#x1F61F';
      reaction = "Hey, why'd you poke me?";
      break;
    case 5:
      facialExpression = '&#x1F60F';
      reaction = "I can poke you back, you know...";
      break;
    case 15:
      facialExpression = '&#x1F612';
      reaction = "Seriously, dude. Stop.";
      break;
    case 30:
      facialExpression = '&#x1F616';
      reaction = "I thought we were friends...";
      break;
    case 50:
      facialExpression = '&#x1F621';
      reaction = "If you don't stop now, it's ON."
      break;
    case 80:
      facialExpression = '&#x1F624';
      reaction = "I DON'T HAVE TO TAKE THIS";
      break;
    case 100:
      facialExpression = '&#x1F92C';
      reaction = "WE'RE DONE. I'M NOT TALKING TO YOU."
      break;
    case 120:
      facialExpression = '&#x1F910';
      reaction = "...";
      break;
  }
}

function calmDown() {
  if (angerCounter >= 120) {
    angerCounter = 100;
  }
  else if (angerCounter >= 100) {
    angerCounter = 80;
  }
  else if (angerCounter >= 80) {
    angerCounter = 50;
  }
  else if (angerCounter >= 50) {
    angerCounter = 30;
  }
  else if (angerCounter >= 30) {
    angerCounter = 15;
  }
  else if (angerCounter >= 15) {
    angerCounter = 5;
  }
  else if (angerCounter >= 5) {
    angerCounter = 1;
  }
  else if (angerCounter >= 1) {
    angerCounter = 0;
  }
  else if (angerCounter >= 0) {
    angerCounter = -50;
  }
  else {
    angerCounter = -150;
  }
}

$(document).ready(function() {

  $('#poke').click(function() {
    angerCounter++;
    determineMood();
    updateDisplay();
  })
  $('#hug').click(function() {
    calmDown();
    determineMood();
    updateDisplay();
  })
  $('#reset').click(function() {
    angerCounter = 0;
    facialExpression = '&#x1F600';
    reaction = "He loves hugs. He hates being poked.";
    updateDisplay();
  })
})