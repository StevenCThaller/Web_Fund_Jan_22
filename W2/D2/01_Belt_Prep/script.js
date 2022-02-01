function closeCookie() {
    var toDelete = document.getElementById("cookie");
    toDelete.remove();
}

function navigateTo(el) {
    alert("You are trying to navigate to " + el.innerText);
}

function hoverOn(el){
    el.src = "./images/office-workers.png"
    el.alt = "Office workers"
}

function hoverOff(el){
    el.src = "./images/building.png"
    el.alt = "Building with clouds"
}