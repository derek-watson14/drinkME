
var beerListContainer = $("#beerlist")

function getBreweriesCode(beer){
    var queryURLBeerCode = "https://api.openbrewerydb.org/breweries?by_postal=" + beer
    $.ajax({
        url: queryURLBeerCode,
        method: "GET"
    }).then(function(breweries){
        console.log(breweries)
        var beerDiv = $("<div class = 'row' >")
            breweries.forEach(function(brewery){
                
                var name = $("<h3>")
                name.text(brewery.name)
                console.log(brewery.name)
                
                var city = $("<h3>")
                city.text(brewery.city)
                console.log(brewery.city)

                var street = $("<h3>")
                street.text(brewery.street)
                console.log(brewery.street)

                var state = $("<h3>")
                state.text(brewery.state)


                var url = $("<h3>")
                url.text(brewery.website_url)
                console.log(brewery.website_url)

                var beerCard = $("<div class='card'>");
                beerCard.append(name,city,street,state,url);

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
            console.log(brewery.name)
            
            var city = $("<h3>")
            city.text(brewery.city)
            console.log(brewery.city)

            var street = $("<h3>")
            street.text(brewery.street)
            console.log(brewery.street)

            var state = $("<h3>")
            state.text(brewery.state)
            console.log(brewery.state)

            var url = $("<h3>")
            url.text(brewery.website_url)
            console.log(brewery.website_url)

            var beerCard = $("<div class='card'>");
            beerCard.append(name,city,street,state,url);

            beerDiv.append(beerCard)
            beerListContainer.html(beerDiv)
            })
        })
}

$("#beersearch-submit").click(function(){
    var beerInput = $("#beersearch").val().trim();
    console.log("hi")
    // if(beerInput === int(beerInput())){
    // getBreweriesCode(beerInput);
    // } 
    // else{
        getBreweriesCity(beerInput);
    // }
})


