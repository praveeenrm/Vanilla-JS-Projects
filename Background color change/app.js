// Selector
const clickButton = document.querySelector('.btn');
const backGround = document.querySelector('header');



// Event Listener
clickButton.addEventListener('click', changeBg);


// Function
function changeBg(event) {
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    const text = backGround.children[0];
    text.innerHTML = `rgb(${red}, ${green}, ${blue})`;

}