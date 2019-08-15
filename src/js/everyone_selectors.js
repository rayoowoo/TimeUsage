import { ACTIVITIES } from './constants'

class everyoneSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "type": "All days"
        };
        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.updateType = this.updateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateActivity(e) {
        e.preventDefault();
        if (e.target.checked) {
            if (e.target.value === "All Activities") {
                document.querySelectorAll("#ev_activityOption").forEach(option => { option.checked = false })
                this.selection["activities"] = ["All Activities"]
            } else {
                document.querySelector("#ev_activityOptionAll").checked = false;
                const newArr = this.selection["activities"].filter(activity => { return activity !== "All Activities" })
                newArr.push(e.target.value);
                this.selection["activities"] = newArr;
            }
        } else if (e.target.checked === false) {
            this.selection = this.selection.filter(select => { return select !== e.target.value })
        }
    }

    updateYears(e) {
        e.preventDefault();
        if (e.target.checked) {
            if (e.target.value === "All Years") {
                document.querySelectorAll("#ev_yearOption").forEach(option => { option.checked = false })
                this.selection["years"] = ["All Years"]
            } else {
                document.querySelector("#ev_yearOptionAll").checked = false;
                const newArr = this.selection["years"].filter(year => { return year !== "All Years" })
                newArr.push(e.target.value);
                this.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            this.selection = this.selection.filter(select => { return select !== e.target.value })
        }
    }

    updateType(e) {
        e.preventDefault();
        this.selection["type"] = e.target.value;
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
            years = ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = selections["years"];
        }
        this.result = {
            activities: activities,
            years: years,
            type: selections.type
        }
    }


    addSelectors() {
        const attach = document.querySelector("#selector")

        const header = document.createElement("h2");
        header.innerText = "Everyone by day";
        attach.appendChild(header)

        const activitySelector = document.createElement("div");
        attach.appendChild(activitySelector);
        activitySelector.classList.add("selectors")
        const activityLabel = document.createElement("label");
        activityLabel.innerText = "Activities";
        activitySelector.appendChild(activityLabel)
        const activitySelections = ["All Activities"].concat(ACTIVITIES);
        activitySelections.forEach(select => {
            const div = document.createElement("div");
            activitySelector.appendChild(div);
            const span = document.createElement("span");
            span.innerText = select;
            const activityOption = document.createElement("input");
            activityOption.value = select;
            activityOption.setAttribute("type", "checkbox");
            if (select === "All Activities") {
                activityOption.checked = true;
                activityOption.setAttribute("id", "ev_activityOptionAll")
            } else {
                activityOption.setAttribute("id", "ev_activityOption")
            }
            div.appendChild(activityOption);
            div.appendChild(span);
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
                yearOption.setAttribute("id", "ev_yearOptionAll")
            } else {
                yearOption.setAttribute("id", "ev_yearOption")
            }
            div.appendChild(yearOption);
            div.appendChild(span);
        })
        yearSelector.addEventListener("change", this.updateYears)


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
        typeSelector.addEventListener("change", this.updateType)


        const selectionButton = document.createElement("button");
        attach.appendChild(selectionButton);
        selectionButton.classList.add("everyone-btn", "selector-btn");
        selectionButton.innerText = "Submit Selection";
        selectionButton.addEventListener("click", this.handleSubmit)
    }
}

export default everyoneSelectors;