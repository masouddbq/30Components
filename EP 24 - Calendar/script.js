document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    
    // Function to scroll to a specific section
    function scrollToSection(sectionNumber) {
        if (sections[sectionNumber - 1]) {
            sections[sectionNumber - 1].scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    // Keyboard event listener
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        
        // Check if the pressed key is 1, 2, 3, or 4
        if (key >= '1' && key <= '4') {
            const sectionNumber = parseInt(key);
            scrollToSection(sectionNumber);
        }
    });
});
