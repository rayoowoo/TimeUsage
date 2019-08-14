class Selectors {
    constructor() {
        this.selection = {
            activity: "All Activities",
            years: "All years",
            gender: "Total"
        };
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

        const activitySelector = document.createElement("select");
        attach.appendChild(activitySelector);
        activitySelector.classList.add("selectors")
        const selectText = document.createTextNode("Select a category");
        activitySelector.appendChild(selectText);
        const selections = ["All Activities", "Personal care activities", "Eating and drinking", 
                            "Household activities", "Purchasing goods and services",
                            "Caring for and helping household members", "Caring for and helping nonhousehold members",
                            "Working and work-related activities", "Educational activities", "Organizational, civic, and religious activities",
                            "Leisure and sports", "Telephone calls, mail, and email", "Other activities"];
        selections.forEach( select => {
            const activityOption = document.createElement("option");
            activityOption.value = select;
            activityOption.innerText = select;
            activitySelector.appendChild(activityOption);
        })

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

        const genderSelector = document.createElement("select");
        attach.appendChild(genderSelector);
        genderSelector.classList.add("selectors")
        genderSelector.appendChild(document.createTextNode("Select gender"))
        const genders = ["Total", "Female", "Male"];
        genders.forEach(select => {
            const genderOption = document.createElement("option");
            genderOption.value = select;
            genderOption.innerText = select;
            genderSelector.appendChild(genderOption)
        })
    }
}

export default Selectors;