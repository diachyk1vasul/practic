var inputContent = document.getElementById("display");
var firstInput = document.getElementById('firstInput');
var secondInput = document.getElementById('secondInput');

function counter(firstNumber, secondNumber) {
    for (var i = firstNumber; i <= secondNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            inputContent.innerHTML += " <b>Three & Five </b> " + i + "<br>";
        } else if (i % 3 === 0) {
            inputContent.innerHTML += "<b>Three </b>" + i + "<br>";
        } else if (i % 5 === 0) {
            inputContent.innerHTML += " <b>Five </b>" + i + "<br>";
        } else {
            inputContent.innerHTML += i + "<br>";
        } 
    }
}
function submitCounter() {
    counter(firstInput.value, secondInput.value);

    return false;
}