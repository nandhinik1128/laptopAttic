function check() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let result = document.getElementById("xor");

    // XOR the two numbers and check the sign bit
    // If (num1 ^ num2) is negative => opposite signs
    // If (num1 ^ num2) is positive => same sign
    let xor = num1 ^ num2;

    if (xor < 0) {
        result.textContent = "false (numbers have opposite signs)";
    } else {
        result.textContent = "true (numbers have same sign)";
    }
}
