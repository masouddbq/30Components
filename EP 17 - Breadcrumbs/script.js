// Simple Breadcrumbs JavaScript for Beginners

// Page data - defines the structure of our website
const pages = {
    home: {
        title: 'Home',
        content: 'Welcome to our website! This is the home page.',
        breadcrumbs: [
            { name: 'Home', current: true }
        ]
    },
    products: {
        title: 'Products',
        content: 'Browse our amazing products here.',
        breadcrumbs: [
            { name: 'Home', link: 'home' },
            { name: 'Products', current: true }
        ]
    },
    laptops: {
        title: 'Laptops',
        content: 'You are currently viewing the Laptops page.',
        breadcrumbs: [
            { name: 'Home', link: 'home' },
            { name: 'Products', link: 'products' },
            { name: 'Laptops', current: true }
        ]
    },
    'gaming-laptops': {
        title: 'Gaming Laptops',
        content: 'Check out our powerful gaming laptops!',
        breadcrumbs: [
            { name: 'Home', link: 'home' },
            { name: 'Products', link: 'products' },
            { name: 'Laptops', link: 'laptops' },
            { name: 'Gaming Laptops', current: true }
        ]
    }
};

// Function to update breadcrumbs
function updateBreadcrumbs(pageKey) {
    const breadcrumbsContainer = document.getElementById('breadcrumbs');
    const page = pages[pageKey];
    
    // Clear current breadcrumbs
    breadcrumbsContainer.innerHTML = '';
    
    // Create new breadcrumbs
    page.breadcrumbs.forEach((crumb, index) => {
        // Add separator if not first item
        if (index > 0) {
            const separator = document.createElement('span');
            separator.className = 'separator';
            separator.textContent = '>';
            breadcrumbsContainer.appendChild(separator);
        }
        
        // Create breadcrumb item
        if (crumb.current) {
            // Current page (not clickable)
            const currentSpan = document.createElement('span');
            currentSpan.className = 'current';
            currentSpan.textContent = crumb.name;
            breadcrumbsContainer.appendChild(currentSpan);
        } else {
            // Clickable link
            const link = document.createElement('a');
            link.href = '#';
            link.textContent = crumb.name;
            link.onclick = (e) => {
                e.preventDefault();
                navigateTo(crumb.link);
            };
            breadcrumbsContainer.appendChild(link);
        }
    });
}

// Function to update page content
function updateContent(pageKey) {
    const page = pages[pageKey];
    
    // Update page title and content
    document.getElementById('page-title').textContent = page.title;
    document.getElementById('page-content').textContent = page.content;
}

// Main navigation function
function navigateTo(pageKey) {
    // Check if page exists
    if (!pages[pageKey]) {
        console.error('Page not found:', pageKey);
        return;
    }
    
    // Update breadcrumbs and content
    updateBreadcrumbs(pageKey);
    updateContent(pageKey);
    
    console.log('Navigated to:', pageKey);
}

// Initialize the page when it loads
document.addEventListener('DOMContentLoaded', function() {
    // Start with laptops page as default
    navigateTo('laptops');
    console.log('Breadcrumbs system initialized!');
});
