
var alcohol = "vodka";
var currentDrink = "";
var thumbnails = [];
var recipe = "";
var ingreds = [];
var ingredsAmt = [];

//this function iterates through 12 drink choices, loads the thumbnails array with thumbnail img urls
//and calls the getingreds function, which generates the ingredients of a given drink and the amts needed
function getBooze() {
var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + alcohol;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
    console.log(response);
    for (i = 0; i < 12; i++) { //generate 12 tiles with content from api
        currentDrink = response.drinks[i].strDrink; // loops through all 12 drink tiles
        getIngreds();
        var imgUrl = response.drinks[i].strDrinkThumb + "/preview";
        console.log(imgUrl);
        thumbnails.push(imgUrl); //makes first drink appear at index '0' in thumbnails
    }
});
}

function getIngreds() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + currentDrink;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var data = response.drinks[0];
        response.drinks[0].strIngredient1;
        for (i = 1; i < 16; i++) {
            var currentIng = response.drinks[0]["strIngredient" + i];
            var measureAmt = response.drinks[0]["strMeasure" + i];
            var result = "";
            if (measureAmt !== null) { //some amounts are null when all parts are equal
             result += measureAmt + "of " + currentIng;
            } else {
            result += currentIng;
            }
            console.log(result);
        }
    })
}
getBooze();
