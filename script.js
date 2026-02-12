(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "No",
    "Are you sure?",
    "Really sure??",
    "Too late 😘",
    "Still no?",
    "It won't work 😌",
    "Say yes, babu ❤️"
];

let messageIndex = 0;
let yesScale = 1;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    yesScale = Math.min(yesScale + 0.18, 3.5);
    yesButton.style.transform = `scale(${yesScale})`;
    yesButton.style.transformOrigin = 'center';
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
