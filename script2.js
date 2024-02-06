function greeting(){
    var firstname=document.getElementById("firstname").value;
var lastname = document.getElementById("lastname").value;
var birthYear = document.getElementById("birthYear").value;

var currentYear = new Date().getFullYear();
var age = currentYear - parseInt(birthYear);

alert("Hello " + firstname + " " + lastname + "! " + "How does it feel to be " + age + " years old?");
}
