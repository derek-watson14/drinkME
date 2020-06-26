//OPEN BREWERY API 
var beerListContainer = $("#beerlist")
var randomBeerContainer = $("#random-beer")

function getBreweriesCode(beer){
    var queryURLBeerCode = "https://api.openbrewerydb.org/breweries?by_postal=" + beer
    $.ajax({
        url: queryURLBeerCode,
        method: "GET"
    }).then(function(breweries){
        // console.log(breweries)
        placeMarkersBeer(breweries, beer);
        var beerDiv = $("<div class = 'row' >")
            breweries.forEach(function(brewery){
                var name = $("<a>")
                name.text(brewery.name)
                name.attr("href", brewery.website_url)
                name.css("color", "#e39d5a")
            
                $(document).ready(function(){
                    $("a").hover(function(){
                    $(this).css("color", "#f8ccc6");
                    }, function (){
                        $(this).css("color", "#6a1807");
                
                    });
                });

                var breweryType = $("<h6>")
                breweryType.text("type: " + brewery.brewery_type)
                console.log("type: " + brewery.brewery_type)
                
                var city = $("<h6>")
                city.text(brewery.city)

                var street = $("<h6>")
                street.text(brewery.street)

                var state = $("<h6>")
                state.text(brewery.state)

                var phone = $("<h6>")
                phone.text("p: " + brewery.phone)

                var beerCard = $("<div class='card col s12 l3 card-action beer-card'>");
                beerCard.append(name, breweryType, city, street, state, phone);

                beerDiv.append(beerCard)
            })
            beerListContainer.html(beerDiv)
    })  
}

function getBreweriesCity(beer){
    var queryURLBeerCity = "https://api.openbrewerydb.org/breweries?by_city=" + beer
    $.ajax({
            url: queryURLBeerCity,
            method: "GET"
        }).then(function(breweries){
            placeMarkersBeer(breweries, beer);
            var beerDiv = $("<div class = 'row' >")
            breweries.forEach(function(brewery){
            var name = $("<a>")
            name.text(brewery.name)
            name.attr("href", brewery.website_url)
            name.css("color", "#e39d5a")
            
            $(document).ready(function(){
                $("a").hover(function(){
                    $(this).css("color", "#f8ccc6");
                }, function (){
                    $(this).css("color", "#6a1807");   
                });
            });
            
            var city = $("<h6>")
            city.text(brewery.city)

            var street = $("<h6>")
            street.text(brewery.street)

            var state = $("<h6>")
            state.text(brewery.state)

            var phone = $("<h6>")
            phone.text(brewery.phone)

            var beerCard = $("<div class='card col s12 l3 card-action beer-card'>");
            beerCard.append(name,city,street,state, phone);

            beerDiv.append(beerCard)
            })
            beerListContainer.html(beerDiv)
    })
}

function sorry (){
    var sorry = $("<h6>")
    sorry.text("please enter a city or a zip code, thanks!")
    beerListContainer.append(sorry)
}

//on button click
$("#beersearch-submit-list").click(function(event){
    event.preventDefault();
    var beerInput = $("#beersearch").val().trim();

    if (isNaN(beerInput)){
        getBreweriesCity(beerInput);
    } 
    else if (beerInput===""){
        sorry();
    }
    else {
        getBreweriesCode(beerInput);
    }
    $("#beersearch").empty();
})

//on enter click
$("#beersearch").on("keydown", function(e) {
    if(e.keyCode == 13)
        $("#beersearch-submit-list").click()
});


// PUNK API 
// when you click on button, you are directed to a random beer. when you enter in the input field, you can search for a brewery near you by city or postal code  
function randomBeer(){
    var queryURLBeerRandom = "https://api.punkapi.com/v2/beers/random"
    $.ajax({
        url: queryURLBeerRandom,
        method: "GET"
    }).then(function(breweries){
        console.log(breweries)
        var cardContent = $("<div class = 'card-content'>")
        var cardAction = $("<div class = 'card-action'>")
        var cardStacked = $("<div class = 'card-stacked'>")
        var cardImage = $("<div class = 'card-image beer-random-image'>")
        var cardHorizontal = $("<div class = 'card horizontal beer-random-card'>")

        var name = $("<a class='bold'>")
        name.text(breweries[0].name)
        console.log(breweries[0].name)
    
        var tagline = $("<h6 class='bold'>")
        tagline.text("' " + breweries[0].tagline + " '")
        console.log(breweries[0].tagline)

        var description = $("<h6 class='bold'>")
        description.text("description: " + breweries[0].abv)
        console.log(breweries[0].description)

        var yeast = $("<h6 class='bold'>")
        yeast.text("yeast: " + breweries[0].ingredients.yeast)

        var brewersTips = $("<h6 class='bold'>")
        brewersTips.text("brewers tips: " + breweries[0].brewers_tips)

        var foodPairings = $("<h6 class='bold'>")
        foodPairings.text("food pairings: " + breweries[0].food_pairing)

        var abv = $("<h6 class='bold'>")
        abv.text("abv: " + breweries[0].abv)

        var imageURL = breweries[0].image_url   
        if (imageURL !==null ){
            var image = $("<img>").attr("src", imageURL)
            console.log("not null")
        } else{
            var imageURL = "https://media-cdn.tripadvisor.com/media/photo-s/07/89/d2/2a/sip-and-savor-tours.jpg"
            var image = $("<img>").attr("src", imageURL)
            console.log("null")
        }
        
        cardAction.append(name)
        cardContent.append(tagline, description, yeast, brewersTips, foodPairings, abv)
        cardStacked.append(cardContent, cardAction)
        cardImage.append(image)
        
        cardHorizontal.append(cardImage, cardStacked)
        randomBeerContainer.html(cardHorizontal)
})
}   

$(".random-beer").click(function(event){
    event.preventDefault();
    randomBeer();
    console.log("hi")
})