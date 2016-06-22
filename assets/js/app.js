$(document).ready(function(){

  $(".sendbutton").click(function() {
    $('.fa-globe').addClass("rotate");
    console.log('rotate');
  });


  $('.messagebox').on('submit', function(e) {
  e.preventDefault();

  console.log("Submit works");




  $(".contentcontainer").animate({ scrollTop: $(".contentcontainer")[0].scrollHeight}, 1000);

    if ($('input').val().toLowerCase() === "@help") {
      console.log("help!");

      $('ul').append("<li class='chatcontent commandstyle'>" + $('input').val() + ":" + "</li>");

      $('ul').append("<li class='chatcontent'>" + "@help - Available commands" + "<br>" + "<br>" +
      "@gh - User's basic GitHub profile information" + "<br>" + "<br>" +
      "@gif - Gif that matches search query" + "<br>" + "<br>" +
      "@weather - Location's current temperature" + "<br>" + "<br>" + "Ex: @weather durham, nc" + "</li>");

      $('input').val("");


      // $('.chatcontent').scrollTop('100%');
    }
      // else {
      //   $('ul').append("<li class='chatcontent'>" + $('input').val() + "</li>");
      // }






  });

});

// @help //
/*@help - displays all of the available commands
@github - displays user's basic GitHub profile information
@gif - displays a gif that matches search query
@temp - displays entered location's current temperature
@wiki - displays Wikipedia article related to search query*/
