$(document).ready(function () {
var APIKey = "132668296662c0dcf4cc06aaf498c7de";
//Find our button, and create an event listener. 
$("#search-btn").on("click", function() {
    generateWeather();
})

function generateWeather () {
    var citySearch = $(".form-control").val();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + APIKey;
    console.log(queryURL)
    $.ajax({
        url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
        .then(function(response) {
          // Log the resulting object
            var current = response.main.temp
            var city = response.main.name
            var wind = resopnse.main.wind
            var humidity = response.main.humidity
            var longtitude = response.coord.lon
            var latitude = response.coord.lat

            cityLog.push(response.name)
            localStorage.setItem("cityName", cityLog)

            $("#sideBar").append('<button id =" '+ response.name +' "class = "cityHistory")></button><br>');
            $("#" + response.name).text(response.name);
            $(".city").text("City: " + response.name)
            //change temperature to Imperial
            $(".temp").text("Temperature F: " + response.main.temp)
            $(".humidity").text("Humidity: " + response.main.humidity)
            $(".wind speed").text("Wind Speed: " + response.wind.speed)

    
    
    
            var forecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" longtitude + &exclude=current,minutely,hourly,alerts&units=imperial&appid=${APIKey}`;

          //Transfer content to HTML;
          $(".city").html("<h1>" + response.name + date ,"</h1>");
          $(".wind").text("Wind Speed: " + response.wind.speed);
          $(".humidity").text("Humidity: " + response.main.humidity);
          $(".uvindex").text("UV Index: " + response.main.uvindex);
        
          // add temp content to html
          $(".temp").text("Temperature (K) " + response.main.temp);
          $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

          var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        
    
          // Log the data in the console as well
          console.log("Wind Speed: " + response.wind.speed);
          console.log("Humidity: " + response.main.humidity);
          console.log("Temperature (F): " + tempF);
          console.log("UV Index: " + response.main.uindex);
        });
}
})