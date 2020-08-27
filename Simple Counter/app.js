// Selectors
const plusButton = document.querySelector('.plus-btn');
const minusButton = document.querySelector('.minus-btn');
const resetButton = document.querySelector('.reset-btn');
const number = document.querySelector('.number');

let num = 0;

// Event Listener
plusButton.addEventListener('click', increment);
minusButton.addEventListener('click', decrement);
resetButton.addEventListener('click', reset);


// Function
function increment(event) {
    let n = num++ +1;
    if (n > 0) {
        number.innerHTML = `<span style='color:green'>${n}</span>`
    } else {
        number.innerHTML = `<span style='color:red'>${n}</span>`
    }
    // number.innerText = `${n}`
}

function decrement(event) {
    let n = num-- -1;
    if (n < 0) {
        number.innerHTML = `<span style='color:red'>${n}</span>`
    } else {
        number.innerHTML = `<span style='color:green'>${n}</span>`
    }
    // number.innerText = `${n}`
}

function reset(event) {
    num = 0;
    number.innerText = `${num}`;
}