export default () => {
    // Creating the modal
    const blur = document.createElement("div");
    blur.classList.add("blur", "modal-display");
    document.body.appendChild(blur);

    const modal = document.createElement("div");
    blur.appendChild(modal);
    modal.classList.add("modal", "modal-display");
    // modal.classList.add("modal");

    // Title
    const title = document.createElement("h1");
    title.innerText = "Time Usage";
    title.classList.add("modal-title");
    modal.appendChild(title);

    // Description
    const description = document.createElement("p");
    description.innerText = "Welcome to Time Usage, a data visualization of how Americans use their time on a given day. The data is gathered by the Bureau of Labor Statistics once a year."
    modal.appendChild(description);
    description.classList.add("modal-description");

    // Question
    const question = document.createElement("p");
    question.innerText = "Would you like a brief walkthrough?";
    modal.appendChild(question);
    question.classList.add("modal-question");

    // Buttons
    const buttons = document.createElement("section");
    buttons.classList.add("modal-buttons");
    modal.appendChild(buttons);

    const nextStep = (option, className, next, nextClass, nextComponent, prevComponent) => e => {
        e.preventDefault();
        const closeModal = document.querySelector(`.${option}`);
        closeModal.classList.remove(className);
        if (next) {
            const nextItem = document.querySelector(`.${next}`);
            nextItem.classList.add(nextClass)
        }
        if (nextComponent) {
            const nextComp = document.querySelectorAll(`${nextComponent}`);
            nextComp.forEach( el => el.classList.add("component-display"))
        }
        if (prevComponent) {
            const prevComp = document.querySelectorAll(`${prevComponent}`);
            prevComp.forEach( el => el.classList.remove("component-display"))
        }
    }
    
    // I've already used this before button. Takes them directly into the app.
    const alreadybtn = document.createElement("div");
    buttons.appendChild(alreadybtn);
    alreadybtn.innerText = "I've already used this before.";
    alreadybtn.addEventListener("click", nextStep("blur", "modal-display"));

    // Walkthrough button. It should take them through the walkthrough. 
    const yesBtn = document.createElement("div");
    buttons.appendChild(yesBtn); 
    yesBtn.innerText = "Yes, please.";
    yesBtn.addEventListener("click", e => {
        nextStep("modal", "modal-display", "walkthrough-step-first", "walkthrough-display", ".category-filter")(e);
        createExitButton();
    });

    // Exit button
    const createExitButton = () => {
        const exitButton = document.createElement("div");
        blur.appendChild(exitButton);
        exitButton.classList.add("walkthrough-step", "exit");
        exitButton.innerText = "Exit walkthrough";
        exitButton.addEventListener("click", nextStep("blur", "modal-display", "exit", "walkthrough-display", null, "*"))
    }


    // Walkthrough
    // FIRST
    const firstStep = document.createElement("section");
    blur.appendChild(firstStep);
    firstStep.classList.add("walkthrough-step", "walkthrough-step-first");
    firstStep.innerText = "Start by how you want to filter the data. Select a general category. Note that App Academy Student and First Year Medical Resident are not from the American Time Usage Survey."

    const firstButton = document.createElement("div");
    firstStep.appendChild(firstButton);
    firstButton.classList.add("walkthrough-step-button");
    firstButton.innerText = "Got it";
    firstButton.addEventListener("click", nextStep("walkthrough-step-first", "walkthrough-display", "walkthrough-step-second", "walkthrough-display", ".selectors", ".category-filter"))

    const firstTriangle = document.createElement("div");
    firstTriangle.classList.add("left-triangle", "walkthrough-first-triangle");
    firstStep.appendChild(firstTriangle);

    // SECOND
    const secondStep = document.createElement("section");
    blur.appendChild(secondStep);
    secondStep.classList.add("walkthrough-step", "walkthrough-step-second");
    secondStep.innerText = 'Select your parameters. App Academy Student and First Year Medical Resident have no parameters. Then click "Submit Selection."'

    const secondButton = document.createElement("div");
    secondStep.appendChild(secondButton);
    secondButton.classList.add("walkthrough-step-button");
    secondButton.innerText = "Great";
    secondButton.addEventListener("click", nextStep("walkthrough-step-second", "walkthrough-display", "walkthrough-step-third", "walkthrough-display", "#c",".selectors"))

    const secondTriangle = document.createElement("div");
    secondTriangle.classList.add("left-triangle", "walkthrough-second-triangle");
    secondStep.appendChild(secondTriangle);

    // THIRD
    const thirdStep = document.createElement("section");
    blur.appendChild(thirdStep);
    thirdStep.classList.add("walkthrough-step", "walkthrough-step-third");
    thirdStep.innerText = 'As you hover over the slices of the graph, the corresponding data will light up, and vice versa. Note that these slices are technically proportions, and not strictly out of 24 hours. It depends on the parameters.'

    const thirdButton = document.createElement("div");
    thirdStep.appendChild(thirdButton);
    thirdButton.classList.add("walkthrough-step-button");
    thirdButton.innerText = "Awesome";
    thirdButton.addEventListener("click", nextStep("walkthrough-step-third", "walkthrough-display", "walkthrough-step-fourth", "walkthrough-display", ".dark-btn", "#c"))

    const thirdTriangleA = document.createElement("div");
    thirdTriangleA.classList.add("right-triangle", "walkthrough-third-triangle-a");
    thirdStep.appendChild(thirdTriangleA);

    const thirdTriangleB = document.createElement("div");
    thirdTriangleB.classList.add("up-triangle", "walkthrough-third-triangle-b");
    thirdStep.appendChild(thirdTriangleB);

    // FOURTH
    const fourthStep = document.createElement("section");
    blur.appendChild(fourthStep);
    fourthStep.classList.add("walkthrough-step", "walkthrough-step-fourth");
    fourthStep.innerText = "There's a dark mode if needed."

    const fourthButton = document.createElement("div");
    fourthStep.appendChild(fourthButton);
    fourthButton.classList.add("walkthrough-step-button");
    fourthButton.innerText = "I'm ready";
    fourthButton.addEventListener("click", nextStep("blur", "modal-display", null, null, null, ".dark-btn"))

    const fourthTriangle = document.createElement("div");
    fourthTriangle.classList.add("down-triangle", "walkthrough-fourth-triangle");
    fourthStep.appendChild(fourthTriangle);

}