import Utils from '../helpers/utils';
import * as Create from '../helpers/create'

export default blur => {
    // Walkthrough
    const utils = new Utils();

    const exitButton = document.createElement("div");
    blur.appendChild(exitButton);
    exitButton.classList.add("walkthrough-step", "exit");
    exitButton.innerText = "Exit walkthrough";
    exitButton.addEventListener("click", utils.nextStep("blur", "modal-display", "exit", "walkthrough-display", null, "*"))

    const firstButton = Create.steps(blur, "first",
        "Start by how you want to filter the data. Select a general category. Note that App Academy Student and First Year Medical Resident are not from the American Time Usage Survey.",
        "Got it!",
        "left"
    )
    const secondButton = Create.steps(blur, "second",
        'Select your parameters. App Academy Student and First Year Medical Resident have no parameters. Then click "Submit Selection."',
        "Great!",
        "left"
    )
    const thirdButton = Create.steps(blur, "third",
        'As you hover over the slices of the graph, the corresponding data will light up, and vice versa. Note that these slices are technically proportions, and not strictly out of 24 hours. It depends on the parameters.',
        "Awesome!"
        )
    const fourthButton = Create.steps(blur, "fourth",
        "There's a dark mode if needed.",
        "I'm ready.",
        "down"
    )
    firstButton.addEventListener("click", utils.nextStep("walkthrough-step-first", "walkthrough-display", "walkthrough-step-second", "walkthrough-display", ".selectors", ".category-filter"))
    secondButton.addEventListener("click", utils.nextStep("walkthrough-step-second", "walkthrough-display", "walkthrough-step-third", "walkthrough-display", "#c", ".selectors"))
    thirdButton.addEventListener("click", utils.nextStep("walkthrough-step-third", "walkthrough-display", "walkthrough-step-fourth", "walkthrough-display", ".dark-btn", "#c"))
    fourthButton.addEventListener("click", utils.nextStep("blur", "modal-display", null, null, null, ".dark-btn"))
}