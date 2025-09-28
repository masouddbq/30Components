// Glass Purple Scrollbar - Minimal Enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Add scroll progress indicator
    const createScrollIndicator = () => {
        const indicator = document.createElement('div');
        indicator.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, rgba(138, 43, 226, 0.8), rgba(147, 112, 219, 0.9));
            z-index: 9999;
            transition: width 0.1s ease;
            backdrop-filter: blur(5px);
        `;
        document.body.appendChild(indicator);
        
        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            indicator.style.width = scrolled + '%';
        });
    };
    
    // Uncomment to enable scroll progress indicator
    // createScrollIndicator();
});
