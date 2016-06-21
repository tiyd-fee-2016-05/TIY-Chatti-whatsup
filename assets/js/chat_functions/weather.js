$(document).ready(function(){

  $('.messagebox').on('submit', function(e) {



    e.preventDefault();
    console.log("Submit works");

    var a = $('input').val().toLowerCase();
    var b = a.split(" ");
    var city = b[1];
    var state = b[2];

    if (a === "@weather" + " " + city + " " + state) { // if ($('input').val().toLowerCase() === "@weather" +  + " " + city + " " + state)  // maybe make this an array and call the [1] --> the second string in the array, then take the value of that and use that to call API --> the url endpoint //

      console.log("weather!");
      console.log(b, b);
      // console.log(weather);

      $.ajax({
              url: "https://api.wunderground.com/api/35c9d364b4732721/forecast/q/" + state + "/" + city + "/" + ".json",
              method: 'GET',
              dataType: "JSON",
              success: function(json) {
                $('ul').append("<li class='chatcontent commandstyle'>" + "@weather:" + "</li>");
                $('ul').append("<li class='chatcontent'>" + json.forecast.txt_forecast.forecastday[0].fcttext + "<br>" +  "<img class='weatherimg' src='" + json.forecast.txt_forecast.forecastday[0].icon_url + "'>"  +  "<img class='weatherimg' src='" + json.forecast.txt_forecast.forecastday[0].icon_url + "'>"  +  "<img class='weatherimg' src='" + json.forecast.txt_forecast.forecastday[0].icon_url + "'>"  + "<img class='weatherimg' src='" + json.forecast.txt_forecast.forecastday[0].icon_url + "'>" + "<img class='weatherimg' src='" + json.forecast.txt_forecast.forecastday[0].icon_url + "'>" + "</li>");
                console.log(json);
                console.log(json.forecast.txt_forecast.forecastday[0].icon_url );
              }
            });
    }
 });

});
