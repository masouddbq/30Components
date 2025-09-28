document.addEventListener('DOMContentLoaded', function() {
    const card = document.querySelector('.card');
    
    // Simple click animation
    card.addEventListener('click', function() {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = '';
        }, 150);
    });
});
