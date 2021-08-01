function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    console.log({user: document.getElementById("email").value, pass: document.getElementById("password").value})
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
    .then((userCredential) => {
        var user = userCredential.user;
        console.log(user);
        document.location.replace("/frontend/");
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log({errorCode, errorMessage})
        
        function getErrorMessage() {
            switch(errorCode) {
                case "auth/email-already-in-use":
                    return "Email Already Exists, Please Login."
                    break
                case "auth/invalid-email":
                    return "Invalid email."
                    break
                case "auth/weak-password":
                    return "Please Try A Stronger Password."
                    break
            }
        }
        errM = getErrorMessage();
        if(errM) {
            document.getElementById("tips").style.display = "block";
            document.getElementById("tips").innerHTML = errM;
        }
        else document.getElementById("tips").style.display = "none";
    });
    return false;
}

document.getElementById('signupfrm').addEventListener("submit", processForm);