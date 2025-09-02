// Get the flipbox element
const flipbox = document.querySelector('.flipbox');
const flipboxInner = document.querySelector('.flipbox-inner');

// Add mouseover event for flip effect
flipbox.addEventListener('mouseover', function() {
    flipboxInner.style.transform = 'rotateY(180deg)';
});

// Add mouseout event to return to original position
flipbox.addEventListener('mouseout', function() {
    flipboxInner.style.transform = 'rotateY(0deg)';
});

// Optional: Add some dynamic content
document.addEventListener('DOMContentLoaded', function() {
    const frontTitle = document.querySelector('.flipbox-front h2');
    const backTitle = document.querySelector('.flipbox-back h2');
    
    // Change titles on hover
    flipbox.addEventListener('mouseenter', function() {
        frontTitle.textContent = 'Flipping...';
        backTitle.textContent = 'Welcome Back!';
    });
    
    flipbox.addEventListener('mouseleave', function() {
        frontTitle.textContent = 'Front Side';
        backTitle.textContent = 'Back Side';
    });
});
