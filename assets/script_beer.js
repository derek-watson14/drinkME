
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
                
                var name = $("<h3>")
                name.text(brewery.name)
                // console.log("name: " + brewery.name)

                // var breweryType = $("<h3>")
                // breweryType.text("type: " + brewery.brewery_type)
                // console.log("type: " + brewery.brewery_type)
                
                var city = $("<h3>")
                city.text(brewery.city)
                // console.log("city: " + brewery.city)

                var street = $("<h3>")
                street.text(brewery.street)
                // console.log("street: " + brewery.street)

                var state = $("<h3>")
                state.text(brewery.state)
                // console.log("state: " + brewery.state)

                var phone = $("<h3>")
                phone.text(brewery.phone)
                // console.log("phone: " + brewery.phone)

                var url = $("<h3>")
                url.text(brewery.website_url)
                // console.log("url: " + brewery.website_url)

                var beerCard = $("<div class='card'>");
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
            var name = $("<h3>")
            name.text(brewery.name)
            // console.log(brewery.name)
            
            var city = $("<h3>")
            city.text(brewery.city)
            // console.log(brewery.city)

            var street = $("<h3>")
            street.text(brewery.street)
            // console.log(brewery.street)

            var state = $("<h3>")
            state.text(brewery.state)
            // console.log(brewery.state)

            var url = $("<h3>")
            url.text(brewery.website_url)
            url.attr("href", brewery.website_url)
            // console.log(brewery.website_url)

            var beerCard = $("<div class='card'>");
            beerCard.append(name,city,street,state,url);

            beerDiv.append(beerCard)
            beerListContainer.html(beerDiv)
            })
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
    $("#beersearch")[0].reset();
})


