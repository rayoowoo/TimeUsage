import { ACTIVITIES } from './constants'
import * as Create from './create'


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
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All Activities") {
                document.querySelectorAll("#ev_activityOption").forEach(option => { option.checked = false; option.parentNode.classList.remove("selected") })
                this.selection["activities"] = ["All Activities"]
            } else {
                const all = document.querySelector("#ev_activityOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                const newArr = this.selection["activities"].filter(activity => { return activity !== "All Activities" })
                newArr.push(e.target.value);
                this.selection["activities"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            this.selection.activities = this.selection.activities.filter(select => { return select !== e.target.value })
        }
    }

    updateYears(e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All years") {
                document.querySelectorAll("#ev_yearOption").forEach(option => { option.checked = false ; option.parentNode.classList.remove("selected") })
                this.selection["years"] = ["All years"]
            } else {
                const all = document.querySelector("#ev_yearOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                const newArr = this.selection["years"].filter(year => { return year !== "All years" })
                newArr.push(e.target.value);
                this.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            this.selection['years'] = this.selection['years'].filter(select => { return select !== e.target.value })
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
            years = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = selections["years"];
        }
        this.result = {
            activities: activities,
            years: years,
            type: selections.type,
            filter: "Everyone by day"
        }
    }


    addSelectors() {
        const attach = document.querySelector("#selector")

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-everyone");

        Create.activitySelector(this.updateActivity, filter, "ev");

        Create.yearSelector(this.updateYears, filter, "ev", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);


        const typeSelector = document.createElement("select");
        filter.appendChild(typeSelector);
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


        Create.submitButton(this.handleSubmit, filter, "everyone");


        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "All persons on nonholiday weekdays or weekend days and holidays";
    }
}

export default everyoneSelectors;