$(document).ready(function(){

  $('.messagebox').on('submit', function(e) {



    e.preventDefault();
    console.log("Submit works");

    var a = $('input').val().toLowerCase();
    var b = a.split(" ");
    var username = b[1];

    if (a === "@gh" + " " + username) { // if ($('input').val().toLowerCase() === "@gh" + " " + "dgrayboff")  // maybe make this an array and call the [1] --> the second string in the array, then take the value of that and use that to call API --> the url endpoint //

      console.log("github!");
      console.log(b);
      console.log(username);

      $.ajax({
              url: "https://api.github.com/users/" + username,
              method: 'GET',
              dataType: "JSON",
              success: function(json) {
                $('ul').append("<li class='chatcontent commandstyle'>" + "@gh:" + "</li>");
                $('ul').append("<li class='chatcontent'>" + json.name + "<br>" + "<img class='ghimage' src=" + json.avatar_url + "/>"  + "<br>" + "Repos: " + json.public_repos + "<br>" + "<a class='urllink' href=" + json.html_url + ">" + "Link to Profile" + "</a>" + "</li>");
                console.log(json);
              }
            });
  }
 });

});
