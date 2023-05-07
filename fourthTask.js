function checkNum() {
    const num = parseFloat(document.getElementById("num").value);
    let result = Math.sqrt(num);
    document.getElementById("result").innerHTML = "Root: " + result;
}