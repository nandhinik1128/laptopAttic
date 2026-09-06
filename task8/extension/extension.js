function but(){
    var text=document.getElementById("input").value;
    var z=text.replace(text.slice(text.indexOf(".")),".js");
    document.getElementById("result").innerText=z;
   

}  



    

