var myPotato = {
    potato: "Russet",
    cheese: "cheddah",
    additionalToppings: [
        "bacon",
        "sour cream",
        "chives"
    ]
};

var yourPotato = {
    potato: "Yukon gold",
    cheese: "swiss",
    additionalToppings: [
        "facon",
        "broccoli"
    ]
};

function printPotatoInfo(bakedPotato) {
    console.log("You have ordered a " + bakedPotato.potato + " potato with " + bakedPotato.cheese + ".");
    console.log("On top of the potato, you also have: ");
    for(var i = 0; i < bakedPotato.additionalToppings.length; i++) {
        console.log(bakedPotato.additionalToppings[i]);
    }
}

printPotatoInfo(myPotato);

printPotatoInfo(yourPotato);

// But can we embed that function into the object itself?! YES!
var myPotato = {
    potato: "Russet",
    cheese: "cheddah",
    additionalToppings: [
        "bacon",
        "sour cream",
        "chives"
    ],
    printPotatoInfo: function(){
        console.log("You have ordered a " + this.potato + " potato with " + this.cheese + ".");
        console.log("On top of the potato, you also have: ");
        for(var i = 0; i < this.additionalToppings.length; i++) {
            console.log(this.additionalToppings[i]);
        }
    }
};

var yourPotato = {
    potato: "Yukon gold",
    cheese: "swiss",
    additionalToppings: [
        "facon",
        "broccoli"
    ],
    printPotatoInfo: function(){
        console.log("You have ordered a " + this.potato + " potato with " + this.cheese + ".");
        console.log("On top of the potato, you also have: ");
        for(var i = 0; i < this.additionalToppings.length; i++) {
            console.log(this.additionalToppings[i]);
        }
    }
};

// console.log(yourPotato.potato)
// So how would I call printPotatoInfo from yourPotato?
yourPotato.printPotatoInfo()