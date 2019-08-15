import {ACTIVITIES} from './constants'

class EmployedSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "gender": "Total"
        };
        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateGender = this.updateGender.bind(this);
        this.result = {
            activities: ACTIVITIES,
            gender: "Total",
            years: ["2013", "2014", "2015", "2016", "2017", "2018"]
        }
    }

    updateActivity(e) {
        e.preventDefault();
        if (e.target.checked) {
            if (e.target.value === "All Activities") {
                document.querySelectorAll("#e_activityOption").forEach (option => {option.checked = false})
                this.selection["activities"] = ["All Activities"]
            } else {
                document.querySelector("#e_activityOptionAll").checked = false;
                const newArr = this.selection["activities"].filter( activity => {return activity !== "All Activities"})
                newArr.push(e.target.value);
                this.selection["activities"] = newArr;
            }
        } else if (e.target.checked === false) {
            this.selection = this.selection.filter(select => {return select !== e.target.value})
        }
    }

    updateYears(e) {
        e.preventDefault();
        if (e.target.checked) {
            if (e.target.value === "All years") {
                document.querySelectorAll("#e_yearOption").forEach(option => { option.checked = false })
                this.selection["years"] = ["All years"]
            } else {
                document.querySelector("#e_yearOptionAll").checked = false;
                const newArr = this.selection["years"].filter(year => { return year !== "All years" })
                newArr.push(e.target.value);
                this.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            this.selection["years"] = this.selection["years"].filter(select => { return select !== e.target.value })
        }
    }

    updateGender(e) {
        e.preventDefault();
        this.selection["gender"] = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        let activities, years;

        if (selections["activities"][0] === "All Activities") {
            activities = ACTIVITIES;
        } else {
            activities = selections['activities'];
        }

        if (selections.years[0] === "All years") {
            years = ["2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = selections["years"];
        }
        this.result = {
            activities: activities,
            years: years,
            gender: selections.gender
        }
    }
    
    
    addSelectors() {
        const attach = document.querySelector("#selector")

        const header = document.createElement("h2");
        header.innerText = "Employed by gender";
        attach.appendChild(header)

        // const activitySelector = document.createElement("select");
        // attach.appendChild(activitySelector);
        // activitySelector.classList.add("selectors")
        // const selectText = document.createTextNode("Select a category");
        // activitySelector.appendChild(selectText);
        // const selections = ["All Activities"].concat(ACTIVITIES);
        // selections.forEach( select => {
        //     const activityOption = document.createElement("option");
        //     activityOption.value = select;
        //     activityOption.innerText = select;
        //     activitySelector.appendChild(activityOption);
        // })
        // activitySelector.addEventListener("change", this.update("activities"))

        const activitySelector = document.createElement("div");
        attach.appendChild(activitySelector);
        activitySelector.classList.add("selectors")
        const activityLabel = document.createElement("label");
        activityLabel.innerText = "Activities";
        activitySelector.appendChild(activityLabel)
        const activitySelections = ["All Activities"].concat(ACTIVITIES);
        activitySelections.forEach( select => {
            const div = document.createElement("div");
            activitySelector.appendChild(div);
            const span = document.createElement("span");
            span.innerText = select;
            const activityOption = document.createElement("input");
            activityOption.value = select;
            activityOption.setAttribute("type", "checkbox");
            if (select === "All Activities") {
                activityOption.checked = true;
                activityOption.setAttribute("id", "e_activityOptionAll")
            } else {
                activityOption.setAttribute("id", "e_activityOption")
            }
            div.appendChild(activityOption);
            div.appendChild(span);
        })
        activitySelector.addEventListener("change", this.updateActivity)



        // const yearSelector = document.createElement("select");
        // attach.appendChild(yearSelector);
        // yearSelector.classList.add("selectors")
        // yearSelector.appendChild(document.createTextNode("Select years"))
        // const years = ["All years", "2013", "2014", "2015", "2016", "2017", "2018"];
        // years.forEach( select => {
        //     const yearOption = document.createElement("option");
        //     yearOption.value = select;
        //     yearOption.innerText = select;
        //     yearSelector.appendChild(yearOption)
        // })
        // yearSelector.addEventListener("change", this.updateYears)

        const yearSelector = document.createElement("div");
        attach.appendChild(yearSelector);
        yearSelector.classList.add("selectors")
        const yearsLabel = document.createElement("label");
        yearsLabel.innerText = "Years";
        yearSelector.appendChild(yearsLabel)
        const yearSelections = ["All years", "2013", "2014", "2015", "2016", "2017", "2018"];
        yearSelections.forEach(select => {
            const div = document.createElement("div");
            yearSelector.appendChild(div);
            const span = document.createElement("span");
            span.innerText = select;
            const yearOption = document.createElement("input");
            yearOption.value = select;
            yearOption.setAttribute("type", "checkbox");
            if (select === "All years") {
                yearOption.checked = true;
                yearOption.setAttribute("id", "e_yearOptionAll")
            } else {
                yearOption.setAttribute("id", "e_yearOption")
            }
            div.appendChild(yearOption);
            div.appendChild(span);
        })
        yearSelector.addEventListener("change", this.updateYears)


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
        genderSelector.addEventListener("change", this.updateGender)


        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("employed-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)
    }
}

export default EmployedSelectors;