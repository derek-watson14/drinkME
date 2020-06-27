
var alcohol = "";
var currentDrink = "";
var drinks = [];
var thumbnails = [];
var recipe = "";
var ingreds = [];
var ingredsAmt = [];
var newRow = $("<row class='recipe'>");
var ingredsPane = $("<div class='card horizontal  recipe-card col s12 m12'>");

var alcTypes = ["vodka", "gin", "tequila", "sweet vermouth", "dry vermouth", "scotch", "whisky",
 "whiskey", "cognac", "rum", "beer", "cider", "amaretto", "lemon", "lime", "banana", "tea", "sloe gin", "bourbon", "everclear",
"mint", "sugar", "salt", "tomato juice", "pineapple", "orange", "wine", "ginger", "grenadine", "peach schnapps", "banana liqueur",
"jagermeister", "kahlua", "coffee", "cream", "red wine", "sweet and sour" ];

//var newcar
$("#cocktaillist").append("<h3> No Results Yet</h3>");
// ingredsPane.append("<h3>No Results Yet</h3>");
// ingreds.css("display", "flex");
// ingreds.css("justify-content", "center");
//this function iterates through 12 drink choices, loads the thumbnails array with thumbnail img urls
//and calls the getingreds function, which generates the ingredients of a given drink and the amts needed
function getBooze() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + alcohol;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        //pick a random drink from the list
        var drinksLength = response.drinks.length;
        for (i = 0; i < drinksLength; i++) { //generate 12 tiles with content from api
            currentDrink = response.drinks[i].strDrink;
            //console.log(currentDrink + " currentDrink");
            drinks.push(currentDrink);
            var imgUrl = response.drinks[i].strDrinkThumb + "/preview";
            thumbnails.push(imgUrl);// loops through all 12 drink URLs
        }
        //console.log(drinks);
        //console.log(thumbnails);
        var newRow = $("<row>");
        var ingredInd = 0;
        var ingredientString = "";
        var randStart = Math.floor(Math.random() * (drinksLength - 4)); // produces maximum allowable iteration for random drinks
        for (i = randStart; i < randStart + 4; i++) {
            var drinkCard = $("<div class='card horizontal  beer-card col s12 m6 drinkTile'>");
            var newDiv2 = $("<div class='card-image'>");
            var drinkImg = $(`<img src=${thumbnails[i]}>`);
            var drinkVal = "drinkVal";
            var newH5 = $(`<p class='${drinkVal}'>`);
            //console.log("new h5 value: " + newH5);
            newH5.html(drinks[i]);
            newDiv2.append(drinkImg); //, newH5 (puts the title to the right of the img)
            drinkCard.append(newDiv2, newH5);
            newRow.append(drinkCard);
        }
        console.log("hereeee");
        var cocktaillist = $("#cocktaillist")
        $(cocktaillist).append(newRow);
        //console.log(drinks);
    });
}

function getIngreds(drink) {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        //console.log(response);
        ingredsPane.empty();
        //console.log(response);
        var data = response.drinks[0];
        //response.drinks[0].strIngredient1;
        var newh5 = $("<h5>");
        newh5.html(drink + " Recipe:");

        for (i = 1; i <= 15; i++) { //iterates over 15 ingredients and values

            var currentIng = response.drinks[0]["strIngredient" + i];
            var measureAmt = response.drinks[0]["strMeasure" + i];

            var result = "";
            if (measureAmt !== null) { //some amounts are null when all parts are equal
                result += measureAmt + " ";
            }
            if (currentIng !== null) {
                result += currentIng;
            }
            if (result !== "") {
                var newH3 = $("<h6>");
                newH3.text(result);
                ingredsPane.append(newH3);
            }
            
            //console.log(result)
        }
        ingredsPane.append("<h2>"); // to add a bit of space at end of recipe
        var recipe = response.drinks[0]["strInstructions"];
        //console.log(response.drinks[0].strInstructions);
        ingredsPane.prepend(`<p>${response.drinks[0]["strInstructions"]}<p>`);
        ingredsPane.prepend(newh5);
    })
}



$("#cocktaillist").on("click", ".beer-card", function (event) {
    event.preventDefault();
    ingreds = [];
    $("#cocktaillist").append(newRow);

    newRow.empty();
    var drink = $(this).children(".drinkVal").text();
    console.log("clickt and val: " + drink);
    ingredsPane.css("height", "300px");

    ingredsPane.css("display", "flex");
    ingredsPane.css("flex-direction", "column");
    ingredsPane.css("align-items", "center");
    ingredsPane.css("overflow", "scroll");

    getIngreds(drink);
    var ingredString = "";
    //console.log(ingreds);
    var newOl = $("<ol>");
    newRow.append(ingredsPane);

})

$("#cocktailsearch").on("keydown", function(e) { 
    if(e.keyCode == 13)
        $("#cocktailsearch-submit").click() 

    console.log("clicked");
});

//adds click listener, running methods with alcohol entered into search bar.
$("#cocktailsearch-submit").on("click", function () {
    event.preventDefault();
    $("#cocktaillist").empty();
    console.log("clicked");
    alcohol = $("#cocktailsearch").val();
    drinks = [];
    thumbnails = [];
    ingreds = [];
    getBooze();
})