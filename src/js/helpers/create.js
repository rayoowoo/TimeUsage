import {ACTIVITIES} from './constants'
import * as Update from './update'


export const activitySelector = (filter, prefix, that) => {
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
    activitySelector.addEventListener("change", Update.activity(prefix, that));
}

export const yearSelector = (filter, prefix, years, that) => {
    const yearSelector = document.createElement("div");
    filter.appendChild(yearSelector);
    yearSelector.classList.add("selectors", "year-selector")
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
    yearSelector.addEventListener("change", Update.years(prefix, that))
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
    activitySelector.classList.add("selectors", "selectors-select")

    const selections = ACTIVITIES;
    selections.forEach(select => {
        const activityOption = document.createElement("option");
        activityOption.value = select;
        activityOption.innerText = select;
        activitySelector.appendChild(activityOption);
    })
    activitySelector.addEventListener("change", updateActivity)
}

export const drawHands = () => {
    const old = document.querySelectorAll('[class*="clock-hands"]');
    old.forEach(el => {el.parentNode.removeChild(el)})

    const hands = document.querySelector("#hands");
    const minutes = document.createElement("div");
    minutes.classList.add("clock-hands");
    hands.appendChild(minutes);

    const hours = document.createElement("div");
    hours.classList.add("clock-hands-hour");
    hands.appendChild(hours);
}

export const darkModeBtn = (draw, data, params) => {
    const old = document.querySelector(".dark-btn");
    if (old) {
        old.parentNode.removeChild(old);
    }
    let text = "Dark Mode";
    const page = document.querySelector("html");
    if (page.classList.contains("theme-dark")) {
        text = "Light Mode";
    }

    const btn = document.createElement("div");
    btn.classList.add("dark-btn");
    btn.innerText = text;
    const footer = document.querySelector(".footer");
    footer.appendChild(btn);

    btn.addEventListener('click', e => {
        e.preventDefault();
        const html = document.querySelector("html");
        html.classList.toggle("theme-dark");
        html.classList.toggle("theme-light");
        draw(data, params);
    })
}

export const steps = (blur, order, stepText, buttonText, triangleDirection) => {
    const step = document.createElement("section");
    blur.appendChild(step);
    step.classList.add("walkthrough-step", `walkthrough-step-${order}`);
    step.innerText = stepText;

    const button = document.createElement("div");
    step.appendChild(button);
    button.classList.add("walkthrough-step-button");
    button.innerText = buttonText;

    if (order === "third") {
        const triangleA = document.createElement("div");
        triangleA.classList.add("right-triangle", "walkthrough-third-triangle-a");
        step.appendChild(triangleA);

        const triangleB = document.createElement("div");
        triangleB.classList.add("up-triangle", "walkthrough-third-triangle-b");
        step.appendChild(triangleB);
    } else {
        const triangle = document.createElement("div");
        triangle.classList.add(`${triangleDirection}-triangle`, `walkthrough-${order}-triangle`);
        step.appendChild(triangle);
    }
    return button;
}

export const description = (filter, words) => {
    const description = document.createElement("p");
    filter.appendChild(description);
    description.classList.add("description");
    description.innerText = words;
}

export const filters = (attach, category) => {
    const filter = document.createElement("section");
    attach.appendChild(filter);
    filter.classList.add("filter", `js-${category}`);
    if (category === "employed") {
        filter.classList.add("display");
    }
    return filter;
}

export const otherSelector = (filter, category, options, update) => {
    const selector = document.createElement("select");
    filter.appendChild(selector);
    selector.classList.add("selectors", "selectors-select")
    selector.appendChild(document.createTextNode(`Select ${category}`))
    options.forEach(select => {
        const option = document.createElement("option");
        option.value = select;
        option.innerText = select;
        selector.appendChild(option)
    })
    selector.addEventListener("change", update) 
}

export const selectButton = (filter, category) => {
    const button = document.createElement("button");
    filter.appendChild(button);
    button.classList.add(`${category}-btn`, "selector-btn");
    button.innerText = "Submit Selection";
    return button;
}