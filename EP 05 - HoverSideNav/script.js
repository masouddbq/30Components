// Get DOM elements
const sideNav = document.getElementById('sideNav');
const mainContent = document.querySelector('.main-content');
const navLinks = document.querySelectorAll('.nav-link');

// Handle navigation link clicks
navLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get the link text from span element
        const linkText = this.querySelector('span').textContent;
        
        // Update main content
        mainContent.innerHTML = `
            <h1>${linkText}</h1>
            <p>این صفحه مربوط به ${linkText} است.</p>
        `;
    });
});
