$(document).ready(function(){

    $(".messagebox").on("submit", function(e){
      e.preventDefault();
      console.log("Giphy submit works");

      if($("input").val()=== "@gif" + " "){
        console.log("giphy!");


        $.ajax({//  there are several different giphy possibilities.  random is only one.
              url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats",
              method: 'GET',
              dataType: 'JSON',
              success: function(json){
                $("ul").append("<li class='chatcontent'>" + "@gif" + "</li>");
                $("ul").append("<li class='chatcontent'>" + "<img class='chatcontent gifimage' src=" + json.image_url + "/>" + "</li>");
                console.log(json);
              }


        });
      }

    });


});
