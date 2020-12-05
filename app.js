var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputText = document.querySelector("#output-text");
var serverURL = "https://api.funtranslations.com/translate/groot.json";


function getTranslationURL(text){
    return serverURL+"?"+"text="+text;
}
function errorHandler(error){
    console.log("error occurred", error);
}
btnTranslate.addEventListener("click",async ()=>{
    try{

        var inputText = textInput.value;
        var response = await fetch(getTranslationURL(inputText));
        response = await response.json()
        // console.log(response);
        outputText.innerText = response.contents.translated;
    }catch(error){
        errorHandler(error);
    }
});

