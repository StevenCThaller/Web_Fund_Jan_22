// Assuming that all of the heart things contained the same class:
var heartClickers = document.querySelectorAll(".heartClick");

// console.log(heartClickers);
for(var i = 0; i < heartClickers.length; i++){
    var element = heartClickers[i];
    element.addEventListener('click', loginPopup);
}


// ADVANCED STUFF BUT STILL USEFUL
function loginPopup(){
    // When this function runs, let's make a new element appear
    // with a fixed position
    // in the middle of the page

    // Question 1: How do we create an element from javascript?
    var popupWindow = document.createElement("div");
    // To make it actually show up, we need to add this new element to our current set of elements. 
    // The simplest way: Append it to the body
    var body = document.querySelector("body");
    body.appendChild(popupWindow);
    // What if I want to add a class to that newly created element?
    popupWindow.classList.add("popup");

    var popupText = document.createElement("p");
    popupText.innerText = "Please log in to perform this action.";
    popupWindow.appendChild(popupText);
    // To clear all html and replace it
    // popupWindow.innerHTML = "";
    // popupWindow.appendChild(popupText);
}

function hoverOver(el){
    // Add a class to invert the colors
    el.classList.add("invertBtn")
}

function hoverOut(el){
    // Revert back to original colors
    el.classList.remove("invertBtn");
}

function deleteButton(el){
    el.remove();
}