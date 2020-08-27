// Selectors
const firstNumber = document.querySelector('.firstInput');
const secondNumber = document.querySelector('.secondInput');
const result = document.querySelector('.answer');

const buttons = document.querySelector('.btn');

const plusButton = document.querySelector('.plusBtn');
const minusButton = document.querySelector('.minusBtn');
const divideButton = document.querySelector('.divideBtn');
const multiplyButton = document.querySelector('.multiplyBtn');



// Event Listeners
// plusButton.addEventListener('click', addition);

buttons.addEventListener('click', calculations);


// Function
function addition(event) {
    let n1 = firstNumber.value;
    let n2 = secondNumber.value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    res = n1 + n2;
    result.innerHTML = `${n1} + ${n2} = ${res}`

    //clear input
    firstNumber.value = "";
    secondNumber.value = ""
}

function calculations(event) {
    let n1 = firstNumber.value;
    let n2 = secondNumber.value;
    n1 = parseInt(n1);
    n2 = parseInt(n2);
    if (event.target.parentNode.classList.contains('plusBtn')) {
        result.innerHTML = `${n1} + ${n2} = ${n1+n2}`
    } else if(event.target.parentNode.classList.contains('minusBtn')) {
        result.innerHTML = `${n1} - ${n2} = ${n1-n2}`
    } else if(event.target.parentNode.classList.contains('multiplyBtn')) {
        result.innerHTML = `${n1} * ${n2} = ${n1*n2}`
    } else if(event.target.parentNode.classList.contains('divideBtn')) {
        result.innerHTML = `${n1} / ${n2} = ${n1/n2}`
    }



    //clear input
    firstNumber.value = "";
    secondNumber.value = ""
}