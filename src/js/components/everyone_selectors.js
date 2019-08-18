import { ACTIVITIES } from '../helpers/constants'
import * as Create from '../helpers/create'


class everyoneSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "type": "All days"
        };
    }

    updateType(e) {
        e.preventDefault();
        this.selection["type"] = e.target.value;
    }

    handleSubmit(e) {
        e.preventDefault();
        const selections = this.selection;
        const activities = selections["activities"][0] === "All Activities" ? ACTIVITIES : selections['activities'];
        const years = selections.years[0] === "All years" ? ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"] : selections["years"]
        this.result = {
            activities: activities,
            years: years,
            type: selections.type,
            filter: "Everyone by day"
        }
    }

    addSelectors() {
        const attach = document.querySelector("#selector")
        const filter = Create.filters(attach, "everyone")
        Create.activitySelector(filter, "ev", this);
        Create.yearSelector(filter, "ev", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"], this);
        Create.otherSelector(filter, "type", ["All days", "Nonholiday weekdays", "Weekend days and holidays"], this.updateType.bind(this))
        Create.submitButton(this.handleSubmit.bind(this), filter, "everyone");
        Create.description(filter, "All persons on nonholiday weekdays or weekend days and holidays")
    }
}

export default everyoneSelectors;