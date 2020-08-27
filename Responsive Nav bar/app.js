// Selectors
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');



// Event Listeners
burger.addEventListener('click', showNavBar);



// Function
function showNavBar(event) {
    navLinks.classList.toggle('nav-active');

    let len = navLinks.childElementCount;
    for(let i = 0; i < len; i++) {
        // navLinks.children[i].classList.toggle('nav-link-anime');
    }
    navLinks.children[0].classList.toggle('nav-link1-anime');
    navLinks.children[1].classList.toggle('nav-link2-anime');
    navLinks.children[2].classList.toggle('nav-link3-anime');
    navLinks.children[3].classList.toggle('nav-link4-anime');
    


    burger.children[0].classList.toggle('line1-anime');
    burger.children[1].classList.toggle('line2-anime');
    burger.children[2].classList.toggle('line3-anime');
}
