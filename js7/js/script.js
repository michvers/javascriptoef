/*var source = document.getElementsByClassName("source");
var source = document.querySelectorAll("#source");*/

var source = document.getElementById("source");
var innerHTMLOutput = document.getElementById("innerHtml");
var textContentOutput = document.getElementById("textContentOutput");
var innerTextOutput = document.getElementById("innerTextOutput");

innerHTMLOutput.value = source.innerHTML;
textContentOutput.value = source.textContent;
innerTextOutput.value = source.innerText;
