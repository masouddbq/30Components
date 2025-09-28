// این فایل برای دراپ داون‌های hover نیازی به JavaScript خاصی ندارد
// چون CSS خودش با :hover کار می‌کند

// اما می‌توانیم برای بهبود تجربه کاربری، انیمیشن‌های اضافی اضافه کنیم

document.addEventListener('DOMContentLoaded', function() {
    // اضافه کردن انیمیشن نرم برای دراپ داون‌ها
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownContent = dropdown.querySelector('.dropdown-content');
        
        // اضافه کردن event listener برای hover
        dropdown.addEventListener('mouseenter', function() {
            dropdownContent.style.display = 'block';
            // کمی تاخیر برای انیمیشن
            setTimeout(() => {
                dropdownContent.style.opacity = '1';
                dropdownContent.style.transform = 'translateY(0)';
            }, 10);
        });
        
        dropdown.addEventListener('mouseleave', function() {
            dropdownContent.style.opacity = '0';
            dropdownContent.style.transform = 'translateY(-10px)';
            // بستن دراپ داون پس از انیمیشن
            setTimeout(() => {
                if (dropdownContent.style.opacity === '0') {
                    dropdownContent.style.display = 'none';
                }
            }, 300);
        });
    });
    
    // اضافه کردن کلیک برای موبایل (اختیاری)
    const navLinks = document.querySelectorAll('.dropdown .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // فقط در موبایل
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                const dropdownContent = dropdown.querySelector('.dropdown-content');
                
                if (dropdownContent.style.display === 'block') {
                    dropdownContent.style.display = 'none';
                } else {
                    // بستن سایر دراپ داون‌ها
                    document.querySelectorAll('.dropdown-content').forEach(content => {
                        content.style.display = 'none';
                    });
                    dropdownContent.style.display = 'block';
                }
            }
        });
    });
    
    // بستن دراپ داون‌ها هنگام کلیک خارج از آنها
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-content').forEach(content => {
                if (window.innerWidth <= 768) {
                    content.style.display = 'none';
                }
            });
        }
    });
});