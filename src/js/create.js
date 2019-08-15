import {ACTIVITIES} from './constants'

export const activitySelector = (updateActivity, filter, prefix) => {
    const activitySelector = document.createElement("div");
    filter.appendChild(activitySelector);
    activitySelector.classList.add("selectors")
    const activityLabel = document.createElement("label");
    activityLabel.innerText = "Activities";
    activitySelector.appendChild(activityLabel)

    const activitySelections = ["All Activities"].concat(ACTIVITIES);
    activitySelections.forEach((select, i) => {
        const div = document.createElement("div");
        if (i === 0) { div.classList.add("selected") }
        activitySelector.appendChild(div);
        const span = document.createElement("span");
        span.innerText = select;
        const activityOption = document.createElement("input");
        activityOption.value = select;
        activityOption.setAttribute("type", "checkbox");
        if (select === "All Activities") {
            activityOption.checked = true;
            activityOption.setAttribute("id", `${prefix}_activityOptionAll`)
        } else {
            activityOption.setAttribute("id", `${prefix}_activityOption`)
        }
        div.appendChild(activityOption);
        div.appendChild(span);
    })
    activitySelector.addEventListener("change", updateActivity)
}

export const yearSelector = (updateYears, filter, prefix, years) => {
    const yearSelector = document.createElement("div");
    filter.appendChild(yearSelector);
    yearSelector.classList.add("selectors")
    const yearsLabel = document.createElement("label");
    yearsLabel.innerText = "Years";
    yearSelector.appendChild(yearsLabel)

    const yearSelections = years;
    yearSelections.forEach((select, i) => {
        const div = document.createElement("div");
        if (i === 0) { div.classList.add("selected") }
        yearSelector.appendChild(div);
        const span = document.createElement("span");
        span.innerText = select;
        const yearOption = document.createElement("input");
        yearOption.value = select;
        yearOption.setAttribute("type", "checkbox");
        if (select === "All years") {
            yearOption.checked = true;
            yearOption.setAttribute("id", `${prefix}_yearOptionAll`)
        } else {
            yearOption.setAttribute("id", `${prefix}_yearOption`)
        }
        div.appendChild(yearOption);
        div.appendChild(span);
    })
    yearSelector.addEventListener("change", updateYears)
}

export const submitButton = (handleSubmit, filter, prefix) => {
    const selectionButton = document.createElement("button");
    filter.appendChild(selectionButton);
    selectionButton.classList.add(`${prefix}-btn`, "selector-btn");
    selectionButton.innerText = "Submit Selection";
    selectionButton.addEventListener("click", handleSubmit)
}

export const activitySelect = (updateActivity, filter) => {
    const activitySelector = document.createElement("select");
    filter.appendChild(activitySelector);
    activitySelector.classList.add("selectors")

    const placeholder = document.createElement("option");
    placeholder.innerText = "Choose an activity";
    activitySelector.appendChild(placeholder);
    placeholder.setAttribute("disabled", true);


    const selections = ACTIVITIES;
    selections.forEach(select => {
        const activityOption = document.createElement("option");
        activityOption.value = select;
        activityOption.innerText = select;
        activitySelector.appendChild(activityOption);
    })
    activitySelector.addEventListener("change", updateActivity)
}