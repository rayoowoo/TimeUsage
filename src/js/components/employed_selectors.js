import {ACTIVITIES} from '../helpers/constants'
import * as Create from '../helpers/create'

class EmployedSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "gender": "Total (men and women)"
        };
        this.result = {
            activities: ACTIVITIES,
            gender: "Total (men and women)",
            years: ["2013", "2014", "2015", "2016", "2017", "2018"],
            filter: "Employed by Gender"
        }
    }

    updateGender(e) {
        e.preventDefault();
        this.selection["gender"] = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        const activities = selections["activities"][0] === "All Activities" ? ACTIVITIES : selections['activities'];
        const years = selections.years[0] === "All years" ? ["2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"]
        this.result = {
            activities: activities,
            years: years,
            gender: selections.gender,
            filter: "Employed by Gender"
        }
    }
    
    addSelectors() {
        const attach = document.querySelector("#selector");
        const filter = Create.filters(attach, "employed")
        Create.activitySelector(filter, "e", this);
        Create.yearSelector(filter, "e", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"], this);
        Create.otherSelector(filter, "gender", ["Total (men and women)", "Women", "Men"], this.updateGender.bind(this))
        Create.submitButton(this.handleSubmit.bind(this), filter, "employed");
        Create.description(filter, "Employed men and women on an average day")
    }
}

export default EmployedSelectors;