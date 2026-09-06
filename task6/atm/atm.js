let _pin=prompt("Enter your pincode: ");

let pin = Number(_pin);
let total_bal=10000;
if(pin==1234)
    {
        let c=prompt("Enter your requirement:\n1.Withdraw\n2.Deposit\n3.Ckeck your balance");
        if (c=="1"){
            let w=prompt("Enter the amount: ");
            let wd=Number(w);
            total_bal-=wd;
            alert(
                "Withdrawal succesful! New Balance:"+total_bal
            );
        }
        else if(c=="2"){
            var d=Number(prompt("Enter the amount:"));
            total_bal+=d;
            alert("Deposit successful!\nNew Balance:"+total_bal);
        }
        else{
            alert("Your current balance is "+total_bal)
        }
    }
    else{alert("Invalid Login");}