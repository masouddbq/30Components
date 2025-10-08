// Mega Menu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdown');
    const megaMenu = document.querySelector('.mega-menu');
    const navLink = dropdown.querySelector('.nav-link');

    // Show mega menu on hover
    dropdown.addEventListener('mouseenter', function() {
        megaMenu.style.opacity = '1';
        megaMenu.style.visibility = 'visible';
        megaMenu.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Hide mega menu when mouse leaves
    dropdown.addEventListener('mouseleave', function() {
        megaMenu.style.opacity = '0';
        megaMenu.style.visibility = 'hidden';
        megaMenu.style.transform = 'translateX(-50%) translateY(-10px)';
    });

    // Keep mega menu open when hovering over it
    megaMenu.addEventListener('mouseenter', function() {
        megaMenu.style.opacity = '1';
        megaMenu.style.visibility = 'visible';
        megaMenu.style.transform = 'translateX(-50%) translateY(0)';
    });

    // Hide mega menu when mouse leaves mega menu
    megaMenu.addEventListener('mouseleave', function() {
        megaMenu.style.opacity = '0';
        megaMenu.style.visibility = 'hidden';
        megaMenu.style.transform = 'translateX(-50%) translateY(-10px)';
    });

    // Mobile menu toggle (for responsive design)
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-item');

    // Add click functionality for mobile
    if (window.innerWidth <= 768) {
        navItems.forEach(item => {
            const link = item.querySelector('.nav-link');
            if (item.classList.contains('dropdown')) {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    const megaMenu = item.querySelector('.mega-menu');
                    if (megaMenu.style.display === 'block') {
                        megaMenu.style.display = 'none';
                    } else {
                        megaMenu.style.display = 'block';
                    }
                });
            }
        });
    }

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            // Mobile view - show mega menu on click
            navItems.forEach(item => {
                const link = item.querySelector('.nav-link');
                if (item.classList.contains('dropdown')) {
                    link.addEventListener('click', function(e) {
                        e.preventDefault();
                        const megaMenu = item.querySelector('.mega-menu');
                        if (megaMenu.style.display === 'block') {
                            megaMenu.style.display = 'none';
                        } else {
                            megaMenu.style.display = 'block';
                        }
                    });
                }
            });
        } else {
            // Desktop view - hide mega menu by default
            const megaMenus = document.querySelectorAll('.mega-menu');
            megaMenus.forEach(menu => {
                menu.style.display = '';
            });
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
