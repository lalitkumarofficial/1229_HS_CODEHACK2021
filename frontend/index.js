firebase.database().ref('shop').on('value',(snapshot) => {
    items = snapshot
    console.log(items.val())
    items.forEach(item => document.getElementById("grid").append(genCard(item)));       
    //Array.prototype.forEach.call(items, item => document.getElementById("grid").append(genCard(item)));
});

function genCard(item) {
    console.log(item.val())
    nItem = {}
    item.forEach(function(data) {
        nItem[data.key] = data.val()
    });
    card = document.createElement("div");
    card.setAttribute("id", item.key);
    card.setAttribute("onclick", "sell(this);");
    image = document.createElement("img");
    image.src = nItem["price"];
    image.setAttribute("width", "200px");
    image.setAttribute("height", "200px");
    card.append(image);
    textB = document.createElement("div");
    textB.append(document.createElement("h1").append(nItem["price"]));
    card.append(textB);
    return card;
}
