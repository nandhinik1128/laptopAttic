let d=Number(prompt("Enter the Distance:"));
let type=Number(prompt("Enter type of transport:\n1.Train\n2.Car\n3.Flight"));
switch (type){
    case 1:
        var fare=15*d;
        alert("Fare per Km for Flight=15\nTotal Fare: "+fare);
        break;
    case 2:
        var fare=12*d;
        alert("Fare per Km for Car=12\nTotal Fare: "+fare);
        break;
    case 3:
        var fare=30*d;
        alert("Fare per Km for Flight=30\nTotal Fare: "+fare);
        break;
        default:
            alert("Invalid input!!");
}  