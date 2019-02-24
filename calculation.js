function myFunction() {
var x = document.getElementById("length").value;
var y = document.getElementById("bredth").value;
window.alert("Area Of Your Given Rectangle is : " + recarea(x,y));
}

function recarea(a,b) {
    return a*b;
}
