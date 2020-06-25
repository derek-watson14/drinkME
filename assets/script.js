
var alcohol = "";
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
        //console.log(imgUrl);
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
        //console.log(response);
        var data = response.drinks[0];
        response.drinks[0].strIngredient1;
        for (i = 1; i < 16; i++) {

            var currentIng = response.drinks[0]["strIngredient" + i];
            var measureAmt = response.drinks[0]["strMeasure" + i];

            var result = "";
            if (measureAmt !== null) { //some amounts are null when all parts are equal
             result += measureAmt + " of " + currentIng;
            } else {
            result += currentIng;
            }
            //console.log(result);
        }
    })
}
//getBooze();

//adds click listener, running methods with alcohol entered into search bar.
$("#cocktailsearch-submit").on("click", function() {
    event.preventDefault();
    console.log("clicked");
    alcohol = $("#cocktailsearch").val();
    getBooze();
    getIngreds();

    var newDiv = $("<div>"); // append to section with right ID
    newDiv.addClass("col s12 m7");
    var newH2 = $("<h2>");
    newH2.addClass("header");
    newH2.text("Test");
    newDiv.append(newH2);

    var newDiv1 = $("<div>");
    newDiv1.addClass("card-horizontal");
    newDiv.append(newDiv1);

    var newDiv2 = $("<div>");
    newDiv2.addClass("card-image");
    newDiv1.append(newDiv2);
    var drinkImg = $("<img>");
    drinkImg.attr("src", "https://lorempixel.com/100/190/nature/6");
    newDiv2.append(drinkImg);

    //append below newDiv3 to card-horizontal newDiv1
    var newDiv3 = $("<div>");
    newDiv3.addClass("card-stacked");
    newDiv1.append(newDiv3); //adds "card-stacked" to div, now append card-content and the p and a to newdiv3
    
    var newDiv4 = $("<div>");
    newDiv4.addClass("card-content");
    newDiv3.append(newDiv4);

    var newP = $("<p>");
    newP.text("hello, vodka!");
    newDiv4.append(newP);
    //now append another div to card-content, with an a in it

    var newDiv5 = $("<div>");
    newDiv5.addClass("card-action");
    newDiv3.append(newDiv5);

    var newA = $("<a>");
    newA.attr("href", "htps://www.drizly.com");
    newA.text("Drizly it!");
    newDiv5.append(newA);
    $("#cocktaillist").append(newDiv);
<<<<<<< HEAD
=======


//     <div class="col s12 m7">
//         <h2 class="header">Horizontal Card</h2>
//         <div class="card horizontal">
//             <div class="card-image">
//                 <img src="https://lorempixel.com/100/190/nature/6">
//             </div>
//             <div class="card-stacked">
//                 <div class="card-content">
//                 <p>I am a very simple card. I am good at containing small bits of information.</p>
//                 </div>
//                 <div class="card-action">
//                 <a href="#">This is a link</a>
//                 </div>
//             </div>
//             </div>
//   </div>
    
    //console.log(alcohol);
>>>>>>> dev
})
