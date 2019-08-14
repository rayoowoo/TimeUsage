import Watch from './js/watch'
import Selectors from './js/selectors'
import DataDisplay from './js/data_display'
import {employedByGender} from './assets/data/employedByGenderDataShaped'
import Utils from './js/utils'

const utils = new Utils();

const selectors = new Selectors();
selectors.addSelectors();

const selectElement = document.querySelector("#selector button");

const { activities, gender, years } = selectors.result;
const data = utils.dataFilter(activities, gender, years, employedByGender)

Watch(data);
DataDisplay(data);

selectElement.addEventListener("click", e => {
    e.stopPropagation();
    const svg = document.querySelector("svg");
    const display = document.querySelector("#data-display ul");
    if (svg) { svg.parentNode.removeChild(svg); }
    if (display) { display.parentNode.removeChild(display); }
    const { activities, gender, years } = selectors.result;
    const data = utils.dataFilter(activities, gender, years, employedByGender)

    Watch(data);
    DataDisplay(data);
})

