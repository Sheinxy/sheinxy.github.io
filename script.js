function getURLParams() {
    //Returns a dictionnary containing all the URL Parameters and their values.
    let windowLocation = window.location.href;
    let parameters = {};
    if (windowLocation.split('?').length > 1 && windowLocation.split('?')[1] != "") {
        let parametersRaw = windowLocation.split('?')[1].split('&');
        for (let parameter of parametersRaw) {
            let index = decodeURIComponent(parameter.split('=')[0]);
            let value = decodeURIComponent(parameter.split('=')[1]);
            parameters[index] = value;
        }
    }
    return parameters;
}

function getURLParam(parameter) {
    //Returns the value of a specific parameter (equivalent to getURLParams()[parameter])
    return getURLParams()[parameter];
}

function setup() {
    for (let child of document.getElementsByClassName("content")[0].children) {
        child.style.display = "none";
    }
}

function change() {
    for (let child of document.getElementsByClassName("content")[0].children) {
        child.classList.add("fadeOut");
        child.classList.remove("fadeIn");
        child.style.zIndex = "-1";
    }
}

function displayContent() {
    let content = (window.location.hash) ? (window.location.hash.replace("#", "")) : "welcome";
    let element = document.getElementById(content);
    element.style.display = "";
    element.classList.add("fadeIn");
    element.classList.remove("fadeOut");
    element.style.zIndex = "0";
}

function futureContent(idx) {
    let current = (window.location.hash) ? (window.location.hash.replace("#", "")) : "welcome";
    let next = "";
    let children = document.getElementsByClassName("content")[0].children;
    for (let i = 0; i < children.length; i++) {
        child = children[i];
        if (child.id == current) {
            next = children[(i + idx + children.length) % children.length].id;
            break;
        }
    }
    changeContent(next);
}

function changeContent(newContent) {
    window.location = `#${newContent}`;
    change();
    displayContent();
}