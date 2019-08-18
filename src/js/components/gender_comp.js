import * as Create from '../helpers/create'


class GenderComp {
    constructor() {
        this.handleSubmit = this.handleSubmit.bind(this);
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
            years,
            filter: "Gender Comparison (employed)"
        }
    }

    addComp() {
        const attach = document.querySelector("#selector")

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-gender");
        
        Create.activitySelect(this.updateActivity, filter);
        Create.yearSelector(filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);
        Create.submitButton(this.handleSubmit, filter, "gender");
        Create.description(filter, "Comparison of employed men and women")
    }
}

export default GenderComp


// goal: {"Women": 0.5, "Men": 4.3}