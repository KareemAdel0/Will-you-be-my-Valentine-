const envelope = document.getElementById("envelope");

if (envelope) {
    let stage = 0;
    let isAnimating = false;

    const renderStage = () => {
        // حذف كل الـ stages القديمة
        envelope.classList.remove("stage-0", "stage-1", "stage-2", "stage-3");
        // إضافة الـ stage الحالية
        envelope.classList.add(`stage-${stage}`);
        envelope.setAttribute("aria-expanded", String(stage > 0));
    };

    const runOpenSequence = () => {
        if (isAnimating || stage === 3) return;

        isAnimating = true;

        // المرحلة 1: فتح الظرف (صورة 2)
        stage = 1;
        renderStage();

        // المرحلة 2: خروج جزئي للورقة (صورة 3) بعد 600 مللي ثانية
        setTimeout(() => {
            stage = 2;
            renderStage();
        }, 600);

        // المرحلة 3: خروج كامل للورقة (صورة 4) بعد 1200 مللي ثانية
        setTimeout(() => {
            stage = 3;
            renderStage();
            isAnimating = false;
        }, 1300);
    };

    envelope.addEventListener("click", runOpenSequence);

    // دعم الكيبورد (Enter أو Space)
    envelope.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            runOpenSequence();
        }
    });

    // البداية دائماً من حالة الصفر (الظرف المقفول)
    renderStage();
}

// ضف الكود ده في آخر ملف yes_script.js

const memories = document.querySelectorAll('.memory-item');

memories.forEach(item => {
    item.addEventListener('click', () => {
        // لو عايز الصورة تكبر في نص الشاشة لما تضغط عليها
        if (item.classList.contains('active-memory')) {
            item.classList.remove('active-memory');
            item.style.transform = "scale(1)";
            item.style.zIndex = "1";
        } else {
            // ريست لأي صورة تانية مفتوحة
            memories.forEach(m => {
                m.classList.remove('active-memory');
                m.style.transform = "scale(1)";
                m.style.zIndex = "1";
            });
            
            // تكبير الصورة اللي اتضغط عليها
            item.classList.add('active-memory');
            item.style.transform = "scale(1.1)"; // تكبير بنسبة 10% عشان تبان
            item.style.zIndex = "10";
        }
    });
});

function revealMemory(element) {
    if (!element.classList.contains('revealed')) {
        element.classList.add('revealed');
    }
}
