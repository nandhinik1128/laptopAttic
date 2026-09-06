 function findSundays() {
      let years = [];
      for (let year = 2014; year <= 2050; year++) {
        let date = new Date(year, 0, 1); // Jan 1st
        if (date.getDay() === 0) { // Sunday = 0
          years.push(year);
        }
      }

      // Display result
      document.getElementById("output").innerHTML =
        "January 1st falls on Sunday in the years: <b>" +
        years.join(", ") +
        "</b>";
    }