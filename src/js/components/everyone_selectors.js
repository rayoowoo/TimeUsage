import { ACTIVITIES } from '../helpers/constants'
import * as Create from '../helpers/create'


class everyoneSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "type": "All days"
        };
        this.updateType = this.updateType.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        Create.activitySelector(filter, "ev");
        Create.yearSelector(filter, "ev", ["All years", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018"]);

        const typeSelector = document.createElement("select");
        filter.appendChild(typeSelector);
        typeSelector.classList.add("selectors", "selectors-select")
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
        Create.description(filter, "All persons on nonholiday weekdays or weekend days and holidays")
    }
}

export default everyoneSelectors;