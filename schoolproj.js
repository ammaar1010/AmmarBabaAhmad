function validate(){

    var name=document.getElementById("text1");
    if(name.value==""){
        alert("please enter the first name")

        return false;
    }
    
    var nname=document.getElementById("text2");
    if(nname.value==""){
        alert("please enter the last name")
        return false;
    }
    var email=document.getElementById("text3");
    if( email.value==""){
        alert("please enter a valid email")
        return false;
    }

}


function showPassword(){
    var passworddd=document.getElementById("newStudPassword");
    var reenteredpassword=document.getElementById("newStudPassword2");
 
    if(passworddd.type=="password" || reenteredpassword.type=="password"){
     passworddd.type="text";
     reenteredpassword.type="text";
    }
    else{
     passworddd.type="password";
     reenteredpassword.type="password";
    }
 }

 function showstaffPassword(){
    var passworddd=document.getElementById("staffPassword");
 
    if(passworddd.type=="password"){
     passworddd.type="text";
    }
    else{
     passworddd.type="password";
    }
 }
 function successful(){
    var name=document.getElementById("input1");
    var name2=document.getElementById("input2");
    var email=document.getElementById("input3");
    if(name.value=="" || name2.value=="" || email.value==""){
        alert("please fill out the empty field/fields")
        return false
    }

   
    alert("You've successfully registered "+name.value+" "+name2.value)
 }

 function SignUp(){
    var valuee=document.getElementById("emailBox");


    if( ( valuee.value=="") ){
        alert("please enter a valid email");
        return false;

    }
    else{
         alert("You've signed Up for our NewsLetter")
         return true;
    }
   
 }