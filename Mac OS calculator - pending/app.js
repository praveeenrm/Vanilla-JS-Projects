// Selectors
const input = document.querySelector('input');
const buttons = document.querySelector('.grid-box');
const addButton = document.querySelector('.addBtn');

let val = "";
let valTwo = "";
// Event Listeners
buttons.addEventListener('click', getValue);

// Function
function getValue(event) {
    val += event.target.textContent;
    input.value = val
    localStorage.setItem('val', val);
} 

console.log(localStorage.getItem('val'));
