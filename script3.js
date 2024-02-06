function sharing() {
    var nickname = document.getElementById("nickname").value;
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);

    var ft = Math.floor(height/12);
    var inch = height%12;
    var finalHeight = ft + "' " + inch + '"';

    var weightlbs = weight *2.2;

    var share = confirm("Do you agree to share your personal information with our site?");
    if (share) {
        console.log("Name: " + nickname);
        console.log("Height: " + height);
        console.log("Weight: " + weightlbs.toFixed(1) + " lbs");
    } else {
        console.log("User does not wish to share his/her information.");
    }
}