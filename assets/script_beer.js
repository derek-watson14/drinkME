
var beerListContainer = $("#beerlist")

function getBreweriesCode(beer){
    var queryURLBeerCode = "https://api.openbrewerydb.org/breweries?by_postal=" + beer
    $.ajax({
        url: queryURLBeerCode,
        method: "GET"
    }).then(function(breweries){
        // console.log(breweries)
        var beerDiv = $("<div class = 'row' >")
            breweries.forEach(function(brewery){
                
                var name = $("<h7>")
                name.text(brewery.name)
                // console.log("name: " + brewery.name)

                // var breweryType = $("<h7>")
                // breweryType.text("type: " + brewery.brewery_type)
                // console.log("type: " + brewery.brewery_type)
                
                var city = $("<h7>")
                city.text(brewery.city)
                // console.log("city: " + brewery.city)

                var street = $("<h7>")
                street.text(brewery.street)
                // console.log("street: " + brewery.street)

                var state = $("<h7>")
                state.text(brewery.state)
                // console.log("state: " + brewery.state)

                var phone = $("<h7>")
                phone.text(brewery.phone)
                // console.log("phone: " + brewery.phone)

                var url = $("<h7>")
                url.text(brewery.website_url)
                // console.log("url: " + brewery.website_url)

                var beerCard = $("<div class='card col s12 l3 card-action beer-card'>");
                beerCard.append(name, city, street, state, phone, url);

                beerDiv.append(beerCard)
                beerListContainer.html(beerDiv)
            })
    })  
}

function getBreweriesCity(beer){
    var queryURLBeerCity = "https://api.openbrewerydb.org/breweries?by_city=" + beer
    $.ajax({
            url: queryURLBeerCity,
            method: "GET"
        }).then(function(breweries){
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
            // console.log(brewery.city)

            var street = $("<h6>")
            street.text(brewery.street)
            // console.log(brewery.street)

            var state = $("<h6>")
            state.text(brewery.state)
            // console.log(brewery.state)

            var beerCard = $("<div class='card col s12 l3 card-action beer-card'>");
            beerCard.append(name,city,street,state);

            beerDiv.append(beerCard)
            
            })
            beerListContainer.html(beerDiv)
        })
}

$("#beersearch-submit").click(function(event){
    event.preventDefault();
    var beerInput = $("#beersearch").val().trim();
    
    if(isNaN(beerInput)){
    getBreweriesCity(beerInput);
    // console.log("not an integer")
    } 
    else {
        getBreweriesCode(beerInput);
        // console.log("integer")
    }
    // $("#beersearch")[0].reset();
})

//when you click on button, you are directed to a random beer. when you enter in the input field, you can search for a brewery near you by city or postal code  
// https://api.punkapi.com/v2/beers/random