const envelope = document.getElementById("envelope");

if (envelope) {
    const toggleEnvelope = () => {
        envelope.classList.toggle("open");
        const isOpen = envelope.classList.contains("open");
        envelope.setAttribute("aria-expanded", String(isOpen));
    };

    envelope.addEventListener("click", toggleEnvelope);

    envelope.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            toggleEnvelope();
        }
    });
}
