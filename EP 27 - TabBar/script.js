const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');
const indicator = document.querySelector('.indicator');

// Initialize indicator position
function updateIndicator(tab) {
    const tabWidth = tab.offsetWidth;
    const tabLeft = tab.offsetLeft;
    indicator.style.width = `${tabWidth}px`;
    indicator.style.left = `${tabLeft}px`;
}

// Set initial indicator position
updateIndicator(tabs[0]);

// Tab click handler
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Update indicator position
        updateIndicator(tab);
        
        // Show corresponding content
        const targetId = tab.getAttribute('data-tab');
        document.getElementById(targetId).classList.add('active');
    });
});

// Update indicator on window resize
window.addEventListener('resize', () => {
    const activeTab = document.querySelector('.tab.active');
    updateIndicator(activeTab);
});

