let a=prompt("1.which is the universal solvent in the following?\nA.Water\nB.Nitrogen\nC.Sodium\nD.Helium");
let score=0;
switch (a){
    case "A":
        alert("Correct");
         score+=1;
        break;
    case "B":
        alert("Incorrect");
       
        break;
    case "C":
        alert("Incorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
let b=prompt("2.which planet has 63 moons?\nA.Venus\nB.Mars\nC.Jupiter\nD.Saturn");
switch(b){
    case "A":
        alert("Incorrect");
        break;
    case "B":
        alert("Incorrect");
        break;
    case "C":
        alert("Correct");
        score+=1;
        break;
    case "D":
        alert("Incorrect");
        
        break;
}
let c=prompt("3.Who won asia cup 2025?\nA.India\nB.Pakistan\nC.UAE\nD.China");
switch(c){
    case "A":
        alert("Correct");
        score+=1;
        break;
    case "B":
        alert("Incorrect");
        break;
    case "C":
        alert("Inorrect");
        break;
    case "D":
        alert("Incorrect");
        break;
}
alert("Your Final Score:"+score+"/3");