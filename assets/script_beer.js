var city = "seattle";
var code = "98101";
var tag = "patio";
var beerInput = $(input)

function getBreweries(){
    // if input int run this code Code input === int(input())
    if(beerInput === int(beerInput())){
    var queryURLBeerCode = "https://api.openbrewerydb.org/breweries?by_postal=" + code
    console.log(queryURLBeerCode)
    
    $.ajax({
        url: queryURLBeerCode,
        method: "GET"
    }).then(function(breweries){
            breweries.forEach(function(brewery){
                var name = brewery.name
                console.log(brewery.name)

                var city = brewery.city
                console.log(brewery.city)

                var street = brewery.street
                console.log(brewery.street)

                var url = brewery.website_url
                console.log(brewery.website_url)
            })
    })
    // }
    //else input is a word run this code City input 
    // else {
    var queryURLBeerCity = "https://api.openbrewerydb.org/breweries?by_city=" + city
    console.log(queryURLBeerCity)
    // }
}
}
getBreweries();