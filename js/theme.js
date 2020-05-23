const themes = [
    {
        name: 'blue',
        icon: 'moon'
    },
    {
        name: 'black',
        icon: 'moon'
    },
    {
        name: 'white',
        icon: 'sun'
    },
    {
        name: 'pink',
        icon: 'sun'
    }
];
const default_theme = themes[0];

const button_image = document.querySelector("#theme-button").querySelector(".nav-icon");

let current_theme = themes.find(theme => theme.name === localStorage.getItem("theme")) || default_theme;
document.body.classList.toggle(current_theme.name, true);
button_image.src = `./images/nav/${current_theme.icon}.svg`;


function switch_theme() {
    const current_idx = themes.indexOf((themes.find(theme => theme === current_theme) || default_theme));
    const next_theme = themes[(current_idx + 1) % themes.length];

    document.body.classList.toggle(current_theme.name, false);
    current_theme = next_theme;
    document.body.classList.toggle(current_theme.name, true);
    button_image.src = `./images/nav/${current_theme.icon}.svg`;
    localStorage.setItem('theme', current_theme.name);
}