const toggleBtn = document.getElementById("toggle-note");
const secretNote = document.getElementById("secret-note");

if (toggleBtn && secretNote) {
    toggleBtn.addEventListener("click", () => {
        const isHidden = secretNote.hasAttribute("hidden");

        if (isHidden) {
            secretNote.removeAttribute("hidden");
            toggleBtn.textContent = "Hide note";
            return;
        }

        secretNote.setAttribute("hidden", "");
        toggleBtn.textContent = "Open note";
    });
}
