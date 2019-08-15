import { ACTIVITIES } from './constants'

class GenderComp {
    constructor() {
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selection = {
            activity: "Personal care activities",
            years: "All years"
        }
    }

    update(field) {
        return e => {
            this.selection[field] = e.target.value;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        let years;
        if (selections.years === "All years") {
            years = ["2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = [selections["years"]];
        }

        this.result = {
            activity: this.selection.activity,
            years
        }
    }

    addComp() {
        const attach = document.querySelector("#selector")
        
        const header = document.createElement("h2");
        header.innerText = "Gender Comparison";
        attach.appendChild(header)

        const activitySelector = document.createElement("select");
        attach.appendChild(activitySelector);
        activitySelector.classList.add("selectors")
        const selectText = document.createTextNode("Select a category");
        activitySelector.appendChild(selectText);
        const selections = ACTIVITIES;
        selections.forEach(select => {
            const activityOption = document.createElement("option");
            activityOption.value = select;
            activityOption.innerText = select;
            activitySelector.appendChild(activityOption);
        })
        activitySelector.addEventListener("change", this.update("activity"))

        const yearSelector = document.createElement("select");
        attach.appendChild(yearSelector);
        yearSelector.classList.add("selectors")
        yearSelector.appendChild(document.createTextNode("Select years"))
        const years = ["All years", "2013", "2014", "2015", "2016", "2017", "2018"];
        years.forEach(select => {
            const yearOption = document.createElement("option");
            yearOption.value = select;
            yearOption.innerText = select;
            yearSelector.appendChild(yearOption)
        })
        yearSelector.addEventListener("change", this.update("years"))

        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("gender-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)
    }
}

export default GenderComp


// goal: {"Women": 0.5, "Men": 4.3}