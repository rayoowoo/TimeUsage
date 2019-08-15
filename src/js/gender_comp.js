import { ACTIVITIES } from './constants'
import * as Create from './create'


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

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "js-gender");
        
        Create.activitySelect(this.updateActivity, filter);

        Create.yearSelector(this.updateYears, filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);

        Create.submitButton(this.handleSubmit, filter, "gender");


        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "Comparison of employed men and women";
    }
}

export default GenderComp


// goal: {"Women": 0.5, "Men": 4.3}