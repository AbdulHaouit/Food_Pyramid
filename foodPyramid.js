//Part 1 button 
var lvlOne = 0,
    countOne = document.getElementById('number1');

document.getElementById('plus sign1').addEventListener('click', function () {
  countOne.textContent = lvlOne+=1;
  colourChangeOne(lvlOne);
});
document.getElementById('minus sign1').addEventListener('click',function () {
    if(lvlOne > 0) {
      countOne.textContent = lvlOne-=1;
    }
  colourChangeOne(lvlOne);
});
function colourChangeOne(val) {
  var colourOne = "green";
  if(val > 1) {
    colourOne="red";
  } 
  countOne.style.color = colourOne;
}

//Part 2 buttons
var lvlTwo = 0;
var countTwo = document.getElementById('number2');

document.getElementById('plus sign2').addEventListener('click', function () {
  countTwo.textContent = lvlTwo+=1;
  colourChangeTwo(lvlTwo);
});
document.getElementById('minus sign2').addEventListener('click',function () {
    if(lvlTwo > 0) {
      countTwo.textContent = lvlTwo-=1;
    }
  colourChangeTwo(lvlTwo);
});
function colourChangeTwo(val){
  var colourTwo = "white";
  if (val == 1) {
    colourTwo = "green";
  } else if (val > 1) {
    colourTwo = "red";
  }
  countTwo.style.color = colourTwo;
}

//Part 3 buttons
var lvlThree = 0;
var countThree = document.getElementById('number3');

document.getElementById('plus sign3').addEventListener('click', function () {
  countThree.textContent = lvlThree+=1;
  colourChangeThree(lvlThree);
});
document.getElementById('minus sign3').addEventListener('click',function () {
    if(lvlThree > 0) {
      countThree.textContent = lvlThree-=1;
    }
  colourChangeThree(lvlThree);
});
function colourChangeThree(val) {
  var colourThree = "white";
  if(val == 2) {
    colourThree = "green";
  } else if (val > 3) {
    colourThree = "red";
  }
  countThree.style.color = colourThree;
}

//Part 4 buttons
var lvlFour = 0;
var countFour = document.getElementById('number4');

document.getElementById('plus sign4').addEventListener('click', function () {
  countFour.textContent = lvlFour+=1;
  colourChangeFour(lvlFour);
});
document.getElementById('minus sign4').addEventListener('click',function () {
    if(lvlFour > 0) {
      countFour.textContent = lvlFour-=1;
    }
  colourChangeFour(lvlFour);
});
function colourChangeFour(val){
  var colourFour = "white";
  if (val == 3) {
    colourFour = "green";
  } else if(val>3){
    colourFour = "red"; 
  }
  countFour.style.color = colourFour;
}

//Part 5 buttons
var lvlFive = 0;
var countFive = document.getElementById('number5');

document.getElementById('plus sign5').addEventListener('click', function () {
  countFive.textContent = lvlFive+=1;
  colorChangeFive(lvlFive);
});
document.getElementById('minus sign5').addEventListener('click',function () {
    if(lvlFive > 0) {
      countFive.textContent = lvlFive-=1;
    }
  colorChangeFive(lvlFive);
});
function colorChangeFive(val) {
  var colourFive = "white";
  if (val >= 3 && val <= 5) {
    colourFive = "green";
  } else if (val > 5) {
    colourFive = "red";
  }
  countFive.style.color = colourFive;
}

//Part 6 buttons
var lvlSix = 0;
var countSix = document.getElementById('number6');

document.getElementById('plus sign6').addEventListener('click', function () {
  countSix.textContent = lvlSix+=1;
  colorChangeSix(lvlSix);
});
document.getElementById('minus sign6').addEventListener('click',function () {
    if(lvlSix > 0) {
      countSix.textContent = lvlSix-=1;
      colorChangeSix(lvlSix);
    }
});
function colorChangeSix(val) {
  var colourSix = "white";
  if(val >= 5 && val <= 7){
    colourSix = "green";
  } else if(val > 6) {
    colourSix = "red";
  } 
  countSix.style.color = colourSix;
}

