'use strict';

window.onload = () => {
    setTimeout(setAllFields, 2800);
};

async function getLoadNumber(loadNumberElement) {

    let loadNumber = loadNumberElement.textContent;

    loadNumber = await loadNumber.substring(loadNumber.indexOf("#") + 1);

    return loadNumber;
}

async function copyLoadNumberToClipboard(loadNumberElement) {

    let loadNumber = await getLoadNumber(loadNumberElement);

    navigator.clipboard.writeText(loadNumber);

}

function makeCopyLoadNumberButton() {
    let button = document.createElement("BUTTON");
    let buttonCaption = document.createTextNode("COPY LOAD # ");

    button.id = "customCopyButton";
    button.style = "margin-right: 10px;";

    button.appendChild(buttonCaption);

    return button;
}

async function addCopyLoadNumberButton() {

    let button = await makeCopyLoadNumberButton();

    let loadNumberElement = await document.getElementsByClassName("load-block-info");
    loadNumberElement = await loadNumberElement[0].querySelector("h2");

    loadNumberElement.after(button);

    button.onclick = () => {
        copyLoadNumberToClipboard(loadNumberElement);
        let copied = document.createElement("p");
        copied.innerText = "copied";
        copied.style = "font-weight: bold";
        button.after(copied);

        setTimeout(() => {
            copied.remove();
        }, 4000);
    };

}


async function setCurrencyField() {

    let container = document.getElementsByClassName("styles_select_component__10SHU__control css-yk16xz-control")[1];
    let valueContainer = container.getElementsByClassName("styles_select_component__10SHU__value-container css-1hwfws3")[0];

    // valueContainer.className = "styles_select_component__10SHU__value-container styles_select_component__10SHU__value-container--has-value css-1hwfws3";
    valueContainer.removeChild(valueContainer.firstChild);

    let singleValue = document.createElement("div");
    singleValue.className = "styles_select_component__10SHU__single-value css-1uccc91-singleValue";

    let valueSpanContainer = document.createElement("span");

    let innerSpan1 = document.createElement("span");
    innerSpan1.className = "currencySelect_currency__mark__1sR2Y";
    innerSpan1.textContent = "$";

    let innerSpan2 = document.createElement("span");
    innerSpan2.className = "currencySelect_currency__values__3XYtb";
    innerSpan2.textContent = "USD";

    let text = document.createTextNode("United States Dollar");

    valueSpanContainer.appendChild(innerSpan1);
    valueSpanContainer.appendChild(text);
    valueSpanContainer.appendChild(innerSpan2);

    singleValue.appendChild(valueSpanContainer);

    // valueContainer.appendChild(value);

    // valueContainer.dispatchEvent(new Event("change", { bubbles: true }));
    // valueContainer.dispatchEvent(new Event("blur", { bubbles: true }));

    valueContainer.focus();

    // document.execCommand("insertText", false, "$ United States Dollar USD");
    document.execCommand("insertHTML", false, singleValue.innerHTML);

    let inputContainer = valueContainer.getElementsByClassName("styles_select_component__10SHU__input")[0];
    let inputElement = inputContainer.getElementsByTagName('input')[0];
    // inputElement.style = "box-sizing: content-box; width: 2px; background: 0px center; border: 0px; font-size: inherit; opacity: 0; outline: 0px; padding: 0px; color: inherit;";

    // inputElement.value = "$ United States Dollar USD";
    // inputElement.dispatchEvent(new Event("change", { bubbles: true }));
    // inputElement.dispatchEvent(new Event("blur", { bubbles: true }));

    // inputElement.focus();
    //
    // document.execCommand("insertText", false, "$ United States Dollar USD");
    //

    // let buffer = container.firstChild;
    valueContainer.appendChild(valueContainer.firstChild);
    // container.removeChild(container.firstChild);

    // let indicatorsContainer = container.lastChild;
    //
    // let indicator1 = document.createElement("div");
    // indicator1.className = "styles_select_component__10SHU__indicator styles_select_component__10SHU__clear-indicator css-tlfecz-indicatorContainer";
    // indicator1.setAttribute("aria-hidden", "true");
    //
    // let svg = document.createElement("svg");
    // svg.setAttribute("height", "20");
    // svg.setAttribute("width", "20");
    // svg.setAttribute("viewBox", "0 0 20 20");
    // svg.setAttribute("aria-hidden", "true");
    // svg.setAttribute("focusable", "false");
    // svg.className = "css-19bqh2r";
    //
    // let path = document.createElement("path");
    // path.setAttribute("d", "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z");
    //
    // svg.appendChild(path);
    // indicator1.appendChild(svg);
    //
    // indicatorsContainer.lastChild.className = "styles_select_component__10SHU__indicator styles_select_component__10SHU__dropdown-indicator css-tlfecz-indicatorContainer";
    // indicatorsContainer.insertBefore(indicator1, indicatorsContainer.firstChild);


}

function cutLastWordBySlash(url) {
    return url.slice(0, url.lastIndexOf("/"));
}

function isCurrentURLMatch(url) {

    return document.URL.includes(url);
}

async function setAllFields() {

    // setCurrencyField();

    setInterval(setCopyLoadNumberButton, 1000);

}

function checkUrl() {
    return isCurrentURLMatch("https://cl.dispatchland.com/loads/view") ||
        isCurrentURLMatch("https://cl.dispatchland.com/trip-monitor/travel-order")
}

async function setCopyLoadNumberButton() {

    console.log(document.URL);

    if (!checkForButton() && checkUrl()) {
        try {
            await addCopyLoadNumberButton();
        } catch (e) {
            console.error(e);
        }
    }
}

function checkForButton() {
    return document.querySelector("#customCopyButton") !== null;
}