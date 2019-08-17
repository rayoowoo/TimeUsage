export default () => {
    const attach = document.querySelector("#selector");

    const categorySelector = document.createElement("select");
    categorySelector.classList.add("category-filter");
    attach.appendChild(categorySelector);

    const categories = ["Employed by Gender",
                        "Gender Comparison (employed)",
                        "Everyone by Day",
                        "Day Comparison (everyone)",
                        "App Academy Student",
                        "First Year Medical Resident"]

    categories.forEach( option => {
        const categoryOption = document.createElement("option");
        categoryOption.classList.add("option")
        categoryOption.value = option;
        categoryOption.innerText = option;
        categorySelector.appendChild(categoryOption);
    })

    categorySelector.addEventListener("change", e => {
        e.preventDefault();
        const selectors = document.querySelectorAll('[class*="js-"]')
        selectors.forEach(selector => selector.classList.remove("display"));
        switch (e.target.value) {
            case "Employed by Gender":
                const employed = document.querySelector(".js-employed");
                employed.classList.add("display");
                break;
            case "Gender Comparison (employed)":
                const gender = document.querySelector(".js-gender");
                gender.classList.add("display");
                break;
            case "Everyone by Day":
                const everyone = document.querySelector(".js-everyone");
                everyone.classList.add("display");
                break;
            case "Day Comparison (everyone)":
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