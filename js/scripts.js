// UI logic
$(document).ready(function(){
  $("#pingpong").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#game").val());
    var result = pingpong(pong);

    $("#results").text(pong);

    if (!result) {
      $()
    }
  });
});
