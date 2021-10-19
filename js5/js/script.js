document.body.onload = addElement;

function addElement(){
    //een nieuw div creeeren met de property createElement
    var newDiv = document.createElement("div");
    // toevoegen van tekst aan de nieuwe div
    var newContent = document.createTextNode("Hallo, Full stack developers");
    // voeg de tekst toe aan de  nieuwe div
    newDiv.appendChild(newContent);
    // voeg de div toe aan EEN LOCATIE binnen de body tag
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}