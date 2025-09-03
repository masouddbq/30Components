// دکمه اسکرول به بالا
const scrollTopBtn = document.getElementById('scrollTopBtn');

// نمایش/مخفی کردن دکمه بر اساس موقعیت اسکرول
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

// اسکرول به بالا هنگام کلیک روی دکمه
scrollTopBtn.addEventListener('click', function() {
    // اسکرول نرم به بالا
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// اضافه کردن محتوای بیشتر برای تست اسکرول
function addMoreContent() {
    const content = document.querySelector('.content');
    
    const additionalCards = [
        {
            title: 'تجربه کاربری عالی',
            description: 'طراحی شده با تمرکز بر تجربه کاربری و سهولت استفاده.'
        },
        {
            title: 'قابلیت شخصی‌سازی',
            description: 'امکان تغییر رنگ، اندازه و موقعیت دکمه مطابق نیاز شما.'
        },
        {
            title: 'عملکرد بهینه',
            description: 'کد بهینه‌سازی شده برای عملکرد سریع و بدون تأخیر.'
        },
        {
            title: 'سازگار با مرورگرها',
            description: 'عملکرد عالی در تمام مرورگرهای مدرن و قدیمی.'
        },
        {
            title: 'هدف‌مند',
            description: 'طراحی شده برای بهبود ناوبری و تجربه کاربری بهتر.'
        }
    ];
    
    additionalCards.forEach(card => {
        const section = document.createElement('div');
        section.className = 'section';
        section.innerHTML = `
            <div class="card">
                <h2>${card.title}</h2>
                <p>${card.description}</p>
            </div>
        `;
        content.appendChild(section);
    });
}

// اضافه کردن انیمیشن برای کارت‌ها
function addCardAnimations() {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// اضافه کردن محتوای بیشتر و انیمیشن‌ها بعد از بارگذاری صفحه
window.addEventListener('load', function() {
    addMoreContent();
    setTimeout(addCardAnimations, 100);
});
