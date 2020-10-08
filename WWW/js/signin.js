const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


function createUser(e) {
    e.preventDefault();
    const email = email.value;
    const password = password.value;
    const confirmPassword = confirmPassword.value;

    console.log(password);
    console.log(confirmPassword);
    
    if(password==confirmPassword)
    {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(firebaseUser) {
            // Success
            window.alert("LOGGED IN");
            window.location = "index.html";
        
        })
        
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            window,alert(errorMessage);
    });
}
 
   else
   {
       alert("password does not match")
   } 

}
    

 
