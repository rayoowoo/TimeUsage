import Watch from './watch'
import CategorySelector from './category_selector'
import EmployedSelectors from './employed_selectors'
import EveryoneSelectors from './everyone_selectors'
import DataDisplay from './data_display'
import AppAcademySelector from './app_academy_selector';
import ResidentSelector from './resident_selector';
import GenderComp from './gender_comp'
import DayComp from './day_comp'
import { employedByGender } from '../assets/data/employedByGenderDataShaped'
import { everyoneByDay } from '../assets/data/everyoneByDayShaped'
import Utils from './utils'


class App {
    constructor() {
        this.draw = this.draw.bind(this);
    }

    draw(data) {
        const svg = document.querySelector("svg");
        const display = document.querySelector("#data-display ul");
        if (svg) { svg.parentNode.removeChild(svg); }
        if (display) { display.parentNode.removeChild(display); }
        Watch(data);
        DataDisplay(data);
    }

    render() {
        const utils = new Utils();

        const categorySelector = CategorySelector();

        const employedSelectors = new EmployedSelectors();
        employedSelectors.addSelectors();
        const genderComp = new GenderComp();
        genderComp.addComp();
        const everyoneSelectors = new EveryoneSelectors();
        everyoneSelectors.addSelectors();
        const dayComp = new DayComp();
        dayComp.addComp();
        const appAcademySelector = new AppAcademySelector();
        appAcademySelector.addSelector();
        const residentSelector = new ResidentSelector();
        residentSelector.addSelector();

        // selecting the Employed dataset
        const employed = document.querySelector(".employed-btn");
        const employedData = utils.employedDataFilter(employedSelectors.result.activities,
            employedSelectors.result.gender,
            employedSelectors.result.years,
            employedByGender)
        this.draw(employedData);

        employed.addEventListener("click", e => {
            e.stopPropagation();
            const employedData = utils.employedDataFilter(employedSelectors.result.activities,
                employedSelectors.result.gender,
                employedSelectors.result.years,
                employedByGender)
            this.draw(employedData);
        })

        // selecting the gender comparison
        const gender = document.querySelector(".gender-btn");
        gender.addEventListener("click", e => {
            e.stopPropagation();
            const genderData = utils.genderCompFilter(genderComp.result.activity,
                genderComp.result.years,
                employedByGender)

            this.draw(genderData)
        })

        // selecting the Everyone dataset
        const everyone = document.querySelector(".everyone-btn");
        everyone.addEventListener("click", e => {
            e.stopPropagation();
            const everyoneData = utils.everyoneDataFilter(everyoneSelectors.result.activities,
                everyoneSelectors.result.type,
                everyoneSelectors.result.years,
                everyoneByDay)
            this.draw(everyoneData);
        })

        // selecting the day comparison
        const day = document.querySelector(".day-btn");
        day.addEventListener("click", e => {
            e.stopPropagation();
            const dayData = utils.dayCompFilter(dayComp.result.activity,
                dayComp.result.years,
                everyoneByDay)
            this.draw(dayData)
        })

        // selecting the App Academy Student
        const appacademy = document.querySelector(".app-academy-btn");
        appacademy.addEventListener("click", e => {
            e.stopPropagation();
            this.draw(appAcademySelector.data)
        })

        // selecting the first year resident after medical school
        const resident = document.querySelector(".resident-btn");
        resident.addEventListener("click", e => {
            e.stopPropagation();
            this.draw(residentSelector.data)
        })
    }
}

export default App;