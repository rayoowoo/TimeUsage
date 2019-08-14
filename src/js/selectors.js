class Selectors {
    constructor() {
        this.selection = {
            "activities": "All Activities",
            "years": "All years",
            "gender": "Total"
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.result = {
            activities: [
                "Personal care activities",
                "Eating and drinking",
                "Household activities",
                "Purchasing goods and services",
                "Caring for and helping household members",
                "Caring for and helping nonhousehold members",
                "Working and work-related activities",
                "Educational activities",
                "Organizational, civic, and religious activities",
                "Leisure and sports",
                "Telephone calls, mail, and email",
                "Other activities"
            ],
            gender: "Total",
            years: ["2013", "2014", "2015", "2016", "2017", "2018"]
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
            activities = [
                "Personal care activities",
                "Eating and drinking",
                "Household activities",
                "Purchasing goods and services",
                "Caring for and helping household members",
                "Caring for and helping nonhousehold members",
                "Working and work-related activities",
                "Educational activities",
                "Organizational, civic, and religious activities",
                "Leisure and sports",
                "Telephone calls, mail, and email",
                "Other activities"
            ];
        } else {
            activities = [selections['activities']];
        }

        if (selections.years === "All years") {
            years = ["2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = [selections["years"]];
        }
        this.result = {
            activities: activities,
            years: years,
            gender: selections.gender
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
            // then you can choose a category detail.

        const attach = document.querySelector("#selector")

        // const datasetSelector = document.createElement("option")

        const activitySelector = document.createElement("select");
        attach.appendChild(activitySelector);
        activitySelector.classList.add("selectors")
        const selectText = document.createTextNode("Select a category");
        activitySelector.appendChild(selectText);
        const selections = ["All Activities",
                            "Personal care activities",
                            "Eating and drinking", 
                            "Household activities",
                            "Purchasing goods and services",
                            "Caring for and helping household members",
                            "Caring for and helping nonhousehold members",
                            "Working and work-related activities",
                            "Educational activities",
                            "Organizational, civic, and religious activities",
                            "Leisure and sports",
                            "Telephone calls, mail, and email",
                            "Other activities"];
        selections.forEach( select => {
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
        const years = ["All years", "2013", "2014", "2015", "2016", "2017", "2018"];
        years.forEach( select => {
            const yearOption = document.createElement("option");
            yearOption.value = select;
            yearOption.innerText = select;
            yearSelector.appendChild(yearOption)
        })
        yearSelector.addEventListener("change", this.update("years"))


        const genderSelector = document.createElement("select");
        attach.appendChild(genderSelector);
        genderSelector.classList.add("selectors")
        genderSelector.appendChild(document.createTextNode("Select gender"))
        const genders = ["Total", "Women", "Men"];
        genders.forEach(select => {
            const genderOption = document.createElement("option");
            genderOption.value = select;
            genderOption.innerText = select;
            genderSelector.appendChild(genderOption)
        })
        genderSelector.addEventListener("change", this.update("gender"))


        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)
    }
}

export default Selectors;