var translate_btn = document.querySelector(".btn_translate");
var txtinput = document.querySelector(".userInput");
var output_JS = document.querySelector(".output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function url(input){
    return serverUrl+"?"+"text="+input;
}
function errorhandler(error){
    console.log("Error occured: ",error)
    alert("something is wrong with the server");
}

function clickhandler(){
    
    var readinput = txtinput.value;
    fetch(url(readinput))
    .then(response=>response.json())
    .then(json=> {
        var ans = json.contents.translated;
        output_JS.innerText = ans})
        .catch(errorhandler)
}

translate_btn.addEventListener("click", clickhandler);
