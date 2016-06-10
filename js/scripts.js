// // Business Logic
// var pingpong = function(pong) {
//   if (pong % 3 === 0) {
//     return "ping";
//   }
//   if (pong % 5 === 0) {
//     return "pong";
//   }
//   if (pong % 15 === 0) {
//     return "pingpong";
//   }else {
//     return "#game";
//   }
// };
// // UI Logic
// $(document).ready(function(){
//   $("#pingpong").submit(function(event){
//     event.preventDefault();
//     var userInput = parseInt($("#game").val());
//     var result = pingpong();
//
//     $("#results").text();
//
//     if (!result) {
//       $(pong).text("pong");
//     }
//     if (!result) {
//       $(ping).text("ping");
//     }
//     if (!result) {
//       $(pingpong).text("pingpong");
//     }
//     $("#results").text();
//   });
// });

// var pingpongArray = [];
// $(document).ready(function(){
//   $("#pingpong").submit(function(event){
//     event.preventDefault();
//     var userInput = $("#game").val();
//     var answer = pingpong(userInput);
//     $("#results").text(answer);
//     pingpongArray = [];
//   });
// });
//
// var pingpong = function(number) {
//   output = [];
//   for (var i = 0; i < number.length; i++) {
//     output.push(number.charAt(i)); {
//     }
//     return determiner(output);
//   }
// }
//
// var determiner = function(output) {
//   for (var i=output.length -1; i > -1; i -=1) {
//     if ( i % 3 === 0) {
//       pingpongArray.push("ping");
//     }
//     if ( i % 5 === 0) {
//       pingpongArray.push("pong");
//     }
//     if ( i % 15 === 0) {
//       pingpongArray.push("pingpong");
//     }
//   }
// }
// pingpongArray = pingpongArray.reverse();
// pingpongArray = pingpongArray.join('');
// // return pingpongArray;
// // }

// UI Logic
$(document).ready(function(){
  $("#pingpong").submit(function(event){
    event.preventDefault();
    game = [];
    userInput = $("#game").val();
    pingpong(userInput);
  });
});

// Business Logic
var list = [];
var pingpong = function(input) {
var number = parseInt($(input));

for (i = 1; i <= number; i++)
  if (pingpong % 3 === 0) {
    list.push("ping");
  }
  if (pingpong % 5 === 0) {
    list.push("pong");
  }
  if (pingpong % 15 === 0) {
    list.push("pingpong");
  }else {
    list.push(i);
  }
  list.forEach(function(item){
    $("#results").append("<li>" + item + "</li>")
  });
};
