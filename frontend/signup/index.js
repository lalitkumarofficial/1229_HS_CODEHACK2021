function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    console.log({user: document.getElementById("email").value, pass: document.getElementById("password").value})
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("password").value)
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
    });
    return false;
}

document.getElementById('signupfrm').addEventListener("submit", processForm);