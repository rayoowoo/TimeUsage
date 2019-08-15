class ResidentSelector {
    constructor() {
        this.data = {};
    }

    addSelector() {
        const attach = document.querySelector("#selector");

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-resident");

        const selectionButton = document.createElement("button");
        filter.appendChild(selectionButton);
        selectionButton.classList.add("resident-btn", "selector-btn");
        selectionButton.innerText = "First Year Medical Resident";
        selectionButton.addEventListener("click", e => {
            e.preventDefault();
            this.data = {
                "Working and work-related activities": 13,
                "Personal care activities": 6,
                "Household activities": 1.5,
                "Eating and drinking": 1.0,
                "Caring for and helping household members": 1.0,
                "Telephone calls, mail, and email": 0.5,
                "Caring for and helping nonhousehold members": 0.4,
                "Leisure and sports": 0.3,
                "Purchasing goods and services": 0.2,
                "Other activities": 0.1,
                "Organizational, civic, and religious activities": 0,
                "Educational activities": 0,
            }
        })

        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "A first-year medical resident at UCSF";

        const citation = document.createElement("p");
        filter.appendChild(citation);
        citation.classList.add("citation");
        citation.innerText = "Data approximated from https://www.kevinmd.com/blog/2016/02/quantitative-analysis-first-year-internal-medicine-residency.html";
    }
}

export default ResidentSelector;