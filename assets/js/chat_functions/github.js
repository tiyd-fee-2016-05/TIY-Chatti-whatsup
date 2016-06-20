$(document).ready(function(){

  $('.messagebox').on('submit', function(e) {
  e.preventDefault();
  console.log("Submit works");

    if ($('input').val() === "@gh" + " " + "dgrayboff") {
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
