// Selectors
const clickButton = document.querySelector('.click-btn');
const res = document.querySelector('.get');


// Event Listeners
clickButton.addEventListener('click', changeColor);


// Function
function changeColor(event) {
    let one = Math.round(Math.random() * 255);
    let two = Math.round(Math.random() * 255);
    let three = Math.round(Math.random() * 255);

    let a = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let c = Math.round(Math.random() * 255);
    document.body.style.backgroundImage = `linear-gradient(90deg, rgb(${two}, ${three}, ${one}), rgb(${a}, ${b}, ${c}))`
    res.innerText = `linear-gradient(90deg, rgb(${two}, ${three}, ${one}), rgb(${a}, ${b}, ${c}))`
}
