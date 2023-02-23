function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")){
     document.getElementById('btn').innerHTML = "Light mode";
    }
    else{
     document.getElementById('btn').innerHTML = "Dark mode";
    }
 }
 