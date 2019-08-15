import { ACTIVITIES } from './constants'

class GenderComp {
    constructor() {
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.updateActivity = this.updateActivity.bind(this);
        this.selection = {
            activity: "Personal care activities",
            years: ["All years"]
        }
    }

    updateActivity(e) {
        this.selection.activity = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        let years;
        if (selections.years[0] === "All years") {
            years = ["2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = selections["years"];
        }
        this.result = {
            activity: this.selection.activity,
            years
        }
    }

    updateYears(e) {
        e.preventDefault();
        if (e.target.checked) {
            if (e.target.value === "All years") {
                document.querySelectorAll("#g_yearOption").forEach(option => { option.checked = false })
                this.selection["years"] = ["All years"]
            } else {
                document.querySelector("#g_yearOptionAll").checked = false;
                const newArr = this.selection["years"].filter(year => { return year !== "All years" })
                newArr.push(e.target.value);
                this.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            this.selection["years"] = this.selection["years"].filter(select => { return select !== e.target.value })
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
        activitySelector.addEventListener("change", this.updateActivity)

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
                yearOption.setAttribute("id", "g_yearOptionAll")
            } else {
                yearOption.setAttribute("id", "g_yearOption")
            }
            div.appendChild(yearOption);
            div.appendChild(span);
        })
        yearSelector.addEventListener("change", this.updateYears)

        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("gender-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)
    }
}

export default GenderComp


// goal: {"Women": 0.5, "Men": 4.3}