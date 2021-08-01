lock = true;
function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    if(!lock)
    rtdb.ref('shop').push({
        uid: window.user.uid,
        image: window.imageLoc,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: parseInt(document.getElementById("price").value),
        age: parseInt(document.getElementById("age").value)
    });
    return false;
}
document.getElementById("imgIn").addEventListener('change', function(e) {
    window.imageLoc = "images/"+window.user.uid+"/shop/" + Math.floor(Math.random() * 10000);
    firebase.storage().ref(window.imageLoc).listAll().then((listResults) => {
        const promises = listResults.items.map((item) => {
          return item.delete();
        });
        Promise.all(promises);
    });
    firebase.storage().ref(window.imageLoc).put(e.target.files[0]).then((snapshot) => {
        console.log('Uploaded Image');
        snapshot.ref.getDownloadURL().then((url) => document.getElementById("imgPrev").src = url);
        lock = false
    })
})

document.getElementById('sellfrm').addEventListener("submit", processForm); src="/images/addImage.png"