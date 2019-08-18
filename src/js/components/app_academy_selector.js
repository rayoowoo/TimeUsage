import * as Create from '../helpers/create'

class AppAcademySelector {
    constructor() {
        this.data = {};
    }

    addSelector() {
        const attach = document.querySelector("#selector");

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-app");
    
        const selectionButton = document.createElement("button");
        filter.appendChild(selectionButton);
        selectionButton.classList.add("app-academy-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", e => {
            e.preventDefault();
            this.data = {
                "Working and work-related activities": 14.8,
                "Personal care activities": 6,
                "Household activities": 1.5,
                "Eating and drinking": 1,
                "Caring for and helping nonhousehold members": 0.4,
                "Purchasing goods and services": 0.2,
                "Caring for and helping household members": 0.1,
                "Telephone calls, mail, and email": 0.1,
                "Leisure and sports": 0.1,
                "Other activities": 0.1,
                "Educational activities": 0,
                "Organizational, civic, and religious activities": 0
            }
        })

        Create.description(filter, "The typical App Academy student. Not from ATUS.")

    }
}

export default AppAcademySelector;