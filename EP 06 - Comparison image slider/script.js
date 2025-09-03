// Get DOM elements
const sliderHandle = document.querySelector('.slider-handle');
const sliderLine = document.querySelector('.slider-line');
const imageAfter = document.querySelector('.image-after');
const imageSlider = document.querySelector('.image-slider');

let isDragging = false;

// Mouse events for desktop
sliderHandle.addEventListener('mousedown', startDragging);
document.addEventListener('mousemove', drag);
document.addEventListener('mouseup', stopDragging);

// Touch events for mobile
sliderHandle.addEventListener('touchstart', startDragging);
document.addEventListener('touchmove', drag);
document.addEventListener('touchend', stopDragging);

// Click on slider to move handle
imageSlider.addEventListener('click', function(e) {
    if (!isDragging) {
        const rect = imageSlider.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = (x / rect.width) * 100;
        updateSlider(percentage);
    }
});

function startDragging(e) {
    isDragging = true;
    e.preventDefault();
}

function stopDragging() {
    isDragging = false;
}

function drag(e) {
    if (!isDragging) return;
    
    e.preventDefault();
    
    const rect = imageSlider.getBoundingClientRect();
    let clientX;
    
    if (e.type === 'mousemove') {
        clientX = e.clientX;
    } else if (e.type === 'touchmove') {
        clientX = e.touches[0].clientX;
    }
    
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    updateSlider(percentage);
}

function updateSlider(percentage) {
    // Limit percentage between 0 and 100
    percentage = Math.max(0, Math.min(100, percentage));
    
    // Update handle position
    sliderHandle.style.left = percentage + '%';
    sliderLine.style.left = percentage + '%';
    
    // Update image clip
    imageAfter.style.clipPath = `polygon(${percentage}% 0, 100% 0, 100% 100%, ${percentage}% 100%)`;
}
