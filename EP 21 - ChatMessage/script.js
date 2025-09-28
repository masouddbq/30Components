// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    const chatMessage = document.getElementById('chatMessage');
    
    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    // Function to show the chat message with animation
    function showChatMessage() {
        if (isInViewport(chatMessage)) {
            chatMessage.classList.add('show');
        }
    }
    
    // Add scroll event listener
    window.addEventListener('scroll', function() {
        // Add a small delay to make the animation more noticeable
        setTimeout(showChatMessage, 100);
    });
    
    // Also check on page load in case the element is already visible
    setTimeout(showChatMessage, 500);
    
    // Optional: Add a subtle floating animation to the avatar
    function addFloatingAnimation() {
        const avatar = document.querySelector('.avatar img');
        if (avatar) {
            avatar.style.animation = 'float 3s ease-in-out infinite';
        }
    }
    
    // Add floating animation after the chat message appears
    setTimeout(addFloatingAnimation, 1000);
});

// Add floating animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-5px);
        }
    }
`;
document.head.appendChild(style);
