const envelope = document.getElementById("envelope");

if (envelope) {
    const maxStage = 3;
    let stage = 0;

    const renderStage = () => {
        envelope.classList.remove("stage-0", "stage-1", "stage-2", "stage-3");
        envelope.classList.add(`stage-${stage}`);
        envelope.setAttribute("aria-expanded", String(stage > 0));
    };

    const advanceStage = () => {
        if (stage < maxStage) {
            stage += 1;
            renderStage();
        }
    };

    envelope.addEventListener("click", advanceStage);

    envelope.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            advanceStage();
        }
    });

    renderStage();
}
