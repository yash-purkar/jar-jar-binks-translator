var userInput = document.querySelector("#input");
var btn = document.querySelector("#btn");
var output = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/gungan.json"


function getTranslationUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

const handleErr = () => {
  output.innerText = "Something went wrong with the server or Too Many Requests, Try after sometime";
}

const btnClick = () => {
  var inputText = userInput.value;
  fetch(getTranslationUrl(inputText))
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      output.innerText = jsonData.contents.translated;
    })
    .catch(handleErr);
}

btn.addEventListener("click", btnClick)
