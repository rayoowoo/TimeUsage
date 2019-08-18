export const activity = prefix => e => {
    e.preventDefault();
    if (e.target.checked) {
        e.target.parentNode.classList.add("selected");
        if (e.target.value === "All Activities") {
            document.querySelectorAll(`#${prefix}_activityOption`).forEach(option => { option.checked = false; option.parentNode.classList.remove("selected") })
            this.selection["activities"] = ["All Activities"]
        } else {
            const all = document.querySelector(`#${prefix}_activityOptionAll`);
            all.checked = false;
            all.parentNode.classList.remove("selected");
            const newArr = this.selection["activities"].filter(activity => { return activity !== "All Activities" })
            newArr.push(e.target.value);
            this.selection["activities"] = newArr;
        }
    } else if (e.target.checked === false) {
        e.target.parentNode.classList.remove("selected");
        this.selection.activities = this.selection.activities.filter(select => { return select !== e.target.value })
    }
}

export const years = prefix => e => {
    e.preventDefault();
    if (e.target.checked) {
        e.target.parentNode.classList.add("selected");
        if (e.target.value === "All years") {
            document.querySelectorAll(`#${prefix}_yearOption`).forEach(option => { option.checked = false; option.parentNode.classList.remove("selected") })
            this.selection["years"] = ["All years"]
        } else {
            const all = document.querySelector(`#${prefix}_yearOptionAll`);
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