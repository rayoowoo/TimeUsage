import * as Create from '../helpers/create'


class GenderComp {
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
        const years = selections.years[0] === "All years" || selections["years"][0] === undefined ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"];
        this.result = {
            activity: this.selection.activity,
            years,
            filter: "Gender Comparison (employed)"
        }
        if (selections["years"].length === 0) {
            const yearAll = document.querySelector(`#g_yearOptionAll`);
            yearAll.checked = true;
            yearAll.parentNode.classList.add("selected");
        }
    }

    addComp() {
        const attach = document.querySelector("#selector")
        const filter = Create.filters(attach, "gender")
        Create.activitySelect(this.updateActivity.bind(this), filter, this);
        Create.yearSelector(filter, "g", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"], this);
        Create.submitButton(this.handleSubmit.bind(this), filter, "gender");
        Create.description(filter, "Comparison of employed men and women")
    }
}

export default GenderComp


// goal: {"Women": 0.5, "Men": 4.3}