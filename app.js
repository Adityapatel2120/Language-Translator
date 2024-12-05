var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

console.log(txtInput)
var serverurl="https://api.funtranslations.com/translate/pirate.json"

function getserverurl(input){
    return serverurl + "?" + "text=" + input
}

function clickHandler(){
    var inputtxt= txtInput.value;

    fetch(getserverurl(inputtxt))
        .then(response => response.json())
        .then(json => {
            var TranslatedText=json.contents.translated;
            outputDiv.innerText=TranslatedText;
            })
};

btnTranslate.addEventListener("click",clickHandler)