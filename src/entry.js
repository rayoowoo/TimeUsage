import Watch from './js/watch'
import Selectors from './js/selectors'
import {employedByGender} from './assets/data/employedByGenderDataShaped'
import Utils from './js/utils'

const utils = new Utils();

const data = utils.dataFilter(["Other activities, not elsewhere classified (includes misc. travel and data codes)", 
                            "Telephone calls, mail, and e-mail (includes travel)",
                            "Leisure and sports (includes travel)",
                            "Personal care activities (includes travel)"],
                                "Men",
                                ["2013", "2014", "2015"],
                                employedByGender)



const watch = Watch(data);
const selectors = new Selectors();
selectors.addSelectors();