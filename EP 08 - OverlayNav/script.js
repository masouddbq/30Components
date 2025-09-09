// ناوبری Overlay
const leftNavBtn = document.getElementById('leftNavBtn');
const topNavBtn = document.getElementById('topNavBtn');
const leftOverlay = document.getElementById('leftOverlay');
const topOverlay = document.getElementById('topOverlay');
const closeLeftBtn = document.getElementById('closeLeftBtn');
const closeTopBtn = document.getElementById('closeTopBtn');

// باز کردن overlay سمت چپ
leftNavBtn.addEventListener('click', function() {
    leftOverlay.classList.add('active');
});

// بستن overlay سمت چپ
closeLeftBtn.addEventListener('click', function() {
    leftOverlay.classList.remove('active');
});

// باز کردن overlay تمام صفحه
topNavBtn.addEventListener('click', function() {
    topOverlay.classList.add('active');
});

// بستن overlay تمام صفحه
closeTopBtn.addEventListener('click', function() {
    topOverlay.classList.remove('active');
});

// بستن overlay با کلیک روی پس‌زمینه
leftOverlay.addEventListener('click', function(e) {
    if (e.target === leftOverlay) {
        leftOverlay.classList.remove('active');
    }
});

topOverlay.addEventListener('click', function(e) {
    if (e.target === topOverlay) {
        topOverlay.classList.remove('active');
    }
});

// بستن overlay با کلید Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        leftOverlay.classList.remove('active');
        topOverlay.classList.remove('active');
    }
});

// اضافه کردن محتوای بیشتر برای تست
function addMoreContent() {
    const content = document.querySelector('.content');
    
    const additionalCards = [
        {
            title: 'ناوبری ساده',
            description: 'دو نوع ناوبری overlay ساده و کاربردی.'
        },
        {
            title: 'طراحی مدرن',
            description: 'طراحی زیبا و مدرن با انیمیشن‌های نرم.'
        },
        {
            title: 'جاوااسکریپت خام',
            description: 'کد ساده و بهینه بدون وابستگی به کتابخانه‌های خارجی.'
        },
        {
            title: 'سازگار با موبایل',
            description: 'عملکرد عالی روی تمام دستگاه‌ها.'
        },
        {
            title: 'تجربه کاربری عالی',
            description: 'طراحی شده با تمرکز بر تجربه کاربری بهتر.'
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