// محاسبه درصد اسکرول و به‌روزرسانی دایره پیشرفت
function updateScrollProgress() {
    // محاسبه درصد اسکرول
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    // محدود کردن درصد بین 0 تا 100
    const clampedPercent = Math.max(0, Math.min(100, scrollPercent));
    
    // محاسبه stroke-dashoffset برای دایره
    const circumference = 2 * Math.PI * 25; // شعاع دایره = 25
    const offset = circumference - (clampedPercent / 100) * circumference;
    
    // به‌روزرسانی دایره پیشرفت
    const progressFill = document.querySelector('.progress-ring-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        progressFill.style.strokeDashoffset = offset;
        progressText.textContent = Math.round(clampedPercent) + '%';
    }
}

// اجرای تابع هنگام اسکرول
window.addEventListener('scroll', updateScrollProgress);

// اجرای تابع هنگام بارگذاری صفحه
window.addEventListener('load', updateScrollProgress);

// اجرای تابع هنگام تغییر اندازه پنجره
window.addEventListener('resize', updateScrollProgress);