 const but = document.getElementById("but");

    but.addEventListener("click", () => {
   
      const brea = Number(document.getElementById("breadth").value.trim());
      const hei = Number(document.getElementById("height").value.trim());
 
      if (isNaN(brea) || isNaN(hei) || brea <= 0 || hei <= 0) {
        alert("Enter a valid positive number!!");
        return;
      }

     
      const area = 0.5 * hei * brea;


      document.getElementById("result").textContent = "Area of the triangle: " + area;

    });
