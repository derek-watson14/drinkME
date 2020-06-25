
var alcohol = "";
var currentDrink = "";
var drinks = [];
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
    for (i = 0; i < 4; i++) { //generate 12 tiles with content from api
        currentDrink = response.drinks[i].strDrink; 
       //console.log(currentDrink + " currentDrink");
        drinks.push(currentDrink);
        var imgUrl = response.drinks[i].strDrinkThumb + "/preview";
        thumbnails.push(imgUrl);// loops through all 12 drink tiles
        getIngreds();
        
        //console.log(thumbnails);
         //makes first drink appear at index '0' in thumbnails
    }
    //console.log(ingreds + " in getbooze");
    var newRow = $("<row>");
    var ingredInd = 0;
    for (i = 0; i < 4; i++) {
        var drinkCard = $("<div class='card-horizontal col s12 m6'>");
        var newDiv2 = $("<div class='card-image'>");
        var drinkImg = $(`<img src=${thumbnails[i]}>`);
        var newH5 = $("<p>");
            newH5.html(drinks[i]);
            //console.log(drinks[i]);
            var ingredientString = "";
            for (j = ingredInd; j < ingredInd + 15; j++) { //0, til 14, exits, updates ingredInd by 15 to start at index 15
                if (ingreds[j] !== "null") {
                    //ingredientString += ingreds[j] + " ";
                    console.log(ingreds[j]);
                }
            }
            ingredInd += 15;
        //drinkImg.attr("src", thumbnails[i]);
        //console.log(thumbnails[i]);
        newDiv2.append(drinkImg, newH5);
        drinkCard.append(newDiv2);
        newRow.append(drinkCard);
        
        //should iterate over the ingreds and add them to the image, might include null
        //console.log(ingreds[0] + " ingredients currently at j");
        // for (j = 0; j < ingreds.length; j+= 15) {
        //     // if (ingreds[j] !== null) {
        //     var newH5 = $("<h5>");
        //     newH5.html(ingreds[j]);
        //     console.log(ingreds[j]);
        //     newDiv2.append(newH5);
        // }
            // }
        }
        // newDiv1.append(newDiv2);
        // var drinkImg = $("<img>");
        // drinkImg.attr("src", "https://lorempixel.com/100/190/nature/6");
        // newDiv2.append(drinkImg);
        
        ingreds = [];

    
   var cocktaillist = $("#cocktaillist")
    $(cocktaillist).append(newRow);
    //console.log(drinks);
});
}

function getIngreds() {
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + currentDrink;
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        //console.log(response);
        var data = response.drinks[0];
        response.drinks[0].strIngredient1;
        for (i = 1; i <= 15; i++) { //iterates over 15 ingredients and values

            var currentIng = response.drinks[0]["strIngredient" + i];
            var measureAmt = response.drinks[0]["strMeasure" + i];

            var result = "";
            if (measureAmt !== null) { //some amounts are null when all parts are equal
             result += measureAmt + " of " + currentIng;
            } else {
            result += currentIng;
            }
            ingreds.push(result);
            
        }
        //console.log(ingreds);
        //console.log(ingreds);
    })
}
//getBooze();

//adds click listener, running methods with alcohol entered into search bar.
$("#cocktailsearch-submit").on("click", function() {
    event.preventDefault();
    $("#cocktaillist").empty();
    //console.log("clicked");
    alcohol = $("#cocktailsearch").val();
    //console.log(alcohol + " alcohol val");
    

    drinks = [];
    thumbnails = [];
    ingreds = [];
    getBooze();
    // getIngreds();

    
    // $("#cocktaillist").append(newRow);
    // var newDiv = $("<div>"); // append to section with right ID
    // newDiv.addClass("col s12 m4");
    // var newH2 = $("<h2>");
    // newH2.addClass("header");
    // newH2.text("Test");
    // newDiv.append(newH2);

    // var newDiv1 = $("<div>");
    // newDiv1.addClass("card-horizontal");
    // newDiv.append(newDiv1);

    // var newDiv2 = $("<div>");
    // newDiv2.addClass("card-image");
    // newDiv1.append(newDiv2);
    // var drinkImg = $("<img>");
    // drinkImg.attr("src", "https://lorempixel.com/100/190/nature/6");
    // newDiv2.append(drinkImg);

    // //append below newDiv3 to card-horizontal newDiv1
    // var newDiv3 = $("<div>");
    // newDiv3.addClass("card-stacked");
    // newDiv1.append(newDiv3); //adds "card-stacked" to div, now append card-content and the p and a to newdiv3
    
    // var newDiv4 = $("<div>");
    // newDiv4.addClass("card-content");
    // newDiv3.append(newDiv4);

    // var newP = $("<p>");
    // newP.text("hello, vodka!");
    // newDiv4.append(newP);
    // //now append another div to card-content, with an a in it

    // var newDiv5 = $("<div>");
    // newDiv5.addClass("card-action");
    // newDiv3.append(newDiv5);

    // var newA = $("<a>");
    // newA.attr("href", "htps://www.drizly.com");
    // newA.text("Drizly it!");
    // newDiv5.append(newA);
    // $(newRow).append(newDiv);
})
