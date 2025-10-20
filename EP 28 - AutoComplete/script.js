// داده‌های نمونه برای autocomplete
const data = [
    'تهران',
    'اصفهان',
    'شیراز',
    'مشهد',
    'تبریز',
    'کرج',
    'قم',
    'اهواز',
    'کرمان',
    'رشت',
    'زاهدان',
    'همدان',
    'کرمانشاه',
    'اراک',
    'یزد',
    'اردبیل',
    'بندرعباس',
    'قزوین',
    'زنجان',
    'سنندج',
    'خرم‌آباد',
    'گرگان',
    'ساری',
    'بوشهر',
    'بجنورد',
    'سبزوار',
    'کاشان',
    'نیشابور',
    'ورامین',
    'ساوه',
    'ایلام',
    'بیرجند',
    'نجف‌آباد',
    'قائم‌شهر',
    'شهرکرد',
    'گلستان',
    'خوزستان',
    'فارس',
    'خراسان',
    'آذربایجان',
    'مازندران',
    'کردستان',
    'لرستان'
];

// انتخاب المان‌ها
const searchInput = document.getElementById('searchInput');
const suggestionsList = document.getElementById('suggestionsList');

let currentFocus = -1;

// تابع جستجو و نمایش پیشنهادات
function showSuggestions(value) {
    // پاک کردن پیشنهادات قبلی
    suggestionsList.innerHTML = '';
    currentFocus = -1;

    // اگر مقدار ورودی خالی باشد
    if (!value.trim()) {
        suggestionsList.classList.remove('show');
        return;
    }

    // فیلتر کردن داده‌ها
    const filteredData = data.filter(item => {
        const itemLower = item.toLowerCase();
        const valueLower = value.toLowerCase();
        
        // نمایش موارد که حاوی متن جستجو باشند یا با آن شروع شوند
        return itemLower.includes(valueLower);
    });

    // اگر نتیجه‌ای پیدا نشد
    if (filteredData.length === 0) {
        suggestionsList.innerHTML = '<div class="no-results">نتیجه‌ای یافت نشد</div>';
        suggestionsList.classList.add('show');
        return;
    }

    // ساخت لیست پیشنهادات
    filteredData.forEach(item => {
        const li = document.createElement('li');
        
        // هایلایت کردن حروف جستجو شده
        const highlightedText = highlightMatch(item, value);
        li.innerHTML = highlightedText;
        
        // کلیک روی پیشنهاد
        li.addEventListener('click', () => {
            searchInput.value = item;
            suggestionsList.classList.remove('show');
        });
        
        suggestionsList.appendChild(li);
    });

    suggestionsList.classList.add('show');
}

// تابع هایلایت کردن متن
function highlightMatch(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

// رویداد تایپ در اینپوت
searchInput.addEventListener('input', (e) => {
    showSuggestions(e.target.value);
});

// رویداد کلیک خارج از autocomplete
document.addEventListener('click', (e) => {
    if (!e.target.closest('.autocomplete-wrapper')) {
        suggestionsList.classList.remove('show');
    }
});

// رویداد کلیدهای جهت‌دار و Enter
searchInput.addEventListener('keydown', (e) => {
    const items = suggestionsList.getElementsByTagName('li');
    
    if (e.key === 'ArrowDown') {
        // حرکت به پایین
        e.preventDefault();
        currentFocus++;
        if (currentFocus >= items.length) currentFocus = 0;
        setActiveItem(items);
    } else if (e.key === 'ArrowUp') {
        // حرکت به بالا
        e.preventDefault();
        currentFocus--;
        if (currentFocus < 0) currentFocus = items.length - 1;
        setActiveItem(items);
    } else if (e.key === 'Enter') {
        // انتخاب مورد فعال
        e.preventDefault();
        if (currentFocus > -1 && items[currentFocus]) {
            items[currentFocus].click();
        }
    } else if (e.key === 'Escape') {
        // بستن لیست
        suggestionsList.classList.remove('show');
    }
});

// تابع فعال کردن آیتم
function setActiveItem(items) {
    if (!items) return;
    
    // حذف کلاس active از همه آیتم‌ها
    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove('active');
    }
    
    // اضافه کردن کلاس active به آیتم فعال
    if (items[currentFocus]) {
        items[currentFocus].classList.add('active');
        items[currentFocus].scrollIntoView({ block: 'nearest' });
    }
}

// فوکوس روی اینپوت هنگام بارگذاری صفحه
window.addEventListener('load', () => {
    searchInput.focus();
});


