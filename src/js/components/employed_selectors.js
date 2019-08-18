import {ACTIVITIES} from '../helpers/constants'
import * as Create from '../helpers/create'

class EmployedSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "gender": "Total (men and women)"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateGender = this.updateGender.bind(this);
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
        let activities, years;

        if (selections["activities"][0] === "All Activities") {
            activities = ACTIVITIES;
        } else {
            activities = selections['activities'];
        }

        if (selections.years[0] === "All years") {
            years = ["2013", "2014", "2015", "2016", "2017", "2018"];
        } else {
            years = selections["years"];
        }
        this.result = {
            activities: activities,
            years: years,
            gender: selections.gender,
            filter: "Employed by Gender"
        }

    }
    
    addSelectors() {
        const attach = document.querySelector("#selector");

        const filter = document.createElement("section");
        attach.appendChild(filter);
        filter.classList.add("filter", "display", "js-employed");

        Create.activitySelector(filter, "e");
        Create.yearSelector(filter, "e", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);

        const genderSelector = document.createElement("select");
        filter.appendChild(genderSelector);
        genderSelector.classList.add("selectors", "selectors-select")
        genderSelector.appendChild(document.createTextNode("Select gender"))
        const genders = ["Total (men and women)", "Women", "Men"];
        genders.forEach(select => {
            const genderOption = document.createElement("option");
            genderOption.value = select;
            genderOption.innerText = select;
            genderSelector.appendChild(genderOption)
        })
        genderSelector.addEventListener("change", this.updateGender)

        Create.submitButton(this.handleSubmit, filter, "employed");
        Create.description(filter, "Employed men and women on an average day")

    }
}

export default EmployedSelectors;