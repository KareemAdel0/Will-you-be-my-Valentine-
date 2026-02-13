const envelope = document.getElementById("envelope");

if (envelope) {
    let stage = 0;
    let isAnimating = false;
    let timers = [];

    const renderStage = () => {
        envelope.classList.remove("stage-0", "stage-1", "stage-2", "stage-3");
        envelope.classList.add(`stage-${stage}`);
        envelope.setAttribute("aria-expanded", String(stage > 0));
    };

    const clearTimers = () => {
        timers.forEach((id) => clearTimeout(id));
        timers = [];
    };

    const runOpenSequence = () => {
        if (isAnimating || stage === 3) return;

        isAnimating = true;
        stage = 1;
        renderStage();

        timers.push(
            setTimeout(() => {
                stage = 2;
                renderStage();
            }, 320)
        );

        timers.push(
            setTimeout(() => {
                stage = 3;
                renderStage();
                isAnimating = false;
            }, 700)
        );
    };

    envelope.addEventListener("click", runOpenSequence);

    envelope.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            runOpenSequence();
        }
    });

    window.addEventListener("beforeunload", clearTimers);

    renderStage();
}
