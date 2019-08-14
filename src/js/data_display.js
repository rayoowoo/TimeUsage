export default (data) => {
    const display = document.querySelector("#data-display");
    const list = document.createElement("ul");
    display.appendChild(list);

    const COLORS = {
        "Personal care activities": "red",
        "Eating and drinking": "orange",
        "Household activities": "yellow",
        "Purchasing goods and services": "green",
        "Caring for and helping household members": "blue",
        "Caring for and helping nonhousehold members": "indigo",
        "Working and work-related activities": "violet",
        "Educational activities": "gray",
        "Organizational, civic, and religious activities": "black",
        "Leisure and sports": "cyan",
        "Telephone calls, mail, and email": "chartreuse",
        "Other activities": "magenta"
    }

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