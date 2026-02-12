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

let messageIndex = 0;
let yesScale = 1;
let yesBaseFontSize = null;
let yesBasePadY = null;
let yesBasePadX = null;

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

    yesScale = Math.min(yesScale + 0.12, 2.1);
    yesButton.style.fontSize = `${yesBaseFontSize * yesScale}px`;
    yesButton.style.padding = `${yesBasePadY * yesScale}px ${yesBasePadX * yesScale}px`;

    noButton.classList.remove("shake");
    void noButton.offsetWidth;
    noButton.classList.add("shake");
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
