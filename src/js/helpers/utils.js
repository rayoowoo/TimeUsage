class Utils {
    constructor() {
        this.arraySum = this.arraySum.bind(this);
        this.arrayAverage = this.arrayAverage.bind(this);
        this.arrayMerge = this.arrayMerge.bind(this);
        this.employedDataFilter = this.employedDataFilter.bind(this);
        this.everyoneDataFilter = this.everyoneDataFilter.bind(this);
    }


    arraySum (arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    arrayAverage (arr) {
        return this.arraySum(arr) / arr.length;
    }

    arrayMerge (...arrays) {
        let final = [];
        if (arrays.every( arr => { return arr.length === arrays[0].length; }) === false) {
            console.log("The arrays are not the same length");
            return;
        }

        for (let i = 0; i < arrays[0].length; i++) {
            const subArr = [];
            arrays.forEach( arr => {
                subArr.push(arr[i]);
            })
            final.push(subArr);
        }
        return final;
    }

    employedDataFilter (activities, gender, years, data) {
        const activityFilter = [];
        activities.forEach( activity => {
            activityFilter.push(data[activity]);
        })
        const genderFilter = activityFilter.map(datum => {
            return { [datum.activity]: datum[gender] };
        })

        const finalData = genderFilter.map(datum => {
            const yearlyFilter = [];
            years.forEach( year => {
                const allYears = Object.values(datum)[0];
                yearlyFilter.push(allYears[year]);
            })
            return {[Object.keys(datum)[0]]: this.arrayAverage(yearlyFilter)};

        })

        const sorted = finalData.sort((a, b) => {
            switch (Object.values(a)[0] > Object.values(b)[0]) {
            case true:
                return -1;
            default:
                return 1;
            }
        })


        const result = {};
        sorted.forEach (datum => {
            result[Object.keys(datum)[0]] = Object.values(datum)[0]
        })

        return result;
    }

    everyoneDataFilter(activities, type, years, data) {
        const activityFilter = [];
        activities.forEach(activity => {
            activityFilter.push(data[activity]);
        })
        const typeFilter = activityFilter.map(datum => {
            return { [datum.activity]: datum[type] };
        })

        const finalData = typeFilter.map(datum => {
            const yearlyFilter = [];
            years.forEach(year => {
                const allYears = Object.values(datum)[0];
                yearlyFilter.push(allYears[year]);
            })
            return { [Object.keys(datum)[0]]: this.arrayAverage(yearlyFilter) };

        })

        const sorted = finalData.sort((a, b) => {
            switch (Object.values(a)[0] > Object.values(b)[0]) {
                case true:
                    return -1;
                default:
                    return 1;
            }
        })

        const result = {};
        sorted.forEach(datum => {
            result[Object.keys(datum)[0]] = Object.values(datum)[0]
        })

        return result;
    }

    genderCompFilter(activity, years, data) {
        const activityFilter = data[activity]
        
        const menFilter = { "Men": activityFilter["Men"] }
        const womenFilter = { "Women": activityFilter["Women"]}


        const menYearlyFilter = [];
        const allMenYears = Object.values(menFilter)[0];
        years.forEach(year => {
            menYearlyFilter.push(allMenYears[year]);
        })
        const menData = this.arrayAverage(menYearlyFilter);

        const womenYearlyFilter = [];
        const allWomenYears = Object.values(womenFilter)[0];
        years.forEach(year => {
            womenYearlyFilter.push(allWomenYears[year]);
        })
        const womenData = this.arrayAverage(womenYearlyFilter);

        if (womenData > menData) {
            return {
                "Women": womenData,
                "Men": menData
            }
        } else {
            return {
                "Men": menData,
                "Women": womenData,
            }
        };
    }

    dayCompFilter(activity, years, data) {
        const activityFilter = data[activity]

        const nonFilter = { "Nonholiday weekdays": activityFilter["Nonholiday weekdays"] }
        const holiFilter = { "Weekend days and holidays": activityFilter["Weekend days and holidays"] }

        const nonYearlyFilter = [];
        const allNonYears = Object.values(nonFilter)[0];
        years.forEach(year => {
            nonYearlyFilter.push(allNonYears[year]);
        })
        const nonData = this.arrayAverage(nonYearlyFilter);

        const holiYearlyFilter = [];
        const allHoliYears = Object.values(holiFilter)[0];
        years.forEach(year => {
            holiYearlyFilter.push(allHoliYears[year]);
        })
        const holiData = this.arrayAverage(holiYearlyFilter);

        if (holiData > nonData) {
            return {
                "Weekend days and holidays": holiData,
                "Nonholiday weekdays": nonData
            }
        } else {
            return {
                "Nonholiday weekdays": nonData,
                "Weekend days and holidays": holiData
            }
            
        };
    }

    nextStep(option, className, next, nextClass, nextComponent, prevComponent) {
        return e => {
            e.preventDefault();
            const closeModal = document.querySelector(`.${option}`);
            closeModal.classList.remove(className);
            if (next) {
                const nextItem = document.querySelector(`.${next}`);
                nextItem.classList.add(nextClass)
            }
            if (nextComponent) {
                const nextComp = document.querySelectorAll(`${nextComponent}`);
                nextComp.forEach(el => el.classList.add("component-display"))
            }
            if (prevComponent) {
                const prevComp = document.querySelectorAll(`${prevComponent}`);
                prevComp.forEach(el => el.classList.remove("component-display"))
            }
        }
    }

}

export default Utils;