let name=prompt("Name please: ");
let password=prompt("Password: ");
if(name=='nandhini'&&password=='123456'){
    let borrow=confirm("Do you want to borrow a book?");
    if(borrow){
        let category=prompt("Select a book category:1 = Fiction 2 = Science 3 = History");
        switch(category)
        {
            case "1":
                alert("You selected Fiction");
                break;
                case "2":
                    alert("You selected Science");
                    break;
                    case "3":
                        alert("You selected History");
                        break;
                        default:
                            alert("Invalid category");
        }
    }
    else{
        alert("Maybe next time! Goodbye!")
    }
}
else{
    alert("Invalid log in")
}


















