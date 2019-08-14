class Utils {
    constructor() {
        this.arraySum = this.arraySum.bind(this);
        this.arrayAverage = this.arrayAverage.bind(this);
        this.arrayMerge = this.arrayMerge.bind(this);
        this.dataFilter = this.dataFilter.bind(this);
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
        if (arrays.every( arr => {
            return arr.length === arrays[0].length;
        }) === false) {
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

    dataFilter (activities, gender, years, data) {
        const activityFilter = [];
        activities.forEach( activity => {
            activityFilter.push(data[activity]);
        }
        )
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
        
        const result = {};
        finalData.forEach (datum => {
            result[Object.keys(datum)[0]] = Object.values(datum)[0]
        })

        return result;
    }
}

export default Utils;

// dataFilter(["Other activities, not elsewhere classified (includes misc. travel and data codes)", "Telephone calls, mail, and e-mail (includes travel)"],
// ...             "Total",
// ...["2013", "2014"],
// ...employedByGender)
