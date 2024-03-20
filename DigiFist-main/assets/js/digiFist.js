const container = document.querySelector('.cardContainer');
let isDragging = false;
let startPosition = 0;
let initialScrollLeft = 0;

// start scrolling
container.addEventListener('mousedown', (event) => {
    isDragging = true;
    startPosition = event.clientX;
    initialScrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
});

// finish scrolling
container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});

// end scrolling when out of container
container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});

// Continue dragging when the mouse moves
container.addEventListener('mousemove', (event) => {
    if (isDragging) {
        container.scrollLeft = initialScrollLeft - (event.clientX - startPosition);
    }
});

// Scroll right button
const rightBtn = document.querySelector('.rightBtn');
rightBtn.addEventListener('click', () => {
    container.scrollLeft += 95;
});

// Scroll left button
const leftBtn = document.querySelector('.leftBtn');
leftBtn.addEventListener('click', () => {
    container.scrollLeft -= 95;
}); 

 