function calculate() {
      const n1 = Number(document.getElementById("num1").value);
      const n2 = Number(document.getElementById("num2").value);

      if (isNaN(n1) || isNaN(n2) || n1=="" || n2=="") {
        alert("Please enter valid numbers!");
        return;
      }

      const sum = n1 + n2;
      const diff = n1 - n2;
      const prod = n1 * n2;
      const div = n2 !== 0 ? (n1 / n2).toFixed(2) : "Cannot divide by zero";

      document.getElementById("result").innerText =
        `Sum: ${sum}\nDifference: ${diff}\nProduct: ${prod}\nDivision: ${div}`;
    }