// داده‌های نمونه برای نمایش
const allItems = [
    { id: 1, title: "آیتم شماره 1", description: "توضیحات آیتم اول" },
    { id: 2, title: "آیتم شماره 2", description: "توضیحات آیتم دوم" },
    { id: 3, title: "آیتم شماره 3", description: "توضیحات آیتم سوم" },
    { id: 4, title: "آیتم شماره 4", description: "توضیحات آیتم چهارم" },
    { id: 5, title: "آیتم شماره 5", description: "توضیحات آیتم پنجم" },
    { id: 6, title: "آیتم شماره 6", description: "توضیحات آیتم ششم" },
    { id: 7, title: "آیتم شماره 7", description: "توضیحات آیتم هفتم" },
    { id: 8, title: "آیتم شماره 8", description: "توضیحات آیتم هشتم" },
    { id: 9, title: "آیتم شماره 9", description: "توضیحات آیتم نهم" },
    { id: 10, title: "آیتم شماره 10", description: "توضیحات آیتم دهم" },
    { id: 11, title: "آیتم شماره 11", description: "توضیحات آیتم یازدهم" },
    { id: 12, title: "آیتم شماره 12", description: "توضیحات آیتم دوازدهم" },
    { id: 13, title: "آیتم شماره 13", description: "توضیحات آیتم سیزدهم" },
    { id: 14, title: "آیتم شماره 14", description: "توضیحات آیتم چهاردهم" },
    { id: 15, title: "آیتم شماره 15", description: "توضیحات آیتم پانزدهم" }
];

// متغیرهای اصلی
let currentPage = 1;
const itemsPerPage = 5; // تعداد آیتم در هر صفحه

// عناصر HTML
const itemsContainer = document.getElementById('items-container');
const pageNumbers = document.getElementById('page-numbers');
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// محاسبه تعداد کل صفحات
const totalPages = Math.ceil(allItems.length / itemsPerPage);

// تابع برای نمایش آیتم‌های صفحه جاری
function showItems() {
    // محاسبه شاخص شروع و پایان آیتم‌ها
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    
    // دریافت آیتم‌های صفحه جاری
    const currentItems = allItems.slice(startIndex, endIndex);
    
    // پاک کردن محتوای قبلی
    itemsContainer.innerHTML = '';
    
    // نمایش آیتم‌ها
    currentItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'item';
        itemElement.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
        `;
        itemsContainer.appendChild(itemElement);
    });
}

// تابع برای ایجاد دکمه‌های شماره صفحه
function createPageNumbers() {
    pageNumbers.innerHTML = '';
    
    // نمایش دکمه‌های شماره صفحه
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-number';
        pageBtn.textContent = i;
        pageBtn.onclick = () => goToPage(i);
        
        // مشخص کردن صفحه فعال
        if (i === currentPage) {
            pageBtn.classList.add('active');
        }
        
        pageNumbers.appendChild(pageBtn);
    }
}

// تابع برای رفتن به صفحه مشخص
function goToPage(page) {
    currentPage = page;
    showItems();
    createPageNumbers();
    updatePageInfo();
    updateButtons();
}

// تابع برای رفتن به صفحه بعدی
function nextPage() {
    if (currentPage < totalPages) {
        goToPage(currentPage + 1);
    }
}

// تابع برای رفتن به صفحه قبلی
function previousPage() {
    if (currentPage > 1) {
        goToPage(currentPage - 1);
    }
}

// تابع برای به‌روزرسانی اطلاعات صفحه
function updatePageInfo() {
    currentPageSpan.textContent = currentPage;
    totalPagesSpan.textContent = totalPages;
}

// تابع برای فعال/غیرفعال کردن دکمه‌ها
function updateButtons() {
    // دکمه قبلی
    prevBtn.disabled = currentPage === 1;
    
    // دکمه بعدی
    nextBtn.disabled = currentPage === totalPages;
}

// شروع برنامه
function init() {
    showItems();
    createPageNumbers();
    updatePageInfo();
    updateButtons();
}

// اجرای برنامه هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', init);