function checkNum() {
    const num = document.getElementById("num").value;

    if (num % 2 == 0) {
        document.getElementById("result").innerHTML = num + " is even";
    } else {
        document.getElementById("result").innerHTML = num + " is odd";
    }
}