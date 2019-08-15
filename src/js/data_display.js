import {COLORS} from './constants'

export default (data) => {
    const display = document.querySelector("#data-display");
    const list = document.createElement("ul");
    display.appendChild(list);

    Object.keys(data).forEach( datum => {
        const li = document.createElement("li");
        list.appendChild(li);
        const div = document.createElement("div");
        li.appendChild(div);
        div.style.backgroundColor = COLORS[datum];
        div.style.height = "10px";
        div.style.width = "10px";
        const p = document.createElement("p");
        p.innerText = datum + " - " + data[datum].toFixed(2);
        li.appendChild(p);
    })


}