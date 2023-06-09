function validate()
{
    var username = document.getElementById("exampleInputEmail1");
    var password = document.getElementById("exampleInputPassword1");
console.log("ss");
    if(username.value.trim().length==0)
    {
        alert("Enter valid Email or Phone number");
    }
    else if(password.value.trim().length<7)
    {

        alert("Enter valid password");
    }
   
}