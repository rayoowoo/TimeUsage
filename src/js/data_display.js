export default (data) => {
    const display = document.querySelector("#data-display");
    const list = document.createElement("ul");
    list.classList.add("display-data")
    display.appendChild(list);

    Object.keys(data).forEach( datum => {
        const li = document.createElement("li");
        list.appendChild(li);
        const p = document.createElement("p");
        p.innerText = datum;
        li.appendChild(p);
        const span = document.createElement("span");
        span.innerText = data[datum].toFixed(2);
        li.appendChild(span);
    })


}