var firebaseConfig = {
apiKey: "AIzaSyAs6dQhRGqMhhJlliuFto0EEOPppLxyp1o",
authDomain: "sfhackathon-85e8b.firebaseapp.com",
projectId: "sfhackathon-85e8b",
storageBucket: "sfhackathon-85e8b.appspot.com",
messagingSenderId: "703398999147",
appId: "1:703398999147:web:44c16f39c2058705eaed2e",
measurementId: "G-WHVJ27NH21"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth();
authEndpoints = [
    "/frontend/login/",
    "/frontend/signup/"
];
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
    } else {
        if(getPres(document.location.pathname, authEndpoints) === false) {
            document.location.replace("/frontend/signup/")
        }
    }
});

function getPres(obj,lst) {
    for(i = 0; i < lst.length; i++) {
        data = lst[i]
        if(obj === data) {
            console.log({obj,data})
            return true
        }
    }
    return false;
}