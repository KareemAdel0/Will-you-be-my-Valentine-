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

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    yesScale = Math.min(yesScale + 0.2, 2.8);
    yesButton.style.transform = `scale(${yesScale})`;
    yesButton.style.transformOrigin = "center";

    noButton.classList.remove("shake");
    void noButton.offsetWidth;
    noButton.classList.add("shake");
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
