import {alpha} from '../helpers/constants'

export default (data, params) => {
    const display = document.querySelector("#data-display");
    const list = document.createElement("ul");
    list.classList.add("display-data")
    display.appendChild(list);

    const paramDisplay = document.createElement("li");
    paramDisplay.classList.add("params");
    list.appendChild(paramDisplay);
    Object.keys(params).sort().forEach(el => {
        const p = document.createElement("p")
        paramDisplay.appendChild(p);
        const category = document.createElement("div");
        category.innerText = `${el.toUpperCase()}:`
        const param = document.createElement("div");
        param.innerText = typeof params[el] === "object" ? params[el].join(", ") : params[el];
        p.appendChild(category);
        p.appendChild(param);
    })

    Object.keys(data).forEach( (datum, i) => {
        const li = document.createElement("li");
        list.appendChild(li);
        const p = document.createElement("p");
        p.innerText = datum;
        li.setAttribute("id", alpha[i])
        li.classList.add("display-list-items")
        li.appendChild(p);
        const span = document.createElement("span");
        span.innerText = data[datum].toFixed(2);
        li.appendChild(span);
        const arc = document.querySelector(`.${alpha[i]}`);
        li.addEventListener("mouseover", e => {
            arc.classList.add("arc-display");
        })
        li.addEventListener("mouseout", e => {
            arc.classList.remove("arc-display");
        })
    })


}