// کنترل آیکون‌های انیمیشنی
let batteryAnimating = false;
let hourglassAnimating = false;
let spinnerAnimating = false;
let progressAnimating = false;

// باتری شارژ
function toggleBattery() {
    const batteryFill = document.getElementById('batteryFill');
    
    if (batteryAnimating) {
        batteryFill.classList.remove('charging');
        batteryAnimating = false;
    } else {
        batteryFill.classList.add('charging');
        batteryAnimating = true;
    }
}

// ساعت شنی
function toggleHourglass() {
    const sandTop = document.getElementById('sandTop');
    const sandBottom = document.getElementById('sandBottom');
    
    if (hourglassAnimating) {
        sandTop.classList.remove('falling');
        sandBottom.classList.remove('filling');
        hourglassAnimating = false;
    } else {
        sandTop.classList.add('falling');
        sandBottom.classList.add('filling');
        hourglassAnimating = true;
    }
}

// اسپینر لودینگ
function toggleSpinner() {
    const spinner = document.querySelector('.spinner');
    
    if (spinnerAnimating) {
        spinner.classList.add('paused');
        spinnerAnimating = false;
    } else {
        spinner.classList.remove('paused');
        spinnerAnimating = true;
    }
}

// نوار پیشرفت
function toggleProgress() {
    const progressFill = document.getElementById('progressFill');
    
    if (progressAnimating) {
        progressFill.classList.remove('loading');
        progressAnimating = false;
    } else {
        progressFill.classList.add('loading');
        progressAnimating = true;
    }
}

// شروع خودکار انیمیشن‌ها هنگام بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    // شروع انیمیشن اسپینر به صورت خودکار
    toggleSpinner();
    
    // شروع انیمیشن باتری بعد از 1 ثانیه
    setTimeout(() => {
        toggleBattery();
    }, 1000);
    
    // شروع انیمیشن ساعت شنی بعد از 2 ثانیه
    setTimeout(() => {
        toggleHourglass();
    }, 2000);
    
    // شروع انیمیشن نوار پیشرفت بعد از 3 ثانیه
    setTimeout(() => {
        toggleProgress();
    }, 3000);
});