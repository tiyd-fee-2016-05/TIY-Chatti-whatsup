$(document).ready(function(){

    $(".messagebox").on("submit", function(e){
      e.preventDefault();
      console.log("Giphy submit works");

      var a = $('input').val().toLowerCase();
      var b = a.split(" ");
      var image = b[1];

      if(a === "@gif" + " " + image || a === "@gif" + " " + image + " " + b[2]){ // edit api call for two words
        console.log("giphy!");
        console.log(image);


        $.ajax({ //  there are several different giphy possibilities.  random is only one.
              url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=" + image,
              method: 'GET',
              dataType: 'JSON',
              success: function(json){
                $("ul").append("<li class='chatcontent commandstyle'>" + "@gif:" + "</li>");
                $("ul").append("<li class='chatcontent'>" + "<img class='chatcontent gifimage' src='" + json.data.image_url + "'>" + "</li>");

                console.log(json);
                console.log(json.data.image_url);

                $('input').val("");
              }


        });
      }

    });


});
