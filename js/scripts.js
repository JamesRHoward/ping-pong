// UI Logic
$(document).ready(function(){
  $("#pingpong").submit(function(event){
    event.preventDefault();
    list = [];
    userInput = $("#game").val();
    pingpong(userInput);
    list.forEach(function(item){
      $("#results").append("<li>" + item + "</li>")
    })
  });
});

// Business Logic
var pingpong = function(input) {
var number = parseInt(input);

for (i = 1; i <= number; i++)
  if (i % 15 === 0) {
    list.push("pingpong");
  }
  else if (i % 5 === 0) {
    list.push("pong");
  }
  else if (i % 3 === 0) {
    list.push("ping");
  }else {
    list.push(i);
  }
};
