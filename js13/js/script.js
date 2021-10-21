// vorige was hardcoded in html, voordeel van hier = onclick w geinjecteerd en hack kan niet gezien worden in html
//close btn maken en toevogen aan ieder list item
var myNodeList = document.getElementsByTagName("LI"); /*tagname elk list elem van de pagina Hoofdletters: linkt aande list elementen, haalt ze op*/
console.log(myNodeList)
var i;
for (i = 0; i < myNodeList.length; i++) { /*om nodelist te doorlopen*/
    var span = document.createElement("SPAN") /*span om een kruise toe te voegen aan elk list element apart*/
    var txt = document.createTextNode(" \u274C") /*code is het kruisje dat wordt toegevoegd text in de span*/
    span.className = "close"; /*class tovoegen aan de span*/
    span.appendChild(txt); /* text (kruisje) toevoegen aan span  */
    myNodeList[i].appendChild(span); /*zet alles naast het li element, [i] staat voor het rij per rij invoegen van de span met kruisje aan elk list elementje binnen de array myNodelist */
}
//click op de close verbergt het item!
var close = document.getElementsByClassName("close"); // in doc zoeken naar elk element met naam "close" -> alle spans zitten in var close nu!
var i;
for (i = 0; i < close.length; i++) { //elk elementje doorlopen met [i], we zitten nu met span close te werken en nu moeten we bij click de PARENT (=li) VERWIJDEREN
    close[i].onclick = function () { //wil je span 1? => close(heeft alle spans)[i] (i stelt span 0 voor,
        var div = this.parentElement;//this wijst enkel op de span (this span!) en daarvan halen we de parent op
        div.style.display = "none";
        //this.parentElement.style.display = "none" is de kortere schrijfwijze
    }
}
//een checked symbol toevoegen wanneer we clicken op een list item
var list = document.querySelector('UL'); // var list heeft nu alle uls mee met li items die erin zitten
list.addEventListener("click", function (event) { //pagina luistert naar click (= event op alle li's)
    if (event.target.tagName === "LI") { //als er dus op li elem geklikt wordt
        event.target.classList.toggle("checked"); //toggle= aan/uit: zorgt voor injectie van class checkbox toe (vinkt aan of uit)
    }
}, false); // NIET VERGETEN


let teller = 0;

// een nieuw item gaan toevoegen wnr we klikken op toevoegen (functie staat in html addnewelement)
function newElement() {
    var li = document.createElement("UL");
    var inputValue = document.getElementById("myInput").value; // value haalt de waarde uit de input NIET VERGETEN
    var t = document.createTextNode(inputValue)//  node creeren
    li.appendChild(t);//list elem en inputvalue samenvoegen
    li.className = "list-group-item";
    if (inputValue === "") {//foutopvang
        alert("vul neki iets in, muttn");
    } else {
        document.getElementById("myUL").appendChild(li); // toevoegen nwelement aan lijstje
    }
    document.getElementById("myInput").value = ""; //vakje zelf weer wissen na toevoegen van nieuwe element
    /*** KRUISJE TOEVOEGEN EN VERBERGEN WANNEER WE KLIKKEN*/
    var span = document.createElement("SPAN") /*span om een kruise toe te voegen aan elk list element apart*/
    var txt = document.createTextNode(" \u274C") /*code is het kruisje dat wordt toegevoegd text in de span*/
    span.className = "close"; /*class tovoegen aan de span*/
    span.appendChild(txt);
    li.appendChild(span)
    for (i = 0; i < close.length; i++) { //elk elementje doorlopen met [i], we zitten nu met span close te werken en nu moeten we bij click de PARENT (=li) VERWIJDEREN
        close[i].onclick = function () { //wil je span 1? => close(heeft alle spans)[i] (i stelt span 0 voor,
            var div = this.parentElement;//this wijst enkel op de span (this span!) en daarvan halen we de parent op
            div.style.display = "none";
            //this.parentElement.style.display = "none" is de kortere schrijfwijze
        }
    }
    teller++
    let aantalElementen = document.getElementById("aantal");
    aantalElementen.innerHTML = teller;


}


/** FUNCTION CLEAR BUTTON**/
function clearFunction() {
    document.getElementById("myUL").innerHTML = "";
}

/** HOVER **/
window.onload = function () {
    var hover = document.getElementById("myUL");
    hover.onmouseover = function () {
        hover.style.backgroundColor = "#FAC";
    }
}
