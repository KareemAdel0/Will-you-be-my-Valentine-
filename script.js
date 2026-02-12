const messages = [
    "No",
    "Are you sure?",
    "Really sure?",
    "Think again",
    "No option expired",
    "Good choice babu",
    "Too late to say no",
    "Just press yes already"
];

const YES_SCALE_STEP = 0.12;
const YES_SCALE_MAX = 2.1;

let messageIndex = 0;
let yesScale = 1;
let yesBaseFontSize = null;
let yesBasePadY = null;
let yesBasePadX = null;
let noButtonFloating = false;

function moveNoButtonRandom(noButton) {
    const rect = noButton.getBoundingClientRect();
    const margin = 12;
    const maxLeft = Math.max(margin, window.innerWidth - rect.width - margin);
    const maxTop = Math.max(margin, window.innerHeight - rect.height - margin);

    const left = margin + Math.random() * (maxLeft - margin);
    const top = margin + Math.random() * (maxTop - margin);

    noButton.style.left = `${left}px`;
    noButton.style.top = `${top}px`;
}

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    if (!noButton || !yesButton) {
        return;
    }

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    if (yesBaseFontSize === null) {
        const style = window.getComputedStyle(yesButton);
        yesBaseFontSize = parseFloat(style.fontSize);
        yesBasePadY = parseFloat(style.paddingTop);
        yesBasePadX = parseFloat(style.paddingLeft);
    }

    yesScale = Math.min(yesScale + YES_SCALE_STEP, YES_SCALE_MAX);
    yesButton.style.fontSize = `${yesBaseFontSize * yesScale}px`;
    yesButton.style.padding = `${yesBasePadY * yesScale}px ${yesBasePadX * yesScale}px`;

    if (yesScale >= YES_SCALE_MAX) {
        if (!noButtonFloating) {
            noButton.classList.add("floating");
            noButtonFloating = true;
        }
        moveNoButtonRandom(noButton);
    }

    noButton.classList.remove("shake");
    void noButton.offsetWidth;
    noButton.classList.add("shake");
}

window.addEventListener("resize", () => {
    const noButton = document.querySelector(".no-button");
    if (noButtonFloating && noButton) {
        moveNoButtonRandom(noButton);
    }
});

function handleYesClick() {
    window.location.href = "yes_page.html";
}
