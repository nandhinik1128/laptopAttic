 function find() {
      
      const year = Number(document.getElementById("year").value);

      if (isNaN(year) || year <= 0) {
        alert("Enter a valid year!!");
        return;
      }

      
      const leap =
        (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
          ? `The given year ${year} is a leap year `
          : `The given year ${year} is not a leap year `;

      document.getElementById("result").textContent = leap;
    }
