import {ACTIVITIES} from './constants'
import * as Create from './create'

class EmployedSelectors {
    constructor() {
        this.selection = {
            "activities": ["All Activities"],
            "years": ["All years"],
            "gender": "Total (men and women)"
        };
        this.updateActivity = this.updateActivity.bind(this);
        this.updateYears = this.updateYears.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateGender = this.updateGender.bind(this);
        this.result = {
            activities: ACTIVITIES,
            gender: "Total (men and women)",
            years: ["2013", "2014", "2015", "2016", "2017", "2018"],
            filter: "Employed by Gender"
        }
    }

    updateActivity(e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All Activities") {
                document.querySelectorAll("#e_activityOption").forEach (option => {option.checked = false; option.parentNode.classList.remove("selected")})
                this.selection["activities"] = ["All Activities"]
            } else {
                const all = document.querySelector("#e_activityOptionAll");
                all.checked = false;
                all.parentNode.classList.remove("selected");
                const newArr = this.selection["activities"].filter( activity => {return activity !== "All Activities"})
                newArr.push(e.target.value);
                this.selection["activities"] = newArr;
            }
        } else if (e.target.checked === false) {
            e.target.parentNode.classList.remove("selected");
            this.selection.activities = this.selection.activities.filter(select => {return select !== e.target.value})
        }
    }

    updateYears(e) {
        e.preventDefault();
        if (e.target.checked) {
            e.target.parentNode.classList.add("selected");
            if (e.target.value === "All years") {
                document.querySelectorAll("#e_yearOption").forEach(option => { option.checked = false; option.parentNode.classList.remove("selected") })
                this.selection["years"] = ["All years"]
            } else {
                const all = document.querySelector("#e_yearOptionAll");
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

        Create.activitySelector(this.updateActivity, filter, "e");

        Create.yearSelector(this.updateYears, filter, "e", ["All years", "2013", "2014", "2015", "2016", "2017", "2018"]);


        const genderSelector = document.createElement("select");
        filter.appendChild(genderSelector);
        genderSelector.classList.add("selectors")
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

        const description = document.createElement("p");
        filter.appendChild(description);
        description.classList.add("description");
        description.innerText = "Employed men and women on an average day";
    }
}

export default EmployedSelectors;