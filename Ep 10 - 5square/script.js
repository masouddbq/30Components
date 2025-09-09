const square1 = document.querySelector('.square1');
const square2 = document.querySelector('.square2');
const square3 = document.querySelector('.square3');
const square4 = document.querySelector('.square4');
const square5 = document.querySelector('.square5');

let isOpen = false;

square1.addEventListener('click', () => {
    if (!isOpen) {
        // Opening with 0.3 second delay between each square
        setTimeout(() => square2.classList.add('square2-hover'), 0);
        setTimeout(() => square3.classList.add('square3-hover'), 100);
        setTimeout(() => square4.classList.add('square4-hover'), 200);
        setTimeout(() => square5.classList.add('square5-hover'), 300);
        isOpen = true;
    } else {
        // Closing with 0.3 second delay between each square
        setTimeout(() => square2.classList.remove('square2-hover'), 0);
        setTimeout(() => square3.classList.remove('square3-hover'), 100);
        setTimeout(() => square4.classList.remove('square4-hover'), 200);
        setTimeout(() => square5.classList.remove('square5-hover'), 300);
        isOpen = false;
    }
});
