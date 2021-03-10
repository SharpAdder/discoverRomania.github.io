
// calculator simplu  ---> pt functionare calc simplu --> cooment calculator avansat
const numbeR1 = document.querySelector('#number1');
const numbeR2 = document.querySelector('#number2');

const addSign = document.querySelector('.add');
const minusSign = document.querySelector('.subtract');
const result = document.querySelector('.result');

function addNumbers(){
 sum = Number(numbeR1.value) + Number(numbeR2.value);
 result.innerHTML = sum;
}

function subtractNumbers(){
  difference = Number(numbeR1.value) - Number(numbeR2.value);
  result.innerHTML = difference;
}

addSign.addEventListener('click', addNumbers);
minusSign.addEventListener('click', subtractNumbers);

// calculator avansat  ---> pt funcionare calc avansat --> comment calc simplu


const reSult = document.querySelector('.reSult');
const pluSign = document.querySelector('.adition');
const minuSign = document.querySelector('.subtraction');
const multiplySign = document.querySelector('.multiply');
const divisionSign = document.querySelector('.division');
const clearBtn = document.querySelector('.clear');

const number7 = document.querySelector('.number7');
const number8 = document.querySelector('.number8');
const number9 = document.querySelector('.number9');
const number4 = document.querySelector('.number4');
const number5 = document.querySelector('.number5');
const number6 = document.querySelector('.number6');
const number1 = document.querySelector('.number1');
const number2 = document.querySelector('.number2');
const number3 = document.querySelector('.number3');
const number0 = document.querySelector('.number0');

const decimal = document.querySelector('.decimal');
// const clearBtn = document.querySelector('.clear');
const equal = document.querySelector('.equal');


let firstNumber = 0;
let secondNumber = 0;
let startBuildingSecondNumber = false;
let operation = '';

function buildNumber(number){
  if(startBuildingSecondNumber){
    secondNumber = secondNumber *10 + number;
    reSult.innerHTML = secondNumber;
  } else {
  firstNumber = firstNumber * 10 + number;
  reSult.innerHTML = firstNumber;
  }
}

equal.addEventListener('click', function(){
  let operationResult;
  switch (operation) {
    case 'add':
      operationResult = firstNumber + secondNumber;
      break;
    case 'substract':
        operationResult = firstNumber - secondNumber;
      break;

    case 'multiply':
        operationResult = firstNumber * secondNumber;
      break;
    default:
        operationResult = firstNumber / secondNumber;
  }



  reSult.innerHTML = operationResult;
  firstNumber = 0;
  secondNumber = 0;
  operation ='';
  startBuildingSecondNumber = false;

})
pluSign.addEventListener('click', function() {
   startBuildingSecondNumber = true;
   operation = 'add';
 })

 minuSign.addEventListener('click', function() {
    startBuildingSecondNumber = true;
    operation = 'substract';
  })

  multiplySign.addEventListener('click', function() {
     startBuildingSecondNumber = true;
     operation = 'multiply';
   })

   divisionSign.addEventListener('click', function() {
      startBuildingSecondNumber = true;
      operation = 'divide';
    })




number7.addEventListener('click', function(){
  buildNumber(7);
})

number8.addEventListener('click', function(){
  buildNumber(8);
})

number9.addEventListener('click', function(){
  buildNumber(9);
})

number4.addEventListener('click', function(){
  buildNumber(4);
})

number5.addEventListener('click', function(){
  buildNumber(5);
})

number6.addEventListener('click', function(){
  buildNumber(6);
})


number1.addEventListener('click', function(){
  buildNumber(1);
})

number2.addEventListener('click', function(){
  buildNumber(2);
})

number3.addEventListener('click', function(){
  buildNumber(3);
})

number0.addEventListener('click', function(){
  buildNumber(0);
})

//reset display
// function resetAll(){
//   reSult.textContent = '0';
// }
//
// clearBtn.addEventListener('click', resetAll);
