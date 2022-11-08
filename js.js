function additi() {
   let numfirst = +document.getElementById("num1").value;
   let numsecon = +document.getElementById("num2").value;
        document.getElementById("total").innerHTML = numfirst + numsecon ;
}
function subtra() {
    let numfirst = +document.getElementById("num1").value;
    let numsecon = +document.getElementById("num2").value;
    document.getElementById("total").innerHTML = numfirst - numsecon ;
}
function multi() {
    let numfirst = +document.getElementById("num1").value;
    let numsecon = +document.getElementById("num2").value;
    document.getElementById("total").innerHTML = numfirst * numsecon ;
}
function divi() {
    let numfirst = +document.getElementById("num1").value;
    let numsecon = +document.getElementById("num2").value;
    document.getElementById("total").innerHTML = numfirst / numsecon ;
}