import { ACTIVITIES } from './constants'
import * as Create from './create'


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
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All years") {
                document.querySelectorAll("#d_yearOption").forEach(option => { option.checked = false; option.parentNode.classList.remove("selected") })
                this.selection["years"] = ["All years"]
            } else {
                const all = document.querySelector("#d_yearOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                const newArr = this.selection["years"].filter(year => { return year !== "All years" })
                newArr.push(e.target.value);
                this.selection["years"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            this.selection["years"] = this.selection["years"].filter(select => { return select !== e.target.value })
        }
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

        Create.yearSelector(this.updateYears, filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

        Create.submitButton(this.handleSubmit, filter, "day");

        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "Comparison of nonholiday weekdays against weekend days and holidays";
    }
}

export default DayComp