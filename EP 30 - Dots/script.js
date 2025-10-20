// Get all dots and background layer
const dots = document.querySelectorAll('.dot');
const backgroundLayer = document.querySelector('.background-layer');

// Define colors for each dot
const colors = [
    '#ffffff',  // white
    '#ff6b6b',  // red
    '#4ecdc4',  // turquoise
    '#45b7d1',  // blue
    '#f9ca24'   // yellow
];

// Add click event to each dot
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        // Get the index of clicked dot
        const index = this.getAttribute('data-index');
        
        // Remove active class from all dots
        dots.forEach(d => d.classList.remove('active'));
        
        // Add active class to clicked dot
        this.classList.add('active');
        
        // Remove bounce class if exists
        backgroundLayer.classList.remove('bounce');
        
        // Force reflow to restart animation
        void backgroundLayer.offsetWidth;
        
        // Change background color and add bounce animation
        backgroundLayer.style.background = colors[index];
        backgroundLayer.classList.add('bounce');
    });
});

