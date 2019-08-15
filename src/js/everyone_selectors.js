import { ACTIVITIES } from './constants'

class everyoneSelectors {
    constructor() {
        this.selection = {
            "activities": "All Activities",
            "years": "All years",
            "type": "All days"
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.result = {
            activities: ACTIVITIES,
            type: "Both",
            years: ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
        }
    }

    update(field) {
        const that = this;
        return e => {
            e.preventDefault();
            that.selection[field] = e.target.value;
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        let activities, years;

        if (selections["activities"] === "All Activities") {
            activities = ACTIVITIES;
        } else {
            activities = [selections['activities']];
        }

        if (selections.years === "All years") {
            years = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = [selections["years"]];
        }
        this.result = {
            activities: activities,
            years: years,
            type: selections.type
        }
    }


    addSelectors() {
        // you can choose one activity, or all activities.
        // one activity will just cover the whole clock with one pie. 
        // all activities will have slices.
        // you can choose between one year to all years.
        // slices
        // you can choose male, female, or both.
        // slices
        // starting with just general categories.

        const attach = document.querySelector("#selector")

        const header = document.createElement("h2");
        header.innerText = "Everyone by day";
        attach.appendChild(header)

        // const datasetSelector = document.createElement("option")

        const activitySelector = document.createElement("select");
        attach.appendChild(activitySelector);
        activitySelector.classList.add("selectors")
        const selectText = document.createTextNode("Select a category");
        activitySelector.appendChild(selectText);
        const selections = ["All Activities"].concat(ACTIVITIES);
        selections.forEach(select => {
            const activityOption = document.createElement("option");
            activityOption.value = select;
            activityOption.innerText = select;
            activitySelector.appendChild(activityOption);
        })
        activitySelector.addEventListener("change", this.update("activities"))

        const yearSelector = document.createElement("select");
        attach.appendChild(yearSelector);
        yearSelector.classList.add("selectors")
        yearSelector.appendChild(document.createTextNode("Select years"))
        const years = ["All years", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
        years.forEach(select => {
            const yearOption = document.createElement("option");
            yearOption.value = select;
            yearOption.innerText = select;
            yearSelector.appendChild(yearOption)
        })
        yearSelector.addEventListener("change", this.update("years"))


        const typeSelector = document.createElement("select");
        attach.appendChild(typeSelector);
        typeSelector.classList.add("selectors")
        typeSelector.appendChild(document.createTextNode("Select type"))
        const types = ["All days", "Nonholiday weekdays", "Weekend days and holidays"];
        types.forEach(select => {
            const typeOption = document.createElement("option");
            typeOption.value = select;
            typeOption.innerText = select;
            typeSelector.appendChild(typeOption)
        })
        typeSelector.addEventListener("change", this.update("type"))


        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("everyone-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)
    }
}

export default everyoneSelectors;