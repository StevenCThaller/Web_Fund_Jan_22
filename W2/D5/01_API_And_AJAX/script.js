async function callApi(){
    // How do I get the information from that detailed pokemon api to exist within this script??
    // Let's grab the category from the form itself.
    var catElement = document.getElementById("category");
    var category = catElement.value;
    
    // What about the actual search itself?
    var queryElement = document.getElementById("query");
    var query = queryElement.value;

    // Now that we have the actual data we want to use in our search, let's 
    // use it to modify the url we're sending the API call to.
    var response = await fetch('https://pokeapi.co/api/v2/'+category+'/'+query);

    var actualData = await response.json();

    console.log(actualData);

    // Step 1: Get the pokedex number in
    var dexNum = document.getElementById("dexNum");
    dexNum.innerText = "#" + actualData.id;

    // Step 2: Get the pokemon's name in
    var pokemonName = document.getElementById("pokemonName");
    // Bonus: Convert lowercase string to first character uppercase
    pokemonName.innerText = convertToTitleCase(actualData.name);

    // Step 3: Get the pokemon's types in
    var typesElement = document.getElementById("types");
    typesElement.innerHTML = "";
    for(var i = 0; i < actualData.types.length; i++) {
        var newType = "<li>" + convertToTitleCase(actualData.types[i].type.name) + "</li>";
        typesElement.innerHTML += newType;
    }

    // Step 4: Populate the pokemon's stats
    var statSpans = document.querySelectorAll(".stat");
    for(var i = 0; i < actualData.stats.length; i++) {
        statSpans[i].innerText = actualData.stats[i].base_stat;
    }

    // Step : Un-hide the main section
    var main = document.querySelector("main");
    main.style.display = "block";



    return false;
}

function convertToTitleCase(string) {
    var splitString = string.split(" ");
    for(var i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i][0].toUpperCase() + splitString[i].slice(1);
    }

    return splitString.join(" ");
}