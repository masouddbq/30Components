// آکاردئون ساده با جاوا اسکریپت خام
document.addEventListener('DOMContentLoaded', function() {
    // انتخاب تمام هدرهای آکاردئون
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    // اضافه کردن رویداد کلیک به هر هدر
    accordionHeaders.forEach(function(header) {
        header.addEventListener('click', function() {
            // پیدا کردن آیتم والد و محتوای مربوطه
            const accordionItem = this.parentElement;
            const accordionContent = accordionItem.querySelector('.accordion-content');
            
            // بررسی اینکه آیا این بخش در حال حاضر باز است یا نه
            const isActive = accordionContent.classList.contains('active');
            
            // بستن تمام بخش‌های دیگر
            accordionHeaders.forEach(function(otherHeader) {
                const otherItem = otherHeader.parentElement;
                const otherContent = otherItem.querySelector('.accordion-content');
                otherHeader.classList.remove('active');
                otherContent.classList.remove('active');
            });
            
            // اگر بخش فعلی باز نبود، آن را باز کن
            if (!isActive) {
                this.classList.add('active');
                accordionContent.classList.add('active');
            }
        });
    });
});
