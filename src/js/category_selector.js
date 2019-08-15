export default () => {
    const attach = document.querySelector("#selector");

    const categorySelector = document.createElement("select");
    categorySelector.classList.add("category-filter");
    attach.appendChild(categorySelector);

    const categories = ["Employed by Gender",
                        "Gender Comparison",
                        "Everyone by Day",
                        "Day Comparison",
                        "App Academy Student",
                        "First Year Medical Resident"]

    categories.forEach( option => {
        const categoryOption = document.createElement("option");
        categoryOption.value = option;
        categoryOption.innerText = option;
        categorySelector.appendChild(categoryOption);
    })

    categorySelector.addEventListener("change", e => {
        e.preventDefault();
        const selectors = document.querySelectorAll('[class*="js-"]')
        debugger
        selectors.forEach(selector => selector.classList.remove("display"));
        switch (e.target.value) {
            case "Employed by Gender":
                const employed = document.querySelector(".js-employed");
                employed.classList.add("display");
                break;
            case "Gender Comparison":
                const gender = document.querySelector(".js-gender");
                gender.classList.add("display");
                break;
            case "Everyone by Day":
                const everyone = document.querySelector(".js-everyone");
                everyone.classList.add("display");
                break;
            case "Day Comparison":
                const day = document.querySelector(".js-day");
                day.classList.add("display");
                break;
            case "App Academy Student":
                const app = document.querySelector(".js-app");
                app.classList.add("display");
                break;
            case "First Year Medical Resident":
                const resident = document.querySelector(".js-resident");
                resident.classList.add("display");
                break;
            default:
                break;
        }
    })

}