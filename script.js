var nickname="Imk";
var height="68";
var weight="63";

var ft = Math.floor(height/12);
var inch = height%12;
var finalHeight = ft + "'" + inch + '"';

var weightlbs = weight *2.2;

alert("Name: " + nickname +"\nHeight: " + finalHeight + "\nWeight: " + weightlbs.toFixed(1)+ " lbs");


