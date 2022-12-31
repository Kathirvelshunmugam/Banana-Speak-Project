var btntranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outPut = document.querySelector("#output");

function clickHandler() {
    outPut.innerText= txtInput.value;
};

btntranslate.addEventListener("click", clickHandler);