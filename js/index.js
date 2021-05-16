const navBar = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__item");

navToggle.addEventListener("click", () => {
    const isOpen = navBar.classList.contains("nav--active");

    if (isOpen) {
        updateClass("remove", "active", navBar);
    } else {
        updateClass("add", "active", navBar);
    }
})

navItems.forEach(item => {
    item.addEventListener("click", e => {
        const isOpen = e.target.classList.contains("nav__item--active");

        //removes active class on all items
        navItems.forEach(item => updateClass("remove", "active", item));

        if (isOpen) {
            updateClass("remove", "active", item);
        } else {
            updateClass("add", "active", item);
        }
    })
})

function updateClass(method, className, element) {
    const blockName = element.classList[0];

    switch (method) {
        case "add":
            element.classList.add(`${blockName}--${className}`);
            break;
        case "remove":
            element.classList.remove(`${blockName}--${className}`);
            break;
        default:
            break;
    }
}