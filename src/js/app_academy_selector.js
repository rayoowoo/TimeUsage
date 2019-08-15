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
        selectionButton.innerText = "App Academy Student";
        selectionButton.addEventListener("click", e => {
            e.preventDefault();
            this.data = {
                "Personal care activities": 6,
                "Eating and drinking": 1,
                "Household activities": 1.5,
                "Purchasing goods and services": 0.2,
                "Caring for and helping household members": 0.1,
                "Caring for and helping nonhousehold members": 0.4,
                "Working and work-related activities": 14.8,
                "Educational activities": 0,
                "Organizational, civic, and religious activities": 0,
                "Leisure and sports": 0.1,
                "Telephone calls, mail, and email": 0.1,
                "Other activities": 0.1
            }
        })

        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "The typical App Academy student";
    }
}

export default AppAcademySelector;