const navBar = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".nav__menu");
const navItems = document.querySelectorAll(".nav__item");
const editorIllustrationImage = document.querySelector("#editor");
const laptopIllustrationImage = document.querySelector("#laptop");
let windowWidth = window.innerWidth;

updateImageSource(windowWidth);

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
});

window.addEventListener("resize", () => {
    if (windowWidth !== window.innerWidth) {
        windowWidth = window.innerWidth;
    }

    if (windowWidth > 768) {
        updateClass("remove", "active", navBar);
        updateImageSource(windowWidth)
    } else {
        updateImageSource(windowWidth)
    }
})

function updateImageSource(width) {
    const imageSources = {
        editor: {
            desktop: "images/illustration-editor-desktop.svg",
            mobile: "images/illustration-editor-mobile.svg"
        },
        laptop: {
            desktop: "images/illustration-laptop-desktop.svg",
            mobile: "images/illustration-laptop-mobile2.svg"
        }
    }

    if (width >= 768) {
        editorIllustrationImage.src = imageSources.editor.desktop;
        laptopIllustrationImage.src = imageSources.laptop.desktop;
    } else {
        editorIllustrationImage.src = imageSources.editor.mobile;
        laptopIllustrationImage.src = imageSources.laptop.mobile;
    }
}

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