import * as Create from '../helpers/create'

class ResidentSelector {
    constructor() {
        this.data = {};
    }

    addSelector() {
        const attach = document.querySelector("#selector");
        const filter = Create.filters(attach, "resident")

        const selectionButton = Create.selectButton(filter, "resident");
        selectionButton.innerText = "Submit Selection";
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
        
        Create.description(filter, "A first-year medical resident at UCSF. Not from ATUS.")

        const citation = document.createElement("p");
        filter.appendChild(citation);
        citation.classList.add("citation");
        citation.innerText = "Data approximated from ";
        const a = document.createElement("a");
        a.setAttribute("href", "https://www.kevinmd.com/blog/2016/02/quantitative-analysis-first-year-internal-medicine-residency.html");
        a.innerText = "https://www.kevinmd.com/blog/2016/02/quantitative-analysis-first-year-internal-medicine-residency.html";
        a.setAttribute("target", "_blank");
        citation.appendChild(a);
    }
}

export default ResidentSelector;