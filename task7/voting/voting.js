let name=prompt("Please enter the name: ");
let age=prompt("What is your age? ");
age=Number(age);
if(age>=18){
    alert("Heyyy " + name + " you are eligible to vote!!");
}
else{
    alert("Sorry you are minor and not eligible to vote");
}
let again=confirm("Do You want to chaeck again??");
if(again) {checkvote();}
else{
    alert("Thank youhhh!!");
}