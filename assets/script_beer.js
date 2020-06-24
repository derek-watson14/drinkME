var city = "seattle";
var code = "98101";
var tag = "patio";
var beerInput = $("#beersearch").val().trim();
var queryURLBeerCode = "https://api.openbrewerydb.org/breweries?by_postal=" + beerInput
    console.log(queryURLBeerCode)
var queryURLBeerCity = "https://api.openbrewerydb.org/breweries?by_city=" + beerInput
    console.log(queryURLBeerCity)
// var beerContainer = 

function getBreweries(){
    // if input int run this code Code input === int(input())
    if(beerInput === int(beerInput())){
    $.ajax({
        url: queryURLBeerCode,
        method: "GET"
    }).then(function(breweries){
            breweries.forEach(function(brewery){
                var beerCard = $("<div class")
                var name = $("<h3>")
                name.text(brewery.name)
                console.log(brewery.name)
                beerCard.append(name)

                var city = $("<h3>")
                city.text(brewery.city)
                console.log(brewery.city)
                beerCard.append(city)

                var street = $("<h3>")
                street.text(brewery.street)
                console.log(brewery.street)
                beerCard.append(street)

                var url = brewery.website_url
                console.log(brewery.website_url)
                beerCard.append(street)
            })
    })  
}
    // else {
    // $.ajax({
    //     url: queryURLBeerCity,
    //     method: "GET"
    // }).then(function(breweries){
    //         breweries.forEach(function(brewery){
    //             var name = brewery.name
    //             console.log(brewery.name)

    //             var city = brewery.city
    //             console.log(brewery.city)

    //             var street = brewery.street
    //             console.log(brewery.street)

    //             var url = brewery.website_url
    //             console.log(brewery.website_url)
    //         })
    // })
    // }
}
getBreweries();