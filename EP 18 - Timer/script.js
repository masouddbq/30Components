// متغیرهای اصلی
let totalSeconds = 0;
let currentSeconds = 0;
let timerInterval = null;
let isRunning = false;

// عناصر HTML
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const progressCircle = document.querySelector('.progress-ring-circle');

// محاسبه محیط دایره برای انیمیشن
const radius = 140;
const circumference = 2 * Math.PI * radius;

// تنظیم اولیه دایره پیشرفت
progressCircle.style.strokeDasharray = circumference;
progressCircle.style.strokeDashoffset = circumference;

// تابع برای به‌روزرسانی نمایش زمان
function updateTimeDisplay() {
    const hours = Math.floor(currentSeconds / 3600);
    const minutes = Math.floor((currentSeconds % 3600) / 60);
    const seconds = currentSeconds % 60;
    
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// تابع برای به‌روزرسانی دایره پیشرفت
function updateProgressCircle() {
    if (totalSeconds > 0) {
        const progress = (totalSeconds - currentSeconds) / totalSeconds;
        const offset = circumference - (progress * circumference);
        progressCircle.style.strokeDashoffset = offset;
    }
}

// تابع برای شروع تایمر
function startTimer() {
    if (currentSeconds <= 0) {
        return;
    }
    
    isRunning = true;
    
    timerInterval = setInterval(() => {
        currentSeconds--;
        updateTimeDisplay();
        updateProgressCircle();
        
        if (currentSeconds <= 0) {
            stopTimer();
            alert('زمان تمام شد!');
        }
    }, 1000);
}

// تابع برای توقف تایمر
function stopTimer() {
    isRunning = false;
    clearInterval(timerInterval);
}

// تابع برای بازنشانی تایمر
function resetTimer() {
    stopTimer();
    currentSeconds = totalSeconds;
    updateTimeDisplay();
    updateProgressCircle();
}

// تنظیم زمان پیش‌فرض (2 دقیقه) و شروع خودکار
function setDefaultTimeAndStart() {
    totalSeconds = 2 * 60; // 2 دقیقه
    currentSeconds = totalSeconds;
    
    updateTimeDisplay();
    updateProgressCircle();
    
    // شروع خودکار تایمر
    startTimer();
}

// تنظیم اولیه و شروع خودکار
setDefaultTimeAndStart();

// تابع برای اضافه کردن انیمیشن زیبا
function addPulseAnimation() {
    const clockCircle = document.querySelector('.clock-circle');
    clockCircle.style.animation = 'pulse 2s infinite';
}

// اضافه کردن انیمیشن پالس به CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// اجرای انیمیشن هنگام شروع تایمر
addPulseAnimation();


// هشدار قبل از بستن صفحه
window.addEventListener('beforeunload', (event) => {
    if (isRunning) {
        event.preventDefault();
        event.returnValue = 'تایمر در حال اجرا است. آیا مطمئنید که می‌خواهید صفحه را ببندید؟';
    }
});
