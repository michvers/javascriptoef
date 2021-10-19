var alleBMW = document.querySelectorAll('.bmw'); // maakt daar een array van waar je door kan lopen mer for loop

var result = "document.querySelectorAll('bmw')";

for(var i=0;i<alleBMW.length;i++){
    result+="\n" + alleBMW[i].textContent;
}
document.getElementById("#resultaatArea").value = result;

