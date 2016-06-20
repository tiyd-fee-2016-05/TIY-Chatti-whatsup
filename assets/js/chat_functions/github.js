$(document).ready(function(){

  $('.messagebox').on('submit', function(e) {
  e.preventDefault();
  console.log("Submit works");

    if ($('input').val() === "@gh" + " " + "dgrayboff") { // maybe make this an array and call the [1] --> the second string in the array, then take the value of that and use that to search, as in line 11 below --> the url endpoint //
      console.log("github!");

      $.ajax({
              url: "https://api.github.com/users/" + "dgrayboff",
              method: 'GET',
              dataType: "JSON",
              success: function(json) {
                $('ul').append("<li class='chatcontent'>" + "@gh:" + "</li>");
                $('ul').append("<li class='chatcontent'>" + json.name + "<br>" + "Repos: " + json.public_repos + "<img class='chatcontent ghimage' src=" + json.avatar_url + "/>" + "</li>");
                console.log(json);
              }
            });



    }

  });

});
