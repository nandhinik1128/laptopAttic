let income=Number(prompt("Enter your Monthly Income:"));
let rent=Number(prompt("Rent:"));
let gr=Number(prompt("Groceries:"));
let tr=Number(prompt("Transport:"));
let ex=Number(rent+gr+tr);
if (income>ex)
    {
    alert("Total Expenses: "+ex+"\nRemaining Balance: "+(income-ex)+"\nPercentage Spent: "+((ex/income)*100)+"%"+"\nYou are within Budget.");
    }
else
    {
    alert("You are Overspending!!");
    }