document.querySelector("#id-checkbox").addEventListener("click", function(event){
    document.getElementById("resultaat").innerHTML += "Sorry!<code>preventDefault()</code> verbied u dit aan te vinken" + "<br>";
    event.preventDefault();
}, "false");