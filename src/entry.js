import Watch from './js/watch'
import Selectors from './js/selectors'
import {employedByGender} from './assets/data/employedByGenderDataShaped'



const data = {
    a: 9.1,
    b: 1.18,
    c: 1.57,
    d: 0.71,
    e: 0.57,
    f: 0.22,
    g: 4.74,
    h: 0.61,
    i: 0.25,
    j: 4.62,
    k: 0.23,
    l: 0.2
}

const genderData = Object.values(employedByGender).map( datum => {return datum})

const watch = Watch(menData);
const selectors = new Selectors();
selectors.addSelectors();