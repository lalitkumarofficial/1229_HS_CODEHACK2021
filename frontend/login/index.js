function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    console.log({user: document.getElementById("email").value, pass: document.getElementById("password").value})
    firebase.auth().signInWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
    .then((userCredential) => {
        // Signed in 
        var user = userCredential.user;
        console.log(user);
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log({errorCode, errorMessage})
        
        function getErrorMessage() {
            switch(errorCode) {
                case "auth/invalid-email":
                    return "Invalid email."
                    break
                case "auth/user-disabled":
                    return "Blocked User."
                    break
                case "auth/user-not-found":
                    return "User Doesn't Exist. Please Signup."
                    break
                case "auth/wrong-password":
                    return "Invalid password."
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

document.getElementById('loginfrm').addEventListener("submit", processForm);