function addNumber() {
    var currentNumber = parseInt(document.getElementById("number").innerText);
    var newNumber = currentNumber + 1;
    document.getElementById("number").innerText = newNumber;
}