class ResidentSelector {
    constructor() {
        this.data = {};
    }

    addSelector() {
        const attach = document.querySelector("#selector");

        const header = document.createElement("h2");
        header.innerText = "First Year Medical Resident";
        attach.appendChild(header)

        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("resident-btn", "selector-btn");
        selectionButton.innerText = "First Year Medical Resident";
        selectionButton.addEventListener("click", e => {
            e.preventDefault();
            this.data = {
                "Personal care activities": 6,
                "Eating and drinking": 2,
                "Household activities": 0.5,
                "Purchasing goods and services": 0.2,
                "Caring for and helping household members": 0.1,
                "Caring for and helping nonhousehold members": 0.4,
                "Working and work-related activities": 13,
                "Educational activities": 0,
                "Organizational, civic, and religious activities": 0,
                "Leisure and sports": 0.3,
                "Telephone calls, mail, and email": 0.5,
                "Other activities": 1.0
            }
        })
    }
}

export default ResidentSelector;