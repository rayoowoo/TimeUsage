import * as Create from '../helpers/create'


class DayComp {
    constructor() {
        this.updateActivity = this.updateActivity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
            years = ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]
        } else {
            years = selections["years"];
        }

        this.result = {
            activity: this.selection.activity,
            years,
            filter: "Day Comparison (everyone)"
        }
    }

    addComp() {
        const attach = document.querySelector("#selector")

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-day");

        Create.activitySelect(this.updateActivity, filter);
        Create.yearSelector(filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);
        Create.submitButton(this.handleSubmit, filter, "day");

        Create.description(filter, "Comparison of nonholiday weekdays against weekend days and holidays")
        
    }
}

export default DayComp