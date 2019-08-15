import { ACTIVITIES } from './constants'

class DayComp {
    constructor() {
        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.selection = {
            activity: "Personal care activities",
            years: ["All years"]
        }
    }

    updateActivity(e) {
        this.selection.activity = e.target.value;
    }

    updateYears(e) {
        e.preventDefault();
        if (e.target.checked) {
            if (e.target.value === "All years") {
                document.querySelectorAll("#d_yearOption").forEach(option => { option.checked = false })
                this.selection["years"] = ["All years"]
            } else {
                document.querySelector("#d_yearOptionAll").checked = false;
                const newArr = this.selection["years"].filter(year => { return year !== "All years" })
                newArr.push(e.target.value);
                this.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            this.selection["years"] = this.selection["years"].filter(select => { return select !== e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        let years;
        if (selections.years[0] === "All years") {
            years = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
        } else {
            years = selections["years"];
        }

        this.result = {
            activity: this.selection.activity,
            years
        }
    }

    addComp() {
        const attach = document.querySelector("#selector")

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-day");

        const activitySelector = document.createElement("select");
        filter.appendChild(activitySelector);
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
        activitySelector.addEventListener("change", this.updateActivity)

        const yearSelector = document.createElement("div");
        filter.appendChild(yearSelector);
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
                yearOption.setAttribute("id", "d_yearOptionAll")
            } else {
                yearOption.setAttribute("id", "d_yearOption")
            }
            div.appendChild(yearOption);
            div.appendChild(span);
        })
        yearSelector.addEventListener("change", this.updateYears)

        const selectionButton = document.createElement("button");
        filter.appendChild(selectionButton);
        selectionButton.classList.add("day-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)

        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "Comparison of nonholiday weekdays against weekend days and holidays";
    }
}

export default DayComp