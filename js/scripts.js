// Business Logic
var pingpong = function(pong) {
  if (pong % 3 === 0) {
    return ping;
  }
  if (pong % 5 === 0) {
    return pong;
  }
  if (pong % 15 === 0) {
    return pingpong
  }else {
    return "#game";
  }
};
// UI Logic
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
