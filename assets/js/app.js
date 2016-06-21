$(document).ready(function(){

  $('.messagebox').on('submit', function(e) {
  e.preventDefault();
  console.log("Submit works");

    if ($('input').val().toLowerCase() === "@help") {
      console.log("help!");

      $('ul').append("<li class='chatcontent commandstyle'>" + $('input').val() + ":" + "</li>");

      $('ul').append("<li class='chatcontent'>" + "@help - Available commands" + "<br>" + "<br>" +
      "@gh - User's basic GitHub profile information" + "<br>" + "<br>" +
      "@gif - Gif that matches search query" + "<br>" + "<br>" +
      "@temp - Location's current temperature" + "<br>" + "<br>" +
      "@wiki - Wikipedia article related to search query" + "</li>");

      // $('.chatcontent').scrollTop('100%');
    }

  });

});

// @help //
/*@help - displays all of the available commands
@github - displays user's basic GitHub profile information
@gif - displays a gif that matches search query
@temp - displays entered location's current temperature
@wiki - displays Wikipedia article related to search query*/
