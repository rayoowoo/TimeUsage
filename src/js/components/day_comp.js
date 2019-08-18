import * as Create from '../helpers/create'


class DayComp {
    constructor() {
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
        const years = selections.years[0] === "All years" ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
        this.result = {
            activity: this.selection.activity,
            years,
            filter: "Day Comparison (everyone)"
        }
    }

    addComp() {
        const attach = document.querySelector("#selector")
        const filter = Create.filters(attach, "day")
        Create.activitySelect(this.updateActivity.bind(this), filter);
        Create.yearSelector(filter, "d", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"], this);
        Create.submitButton(this.handleSubmit.bind(this), filter, "day");
        Create.description(filter, "Comparison of nonholiday weekdays against weekend days and holidays")
    }
}

export default DayComp