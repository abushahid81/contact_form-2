function forminput(){
    let name = document.getElementById('user').value;
    let Password = document.getElementById('Password1').value;
    let ConfirmPassword = document.getElementById('Password2').value;
    let mobile = document.getElementById('mobilenumber').value;
    let Email = document.getElementById('email').value;

// Username

    if(user==null || user==""){

		document.getElementById('firstname').innerHTML ="Please fill the username feild";
		return false;
	}

    if(user.length<=2 || user.lenth>=30){
        document.getElementById('firstname').innerHTML = "User Name is incorrect";
        return false;
    }

    
	if(!isNaN(user)){
		
		document.getElementById('firstname').innerHTML ="only character is allowed ";
		return false;
	}
// Password 1
    if(Password1==null || Password1==""){

        document.getElementById('credentials').innerHTML = "Please Enter The Correct Password";
        return false;
    }

    if(Password1.length<=4 || Password1.length>=8){

        document.getElementById('credentials').innerHTML = "Password lenght must be between 5 and 20";
        return false;
    }
// password 2
    if(Password1!=Password2){
    
    document.getElementById('credentials2').innerHTML ="Password are not matching";
    return false;
}

    if(Password==null || Password2==""){
		
		document.getElementById('credentials2').innerHTML ="Please fill the Confirm Password feild";
		return false;
	}
// Mobile Number
    if(mobilenumber==null || mobilenumber==""){
		
		document.getElementById('mobileno').innerHTML ="Please fill the mobilenumber feild";
		return false;
	}

    if(isNaN(mobilenumber)){
		
		document.getElementById('mobileno').innerHTML ="mobile number should be in digits";
		return false;
	}

    if(mobilenumber.length!=10){
	
		document.getElementById('mobileno').innerHTML ="mobile number should be in 10 digits not more or less than 10.";
		return false;
	}
// Email Id
    if(Email==null || Email==""){
		
		document.getElementById('emailid').innerHTML ="Please fill the email feild";
		return false;
	}

    if(Email.indexOf('@') <= 0){
       
        document.getElementById('emailid').innerHTML ="@ indvalid position";
        return false;
      }

    if((Emailmail.charAt(email.length-4)!=".") && (Emailmail.charAt(email.length-3)!=".")){
      
        document.getElementById('emailid').innerHTML =" . invalid position";
        return false;
      }


    return true;
}



